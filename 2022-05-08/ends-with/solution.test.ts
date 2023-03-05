import { describe, expect, it } from 'vitest';

// function solution(input: string, ending: string) {
//   return input.endsWith(ending);
// }

// function solution(input: string, ending: string) {
//   // create a properly escaped regex that matches the ending
//   const regex = new RegExp(
//     `${ending.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`,
//   );
//   return regex.test(input);
// }



// This code checks if the ending string is included in the input string.
// It does this by checking each character in the ending string from the end of the string
// to the beginning. If any character does not match the corresponding character in the
// input string, the function returns false. If all the characters in the ending string
// match the corresponding characters in the input string, the function returns true.
function solution(input: string, ending: string) {
  for (let i = 0; i < ending.length; i++) {
    const atIndex = -1 - i;
    const testChar = ending.at(atIndex);
    const inputChar = input.at(atIndex);
    if (testChar !== inputChar) {
      return false;
    }
  }
  return true;
}


describe('ends with?', () => {
  it('test', () => {
    expect(solution('abcde', 'cde')).toBe(true);
    expect(solution('abcde', 'abc')).toBe(false);
  });
});
