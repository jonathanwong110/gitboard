import React from 'react';
import { Image } from 'react-bootstrap';

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
        <div style={{ height: "20px" }}></div>
        <a href={article.url} target='_blank' rel="noopener noreferrer">
          <div>
            <div className="article-title" style={{ fontWeight: "bold", fontSize: "15px", textAlign: "left" }}>
              {article.title}
            </div>
            <Image src={article.multimedia[0].url} alt="Article Picture" className="article-image" />
            <div className="article-date" style={{ fontWeight: "bold", fontSize: "13px", textAlign: "left" }}>
              {article.created_date.toLocaleString().substring(0, 10)}
            </div>
          </div>
        </a>
      </div>
      <div style={{ height: "20px" }}></div>
    </>
  )
}