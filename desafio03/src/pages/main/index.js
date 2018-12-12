import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserRepoActions } from "../../store/ducks/userRepo";

import SideBar from "../../components/sidebar";

import "mapbox-gl/dist/mapbox-gl.css";

import GlobalStyle from "../../styles/global";

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    },
    repositoryInput: ""
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="map">
          <MapGL
            {...this.state.viewport}
            onClick={this.handleMapClick}
            mapStyle="mapbox://styles/mapbox/basic-v9"
            mapboxApiAccessToken="pk.eyJ1IjoiY2FybG9zdmlhbmEiLCJhIjoiY2pwaTd1NXB0MTRuMTN3bzZtZnEzZjU3MCJ9.6gsL51K0EsBBMFuQ4dATLA"
            onViewportChange={viewport =>
              this.setState({
                viewport
              })
            }
          >
            {this.props.userRepo.data.map(marker => (
              <Marker
                longitude={marker.longitude}
                latitude={marker.latitude}
                onClick={this.handleMapClick}
                captureClick
              >
                <img
                  alt="avatar"
                  style={{
                    borderRadius: 100,
                    width: 48,
                    height: 48
                  }}
                  src={marker.avatar_url}
                />
              </Marker>
            ))}
          </MapGL>
        </div>

        <SideBar />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userRepo: state.userRepo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserRepoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
