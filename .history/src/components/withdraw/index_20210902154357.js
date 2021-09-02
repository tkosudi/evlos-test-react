import { useState } from "react/cjs/react.development";
import { Container, Message, Button } from "./styles";
import { withdraw } from "../../lib/withdraw";

export const WithdrawComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState(
    "Por favor insira o valor do saque!"
  );

  const buttonClick = (valorSaque, inputValue) => {

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
    </Container>
  );
};
