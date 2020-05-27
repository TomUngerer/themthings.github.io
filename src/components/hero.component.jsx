import React from 'react'
import './hero.styles.scss'

let image = (
  <div className="hero-img" />
)

class Hero extends React.Component {
  render(){
    return (
      <header className="hero" id="intro">
        <div className="container">
          <div>
            <h1>
              <span className="sr-only">Them Things</span>
            </h1>
          </div>
          {image}
        </div>
      </header>
    );
  }
}


export default Hero