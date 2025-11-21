export function convertProductName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
