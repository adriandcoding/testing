import { obtenerNumeroCarta, obtenerValorCarta } from "./motor";

describe("obtenerNumeroCarta", () => {
  it("Debería devolver 10 si el número es 8", () => {
    //Arrange
    const numeroAleatorio: number = 8;
    const esperado: number = 10;
    //Act
    const result = obtenerNumeroCarta(numeroAleatorio);
    //Assert
    expect(result).toBe(esperado);
  });
  it("Debería devolver 11 si el número es 9", () => {
    //Arrange
    const numeroAleatorio: number = 9;
    const esperado: number = 11;
    //Act
    const result = obtenerNumeroCarta(numeroAleatorio);
    //Assert
    expect(result).toBe(esperado);
  });
});

describe("obtenerValorCarta", () => {
  it("Debería devolver 0.5 si el número es 8", () => {
    //Arrange
    const carta: number = 8;
    const esperado: number = 0.5;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });

  it("Debería devolver 2 si el número es 2", () => {
    //Arrange
    const carta = 2;
    const esperado = 2;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
  it("Debería devolver 0.5 si el número es 12", () => {
    //Arrange
    const carta = 12;
    const esperado = 0.5;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
});
