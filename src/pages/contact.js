import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Fullscreen from 'react-full-screen'
import Section from '../components/Section'
import { Tagline } from '../components/Text'
import Mapbox from '../components/Mapbox'
import ContactForm from '../components/ContactForm'

const Container = styled.div`
  height: 40vh;
`

export default class Contact extends Component {
  state = {
    isFull: false,
  }

  goFull = () => {
    this.setState(prevState => ({ isFull: !prevState.isFull }))
  }

  onChange = isFull => this.setState({ isFull })

  render() {
    const { isFull } = this.state
    return (
      <>
        <Global
          styles={{
            '.fullscreen-enabled .full-screenable-node': {
              height: '100vh',
            },
          }}
        />
        <Fullscreen enabled={isFull} onChange={this.onChange}>
          <Container className="full-screenable-node">
            <Mapbox goFull={this.goFull} fullScreen={isFull} />
          </Container>
        </Fullscreen>
        <Section>
          <Tagline>Contact</Tagline>
          <ContactForm />
        </Section>
      </>
    )
  }
}
