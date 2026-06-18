export const age = (planet, seconds) => {
  const earthYearInSeconds = 31557600;

  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  const period = orbitalPeriods[planet.toLowerCase()];

  if (!period) {
    throw new Error('not a planet');
  }

  const ageOnPlanet = seconds / earthYearInSeconds / period;
  return Number(ageOnPlanet.toFixed(2));
};
