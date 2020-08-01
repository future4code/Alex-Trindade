export class Band {
  constructor(
    private id: string,
    private name: string,
    private genre: string,
    private responsible: string
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getGenre() {
    return this.genre;
  }

  public getResponsible() {
    return this.responsible;
  }

  public static toBandModel(band: any): Band {
    return new Band(band.id, band.name, band.genre, band.responsible);
  }
}

export interface BandDTO {
  name: string;
  genre: string;
  responsible: string;
}
