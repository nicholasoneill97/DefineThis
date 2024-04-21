//import styles
import './SearchResults.css'

//import loading icon
import { CgSearchLoading } from "react-icons/cg"; 

//import axios for api grabbing
import axios from "axios";

//import useContext, useEffect, and useState
import { useContext, useEffect, useState } from "react";

//import WordContext
import { WordContext } from "../pages/Home";

//import all three different types of results
import  Definitions  from "../components/Definitions"
import Synonyms from "./Synonyms";
import Examples from "./Example";

//base url for dictionary api

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';


const ResultList = () => {

  //sets inputValue to WordContext
  const { inputValue } = useContext(WordContext);

  //initializes response as null
  const [response, setResponse] = useState(null);

  //initializes errors at empty string
  const [error, setError] = useState("");

  //initializes loading at false(nothing is loading)
  const [loading, setLoading] = useState(false);

  //takes in parameter and waits for axios

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  }

  //fetches data from inputValue if there is anything found (if there is length)

  useEffect(() => {
    if(inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue]);

  //displays what is returned if the results are still loading up

  if(loading) {
    return (
      <div className="loading-container">
        <div className="">Coming Right Up!</div>
        <div className=""><CgSearchLoading /> </div>
      </div>
    )
  }

  //displays what is returned if no definitions were found from what was submitted from search

  if(error) {
    return <h3 className="errormessage">No Definitions Found..<br /> Try Another Word!</h3>
            
  }

  //delivers responses via custom components

  return (
    <div className="results-container">
     {response && (
        <div>
            <div className="category-container">
                <div className="results-line"></div>
                <h3 className="categories">
                  Meanings / Definitions
                </h3>
                <div className="results-line"></div>
                <Definitions response={response} />
            </div>
        
            <div className="category-container">
                <div className="results-line"></div>
                <h3 className="categories">
                  Example(s)
                </h3>
                <div className="results-line"></div>
                <Examples response={response} />
            </div>
          
            <div className="category-container">
                <div className="results-line"></div>
                <h3 className="categories">
                  Synonyms
                </h3>
                <div className="results-line"></div>
                <Synonyms response={response} />
            </div>
            
        </div>
     )}
    </div>
  );
};

export default ResultList;