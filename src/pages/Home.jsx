import { createContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Navbar from "../components/Navbar";

// Create context
export const WordContext = createContext();



function App() {
  //initializes inputValue as empty string
  const [inputValue, setInputValue] = useState("");

  //declares value 
  const value = {
    inputValue, setInputValue
  }
  //WordContext.Provider wraps page
  return (
    <>
    <Navbar />
    <WordContext.Provider value={value}>
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    </WordContext.Provider>
    </>
  );
}

export default App;