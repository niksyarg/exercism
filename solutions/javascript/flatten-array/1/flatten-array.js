export const flatten = (array) => {
  const result = [];

  const helper = (arr) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
  
        helper(item);
      } else if (item !== null && item !== undefined) {

        result.push(item);
      }
    }
  };

  helper(array);
  return result;
};
