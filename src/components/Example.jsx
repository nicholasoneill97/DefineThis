//import styles
import './Examples.css'


//maps through api and finds examples for word passed in

const Example = ({ response }) => {
    return (
      <div>
        {response.map(val => val.meanings.map(responses => responses.definitions.map(def => (
          <div key={def.example}>
            
            {def.example ? <li className="example" >
                                "{def.example}"
                            </li> : ''}
            
          </div>
        ))))}
      </div>
    );
  };
  
  export default Example;