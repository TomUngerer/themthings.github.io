import React from 'react'

import './banner.styles.scss'

const Banner = props => (
    <div className="banner">
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Banner