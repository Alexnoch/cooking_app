import React, {Component} from 'react';
import Content from './Content';
import "./app.css";

class App extends Component{
    render(){
        return(
            <div className="container">
                <h1>Добро пожаловать на сайт кулинарии!</h1>
                <img src="cooking.jpeg"></img>
            <Content />
            </div>
        )
    }
}

export default App;