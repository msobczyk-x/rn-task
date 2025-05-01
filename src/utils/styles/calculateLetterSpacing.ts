export const calculateLetterSpacing = (
  fontSize: number,
  spacingPercent = 0,
): number => {
  return Math.round((fontSize * spacingPercent) / 100);
};
