import './App.css';
import React from 'react';
import BasicInfo from './components/Basicinfo';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      person: [
        {
          name: "Rehan Siraj",
          number: "980-999-9999",
          dob: "12/12/1912"
        },
        {
          name: "DJ Khaled",
          number: "980-989-9889",
          dob: "11/11/1911"
        },
        {
          name: "Justin McNeil",
          number: "980-919-9119",
          dob: "10/10/1910"
        }
      ]
    }
  }
  render(){
    return (
      <BasicInfo data={this.state.person}/>
    );
  }
}

export default App;
