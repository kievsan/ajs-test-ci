const indicator = {
  green: {
    percent: 50,
    stateOfHelth: 'healthy',
  },
  yellow: {
    percent: 15,
    stateOfHelth: 'wounded',
  },
  red: {
    percent: 0,
    stateOfHelth: 'critical',
  },
};

export default function stateOfHelth(hero) {
  if (hero.health > indicator.green.percent) { return indicator.green.stateOfHelth; }
  if (hero.health >= indicator.yellow.percent) { return indicator.yellow.stateOfHelth; }
  return indicator.red.stateOfHelth;
}
