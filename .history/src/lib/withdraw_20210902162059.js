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

let cost0merBalance = 122.5;

export const getCustomerBalance = (cost0merBalance) => {
  return cost0merBalance
}

export const withdraw = (
  valorSaque,
  inputValue,
  withdrawBills = responseWithdrawBills
) => {
  console.log(bills);
  // console.log("withdrawBills ==> ", withdrawBills);
  // console.log("bills ==> ", bills);
  // console.log("Costumer Balance ==> ", cost0merBalance);

  if (inputValue <= 1) {
    return "Valor inválido! Saques à partir de R$1,00.";
  }

  if (valorSaque > cost0merBalance) {
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
    }

    let res = response.slice(0, -2) + ".";

    for (let i = 0; i < billsArray.length; i++) {
      if (responseWithdrawBills[billsArray[i]] > 0) {
        responseWithdrawBills[billsArray[i]] = 0;
      }
    }
    return res;
  }

  for (let i = 0; i < billsArray.length; i++) {
    console.log(billsArray[i]);
    console.log(billsArray[i] > 0);
    if (bills[billsArray[i]] > 0 && valorSaque >= billsArray[i]) {
      valorSaque -= billsArray[i];
      withdrawBills[billsArray[i]]++;
      cost0merBalance -= billsArray[i];
      bills[billsArray[i]]--;

      return withdraw(valorSaque, withdrawBills);
    }
  }
};
