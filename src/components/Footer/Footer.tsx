import React, {FunctionComponent} from "react";

import "./Styles.css"

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <a href="https://chijunia.netlify.app">A simple presentational ecommerce site</a>
      <br />
      {currentYear}
    </footer>
  )
}