import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CTX = React.createContext()

export { CTX }

export default function Store(props) {
  const { children } = props

  const [isAuth, setIsAuth] = useState(
    !!window.localStorage.getItem('access-token')
  )

  const authenticate = token => {
    window.localStorage.setItem('access-token', token)
    setIsAuth(true)
  }

  const logout = () => {
    window.localStorage.removeItem('access-token')
    setIsAuth(false)
  }

  return (
    <CTX.Provider value={{ isAuth, authenticate, logout }}>
      {children}
    </CTX.Provider>
  )
}

Store.propTypes = {
  children: PropTypes.node.isRequired
}
