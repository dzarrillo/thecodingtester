import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";


const NoMatch = () => {
    
    return(
        
        <div className="container-page">
            <h1>404 Page Not Found</h1>
          <h1>
              <FontAwesomeIcon icon={faCloudRain} />
          </h1>
        </div>
    );
}
    
export default NoMatch;