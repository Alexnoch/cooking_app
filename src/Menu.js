import React, {Component} from 'react';
import './cooking__menu.css';

class Menu extends Component{
    render(){
        return(
        <div className="cooking__menu">
            <button onClick={this.props.clickFirstDish}>Первые блюда</button>
            <button onClick={this.props.clickTwoDish}>Вторые блюда</button>
            <button onClick={this.props.clickSalads}>Салаты</button>
        </div>
        )
    }
}

export default Menu;