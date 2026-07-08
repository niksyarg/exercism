export const tournamentTally = (input) => {
  const teams = {};

  const header = 'Team                           | MP |  W |  D |  L |  P';
  if (!input) return header;

  input.split('\n').forEach(line => {
    const [teamA, teamB, result] = line.split(';');
    
  
    [teamA, teamB].forEach(team => {
      if (!teams[team]) {
        teams[team] = { mp: 0, w: 0, d: 0, l: 0, p: 0 };
      }
    });

    teams[teamA].mp++;
    teams[teamB].mp++;

    if (result === 'win') {
      teams[teamA].w++; teams[teamA].p += 3;
      teams[teamB].l++;
    } else if (result === 'loss') {
      teams[teamB].w++; teams[teamB].p += 3;
      teams[teamA].l++;
    } else if (result === 'draw') {
      teams[teamA].d++; teams[teamA].p += 1;
      teams[teamB].d++; teams[teamB].p += 1;
    }
  });


  const sortedTeams = Object.keys(teams).sort((a, b) => {
    return teams[b].p - teams[a].p || a.localeCompare(b);
  });

  const rows = sortedTeams.map(name => {
    const { mp, w, d, l, p } = teams[name];
    const pad = (val) => val.toString().padStart(2, ' ');
    return `${name.padEnd(30)} | ${pad(mp)} | ${pad(w)} | ${pad(d)} | ${pad(l)} | ${pad(p)}`;
  });

  return [header, ...rows].join('\n');
};
