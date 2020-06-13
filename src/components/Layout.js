import React from "react"
import SEO from "../components/SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="main-container">{children}</div>
    </>
  )
}

export default Layout
