import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentBoxNew from './components/CommentBoxNew'
import CommentList from './components/CommentList'
import PriceList from './components/PriceList'


const tags = ['恐龙','足球小子']

const items = [{"id":1,
               "title":"去云南旅游",
               "price":200,
               "category":{
                "id":"1",
                "name":"旅行",
                "type":"outcome"
               }
              },
              {"id":2,
               "title":"去西藏旅游",
               "price":500,
               "category":{
                "id":"2",
                "name":"旅行",
                "type":"outcome"
               }
              }
            ]

class App extends Component {




  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PriceList items={items} onModifyItem={(item) => {(alert(item.id))}} onDeleteItem={(item) => {(alert(item.id))}} /> 


      </div>
    );
  }
}

export default App;
