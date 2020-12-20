import React from 'react';
import { Image } from 'react-bootstrap';
import { formatDate } from '../Display/DisplayFunctions'

export default function NewsShow(props) {

  const { article } = props

  if (article.multimedia === null) {
    return <div>No Image to see</div>
  }

  if (article.created_date === undefined) {
    return <div>No Date of Article to see</div>
  }

  return (
    <>
      <div className="card mb-3 article-individual-wrapper">
        <div className="row no-gutters">
          <div className="col-md-5">
            <a href={article.url} target='_blank' rel="noopener noreferrer">
              <Image src={article.multimedia[0].url} className="card-img article-picture" alt="Article Picture" />
            </a>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title article-title">
                <a href={article.url} target='_blank' rel="noopener noreferrer">
                  {article.title}
                </a>
              </h5>
              <p className="card-text" style={{ textAlign: "left" }}>
                <small className="text-muted article-date">
                  <a href={article.url} target='_blank' rel="noopener noreferrer">
                    {formatDate(article.created_date)}
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}