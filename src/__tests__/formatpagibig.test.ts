import { describe, it, expect } from "vitest";
import { formatPagIBIG } from "../formatpagibig";

describe("formatPagIBIG", () => {
  it("should be a function", () => {
    expect(typeof formatPagIBIG).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatPagIBIG(null as any)).toThrow();
  });
});
