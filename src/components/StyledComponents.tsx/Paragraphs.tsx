import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

interface IAnimalParagraphProps {
  animalFedButtonClicked: boolean;
}

export const StyledParagraph = styled.p`
  background-color: ${(props: IAnimalParagraphProps) =>
    props.animalFedButtonClicked ? "#c0d6bf" : "palevioletred"};
  width: 30%;
  text-align: center;
  padding: 0.3rem;
  border-radius: 5px;

  @media ${devices.tablet} {
    width: 15%;
    padding: 0.7rem;
  }
  @media ${devices.dekstop} {
    width: 10%;
    padding: 0.9rem;
  }
`;

export const StyledAlertParagraph = styled.p`
  color: black;
`;

export const StyledDescriptionParagraph = styled.p`
  width: 60%;
  text-align: center;

  @media ${devices.tablet} {
    width: 70%;
  }
  @media ${devices.dekstop} {
    min-width: 70%;
  }
`;

export const Styled404Paragraph = styled.p`
  font-size: 1.5rem;
  color: palevioletred;

  @media ${devices.tablet} {
    font-size: 2rem;
  }
  @media ${devices.dekstop} {
    font-size: 2.3rem;
  }
`;
