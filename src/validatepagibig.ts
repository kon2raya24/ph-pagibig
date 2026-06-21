export function validatePagIBIG(num: string): boolean {
  const cleaned = num.replace(/[^0-9]/g, "");
  return /^\d{12}$/.test(cleaned);
}
