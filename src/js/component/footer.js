import React from "react"

const Footer = () => (
  <div className="container" style={{ backgroundColor: 'darkgrey' }}>
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top" style={{ color: 'white' }}>
      <div className="d-flex align-items-center text-center">
        <a href="/" className="text-body-secondary text-decoration-none">
          {/* Add link text here */}
        </a>
        <span className="text-body-secondary justify-content-center d-flex">© 2023 Company, Inc</span>
      </div>
    </footer>
  </div>
)
export default Footer;
