import React from 'react'

function Note(props) {
  let strikeStyle = {
    color: '#ddd',
    textDecoration: 'line-through'
  }

  strikeStyle = props.strike ? strikeStyle : null

  return (
    <div className="card mb-3 text-white bg-dark shadow">
      <section className="card-body">
        <h3 className="card-title" style={strikeStyle}>
          {props.title}
        </h3>
        <article className="card-text" style={strikeStyle}>
          {props.content}
        </article>
      </section>

      <section className="card-footer p-1">
        <article className="btn-group float-right">
          <button 
            className="btn text-white"
            onClick={() => props.click('edit', props.id)}>            
            <i className="fas fa-pencil-alt"></i>
          </button>

          <button 
            className="btn text-white"
            onClick={() => props.click('strike', props.id)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <button 
          className="btn text-white"
            onClick={() => props.click('delete', props.id)}>
            <i className="fas fa-trash-alt">
            </i>
          </button>
          
        </article>
      </section>
    </div>
  )
}

export default Note