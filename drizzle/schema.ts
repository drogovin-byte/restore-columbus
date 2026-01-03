import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const membershipLeads = mysqlTable("membership_leads", {
  id: int("id").autoincrement().primaryKey(),
  membershipTier: varchar("membership_tier", { length: 64 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  status: mysqlEnum("status", ["new", "contacted", "converted", "not_interested"]).default("new").notNull(),
  notes: text("notes"),
  assignedToId: int("assigned_to_id"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MembershipLead = typeof membershipLeads.$inferSelect;
export type InsertMembershipLead = typeof membershipLeads.$inferInsert;

export const appointmentRequests = mysqlTable("appointment_requests", {
  id: int("id").autoincrement().primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  preferredLocation: varchar("preferred_location", { length: 255 }).notNull(),
  serviceOfInterest: varchar("service_of_interest", { length: 255 }),
  status: mysqlEnum("status", ["new", "contacted", "scheduled", "completed", "cancelled"]).default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AppointmentRequest = typeof appointmentRequests.$inferSelect;
export type InsertAppointmentRequest = typeof appointmentRequests.$inferInsert;

export const membershipSignups = mysqlTable("membership_signups", {
  id: int("id").autoincrement().primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  studioId: varchar("studio_id", { length: 64 }).notNull(),
  goal: varchar("goal", { length: 255 }).notNull(),
  membershipTier: varchar("membership_tier", { length: 64 }).notNull(),
  status: mysqlEnum("status", ["new", "contacted", "converted", "not_interested"]).default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MembershipSignup = typeof membershipSignups.$inferSelect;
export type InsertMembershipSignup = typeof membershipSignups.$inferInsert;