import React from 'react';

import 'bootstrap/scss/bootstrap-reboot.scss';
import './App.scss';

import Hero from './components/hero.component'
import Banner from './components/banner.component'

import VideosContainer from './containers/videos.container'
import TourContainer from './containers/tour.container'
// import ReleasesContainer from './containers/releases.container'

import Footer from './components/footer.component'

import ReactGA from "react-ga"

ReactGA.initialize("UA-52661515-2")
ReactGA.pageview(window.location.pathname + window.location.search)


function App() {
    return (
      <div className="App">
        <Hero />
        <Banner>
          <span></span>
        </Banner>
        <main className="sections" id="main">
          <VideosContainer title="Videos" />
          <TourContainer title="Tour Dates" />
          {/* <ReleasesContainer title="Releases" /> */}
        </main>
        <Footer title="Them Things" />
      </div>
    );
}

export default App;
