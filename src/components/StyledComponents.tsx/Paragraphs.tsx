import styled from "styled-components";

interface IAnimalParagraphProps {
  animalFedButtonClicked: boolean;
}

export const StyledParagraph = styled.p`
  background-color: ${(props: IAnimalParagraphProps) =>
    props.animalFedButtonClicked ? "#c0d6bf" : "palevioletred"};
  width: 10%;
  text-align: center;
  padding: 0.3rem;
`;

export const StyledAlertParagraph = styled.p`
  color: black;
`;

export const StyledDescriptionParagraph = styled.p`
  width: 90%;
  text-align: center;
`;
