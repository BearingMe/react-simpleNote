import React, { Component } from 'react'

import Nav from './components/Nav'
import New from './components/New'
import Note from './components/Note'

let data = require('./data.json')


class App extends Component {
  constructor() {
    super()
    this.state = {
      showNewPost: false,
      data: data
    }

    // state binding
    this.showClick = this.showClick.bind(this)
    this.submitClick = this.submitClick.bind(this)
    this.noteClick = this.noteClick.bind(this)
  }

  // toggle view state
  showClick() {
    let callback = (before) => {
      return { showNewPost: !before.showNewPost }
    }

    this.setState(callback)
  }

  // add new post
  submitClick(title, content) {
    let element = {
      id: this.state.data.length,
      title: title,
      content: content,
      strike: false
    }

    let callback = (before) => {
      return { data: before.data.push(element) }
    }

    this.setState(callback)
    this.showClick()
  }

  // handle all buttons from notes
  noteClick(method, id) {
    let newData

    switch (method) {
      case 'delete':
        newData = this.state.data.filter((elem) => { return (elem.id !== id) })
        break;

      case 'strike':
        let callback = (elem) => {
          if (elem.id === id) elem.strike = !elem.strike
          return (elem)
        }
        newData = this.state.data.map(callback)
        break;

      default:
        break;
    }

    this.setState({ data: newData })
  }


  render() {
    let callback = (elem) => {
      return (
        <Note
          key={elem.id}
          id={elem.id}
          title={elem.title}
          content={elem.content}
          strike={elem.strike}
          click={this.noteClick}
        />
      )
    }

    let Notas = this.state.data.map(callback).reverse()

    return (
      <main>
        <Nav
          show={this.state.showNewPost}
          click={this.showClick}
        />

        <div className="container mt-3" style={{ marginBottom: "70px" }}>

          {
            this.state.showNewPost ?
              <New
                submit={this.submitClick}
                click={this.showClick}
              /> :
              Notas
          }

        </div>
      </main>
    )
  }
}

export default App;
