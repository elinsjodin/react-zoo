import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export const ShowAnimals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  // const [animalFed, setAnimalFed] = useState(false);

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

  // const handleAnimalFed = () => {
  //   if (animalFed){

  //   }

  //   saveToLocalStorage()
  // }

  return (
    <>
      {animals.map((animal) => {
        return (
          <div key={animal.id}>
            <Link to={"/animal/" + animal.id}>
              <h3>{animal.name}</h3>
              <p></p>
              <div>
                <img src={animal.imageUrl} alt={animal.name}></img>
              </div>
            </Link>
            {/* <button onClick={handleAnimalFed}>Mata djur</button> */}
          </div>
        );
      })}
    </>
  );
};
