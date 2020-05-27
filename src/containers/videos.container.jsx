import React from 'react'

import Section from '../components/section.compontent'
import VideoList from "../components/video-list.component";

let vidArray = [
  {
    id: "Eb1Wg4xWXQU",
    webm: "img/videos/mythomania.webm",
    mp4: "img/videos/mythomania.mp4",
    title: "Mythomania",
  },
  {
    id: "PmtG3xbh4Cs",
    webm: "img/videos/astronauts.webm",
    mp4: "img/videos/astronauts.mp4",
    title: "Astronauts",
  },
  {
    id: "SuXWM7KEcOU",
    webm: "img/videos/ohbrother.webm",
    mp4: "img/videos/ohbrother.mp4",
    title: "Oh Brother",
  },
];

const VideosContainer = (props) => (
    <Section id='videos' title={props.title}>
      <div className="container">
        <VideoList videos={vidArray} />
      </div>
    </Section>
);

export default VideosContainer