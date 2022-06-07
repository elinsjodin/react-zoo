import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { IAnimalIsFEd } from "../models/IAnimalFed";
import { IsFedButton } from "./IsFedButton";
import { StyledButton } from "./StyledComponents.tsx/Buttons";
import { StyledHeading } from "./StyledComponents.tsx/Headings";
import { StyledImage } from "./StyledComponents.tsx/Images";
import { StyledParagraph } from "./StyledComponents.tsx/Paragraphs";
import {
  AnimalWrapper,
  HeroWrapper,
  ImageWrapper,
} from "./StyledComponents.tsx/Wrappers";

interface IShowAnimalsProps {
  animalIsFed: IAnimalIsFEd;
}

export const ShowAnimals = (props: IShowAnimalsProps) => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [animalHasBeenFed, setAnimalHasBeenFed] = useState<IAnimal>({
    isFed: false,
  });

  const LOCAL_STORAGE_LIST_KEY = "animals";

  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || "[]");

  const saveToLocalStorage = (animalList: IAnimal[]) => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(animalList));
  };

  useEffect(() => {
    if (animals.length !== 0) return;

    fetch("https://animals.azurewebsites.net/api/animals")
      .then((response) => response.json())
      .then((animalData) => {
        saveToLocalStorage(animalData);
        setAnimals(animalData);
      });
  });

  const handleAnimalFed = () => {
    if (animalHasBeenFed === true) {
    }
  };

  // const handleAnimalFed = (animalIsFed: IAnimal[]) => {
  //   if (animalFed){

  //   }

  //   saveToLocalStorage(animalIsFed)
  // }

  return (
    <>
      {animals.map((animal) => {
        return (
          <HeroWrapper>
            <AnimalWrapper key={animal.id}>
              <Link to={"/animal/" + animal.id}>
                <StyledHeading>{animal.name}</StyledHeading>
                <StyledParagraph
                  animalFedButtonClicked={props.animalIsFed.isFedClicked}
                ></StyledParagraph>
                <ImageWrapper>
                  <StyledImage
                    src={animal.imageUrl}
                    alt={animal.name}
                  ></StyledImage>
                </ImageWrapper>
              </Link>
              <IsFedButton animalFed={handleAnimalFed}></IsFedButton>
              {/* <button onClick={handleAnimalFed}>Mata djur</button> */}
            </AnimalWrapper>
          </HeroWrapper>
        );
      })}
    </>
  );
};
