
// Type exports for consumers
// Add specific types as needed
/**
 * formatPagIBIG
 * @param num
 */
export function formatPagIBIG(num: string): string {
  const cleaned = num.replace(/[^0-9]/g, "");
  if (cleaned.length !== 12) throw new Error("Pag-IBIG must be 12 digits");
  return `${cleaned.slice(0,4)}-${cleaned.slice(4,8)}-${cleaned.slice(8)}`;
}
