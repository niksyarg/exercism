export const findAnagrams = (target, candidates) => {
  const lowerTarget = target.toLowerCase();
  const sortString = (str) => str.toLowerCase().split('').sort().join('');
  const sortedTarget = sortString(lowerTarget);

  return candidates.filter(candidate => {
    const lowerCandidate = candidate.toLowerCase();
    return lowerCandidate !== lowerTarget && sortString(lowerCandidate) === sortedTarget;
  });
};

