export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [[101, 'typing Error'],
        [102, 'incorrect procedure'],
        [103, 'This expression doesnt make sense'],
        [104, 'server connection error']],
    );
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
