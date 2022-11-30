import { Component } from 'react';
import checkedIcon from './check.png';

export class GroceryList extends Component {
    state = {
        userInput: '', // изменяется поле ввода
        groceryList: [], //массив, в котор-й записываются значения списка
        buttonDisabled: false,
    }

    // onChangeEvent (event) {
    //     console.log(event.target.value); //отображается каждая буква введеная в input 
    // }

    onChangeEvent(text) {
        this.setState({userInput: text});
        this.setState({buttonDisabled: false});
    }

    addItem(input) {
        let listArray = this.state.groceryList;
        if (input.trim() !== '') {
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''});
        } else {
            this.setState({buttonDisabled: true});
        }
    }
    
    boughtItem(evt) {
        const li = evt.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
        // this.setState({groceryList: []});
    }

    onFormSubmit(evt) {
        evt.preventDefault();
    }

    render() {
        return (
            <div>
                <form className='container' onSubmit={this.onFormSubmit}> {/* // добавляем элемент списка по нажатию ENTER */}
                    <input
                    type='text' 
                    placeholder='What do you want to buy?'
                    value={this.state.userInput} //чему в данный момент равно значение value inputa, т.е. то что ввел польз-ль
                    // onChange={(evt) => {console.log(evt.target.value)}}/> // более короткая запись со стрелкой
                    // onChange={this.onChangeEvent}/> // на объекте объявлется ф-я onChangeEvent */
                    onChange={(evt) => this.onChangeEvent(evt.target.value)} />
                    
                    <button className={this.state.buttonDisabled ? 'disabled' : 'add'} onClick={() => this.addItem(this.state.userInput)} disabled={this.state.buttonDisabled}>ADD</button>
                    <ul>
                        {this.state.groceryList.map((item, index) => ( //нужен index, чтобы у каждого li должен быть уникальный ключ
                            <li key={index} onClick={this.boughtItem}>
                                <img className='icon' src={checkedIcon} alt='Checked item'/>
                                {item}
                            </li> // без index вылазит:   Warning: Each child in a list should have a unique "key" prop.
                        ))}
                    </ul>
                    <button className='delete' onClick={() => this.deleteItem()}>DELETE</button>
                </form>
            </div>
        )
    }
}
