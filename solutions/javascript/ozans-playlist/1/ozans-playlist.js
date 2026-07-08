export function removeDuplicates(playlist) {
  
  return Array.from(new Set(playlist));
}

export function hasTrack(playlist, track) {

  return new Set(playlist).has(track);
}

export function addTrack(playlist, track) {

  const set = new Set(playlist);
  set.add(track);
  return Array.from(set);
}

export function deleteTrack(playlist, track) {
 
  const set = new Set(playlist);
  set.delete(track);
  return Array.from(set);
}

export function listArtists(playlist) {
 
  const artists = playlist.map(track => track.split(' - ')[1]);
  return Array.from(new Set(artists));
}
