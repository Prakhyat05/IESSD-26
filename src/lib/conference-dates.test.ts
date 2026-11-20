import { describe, expect, it } from "vitest";
import {
  SUBMISSION_DEADLINE_LABEL,
  SUBMISSION_DEADLINE_TIMESTAMP,
} from "./conference-dates";

describe("IESSD'26 submission deadline", () => {
  it("uses November 20, 2026 as the displayed deadline", () => {
    expect(SUBMISSION_DEADLINE_LABEL).toBe("November 20, 2026");
  });

  it("counts down to 11:59:59 PM India time on November 20, 2026", () => {
    expect(SUBMISSION_DEADLINE_TIMESTAMP).toBe(
      Date.parse("2026-11-20T23:59:59+05:30"),
    );
  });
});