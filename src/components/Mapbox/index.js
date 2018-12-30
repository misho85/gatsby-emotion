import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Global } from '@emotion/core'
import mapbox from 'mapbox-gl/dist/mapbox-gl.css'
import Pin from './Pin'
import NavControl from './NavControl'
import { mapLatitude, mapLongitude } from '../../../config/website'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibHVjYXN3b2oiLCJhIjoiY2l5Nmg4cWU1MDA0ejMzcDJtNHJmZzJkcyJ9.WhcEdTYQH6sSw2pm0RSP9Q'

export default class Mapbox extends Component {
  state = {
    styleId: 'light',
    viewport: {
      latitude: mapLatitude,
      longitude: mapLongitude,
      zoom: 15,
    },
  }

  onViewportChange = viewport => this.setState({ viewport })

  onButtonClick = () => {
    this.setState(state => {
      const newStyleId = state.styleId === 'light' ? 'dark' : 'light'
      return { ...state, styleId: newStyleId }
    })
  }

  render() {
    const { viewport, styleId } = this.state
    const { fullScreen, goFull } = this.props
    return (
      <>
        <Global
          styles={[
            mapbox,
            {
              '.mapboxgl-ctrl-group': {
                borderRadius: 0,
              },
              '.mapboxgl-ctrl-group:not(:empty)': {
                boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
              },
            },
          ]}
        />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          width="100%"
          height="100%"
          maxZoom={17.5}
          scrollZoom={fullScreen}
          mapStyle={`mapbox://styles/mapbox/${styleId}-v9`}
          onViewportChange={this.onViewportChange}
        >
          <Marker latitude={mapLatitude} longitude={mapLongitude}>
            <Pin size={40} />
          </Marker>
          <NavControl
            styleChange={this.onButtonClick}
            onViewportChange={this.onViewportChange}
            goFull={goFull}
            fullScreen={fullScreen}
            styleId={styleId}
          />
        </ReactMapGL>
      </>
    )
  }
}
