import React from "react"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <title>Portfolio</title>
      </Helmet>
      <div className="main-container">{children}</div>
    </>
  )
}

export default Layout
