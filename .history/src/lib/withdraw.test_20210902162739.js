const { withdraw } = require("../lib/withdraw");

describe("Testes para o Caixa eletrônico Recursivo", () => {
  it("Para saque de R$30,00 deve retornar 1 nota de R$10,00 1 nota de R$20,00.", () => {
    expect(withdraw(30, 30)).toEqual(
      "Entregar 1 nota de R$10,00, 1 nota de R$20,00."
    );
  });

  it("Para saque de R$80,00 deve retornar 2 nota de R$10,00 1 nota de R$20,00.", () => {
    expect(withdraw(80, 80)).toEqual(
      "Entregar 1 nota de R$10,00, 1 nota de R$20,00, 1 nota de R$50,00."
    );
  });

  it("Para saque de R$150,00 deve retornar Você não possui saldo para sacar este valor!", () => {
    expect(withdraw(150, 150)).toEqual(
      "Você não possui saldo para sacar este valor!"
    );
  });

  it("Para saque de R$0,10 deve retornar Valor inválido! Saques à partir de R$1,00.", () => {
    expect(withdraw(0.1, 0.1)).toEqual(
      "Valor inválido! Saques à partir de R$1,00."
    );
  });
});
