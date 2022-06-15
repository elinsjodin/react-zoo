import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  background-color: papayawhip;
`;

export const SingleWrapper = styled.div`
  background-color: papayawhip;
`;

export const AnimalWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SingleAnimalWrapper = styled.div``;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 650px;
  width: 600px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px gray;
  margin-bottom: 10px;
`;

export const SingleAnimalImageWrapper = styled(ImageWrapper)`
  width: 50%;
  margin-bottom: 15px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SingleAnimalDescriptionWrapper = styled(DescriptionWrapper)`
  width: 60%;
  margin: 0 auto;
`;

export const AnimalFedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
