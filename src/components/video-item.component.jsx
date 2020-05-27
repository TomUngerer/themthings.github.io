import React from 'react'

import './video-item.styles.scss'

import { useSpring, animated } from "react-spring";

const VideoItem = ({video}) => {
    const calc = (x, y) => [
      -(y - window.innerHeight / 2) / 20,
      (x - window.innerWidth / 2) / 20,
      1,
    ];
    const trans = (x, y, s) =>
      `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 1, tension: 100, friction: 40 },
    }));
    return (
      <article className="video">
        <a
          href={`https://www.youtube.com/embed/${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <video autoPlay={true} loop={true} muted={true} playsInline={true}>
              <source src={video.webm} type="video/webm" />
              <source src={video.mp4} type="video/mp4" />
            </video>
          </animated.div>
        </a>
        <div>
          <h4>{video.title}</h4>
          <a
            href={`https://www.youtube.com/embed/${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch now
          </a>
        </div>
      </article>
    );
}
export default VideoItem