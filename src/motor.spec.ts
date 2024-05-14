import { partida } from "./modelo";
import { obtenerNumeroCarta, obtenerValorCarta, valorar } from "./motor";

describe('obtenerNumeroCarta', () => {
  it('Debería devolver 10 si el número es 8', () => {
    //Arrange
    const numeroAleatorio = 8;
    const esperado = 10;
    //Act
    const result = obtenerNumeroCarta(numeroAleatorio);
    //Assert
    expect(result).toBe(esperado);
  });
})

describe('obtenerValorCarta', () => { 
  it('Debería devolver 0.5 si el número es 8', () => {
    //Arrange
    const carta = 8;
    const esperado = 0.5;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
  it('Debería devolver 1 si el número es 1', () => {
    //Arrange
    const carta = 1;
    const esperado = 1;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
  it('Debería devolver 2 si el número es 2', () => {
    //Arrange
    const carta = 2;
    const esperado = 2;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
  it('Debería devolver 0.5 si el número es 12', () => {
    //Arrange
    const carta = 12;
    const esperado = 0.5;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
  it('Debería devolver 0.5 si el número es 11', () => {
    //Arrange
    const carta = 11;
    const esperado = 0.5;
    //Act
    const result = obtenerValorCarta(carta);
    //Assert
    expect(result).toBe(esperado);
  });
})

describe("valorar", () => {
  it('Debería devolver HAS GANADO si el número es igual a 7.5', () => {
    //Arrange
    partida.puntosTotales = 7.5;
    const esperado = "¡ HAS GANADO!";
    //Act
    const result = valorar();
    //Assert
    expect(result).toBe(esperado);
  })
  
})
