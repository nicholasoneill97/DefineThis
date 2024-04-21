//import styles
import './Synonyms.css'

//maps through api and finds synonyms for word that was passed in

const Synonyms = ({ response }) => {
    return (
      <div className="columns-2 md:columns-3">
        {response.map(val => val.meanings.map(responses => responses.definitions.map(def => {
          return def.synonyms?.map(syn => (
            <li className='synonym'>
              {syn}
            </li>
          ))
        })))}
      </div>
    );
  };

export default Synonyms