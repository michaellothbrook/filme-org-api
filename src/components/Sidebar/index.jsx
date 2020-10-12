import React from "react"

import "./styles.css"

const Sidebar = () => {
  function toggleClassSidebar() {
    const element = document.getElementById("sidebar")
    element.setAttribute("class", "sidebar active")
    console.log(element)
  }

  return (
    <>
      <nav id="sidebar" className="sidebar">
        <ul>
          <li>Filmes não curados</li>
          <li>Filmes curtidos</li>
          <li>Filmes não curtidos</li>
        </ul>
      </nav>
      <button onClick={toggleClassSidebar}>Toggle</button>
    </>
  )
}

export default Sidebar
