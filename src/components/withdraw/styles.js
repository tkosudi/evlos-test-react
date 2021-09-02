import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  font-family: monospace;
`;

export const Message = styled.h1`
  font-weight: bold;
  color: black;
`;

export const Button = styled.button`
  margin: 20px 0;
  width: 150px;
  height: 50px;
  font-size: large;
  background: #0077fc;
  border: none;
`;
