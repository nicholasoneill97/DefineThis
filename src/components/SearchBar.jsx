//import styles
import '../components/SearchBar.css'


//import useContext and useState
import { useContext, useState } from "react";

//import WordContext
import { WordContext } from "../pages/Home";



const Header = () => {

  //initializes value to empty string
  const [value, setValue] = useState("");

  //initializes inputValue to WordContext
  const { inputValue, setInputValue } = useContext(WordContext);

  //tells event to trigger upon input change from user and to set the value to what is inputted
  const handleInputChange = e => setValue(e.target.value);


  //function for when button for submitting is clicked, sets input value to what was inputted
  //resets set value to empty string
  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  }

  //same function as function above this one, but this one is triggered by the user pressing the enter key on keyboard
  //resets set value to empty string 
  const handleInputKeyDown = (e) => {
    if(e.key === 'Enter') {
      setInputValue(value);
      setValue("")
    }
  }

  return (
    <div className="">
      <div className="container">
        
        <p className="title">
          Find Definitions For Any Word
        </p>
        <div className="search">
          <input 
              className="searchbar" 
              type="text" 
              placeholder="Enter Word.." 
              onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} />
          <button className="search-btn" onClick={handleSubmit}>Search</button>
        </div>
       

        { inputValue && (
          <h3 className="wordsearched">
            <span className="">
              {inputValue}
            </span>
          </h3>
        ) }
      </div>
    </div>
  );
};

export default Header;