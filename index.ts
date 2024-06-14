interface IAnimal {
  nome: string;
  especie: string;
  idade: number;
  emitirSom(): any;
}

class Animal implements IAnimal {
  public propPublica?: string;
  private propPrivada?: string;
  protected propProtegida?: string;

  constructor(
    public nome: string,
    public idade: number,
    public especie: string
  ) {}

  public nomeToUpperCase() {
    const nome: string = this.emitirSom();

    console.log("🚀 ~ Animal ~ nomeToUpperCase ~ nome:", nome.toUpperCase());
  }

  public emitirSom(): string {
    console.log("Classe Animal está emitindo um som");

    return "Animal";
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, "canino");
  }

  public emitirSom(): string {
    console.log("Classe Cachorro está emitindo um som");

    return "Cachorro";
  }
}

class Gato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, "felinos");
  }

  public emitirSom(): string {
    console.log("Classe Gato está emitindo um som");

    return "Gato";
  }
}

const cachorro = new Cachorro("Thor", 12);

console.log("🚀 ~ cachorro:", cachorro);

cachorro.emitirSom();

cachorro.nomeToUpperCase();

const gato = new Gato("Mimosa", 45);

console.log("🚀 ~ gato:", gato);

gato.emitirSom();
