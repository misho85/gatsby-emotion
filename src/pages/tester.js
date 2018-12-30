import React from 'react'
import styled from '@emotion/styled'
import ContactForm from '../components/ContactForm'

const Container = styled.section`
  margin: 0 auto auto;
  width: 100%;
  padding: 3em 1.5em 2em;
  flex-grow: 1;
`

const Contact = () => (
  <Container>
    <h1>Contact</h1>
    <ContactForm />
  </Container>
)

export default Contact
