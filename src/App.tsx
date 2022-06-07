import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowAnimals } from "./components/ShowAnimals";
import { Layout } from "./components/Layout";
import { Animal } from "./components/Animal";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowAnimals />}></Route>
          <Route path="/animal/:id" element={<Animal />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
