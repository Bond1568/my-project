import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentBoxNew from './components/CommentBoxNew'
import CommentList from './components/CommentList'

const tags = ['恐龙','足球小子']

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: ['these are all comments']
    }
    this.addComment = this.addComment.bind(this)
  } 

  addComment(addComment) {
    this.setState({
      comments: [...this.state.comments, addComment]
    })
  }

  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NameCard name="Viking" number={123456789} tags={tags}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DigitalClock />  
        <CommentBox />

        <CommentList comments={comments}></CommentList>
        <CommentBoxNew commentsLength={comments.length} onAddComment={ this.addComment }/>
        
      </div>
    );
  }
}

export default App;
