import styled from "styled-components";
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  color: #F60;
`

export function App() {
  return (
    <div>
      <Title>Hello World</Title>
      <GlobalStyle/>
    </div>
  );
}