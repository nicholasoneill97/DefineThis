//import for styles
import '../components/Definitions.css'


//maps through api and finds definition for word that was passed in

const Definitions = ({ response }) => {
    return (
      <div className='definition-container'>
        {response.map(val => val.meanings.map(responses => responses.definitions.map(def => (
          <div className="definition" key={def.definition}>
            <li>
              -{def.definition}
            </li>
          </div>
        ))))}
      </div>
    );
  };
  
export default Definitions;