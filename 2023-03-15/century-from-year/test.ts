import { describe, it, expect } from 'vitest';

export function makeTest(
  solution: (year: number) => number,
  enabled = true,
) {
  if (!enabled) {
    describe('Tests', () => {
      it.skip('tests are disabled', () => {});
    });
    return;
  }
  
  describe("solution", () => {
      it("should return 18 when input is 1705", () => {
          const expected = 18;
          const actual = solution(1705);
  
          expect(actual).to.eql(expected);
      });
  
      it("should return 19 when input is 1900", () => {
          const expected = 19;
          const actual = solution(1900);
  
          expect(actual).to.eql(expected);
      });
  
      it("should return 17 when input is 1601", () => {
          const expected = 17;
          const actual = solution(1601);
  
          expect(actual).to.eql(expected);
      });
  
      it("should return 20 when input is 2000", () => {
          const expected = 20;
          const actual = solution(2000);
  
          expect(actual).to.eql(expected);
      });
  });
  }
