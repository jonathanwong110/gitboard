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
      <div className="article-individual-piece">
        <div id="article-space-break"></div>
        <a href={article.url} target='_blank' rel="noopener noreferrer">
          <div>
            <Image src={article.multimedia[0].url} alt="Article Picture" className="article-image" />
            <div className="article-title" style={{ fontWeight: "bold", fontSize: "15px", textAlign: "left" }}>
              {article.title}
            </div>
            <div className="article-date" style={{ fontWeight: "bold", fontSize: "13px", textAlign: "left" }}>
              {formatDate(article.created_date)}
            </div>
          </div>
        </a>
      </div>
      <div style={{ height: "20px" }}></div>
    </>
  )
}