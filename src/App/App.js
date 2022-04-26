import "./App.css";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";
import { CatCardList } from "../components/CatCardList/CatCardList";
import { Footer } from "../components/Footer/Footer";

import { getCats, getFact } from "../services/cat.js";

function App() {
  const [cats, setCats] = useState([]);
  const [fact, setFact] = useState("");

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await getCats();
      setCats(cats);
    };
    const fetchFact = async () => {
      const fact = await getFact();
      setFact(fact);
    };
    fetchCats();
    fetchFact();
  }, []);

  return (
    <>
      <Header />
      <CatCardList props={cats} {...fact} />
      <Footer />
    </>
  );
}

export default App;
