import styled from "styled-components";

interface IAnimalParagraphProps {
  animalFedButtonClicked: boolean;
}

export const StyledParagraph = styled.p`
  color: ${(props: IAnimalParagraphProps) =>
    props.animalFedButtonClicked ? "green" : "yellow"};
`;
