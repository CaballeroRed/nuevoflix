import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: black;
  height: 100px;
  img {
    width: 150px;
    height: 50px;
    padding: 20px;
  }
  button {
    display: flex;
    background-color: #bebe62;
    height: 50px;
    padding: 20px;
    width: 10%;
    border-radius: 5px;
    justify-content: center;
    margin-top: 20px;
  }
`;

const HeaderP = () => {
  return (
    <HeaderStyle>
      <img src="./img/LogoMain.png" alt="logo" />
      <button className="BtnHome">Home</button>
      <button className="BtnNewVideo">Nuevo Video</button>
    </HeaderStyle>
  );
};

export default HeaderP;
