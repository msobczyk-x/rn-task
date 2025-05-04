export const calculateLineHeight = (
	fontSize: number,
	percentage = 100,
): number => {
	return Math.round(fontSize * (percentage / 100));
};
