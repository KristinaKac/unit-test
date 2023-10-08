import { playerHealth, sortHealthPlayer } from '../index';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 40 }, 'wounded'],
  [{ name: 'Мечник', health: 10 }, 'critical'],
])('test player health function with %s, result %s', (data, expected) => {
  const result = playerHealth(data);
  expect(result).toBe(expected);
});

test('testing sort of health', () => {
  const wrongList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const correctList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortHealthPlayer(wrongList);
  expect(result).toEqual(correctList);
});
