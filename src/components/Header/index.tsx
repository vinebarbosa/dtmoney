import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Dt Money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
