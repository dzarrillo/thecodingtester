import React from "react";
import { Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    console.log(` my Auth ${JSON.stringify(auth)}`);

    return(
        
   <Route
     {...rest}
     render={ props => auth
     ? (
         <Component {...props} />
       ) : (
         <Redirect
           to={{ pathname: "/signin", state: { from: props.location } }}
         />
        // <Component {...props} />
       )
     }
   />
  );}

const mapStateToProps = state => ( { auth: state.auth } ); 

export default connect(mapStateToProps)(PrivateRoute);