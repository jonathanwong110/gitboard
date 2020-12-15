import React from 'react';
import { Image, Card } from 'react-bootstrap';

export default function NewsShow(props) {

  const { article } = props

  return (
    <>
      <div style={{width: "auto", marginLeft: "30%", maxWidth: "800px", display: "block", justifyContent: "center", alignItems: "center"}}>
        <a href={article.url} target='_blank' rel="noopener noreferrer">
          <div>
            <Card.Title className="article-title" style={{ fontWeight: "bold" }}>
              {article.title}
            </Card.Title>
            <Image src={article.multimedia[0].url} alt="Article Picture" className="article-image" />
          </div>
        </a>
      </div>
    </>
  )
}