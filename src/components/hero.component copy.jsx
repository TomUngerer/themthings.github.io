import React from 'react'
import './hero.styles.scss'

let image = (
  <img className="background-image" src="img/heroes/hero1.jpg" alt="image"></img>
)

class Hero extends React.Component {
  render(){
    return (
      <header className="hero" id="intro">
        {image}
        <div className="container">
          <h1>
            <span className="sr-only">Them Things</span>
          </h1>
        </div>
      </header>
    );
  }
}


export default Hero