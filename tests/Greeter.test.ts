import { Greeter } from '../src';
test('Using username to greet user', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});