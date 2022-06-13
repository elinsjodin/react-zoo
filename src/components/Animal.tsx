import { useEffect, useState, SyntheticEvent } from "react";
import { Link, useParams } from "react-router-dom";
import fallbackImg from "../assets/fallbackImg.png";
import { IAnimal } from "../models/IAnimal";
import { IsFedButton } from "./IsFedButton";
import { StyledParagraph } from "./StyledComponents.tsx/Paragraphs";

export const Animal = () => {
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

  const [animalHasBeenFed, setAnimalHasBeenFed] = useState(false);
  const [paragraphColor, setParagraphColor] = useState("");

  let params = useParams();

  const LOCAL_STORAGE_LIST_KEY = "animalArray";

  const getAnimalArrayFromLocalStorage: IAnimal[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || "[]"
  );

  const saveToLocalStorage = (animalArray: IAnimal[]) => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(animalArray));
  };

  useEffect(() => {
    fetch("https://animals.azurewebsites.net/api/animals/" + params.id)
      .then((response) => response.json())
      .then((singleAnimalData) => {
        saveToLocalStorage(singleAnimalData);
        setAnimal(singleAnimalData);
      });
  }, []);

  const handleAnimalFed = () => {
    const animalArray: IAnimal[] = getAnimalArrayFromLocalStorage;

    // for (let i = 0; i < animalArray.length; i++) {
    //   const animal = animalArray[i];
    //   if (animal.id === +params) {
    //     animal.isFed = true;
    //     animal.lastFed = new Date();
    //     saveToLocalStorage(animalArray);
    //     setAnimal(animal);
    //     setAnimalHasBeenFed(true);
    //     setParagraphColor("green");
    //   } else {
    //     setParagraphColor("yellow");
    //   }
    // }

    // for (let i = 0; i < animalArray.length; i++) {
    //   if (animalArray[i].id === params.id) {
    //     animalArray[i].isFed = true;
    //     animalArray[i].lastFed = new Date();
    //     saveToLocalStorage(animalArray);
    //     setAnimal(animalArray[i]);
    //     setAnimalHasBeenFed(true);
    //     setParagraphColor("green");
    //   } else {
    //     setParagraphColor("yellow");
    //   }
    // }
    console.log(animalHasBeenFed);
  };

  console.log(animal);

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
      <IsFedButton animalFed={handleAnimalFed} animal={animal}></IsFedButton>
      <StyledParagraph animalFedButtonClicked={animalHasBeenFed}>
        Fed
      </StyledParagraph>
    </>
  );
};
