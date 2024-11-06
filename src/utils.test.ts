import { Investec, areas, companies } from './utils.js';
import { test, expect } from 'vitest';

test('random area', () => {
  expect(areas).toContain(Investec.area());
});

test('random company', () => {
  expect(companies).toContain(Investec.company());
});
