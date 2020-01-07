import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login/LoginForm"
import AuthContext from "./context/authentication-context"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      ...initialValues,
      authenticated:false,
      jwt:""
    }
  }

  setToken =({authenticated,jwt}) =>{
    this.setState({
      authenticated:authenticated,// aquivalent à juste écrire authenticated,jwt
      jwt:jwt
    })
  }
  render() {
    return(
      <div>
        <AuthContext.Provider value={{

          authenticated:this.state.authenticated,
          jwt:this.state.jwt,
          setToken:this.setToken
        }}>
          <Login/>
        </AuthContext.Provider>
      </div>
    )
  }
  
}

export default App;
