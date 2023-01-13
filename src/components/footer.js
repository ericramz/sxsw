import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Footer({ siteTitle }) {
  return (
    <>
      <div className="w-full max-w-screen-xl md:mx-auto px-4 md:flex md:justify-between pt-6 pb-4">
        <div className="flex items-center flex-shrink-0 mr-6 ">
          <Link to="/">
            <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
              <StaticImage
                src="../images/ut-brand-primary.svg"
                alt={siteTitle}
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center flex-shrink-0 mr-6 ">
          <div className="text-white">
            <p>Main Building (MAI)</p>
            <p>110 Inner Campus Drive</p>
            <p>Austin, TX 78705</p>
            <p>
              <a href="mailto:springfestatx@utexas.edu">
                springfestatx@utexas.edu
              </a>
            </p>
          </div>
          <div>
            <ul className="social-sharing">
              <li className="fill-black inline px-4">
                <a href="https://www.facebook.com/UTAustinTX">
                  <span className="sr-only">UT Austin on Facebook</span>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
              <li className="inline px-4">
                <a href="https://twitter.com/UTAustin">
                  <span className="sr-only">UT Austin on Twitter</span>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
              <li className="inline px-4">
                <a href="http://instagram.com/UTAustinTX">
                  <span className="sr-only">UT Austin on Instagram</span>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
              <li className="inline px-4">
                <a href="https://www.linkedin.com/edu/the-university-of-texas-at-austin-19518">
                  <span className="sr-only">UT Austin on LinkedIn</span>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
              <li className="inline px-4">
                <a href="https://www.youtube.com/channel/UCCLiPoSjzG1PVWyRtq0G3Fw">
                  <span className="sr-only">UT Austin on YouTube</span>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl md:mx-auto px-4 md:flex md:justify-between pb-6">
        <div className="text-white content-center">
          ©{" "}
          <a href="https://www.utexas.edu">The University of Texas at Austin</a>{" "}
          {new Date().getFullYear()}
        </div>
        <div className="right">
          <ul>
            <li className="inline px-2">
              <a href="https://www.utexas.edu/emergency">
                Emergency Information
              </a>
            </li>
            <li className="border-l border-white inline px-2">
              <a href="https://www.utexas.edu/site-policies">Site Policies</a>
            </li>
            <li className="border-l border-white inline px-2">
              <a href="https://it.utexas.edu/policies/web-accessibility">
                Web Accessibility Policy
              </a>
            </li>
            <li className="border-l border-white inline px-2">
              <a href="https://it.utexas.edu/policies/web-privacy">
                Web Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
