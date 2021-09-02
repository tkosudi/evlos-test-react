const bills = {
  100: 1,
  50: 3,
  20: 4,
  10: 1,
  5: 3,
  2: 12,
  1: 10,
};

let responseWithdrawBills = {
  100: 0,
  50: 0,
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0,
};

const billsArray = Object.keys(bills)
  .reverse()
  .map((item) => parseInt(item));

let costumerBalance = 122.5;

export const withdraw = (
  valorSaque,
  inputValue,
  withdrawBills = responseWithdrawBills
) => {

  console.log()
  if ((valorSaque < 1) & (valorSaque > 0)) {
    return "Valor inválido! Saques à partir de R$1,00.";
  }

  if (valorSaque > costumerBalance) {
    return "Você não possui saldo para sacar este valor!";
  }

  if (valorSaque === 0) {
    const billValues = Object.keys(withdrawBills).filter((key) => {
      return withdrawBills[key] > 0;
    });

    let response = "Entregar ";
    for (let i = 0; i < billValues.length; i++) {
      response += `${withdrawBills[billValues[i]]} nota de R$${
        billValues[i]
      },00, `;
      costumerBalance -= billValues[i];
    }

    let res = response.slice(0, -2) + ".";

    for (let i = 0; i < billsArray.length; i++) {
      if (responseWithdrawBills[billsArray[i]] > 0) {
        responseWithdrawBills[billsArray[i]] = 0;
      }
    }
    console.log(res);
    return res;
  }
};
