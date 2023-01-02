import './App.css';
import { Component } from 'react';
import Person from './components/Person';
import lee_img from './images/lee.png';
import jung_img from './images/jung.png';
import song_img from './images/song.png';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      personList: [
        {profileImg: lee_img, name: '이민호', age: 20, height: 175},
        {profileImg: jung_img, name: '정채연', age: 21, height: 162},
        {profileImg: song_img, name: '송중기', age: 22, height: 171},
      ]
    }
  }

  addPersonInfo = (name, age, height) => {
    const personObj = {profileImg: song_img, name: name, age: age, height: height}
    const plusPersonList = this.state.personList.concat(personObj)
    this.setState({
      personList:plusPersonList
    })
  }

  deletePersonInfo = (name) => {
    const filteredPersonList = this.state.personList.filter(
      (data) => (data.name !== name)
    )
    this.setState({
      personList:filteredPersonList
    })
  }

  updatePersonInfo = (name, age, height) => {
    const updatePersonObj = { age: age, height: height }
    const updatePersonList = this.state.personList.map(
      (data) => (data.name === name) ?
        ({ ...data, ...updatePersonObj}) : data
    )

    this.setState({
      personList:updatePersonList
    })
  }


  render() {
    const result = this.state.personList.map(
      (data,index) => (<Person
        key={index}
        profileImg={data.profileImg} 
        name={data.name} 
        age={data.age} 
        height={data.height}
        deletePersonInfo={this.deletePersonInfo}
        updatePersonInfo={this.updatePersonInfo}
        />)
    )
    
    return (
      <div id="App">
        <Form addPersonInfo={this.addPersonInfo} />
        {result}
      </div>
    )
  }
}


export default App;
