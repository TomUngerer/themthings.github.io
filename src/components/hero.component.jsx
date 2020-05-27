import React from 'react'
import './hero.styles.scss'

let image = (
  <picture>
    <source type="image/webp" srcSet="img/hero.webp" />
    <source type="image/jpeg" srcSet="img/hero.jpg" />
    <img src="img/hero.jpg" alt="hero" />
  </picture>
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