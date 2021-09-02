const withdraw = (valorSaque, withdrawBills = responseWithdrawBills) => {
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
  
      return res;
    }