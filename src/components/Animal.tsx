import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fallbackImg from "../assets/fallbackImg.png";
import { AnimalListContext, animals } from "../contexts/AnimalListContext";
import { IAnimal } from "../models/IAnimal";
import { TimeService } from "../models/TimeService";
import { IsFedButton } from "./IsFedButton";
import { StyledAnchor } from "./StyledComponents.tsx/Anchor";
import { StyledHeading } from "./StyledComponents.tsx/Headings";
import { StyledImage } from "./StyledComponents.tsx/Images";
import { StyledHomeLink } from "./StyledComponents.tsx/Link";
import { StyledParagraph } from "./StyledComponents.tsx/Paragraphs";
import {
  AnimalFedWrapper,
  SingleAnimalDescriptionWrapper,
  SingleAnimalImageWrapper,
  SingleAnimalWrapper,
  SingleWrapper,
} from "./StyledComponents.tsx/Wrappers";

export const Animal = () => {
  let animalList = useContext(AnimalListContext);

  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    imageUrl: "",
    isFed: false,
    lastFed: new Date(),
    latinName: "",
    longDescription: "",
    medicine: "",
    name: "",
    shortDescription: "",
    yearOfBirth: 0,
  });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (animal.id !== 0) return;

    const animalArray: IAnimal[] = [...animalList.animals];

    for (let i = 0; i < animalArray.length; i++) {
      const currentAnimal = animalArray[i];

      if (id) {
        if (currentAnimal.id === +id) {
          setAnimal({ ...currentAnimal });
        }
      }
      if (TimeService(currentAnimal, 3)) {
        currentAnimal.isFed = false;
      }
    }
    localStorage.setItem("animals", JSON.stringify(animalArray));
  });

  const handleAnimalFed = () => {
    const animalArray: IAnimal[] = [...animalList.animals];

    for (let i = 0; i < animalArray.length; i++) {
      const currentAnimal = animalArray[i];

      if (id) {
        if (currentAnimal.id === +id) {
          currentAnimal.isFed = true;
          currentAnimal.lastFed = new Date();
          localStorage.setItem("animals", JSON.stringify(animals));
          setAnimal({ ...currentAnimal });
          animalList.feedAnimal(animalArray);
        }
      }
    }
  };

  return (
    <>
      <SingleWrapper>
        <StyledHomeLink to="/">Back to Home Page</StyledHomeLink>
        <SingleAnimalWrapper>
          <StyledHeading>
            {animal.name} ({animal.latinName}){" "}
            <p>
              {TimeService(animal, 4) ? (
                <StyledAnchor href="#feed-animal">
                  Detta djur behöver matas!
                </StyledAnchor>
              ) : null}
            </p>
          </StyledHeading>
          <SingleAnimalImageWrapper>
            <StyledImage
              src={animal.imageUrl}
              alt={animal.name}
              onError={(e) => {
                e.currentTarget.src = fallbackImg;
              }}
            />
          </SingleAnimalImageWrapper>
          <SingleAnimalDescriptionWrapper>
            Decription: {animal.longDescription}
          </SingleAnimalDescriptionWrapper>
          <AnimalFedWrapper id="feed-animal">
            {animal.isFed ? null : (
              <IsFedButton
                animalFed={handleAnimalFed}
                animal={animal}
              ></IsFedButton>
            )}
            <StyledParagraph animalFedButtonClicked={animal.isFed}>
              {animal.isFed
                ? "Matad:" + " " + animal.lastFed.toLocaleString()
                : "Hungrig"}
            </StyledParagraph>
          </AnimalFedWrapper>
        </SingleAnimalWrapper>
      </SingleWrapper>
    </>
  );
};
