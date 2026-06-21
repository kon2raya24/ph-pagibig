import { describe, it, expect } from "vitest";
import { validatePagIBIG } from "../validatepagibig";

describe("validatePagIBIG", () => {
  it("should be a function", () => {
    expect(typeof validatePagIBIG).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validatePagIBIG(null as any)).toThrow();
  });
});
