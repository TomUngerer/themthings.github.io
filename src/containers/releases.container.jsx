import React from "react";

import './releases.styles.scss'

import Section from "../components/section.compontent";

const releases = [
  {
    title: 'Good Weird',
    thumb: 'img/albums/goodweird.jpg'
  }
]

const ReleasesContainer = (props) => (
  <Section id="releases" title={props.title}>
    <div className="container">
      <article className="release">
        <div className="album">
          <img src={releases[0].thumb} alt="Album Artwork" />
          <div className="disk" />
        </div>
      </article>
    </div>
  </Section>
);

export default ReleasesContainer;
