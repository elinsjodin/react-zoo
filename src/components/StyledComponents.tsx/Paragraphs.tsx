import styled from "styled-components";
import { IAnimalFed } from "../../models/IAnimalFed";

interface IAnimalParagraphProps {
  animalFedButtonClicked: boolean;
}

export const StyledParagraph = styled.p`
  background-color: ${(props: IAnimalParagraphProps) =>
    props.animalFedButtonClicked ? "green" : "yellow"};
  width: 10%;
  text-align: center;
  padding: 0.3rem;
`;
