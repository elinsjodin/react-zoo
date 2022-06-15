import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import fallbackImg from "../assets/fallbackImg.png";
import { AnimalListContext } from "../contexts/AnimalListContext";
import { IAnimal } from "../models/IAnimal";
import { TimeService } from "../models/TimeService";
import { StyledHeading } from "./StyledComponents.tsx/Headings";
import { StyledImage } from "./StyledComponents.tsx/Images";
import {
  AnimalWrapper,
  HeroWrapper,
  ImageWrapper,
} from "./StyledComponents.tsx/Wrappers";

export const ShowAnimals = () => {
  let animalList = useContext(AnimalListContext);

  const LOCAL_STORAGE_LIST_KEY = "animals";

  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || "[]");

  const saveToLocalStorage = (animalList: IAnimal[]) => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(animalList));
  };

  useEffect(() => {
    if (animalList.animals.length !== 0) return;

    const animalArrayInLocalStorage = localStorage.getItem(
      LOCAL_STORAGE_LIST_KEY
    );

    if (animalArrayInLocalStorage) {
      animalList.feedAnimal(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || "[]")
      );
    } else {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((response) => response.json())
        .then((animalData: IAnimal[]) => {
          saveToLocalStorage(animalData);
          animalList.feedAnimal(animalData);
        });
    }
  }, []);

  useEffect(() => {
    const animalArray: IAnimal[] = [...animalList.animals];

    for (let i = 0; i < animalArray.length; i++) {
      const currentAnimal = animalArray[i];

      if (TimeService(currentAnimal, 4)) {
        currentAnimal.isFed = false;
      }
    }

    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(animalArray));
    console.log([...animalArray]);

    animalList.feedAnimal([...animalArray]);
  }, []);

  return (
    <HeroWrapper>
      {animalList.animals.map((animal) => {
        return (
          <AnimalWrapper key={animal.id}>
            <Link to={"/animal/" + animal.id}>
              <StyledHeading>
                {animal.name}{" "}
                {TimeService(animal, 4) ? (
                  <p>(Detta djur behöver matas)</p>
                ) : null}
              </StyledHeading>
              <ImageWrapper>
                <StyledImage
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImg;
                  }}
                ></StyledImage>
              </ImageWrapper>
            </Link>
            <p>{animal.shortDescription}</p>
          </AnimalWrapper>
        );
      })}
    </HeroWrapper>
  );
};
