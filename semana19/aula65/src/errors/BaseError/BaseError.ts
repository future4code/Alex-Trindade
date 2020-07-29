export abstract class BaseError extends Error {
  constructor(message: string, public eCode: number) {
    super(message);
  }
}
