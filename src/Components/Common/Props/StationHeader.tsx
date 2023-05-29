import React from "react";
import styled from "styled-components";
import { VscSearch } from "react-icons/vsc";
import { CiBellOn } from "react-icons/ci";
import { stationHeader } from "../../../types";
import { useAppSelector } from "../../../services/statemanagement/Store";

const StationHeader: React.FC<stationHeader> = ({ bg, subtitle, title }) => {
  const stationuser = useAppSelector((state) => state.stationdetail);
  return (
    <Main bg={bg}>
      <Wrapper>
        <Left>
          <Up>
            <p>{title}</p>
          </Up>
          <Down>
            <H1>{stationuser?.station}</H1>
          </Down>
        </Left>
        <Right>
          <Holds>
            <Ip>
              <VscSearch />
            </Ip>
            <input />
          </Holds>
          <Noti>
            <Bi>
              <CiBellOn />
            </Bi>
            <span>{stationuser?.request?.length}</span>
          </Noti>
        </Right>
      </Wrapper>
    </Main>
  );
};

export default StationHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  margin-left: 5px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    /* background-color: yellow; */
  }
`;
const Right = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Main = styled.div<{ bg: string }>`
  width: calc(100% - 250px);
  height: 17vh;
  display: flex;
  margin-bottom: 20px;
  background-color: ${({ bg }) => bg};
  position: fixed;
  top: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    /* height: fit-content; */
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-width: 1051px) {
    width: 100%;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Bi = styled.div`
  font-size: 20px;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  color: #03b903;
`;
const Noti = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  span {
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 45%;
    background-color: #03b903;
    color: white;
    margin-top: -20px;
    margin-left: -15px;
  }
`;
const Hold = styled.div`
  display: flex;
  background-color: #03b903;
  padding: 8px 12px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
  p {
    color: white;
    margin-left: 10px;
  }
`;
const Holds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  border-radius: 6px;
  background-color: #fff;
  /* border: 1px black solid; */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  input {
    border: none;
    outline: 0;
    width: 90%;
    height: 100%;
    border-radius: 6px;
    padding-left: 5px;
    background-color: transparent;
  }
`;
const Ic = styled.div`
  color: white;
`;
const Ip = styled.div`
  font-size: 16px;
  padding-left: 10px;
  margin-top: 5px;
`;
const Up = styled.div`
  p {
    margin: 0;
    font-size: 18px;
    margin-top: 20px;
    font-weight: 500;

    color: #ffff;

    text-overflow: ellipsis;
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;
const Down = styled.div`
  /* margin-top: -15px; */
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;
const H1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;
