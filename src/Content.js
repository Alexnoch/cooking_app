import React, {Component} from 'react';
import Menu from './Menu';
import Container_recepts from './Container_recepts';
import './content.css';
var xhr;
class Content extends Component{
    constructor(props){
        super(props)

        this.state ={
            firstDish:[],
            whatDish:''
        }

        this.firstDish = this.firstDish.bind(this);
        this.firstResponse = this.firstResponse.bind(this);
        this.twoDish = this.twoDish.bind(this);
        this.twoResponse = this.twoResponse.bind(this);
        this.salads = this.salads.bind(this);
        this.saladsResponse = this.saladsResponse.bind(this);
        
    }
    //Запросы к серверу на адрес recept = last-recept
    firstDish(){
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3001/recept/firstDish/last-recept");
        xhr.send();
        xhr.addEventListener("readystatechange",this.firstResponse,false);
        console.log('Сработала Функция Первые Блюда');
    }

    firstResponse(){
        console.log('Сработала Функция Ещё Рецепты Компонента');
        if(xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            // Установка нового состояния
            this.setState(()=>{
                return {firstDish:{header:response.header,ingridients:response.ingridients,steps:response.steps,image:response.image},
                        whatDish:response.whatDish,
                        id:response.id               
            };
            })
        };
        console.log(this.state);
        console.log('Что у нас в респонсе Ответ от сервера response', response)
    };






// Нижняя часть пока --------------------------------------------------------------НЕ ИСПОЛЬЗУЕТЬСЯ--------------------------------------------------
    twoDish(){
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3001/?recept=twoDish");
        xhr.send();
        xhr.addEventListener("readystatechange",this.twoResponse,false);
        console.log('Сработала Функция Вторые блюда');
    }

    twoResponse(){
        console.log('Отработала функция Two');
        this.setState({})
    }

    salads(){
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3001/?recept=salads");
        xhr.send();
        xhr.addEventListener("readystatechange",this.saladsResponse,false);
        console.log('Сработала Функция Салаты')
    }

    saladsResponse(){
        console.log('Отработала функция Salads')
    }

    render(){
        return(
            <div className="content">
            <Menu clickFirstDish={this.firstDish} clickTwoDish={this.twoDish} clickSalads={this.salads}/>
            <Container_recepts {...this.state} />
            </div> 
        )   
    }
}

export default Content;