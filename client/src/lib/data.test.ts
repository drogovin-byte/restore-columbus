import { describe, expect, it } from "vitest";
import { comparisonGuides, services } from "./data";

describe("Comparison Guide Link Validation", () => {
  /**
   * Extract all service IDs from the services array for validation
   */
  const validServiceIds = new Set(services.map(service => service.id));

  /**
   * Test that all comparison guides have solutions defined
   */
  it("should have solutions defined for all comparison guides", () => {
    comparisonGuides.forEach(guide => {
      expect(guide.solutions, `Comparison guide "${guide.title}" should have solutions`).toBeDefined();
      expect(Array.isArray(guide.solutions), `Solutions for "${guide.title}" should be an array`).toBe(true);
      expect(guide.solutions.length, `Comparison guide "${guide.title}" should have at least one solution`).toBeGreaterThan(0);
    });
  });

  /**
   * Test that all comparison guide solution links are valid service routes
   */
  it("should have valid service links in all comparison guide solutions", () => {
    const invalidLinks: Array<{ guide: string; solution: string; link: string; reason: string }> = [];

    comparisonGuides.forEach(guide => {
      guide.solutions?.forEach(solution => {
        // Extract service ID from link (e.g., "/service/cryotherapy" -> "cryotherapy")
        const linkMatch = solution.link?.match(/^\/service\/(.+)$/);
        const serviceId = linkMatch?.[1];

        if (!serviceId) {
          invalidLinks.push({
            guide: guide.title,
            solution: solution.name,
            link: solution.link || "undefined",
            reason: "Link does not match /service/{id} pattern"
          });
        } else if (!validServiceIds.has(serviceId)) {
          invalidLinks.push({
            guide: guide.title,
            solution: solution.name,
            link: solution.link || "undefined",
            reason: `Service ID "${serviceId}" does not exist in services array`
          });
        }
      });
    });

    if (invalidLinks.length > 0) {
      const errorMessage = invalidLinks
        .map(link => `  - ${link.guide} > ${link.solution}: "${link.link}" (${link.reason})`)
        .join("\n");
      throw new Error(`Found ${invalidLinks.length} invalid comparison guide links:\n${errorMessage}`);
    }

    expect(invalidLinks).toHaveLength(0);
  });

  /**
   * Test that all comparison guides have unique slugs
   */
  it("should have unique slugs for all comparison guides", () => {
    const slugs = comparisonGuides.map(guide => guide.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size, "All comparison guide slugs should be unique").toBe(slugs.length);
  });

  /**
   * Test that all comparison guides have required fields
   */
  it("should have all required fields for each comparison guide", () => {
    comparisonGuides.forEach(guide => {
      expect(guide.id, `Guide should have id`).toBeDefined();
      expect(guide.slug, `Guide "${guide.id}" should have slug`).toBeDefined();
      expect(guide.title, `Guide "${guide.id}" should have title`).toBeDefined();
      expect(guide.description, `Guide "${guide.id}" should have description`).toBeDefined();
      expect(guide.excerpt, `Guide "${guide.id}" should have excerpt`).toBeDefined();
    });
  });

  /**
   * Test that all solutions in comparison guides have required fields
   */
  it("should have all required fields for each solution in comparison guides", () => {
    comparisonGuides.forEach(guide => {
      guide.solutions?.forEach(solution => {
        expect(solution.id, `Solution in "${guide.title}" should have id`).toBeDefined();
        expect(solution.name, `Solution in "${guide.title}" should have name`).toBeDefined();
        expect(solution.description, `Solution "${solution.name}" should have description`).toBeDefined();
        expect(solution.link, `Solution "${solution.name}" should have link`).toBeDefined();
      });
    });
  });

  /**
   * Test that service IDs used in comparisons match case-sensitively
   */
  it("should match service IDs case-sensitively", () => {
    const caseIssues: Array<{ guide: string; solution: string; link: string; serviceId: string }> = [];

    comparisonGuides.forEach(guide => {
      guide.solutions?.forEach(solution => {
        const linkMatch = solution.link?.match(/^\/service\/(.+)$/);
        const serviceId = linkMatch?.[1];

        if (serviceId) {
          // Check if there's a service with different casing
          const caseInsensitiveMatch = services.find(s => s.id.toLowerCase() === serviceId.toLowerCase());
          if (caseInsensitiveMatch && caseInsensitiveMatch.id !== serviceId) {
            caseIssues.push({
              guide: guide.title,
              solution: solution.name,
              link: solution.link || "undefined",
              serviceId: `Expected "${caseInsensitiveMatch.id}" but got "${serviceId}"`
            });
          }
        }
      });
    });

    if (caseIssues.length > 0) {
      const errorMessage = caseIssues
        .map(issue => `  - ${issue.guide} > ${issue.solution}: ${issue.serviceId}`)
        .join("\n");
      throw new Error(`Found ${caseIssues.length} case-sensitivity issues:\n${errorMessage}`);
    }

    expect(caseIssues).toHaveLength(0);
  });
});
