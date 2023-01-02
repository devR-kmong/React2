import '../css/Form.css';
import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    ageChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    heightChange = (e) => {
        this.setState({
            height: e.target.value
        })
    }
    
    addPersonInfo = () => {
        const name = this.state.name
        const age = this.state.age
        const height = this.state.height
        this.props.addPersonInfo(name, age, height)
    }
    
    render() {
        return (
            <div className="form">
                <input type="text" placeholder='이름입력' onChange={this.nameChange}/>
                <input type="text" placeholder='나이입력' onChange={this.ageChange}/>
                <input type="text" placeholder='키입력' onChange={this.heightChange}/>
                <button onClick={this.addPersonInfo}>추가</button>
            </div>
        )
    }
}

export default Form;