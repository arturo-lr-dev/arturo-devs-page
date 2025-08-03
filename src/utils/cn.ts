type ClassValue = string | number | boolean | undefined | null | ClassArray | ClassDict;
type ClassArray = ClassValue[];
type ClassDict = Record<string, unknown>;

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}