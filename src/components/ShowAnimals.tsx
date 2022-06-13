import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fallbackImg from "../assets/fallbackImg.png";
import { IAnimal } from "../models/IAnimal";
import { StyledHeading } from "./StyledComponents.tsx/Headings";
import { StyledImage } from "./StyledComponents.tsx/Images";
import {
  AnimalWrapper,
  HeroWrapper,
  ImageWrapper,
} from "./StyledComponents.tsx/Wrappers";

export const ShowAnimals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

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

  return (
    <>
      {animals.map((animal) => {
        return (
          <HeroWrapper key={animal.id}>
            <AnimalWrapper>
              <Link to={"/animal/" + animal.id}>
                <StyledHeading>{animal.name}</StyledHeading>
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
              {animal.shortDescription}
            </AnimalWrapper>
          </HeroWrapper>
        );
      })}
    </>
  );
};
