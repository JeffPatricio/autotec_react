import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 100%;
  background: #EEE;
  box-shadow: 0px 4px 4px #999;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  @media (max-width: 668px) {
    position: absolute;
    width: 80%;
    z-index: 3;
    transition: transform 0.3s ease-out;
    transform: ${ props => props.menuActive ? 'translateX(0)' : 'translateX(-102%)'};
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3EA2FF;
  padding: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
`;

export const ContainerItem = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-end;
  padding: 10px 20px;
  background: ${props => props.active ? '#3EA2FF' : 'transparent'};
  cursor: pointer;
  &:hover{
    background: ${props => props.active ? '#3EA2FF' : '#DDD'};
  }
`;

export const TitleItem = styled.p`
  color: ${props => props.color || '#333'};
  font-size: 16px;
  padding-left: 10px;
`;

export const Profile = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  cursor: pointer;
  background: #EEE;
  background-image: url(${ props => props.src});
  background-size: cover;
`;

export const Name = styled.p`
  color: #FFF;
  font-size: 16px;
  padding-top: 5px;
  cursor: default;
`;

export const Detail = styled.hr`
  color: #BBB;
  width: 90%;
  margin: 5px 0px;
  align-self: center;
`;

export const Logo = styled.img`
  width: 70px;
  align-self: center;
  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
  &:hover{
    transition: 0.3s;
    transform: scale(1.2);
  };
`;

export const BackgroundMenu = styled.div`
  display: none;
  @media (max-width: 668px) {
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: rgba(0,0,0,0.7);
    transition: opacity 0.5s ease-in-out;
  }
`;