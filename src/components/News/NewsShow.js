import React from 'react';
import { Image } from 'react-bootstrap';
import { formatDate } from '../Misc/MiscFunctions'

export default function NewsShow(props) {

  const { article } = props

  if (article.created_date === undefined) {
    return <div>No Date of Article to see</div>
  }

  return (
    <>
      <div className="card mb-3 article-individual-wrapper">
        <a href={article.url} target='_blank' rel="noopener noreferrer" className="article-link">
          <div className="row no-gutters">
            <div className="col-md-5">
              {article?.multimedia !== null ? <Image src={article?.multimedia[0].url} className="card-img article-image" alt="Article Picture" /> :
                <div className="card-img article-image"></div>}
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title article-title">
                  {article.title}
                </h5>
                <p className="card-text" style={{ textAlign: "left" }}>
                  <small className="text-muted article-date">
                    {formatDate(article.created_date)}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}