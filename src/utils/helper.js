const formatTableHeading = (text) => {
  const result = text.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
};

const formatDate = (date) => {
  return new Date(date)
    .toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    })
    .replace(',', ' -')
    .replace(',', ' ');
};

export { formatTableHeading, formatDate };
