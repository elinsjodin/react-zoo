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
