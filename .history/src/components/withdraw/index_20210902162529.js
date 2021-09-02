import { useState } from "react/cjs/react.development";
import { Container, Message, Button } from "./styles";
import { withdraw, getCustomerBalance } from "../../lib/withdraw";

export const WithdrawComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState(
    "Por favor insira o valor do saque!"
  );
  const [customerBalance, setCustomerBalance] = useState(getCustomerBalance());

  const buttonClick = (valorSaque, inputValue) => {
    const response = withdraw(valorSaque, inputValue);
    setCustomerBalance(getCustomerBalance());
    setResponseMessage(response);
    setInputValue("");
  };

  return (
    <Container>
      <Button onClick={() => buttonClick(inputValue, inputValue)}>
        Efetuar Saque
      </Button>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="number"
        value={inputValue}
      />
      <Message>{responseMessage}</Message>
      <Message>R$ {customerBalance}</Message>
    </Container>
  );
};
