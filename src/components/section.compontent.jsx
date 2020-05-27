import React from 'react'

import './section.styles.scss'

const Section = (props) => (
    <section id={props.id} className='section'>
        <header>
            <div className='container'>
                <h2>{props.title}</h2>
            </div>
        </header>
        <main>
                {props.children}
        </main>
    </section>
)

export default Section