import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 100px;
`;

const HeaderP = () => {
  return (
    <HeaderStyle>
      <img src="./img/LogoMain.png" alt="logo" />
    </HeaderStyle>
  );
};

export default HeaderP;
