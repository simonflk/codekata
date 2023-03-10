import { describe, it, expect } from 'vitest';

export function makeTest(
  solution: (n: number, s: string) => string,
  enabled = true,
) {
  if (!enabled) {
    describe('Test', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }

  describe('Tests', function () {
    it("Basic test", function () {
      expect(solution(3, "*")).toEqual("***");
    });
  });
}
