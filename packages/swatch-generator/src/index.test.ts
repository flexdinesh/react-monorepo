import generateSwatch from './index';

test('generate swatch', () => {
  const { swatch } = generateSwatch('greenyellow');
  expect(swatch.length).toBe(10);

  expect(swatch).toEqual([
    '#f2ffdc',
    '#dfffae',
    '#ccff7d',
    '#b8ff4b',
    '#a5ff1a',
    '#8be600',
    '#6bb300',
    '#4c8000',
    '#2c4d00',
    '#0b1b00',
  ]);
});
