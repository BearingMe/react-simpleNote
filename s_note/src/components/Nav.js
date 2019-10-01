import React from 'react'

function Nav(props) {
  return (
    <nav className="navbar navbar-light bg-black fixed-bottom">
      <div className="navbar-brand text-white">
        <i className="fas fa-sticky-note"></i> Sticky Notes
      </div>

      {
        !props.show && 
        <button 
          className="btn text-white" 
          onClick={props.click}>
          <i className="fas fa-plus"></i>
        </button>
      }

    </nav>
  )
}

export default Nav