import { splitStringsWithDash } from './functions';
import { describe, it, expect } from 'vitest';

describe('splitStringsWithDash', () => {
  it('should split strings with dash and join with space', () => {
    const result = splitStringsWithDash('hello-world');
    expect(result).toBe('hello world');
  });

  it('should return the original string if no dash is present', () => {
    const result = splitStringsWithDash('helloworld');
    expect(result).toBe('helloworld');
  });

  it('should handle multiple dashes in a row', () => {
    const result = splitStringsWithDash('hello--world');
    expect(result).toBe('hello  world');
  });

  it('should handle empty string', () => {
    const result = splitStringsWithDash('');
    expect(result).toBe('');
  });
});
