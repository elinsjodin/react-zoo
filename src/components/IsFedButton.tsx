import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { IAnimalFed } from "../models/IAnimalFed";
import { StyledButton } from "./StyledComponents.tsx/Buttons";

interface IShowAnimalProps {
  animal: IAnimal;
  animalFed(id: number): void;
}

export const IsFedButton = (props: IShowAnimalProps) => {
  return (
    <>
      <StyledButton onClick={() => props.animalFed(props.animal.id)}>
        Mata djur
      </StyledButton>
    </>
  );
};
