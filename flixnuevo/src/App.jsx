import styled from "styled-components";
import HeaderP from "./componentes/header";
import WraperP from "./componentes/header/Wraper";

const FondoGeneral = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  height: 100vh;
  width: 100%;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function App() {
  return (
    <>
      <FondoGeneral>
        <HeaderP></HeaderP>
        <AppContainer>
          <MainContainer>
            <WraperP
              texto="el video que buscas, se encuentra aqui"
              $backgroundimage={WraperP}
            ></WraperP>
          </MainContainer>
        </AppContainer>
      </FondoGeneral>
    </>
  );
}

export default App;
