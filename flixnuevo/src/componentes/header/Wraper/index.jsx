import styled from "styled-components";

const WraperEstilizado = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundimage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  margin: 0;
  border-radius: 10px;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`
  color: #232415;
`;

const WraperP = ({ texto, $backgroundimage }) => {
  return (
    <WraperEstilizado $backgroundimage={$backgroundimage}>
      <img src="img/banner.png" alt="banner " />
      <TituloEstilizado>{texto}</TituloEstilizado>
    </WraperEstilizado>
  );
};

export default WraperP;
