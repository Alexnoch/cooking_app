import React, {Component} from 'react';
import Recept from './Recept';
import './container-recepts.css';
var xhr;
class Container_recepts extends Component{
    constructor(props){
        super(props);
//По загрузке По умолчанию будет этот рецепт.
        this.state={
            firstDish:[<Recept header='Борщ' ingridients="Ингридиенты: 1.Мясо (либо мякоть с небольшим жирком, либо мозговая косточка с мясом) — 400 г. 2.Картофель (зависит от кастрюли. У меня средняя) — 5 шт" steps='Способ приготовления: 1 мясо поставить вариться. 2 Когда мясо сварится, добавить очищенный картофель' image='img/jpg/id1.jpg'/>],
            whatDish:this.props.whatDish,
            id:''
        }

        this.moreReceptsRequest = this.moreReceptsRequest.bind(this);
        this.moreRecepts = this.moreRecepts.bind(this);
        this.test = this.test.bind(this);
    }
// Ненужная кнопка для проверки состояния которое пришло
    test(){
        // console.log(this.state);
        console.log(this.props)
    }

// Функция подгрузки по кнопки "Ещё" 
    moreReceptsRequest(){
        var url =`http://localhost:3001/recept/${this.state.whatDish}/?id=${this.state.id - 1}`;
        // Формирование запроса для URL строки, на основании id и категории блюда, для получения предпоследнего блюда и так далее, до самого конца
        xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send();
        xhr.addEventListener("readystatechange",this.moreRecepts,false);
    }
    moreRecepts(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            // На этом этапе мне надо создать компонент в Состоянии
            this.setState((state)=>{
                return {firstDish:[...state.firstDish, <Recept key={response.id + state.firstDish.length} header={response.header} ingridients={response.ingridients} steps={response.steps} image={response.image}/>],
                        whatDish:state.whatDish,
                        id:response.id                   
            };
            })
        }
        console.log(response)
    }
   // Компонент жизненого цикла, который берет данные из "Последний рецепт первого блюда" и рендерит из в новое состояние-------НОВЫЕ ДАННЫЕ ИЗ PROPS РОДИТЕЯ
    componentWillReceiveProps(newProps){
            console.log('Какое-то состояниеЖ',newProps)
            this.setState({
                firstDish:[<Recept key="Math.random(120)" header={newProps.firstDish.header} ingridients={newProps.firstDish.ingridients} steps={newProps.firstDish.steps} image={newProps.firstDish.image}/>],
                whatDish:newProps.whatDish,
                id:newProps.id
            })
            console.log('Новое состояние от родителя',this.props)
        }

    render(){
        console.log('Контейнер с рецептами  Rendering');
        return(
            <div className="container-recepts">
                {this.state.firstDish}
                <button onClick={this.moreReceptsRequest}>Ещё</button>
                {/* <button onClick={this.test}>Проверка состояния</button> */}
            </div>
            
        )
    }
}

export default Container_recepts;