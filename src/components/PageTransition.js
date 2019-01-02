import React from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'

const timeout = 500

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
    transform: 'translateX(-0.30rem)',
  },
  entered: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 1,
    transform: 'translateX(0%)',
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
    transform: 'translateX(0.30rem)',
  },
}

const PageTransition = ({ children, location }) => (
  <TransitionGroup>
    <Transition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {status => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  </TransitionGroup>
)

export default PageTransition
