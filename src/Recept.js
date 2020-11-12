import React, {Component} from 'react';
import './recept.css';

class Recept extends Component{
    render(){
        console.log('Я тоже отрендирился')
        return(
            <div className='recept'>
                <h1>{this.props.header}</h1>
                <img src={this.props.image}></img>
                <p>{this.props.ingridients}</p>
                <p>{this.props.steps}</p>
            </div>
        )
    }
}

export default Recept;