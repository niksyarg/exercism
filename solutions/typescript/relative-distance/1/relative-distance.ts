export function degreesOfSeparation(
  familyTree: Record<string, string[]>,
  personA: string,
  personB: string
): number | string {
  if (personA === personB) return 0;

  const graph: Record<string, Set<string>> = {};

  const ensureNode = (node: string) => {
    if (!graph[node]) graph[node] = new Set();
  };

  for (const [parent, children] of Object.entries(familyTree)) {
    ensureNode(parent);

    for (let i = 0; i < children.length; i++) {
      const childA = children[i];
      ensureNode(childA);

      graph[parent].add(childA);
      graph[childA].add(parent);

      for (let j = i + 1; j < children.length; j++) {
        const childB = children[j];
        ensureNode(childB);
        graph[childA].add(childB);
        graph[childB].add(childA);
      }
    }
  }

  if (!graph[personA] || !graph[personB]) {
    return -1;
  }

  const queue: [string, number][] = [[personA, 0]];
  const visited = new Set<string>([personA]);

  while (queue.length > 0) {
    const [current, distance] = queue.shift()!;

    if (current === personB) {
      return distance;
    }

    const neighbors = graph[current];
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }
  }

  return -1;
}