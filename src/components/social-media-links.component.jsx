import React from 'react'

import './social-media-links.styles.scss'

import Icon from './icon.component'

const SocialMediaLinks = ({links}) => {
    return (
      <div className="social-media-links">
        <Icon color={true} name='bandcamp' />
        <Icon color={true} name='facebook' />
        <Icon color={true} name='instagram' />
        <Icon color={true} name='soundcloud' />
        <Icon color={true} name='twitter' />
        <Icon color={true} name='youtube' />
        <Icon color={true} name='plane' />
      </div>
    );
};

export default SocialMediaLinks