export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (string) => {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
}