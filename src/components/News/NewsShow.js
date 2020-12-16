import React from 'react';
import { Image } from 'react-bootstrap';

export default function NewsShow(props) {

  const { article } = props

  if (article.multimedia === null) {
    return <div>No Image to see</div>
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
          </div>
        </a>
      </div>
    </>
  )
}