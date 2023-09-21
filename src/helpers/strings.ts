/**
 * Truncates a title to a given max length substituting the rest with an ellipsis
 */

export const truncate = (str: string, maxLength: number = 20): string => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
}