
export const keep = (collection, predicate) => {
  const result = [];
  
  for (const item of collection) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  
  return result;
};


export const discard = (collection, predicate) => {
  const result = [];
  
  for (const item of collection) {
    if (!predicate(item)) {
      result.push(item);
    }
  }
  
  return result;
};
