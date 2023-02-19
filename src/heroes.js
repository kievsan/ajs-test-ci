// Matchers

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const orderByHealth = () => heroes.sort((h1, h2) => h1.health - h2.health);
export default orderByHealth;
