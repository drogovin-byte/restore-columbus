import { eq, desc, and, or, like } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, membershipLeads, InsertMembershipLead, appointmentRequests, InsertAppointmentRequest, membershipSignups, InsertMembershipSignup } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createMembershipLead(lead: InsertMembershipLead) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create membership lead: database not available");
    return null;
  }

  try {
    const result = await db.insert(membershipLeads).values(lead);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create membership lead:", error);
    throw error;
  }
}

export async function getAllMembershipLeads(filters?: { status?: string; search?: string; tier?: string }) {
  const db = await getDb();
  if (!db) return [];

  const conditions: any[] = [];

  if (filters?.status && filters.status !== "all") {
    conditions.push(eq(membershipLeads.status, filters.status as any));
  }

  if (filters?.tier && filters.tier !== "all") {
    conditions.push(eq(membershipLeads.membershipTier, filters.tier));
  }

  if (filters?.search) {
    conditions.push(
      or(
        like(membershipLeads.name, `%${filters.search}%`),
        like(membershipLeads.email, `%${filters.search}%`),
        like(membershipLeads.phone, `%${filters.search}%`)
      )
    );
  }

  if (conditions.length > 0) {
    return await db.select().from(membershipLeads).where(and(...conditions)).orderBy(desc(membershipLeads.createdAt));
  }

  return await db.select().from(membershipLeads).orderBy(desc(membershipLeads.createdAt));
}

export async function getMembershipLeadById(id: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(membershipLeads).where(eq(membershipLeads.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateMembershipLead(id: number, updates: { status?: string; notes?: string; assignedToId?: number | null }) {
  const db = await getDb();
  if (!db) return null;

  try {
    const updateSet: Record<string, any> = { updatedAt: new Date() };
    if (updates.status) updateSet.status = updates.status;
    if (updates.notes !== undefined) updateSet.notes = updates.notes;
    if (updates.assignedToId !== undefined) updateSet.assignedToId = updates.assignedToId;

    await db.update(membershipLeads).set(updateSet).where(eq(membershipLeads.id, id));
    return getMembershipLeadById(id);
  } catch (error) {
    console.error("[Database] Failed to update membership lead:", error);
    throw error;
  }
}

export async function createAppointmentRequest(request: InsertAppointmentRequest) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create appointment request: database not available");
    return null;
  }

  try {
    const result = await db.insert(appointmentRequests).values(request);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create appointment request:", error);
    throw error;
  }
}

export async function getAllAppointmentRequests(filters?: { status?: string; search?: string }) {
  const db = await getDb();
  if (!db) return [];

  const conditions: any[] = [];

  if (filters?.status && filters.status !== "all") {
    conditions.push(eq(appointmentRequests.status, filters.status as any));
  }

  if (filters?.search) {
    conditions.push(
      or(
        like(appointmentRequests.firstName, `%${filters.search}%`),
        like(appointmentRequests.lastName, `%${filters.search}%`),
        like(appointmentRequests.email, `%${filters.search}%`),
        like(appointmentRequests.phone, `%${filters.search}%`)
      )
    );
  }

  if (conditions.length > 0) {
    return await db.select().from(appointmentRequests).where(and(...conditions)).orderBy(desc(appointmentRequests.createdAt));
  }

  return await db.select().from(appointmentRequests).orderBy(desc(appointmentRequests.createdAt));
}

export async function getAppointmentRequestById(id: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(appointmentRequests).where(eq(appointmentRequests.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateAppointmentRequest(id: number, updates: { status?: string; notes?: string }) {
  const db = await getDb();
  if (!db) return null;

  try {
    const updateSet: Record<string, any> = { updatedAt: new Date() };
    if (updates.status) updateSet.status = updates.status;
    if (updates.notes !== undefined) updateSet.notes = updates.notes;

    await db.update(appointmentRequests).set(updateSet).where(eq(appointmentRequests.id, id));
    return getAppointmentRequestById(id);
  } catch (error) {
    console.error("[Database] Failed to update appointment request:", error);
    throw error;
  }
}


export async function createMembershipSignup(data: InsertMembershipSignup) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  try {
    const result = await db.insert(membershipSignups).values(data);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create membership signup:", error);
    throw error;
  }
}

export async function getAllMembershipSignups(filters?: { status?: string; studioId?: string; search?: string }) {
  const db = await getDb();
  if (!db) return [];

  const conditions: any[] = [];
  
  if (filters?.status && filters.status !== "all") {
    conditions.push(eq(membershipSignups.status, filters.status as any));
  }
  
  if (filters?.studioId && filters.studioId !== "all") {
    conditions.push(eq(membershipSignups.studioId, filters.studioId));
  }
  
  if (filters?.search) {
    conditions.push(
      or(
        like(membershipSignups.firstName, `%${filters.search}%`),
        like(membershipSignups.lastName, `%${filters.search}%`),
        like(membershipSignups.email, `%${filters.search}%`),
        like(membershipSignups.phone, `%${filters.search}%`)
      )
    );
  }

  if (conditions.length > 0) {
    return await db.select().from(membershipSignups).where(and(...conditions)).orderBy(desc(membershipSignups.createdAt));
  }

  return await db.select().from(membershipSignups).orderBy(desc(membershipSignups.createdAt));
}

export async function getMembershipSignupById(id: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(membershipSignups).where(eq(membershipSignups.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateMembershipSignup(id: number, updates: { status?: string; notes?: string }) {
  const db = await getDb();
  if (!db) return null;

  try {
    const updateSet: Record<string, any> = { updatedAt: new Date() };
    if (updates.status) updateSet.status = updates.status;
    if (updates.notes !== undefined) updateSet.notes = updates.notes;

    await db.update(membershipSignups).set(updateSet).where(eq(membershipSignups.id, id));
    return getMembershipSignupById(id);
  } catch (error) {
    console.error("[Database] Failed to update membership signup:", error);
    throw error;
  }
}

// Image management functions
export async function createImage(data: {
  filename: string;
  url: string;
  s3Key: string;
  mimeType: string;
  fileSize: number;
  usage?: string;
  usageId?: string;
  altText?: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { images } = await import("../drizzle/schema");
  const result = await db.insert(images).values(data);
  return result;
}

export async function getAllImages() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { desc } = await import("drizzle-orm");
  const schema = await import("../drizzle/schema");
  return await db.select().from(schema.images).orderBy(desc(schema.images.uploadedAt));
}

export async function getImageById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { eq } = await import("drizzle-orm");
  const schema = await import("../drizzle/schema");
  const result = await db.select().from(schema.images).where(eq(schema.images.id, id));
  return result[0] || null;
}

export async function getImagesByUsage(usage: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { eq } = await import("drizzle-orm");
  const schema = await import("../drizzle/schema");
  return await db.select().from(schema.images).where(eq(schema.images.usage, usage));
}

export async function updateImage(id: number, data: Partial<{
  usage: string;
  usageId: string;
  altText: string;
}>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { eq } = await import("drizzle-orm");
  const schema = await import("../drizzle/schema");
  return await db.update(schema.images).set(data).where(eq(schema.images.id, id));
}

export async function deleteImage(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const { eq } = await import("drizzle-orm");
  const schema = await import("../drizzle/schema");
  return await db.delete(schema.images).where(eq(schema.images.id, id));
}
