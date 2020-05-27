import React from "react";

import './tour.styles.scss'

import Section from "../components/section.compontent"

import Script from "react-load-script";

class TourContainer extends React.Component {
  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }
  render() {
    return (
      <Section id="tour" title={this.props.title}>
        <div className="container">
          <div
            className="bit-widget-initializer"
            data-artist-name="themthings"
            data-display-local-dates="false"
            data-display-past-dates="true"
            data-auto-style="false"
            data-text-color="#ffffff"
            data-link-color="#8B677C"
            data-background-color="rgba(0,0,0,0.2)"
            data-display-limit="5"
            data-display-start-time="false"
            data-link-text-color="#FFFFFF"
            data-display-lineup="false"
            data-display-play-my-city="false"
            data-separator-color="rgba(124,124,124,0.25)"
          ></div>
          <Script
            url="https://widget.bandsintown.com/main.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />
        </div>
      </Section>
    );
  }
}

export default TourContainer;
