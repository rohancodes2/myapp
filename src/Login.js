import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TopBar from './TopPage';
import Viewdata from './View';

class Login extends Component{



    handleClick(){
     ReactDOM.render(<React.StrictMode><TopBar/></React.StrictMode>,
     document.getElementById("root2"));
    }
render(){
    return(<div align = "center"> 
        
        <div >Login page </div> 
        <button onClick={this.handleClick} >Sign in </button>
        </div>
        )

}

}
export default Login;