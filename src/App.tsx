import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowAnimals } from "./components/ShowAnimals";
import { Layout } from "./components/Layout";
import { Animal } from "./components/Animal";
import { NotFound } from "./components/NotFound";
import {
  animalFed,
  AnimalListContext,
  IAnimalFed,
} from "./contexts/AnimalListContext";
import { useState } from "react";
import { IAnimal } from "./models/IAnimal";

function App() {
  const [animalObject, setAnimalObject] = useState<IAnimalFed>(animalFed);

  animalObject.feedAnimal = (updatedList: IAnimal[]) => {
    setAnimalObject({ ...animalObject, animals: updatedList });
  };

  return (
    <AnimalListContext.Provider value={animalObject}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ShowAnimals />}></Route>
            <Route path="/animal/:id" element={<Animal />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimalListContext.Provider>
  );
}

export default App;
