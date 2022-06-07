import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    name: "",
    latinName: "",
    imageUrl: "",
    longDescription: "",
  });

  let params = useParams();

  useEffect(() => {
    fetch("https://animals.azurewebsites.net/api/animals/" + params.id)
      .then((response) => response.json())
      .then((singleAnimalData) => setAnimal(singleAnimalData));
  });

  return (
    <>
      <Link to="/">Back to Home Page</Link>
      <h3>
        {animal.name} ({animal.latinName})
      </h3>
      <img src={animal.imageUrl} alt={animal.name} />
      Decription: {animal.longDescription}
    </>
  );
};
