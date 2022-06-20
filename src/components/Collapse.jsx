import React from 'react';
import { useState} from 'react'

/** Styles */
import '../styles/collapse.css'

function Collapse(props) {
    const [active, setActive] = useState(false)

  const handleToggle = e => {
    setActive(!active)
  }
  
  return (
    <div className={`collapse ${active && "active"}`}>
      <div className="collapse-title" onClick={handleToggle}>
        {props.title}
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="collapse-content">{props.text}</div>
    </div>
  )
}

export default Collapse