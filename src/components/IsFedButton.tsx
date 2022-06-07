import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { StyledButton } from "./StyledComponents.tsx/Buttons";

interface IShowAnimalProps {
  animalFed(value: boolean): void;
}

export const IsFedButton = (props: IShowAnimalProps) => {
  const [animalHasBeenFed, setAnimalHasBeenFed] = useState(false);

  const handleAnimalFed = () => {
    props.animalFed(animalHasBeenFed);
  };

  return (
    <>
      <StyledButton onClick={handleAnimalFed}>Mata djur</StyledButton>
    </>
  );
};
