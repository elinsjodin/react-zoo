import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const HeroWrapper = styled.div``;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    gap: 10px;
  }
  @media ${devices.dekstop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SingleWrapper = styled.div``;

export const AnimalWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.5s ease;
    background-color: #c0d6bf;
    border-radius: 10px;
  }

  @media ${devices.tablet} {
    width: 70%;
  }
  @media ${devices.dekstop} {
    width: 45%;
  }
`;

export const SingleAnimalWrapper = styled.div``;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px gray;
  margin-bottom: 10px;
  background-color: snow;

  @media ${devices.tablet} {
    min-height: 450px;
    min-width: 400px;
  }
  @media ${devices.dekstop} {
    max-height: 650px;
    max-width: 600px;
  }
`;

export const SingleAnimalImageWrapper = styled(ImageWrapper)`
  width: 50%;
  margin-bottom: 15px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SingleAnimalDescriptionWrapper = styled(DescriptionWrapper)`
  width: 50%;
  margin: 0 auto;
`;

export const AnimalFedWrapper = styled(InfoWrapper)`
  margin: 0 auto;
`;

export const NotFoundWrapper = styled(InfoWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
