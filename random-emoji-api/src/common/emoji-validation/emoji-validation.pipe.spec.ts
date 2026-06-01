import { BadRequestException } from '@nestjs/common';
import { EmojiValidationPipe } from './emoji-validation.pipe';

describe('EmojiValidationPipe', () => {
  const emojiPipe = new EmojiValidationPipe();

  it('should be defined', () => {
    expect(emojiPipe).toBeDefined();
  });

  it('should return undefined if no value is passed', () => {
    const result = emojiPipe.transform(undefined);
    expect(result).toBeUndefined();
  });

  it('should throw a BadRequestError if the value is not a number', () => {
    const result = () => emojiPipe.transform('banana');
    expect(result).toThrow(BadRequestException);
  });

  it('should throw a BadRequestError if the value is less than 0', () => {
    const result = () => emojiPipe.transform(-1);
    expect(result).toThrow(BadRequestException);
  });

  it('should throw a BadRequestError if the value is greater than 11', () => {
    const result = () => emojiPipe.transform(12);
    expect(result).toThrow(BadRequestException);
  });

  it('should return the respective string input as a number', () => {
    const result = emojiPipe.transform('5');
    expect(result).toEqual(5);
  });
});
