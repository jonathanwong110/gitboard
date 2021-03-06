import React from 'react';
import { Link } from 'react-router-dom'

export default function NewsCategory(props) {

  let { changeToSection } = props

  return (
    <>
      <div id="news-section-nav" className="container-fluid">
        <div className="row justify-content-md-center news-section-col-wrapper">
          <div className="col-sm news-section-col">
            <Link to="/news/home" onClick={e => changeToSection(e)} className="news-section-button-wrapper">
              <button className="news-section-button">
                Home
              </button>
            </Link>
          </div>
          <div className="col-sm news-section-col">
            <Link to="/news/business" onClick={e => changeToSection(e)} className="news-section-button-wrapper">
              <button className="news-section-button">
                Business
              </button>
            </Link>
          </div>
          <div className="col-sm news-section-col">
            <Link to="/news/science" onClick={e => changeToSection(e)} className="news-section-button-wrapper">
              <button className="news-section-button">
                Science
              </button>
            </Link>
          </div>
          <div className="col-sm news-section-col">
            <Link to="/news/technology" onClick={e => changeToSection(e)} className="news-section-button-wrapper">
              <button className="news-section-button">
                Tech
              </button>
            </Link>
          </div>
          <div className="col-sm news-section-col">
            <Link to="/news/politics" onClick={e => changeToSection(e)} className="news-section-button-wrapper">
              <button className="news-section-button">
                Politics
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}