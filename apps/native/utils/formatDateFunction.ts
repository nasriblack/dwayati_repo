export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

console.log(formatDate('2025-03-30T00:02:11.416Z')); // Output: Mar 30, 2025
