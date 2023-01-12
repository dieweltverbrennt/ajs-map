import ErrorRepository from '../app';

const errorList = new ErrorRepository();

test('should return correct error description', () => {
  const received = errorList.translate(102);
  const expected = 'incorrect procedure';
  expect(received).toBe(expected);
});

test('should return Unknown error', () => {
  const received = errorList.translate(108);
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});
