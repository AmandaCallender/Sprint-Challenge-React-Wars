import React, { useState, useEffect } from "react";
import StarwarsCard from "./StarWarsCard";
import Axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 50vw;
  margin: 25px auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
`;

const StarWarsDisplay = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.co/api/people/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log("Get request failed", err));
  }, []);

  return (
    <Container>
      {characters.map((data, i) => (
        <StarwarsCard data={data} key={i} />
      ))}
    </Container>
  );
};

export default StarWarsDisplay;
