import { IAnimal } from "../models/IAnimal";
import { StyledButton } from "./StyledComponents.tsx/Buttons";

interface IIsFedButtonProps {
  animal: IAnimal;
  animalFed(id: number): void;
}

export const IsFedButton = (props: IIsFedButtonProps) => {
  return (
    <>
      <StyledButton onClick={() => props.animalFed(props.animal.id)}>
        Mata djur
      </StyledButton>
    </>
  );
};
