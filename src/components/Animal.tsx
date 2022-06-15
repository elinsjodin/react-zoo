import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fallbackImg from "../assets/fallbackImg.png";
import { AnimalListContext, animals } from "../contexts/AnimalListContext";
import { IAnimal } from "../models/IAnimal";
import { TimeService } from "../models/TimeService";
import { IsFedButton } from "./IsFedButton";
import { StyledParagraph } from "./StyledComponents.tsx/Paragraphs";

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
      <Link to="/">Back to Home Page</Link>
      <h3>
        {animal.name} ({animal.latinName})
      </h3>
      <div>
        <img
          width="600px"
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
          }}
        />
      </div>
      <div>Decription: {animal.longDescription}</div>
      {TimeService(animal, 3) ? <p>Detta djur behöver matas</p> : null}
      {animal.isFed ? null : (
        <IsFedButton animalFed={handleAnimalFed} animal={animal}></IsFedButton>
      )}
      <StyledParagraph animalFedButtonClicked={animal.isFed}>
        Matad: {animal.isFed.toString()}
      </StyledParagraph>
      <p>{animal.lastFed.toString()}</p>
    </>
  );
};
