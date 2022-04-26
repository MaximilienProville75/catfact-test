import "./App.css";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";
import { CatCardList } from "../components/CatCardList/CatCardList";
import { Footer } from "../components/Footer/Footer";

import { getCats, getFact } from "../services/cat.js";

function App() {
  const [cats, setCats] = useState([]);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await getCats();
      setCats(cats);
    };
    const fetchFacts = async () => {
      const facts = await getFact();
      setFacts(facts);
    };
    fetchCats();
    fetchFacts();
  }, []);

  return (
    <>
      <Header />
      <CatCardList props={cats} facts={facts} />
      <Footer />
    </>
  );
}

export default App;
