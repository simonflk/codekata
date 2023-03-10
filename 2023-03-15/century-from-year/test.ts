import { describe, it, expect } from 'vitest';

export function makeTest(
  solution: (n: number, s: string) => string,
  enabled = true,
) {
  if (!enabled) {
    describe('Tests', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Tests', () => {
    it('test', () => {
      expect(solution(3, '*')).toEqual('***');
    });
  });
}
