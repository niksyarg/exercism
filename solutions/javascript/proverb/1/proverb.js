export const proverb = (...items) => {
  if (items.length === 0) return '';

  let list = items;
  let qualifier = '';


  const lastItem = items[items.length - 1];
  if (typeof lastItem === 'object' && lastItem !== null) {
    qualifier = lastItem.qualifier ? `${lastItem.qualifier} ` : '';
    list = items.slice(0, -1);
  }

  const result = [];


  for (let i = 0; i < list.length - 1; i++) {
    result.push(`For want of a ${list[i]} the ${list[i + 1]} was lost.`);
  }


  result.push(`And all for the want of a ${qualifier}${list[0]}.`);

  return result.join('\n');
};
