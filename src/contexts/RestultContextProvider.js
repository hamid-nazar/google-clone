import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/?limit=40&q=";

const key = "r8iCFTmiB5dd11HXYEWnhOB2eaniLj4dvG4q1rXUoWg";

// ?page=1&query${queryString}&client_id=${url}
const url = "https://api.unsplash.com";

export function ResultContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTem] = useState("winter");

  async function getResults(type) {
    setIsLoading(true);
    let response = null;

    if (type === "/images") {
      response = await fetch(
        `${url}/search/photos?query=${searchTerm}&client_id=${key}&per_page=100`
      );
    } else {
      response = await fetch(`${baseUrl}${type}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f310996da3mshea35cc6137fcd96p1489f7jsnab61213b6fe1",
          "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
        },
      });
    }

    const data = await response.json();

    setResults(data);
    if (type.includes("/news")) {
      setResults(data.entries.entries);
    }
    if (type.includes("/images")) {
      // setResults(data.image_results);
      setResults(data.results);
    } else {
      setResults(data.results);
    }

    setIsLoading(false);
  }

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTem, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export function useResultContext() {
  return useContext(ResultContext);
}
