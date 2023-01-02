import '../css/Person.css';
import { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            age: this.props.age,
            height: this.props.height
        }
    }
    
    deletePersonInfo = () => {
        const name = this.props.name
        this.props.deletePersonInfo(name)
    }

    updatePersonInfo = () => {

        const { edit, age, height } = this.state
        const { name } = this.props
        
        if (edit === true) {
            this.props.updatePersonInfo(name, age, height)
        }
        
        this.setState({
            edit: !edit
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
    
    render() {
        const { edit } = this.state
        const { profileImg, name, age, height } = this.props

        if (edit === false) {
            return (
                <div id="person">
                    <div className="left">
                        <img src={profileImg} alt="프로필"></img>
                    </div>
                    <div className="right">
                        <p>이름:{name}</p>
                        <p>나이:{age}</p>
                        <p>키:{height}</p>
                        <button onClick={this.deletePersonInfo}>삭제</button>
                        <button onClick={this.updatePersonInfo}>수정</button>
                    </div>
                </div>
            )
        } else if (edit === true) {
            return (
                <div id="person">
                    <div className="left">
                        <img src={profileImg} alt="프로필"></img>
                    </div>
                    <div className="right">
                        <p>이름:{name}</p>
                        <p>나이:<input type="text" defaultValue={age} onChange={this.ageChange} /></p>
                        <p>키:<input type="text" defaultValue={height} onChange={this.heightChange} /></p>
                        <button onClick={this.deletePersonInfo}>삭제</button>
                        <button onClick={this.updatePersonInfo}>수정</button>
                    </div>
                </div>
            )
        }
    }
}

export default Person;