import React from 'react'
import Navigation from './Navigation'

const Container = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <head>
        <title>Trabajo Final</title>
      </head>
      <Navigation />
      <body>
        <div className="content">{children}</div>
        <footer className="footerContainer">
          <p>Catalina Garay Torres</p>
          <p>cgarayt@correo.udistrital.edu.co</p>
          <p>Universidad Distrital Francisco José de Caldas</p>
        </footer>
      </body>
    </>
  )
}

export default Container
