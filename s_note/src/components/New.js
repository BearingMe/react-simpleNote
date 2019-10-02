import React, { Component } from 'react'

class New extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: ''
    }
    // state binding
    this.handleChange = this.handleChange.bind(this)
  }

  // update title and content
  handleChange(event) {
    let { name, value } = event.target

    this.setState({ [name]: value })
  }

  componentDidMount() {
    this.setState({title: this.props.post[0]})
    this.setState({content: this.props.post[1]})
  }

  render() {
    return (
      <div className="card shadow bg-dark mb-3">
        <div className="card-body pb-0">
          <input
            className="form-control bg-dark text-white border-secondary"
            name="title"
            type="text"
            placeholder="Título da Nota"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <textarea
            className="form-control bg-dark text-white border-secondary mt-3"
            name="content"
            cols="30" rows="10"
            placeholder="Insira o texto aqui..."
            style={{ resize: "none" }}
            value={this.state.content}
            onChange={this.handleChange}>
          </textarea>
        </div>

        <div className="card-footer">
          <div className="btn-group-sm float-right">
            <button
              className="btn btn-secondary mr-1"
              type="button"
              onClick={this.props.click}> Descartar
            </button>

            <button
              className="btn btn-info"
              type="button"
              onClick={() => this.props.submit(this.state.title, this.state.content)}> Salvar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default New