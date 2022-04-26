import React from "react";
import { CatCard } from "../CatCard/CatCard";

export const CatCardList = (props) => {
  const catArr = props.props;
  const facts = props.facts;

  const randomFact = (facts) => {
    const random = Math.floor(Math.random() * facts.length);
    return facts[random].fact;
  };

  return (
    <>
      <main className="mt-5 w-full">
        <div className="flex flex-wrap justify-center">
          {catArr.map((cat) => {
            return (
              <CatCard key={cat.breed} {...cat} fact={randomFact(facts)} />
            );
          })}
        </div>
      </main>
    </>
  );
};
