import React from 'react';
import { Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NewsShow(props) {

  const { article } = props

  return (
    <>
      <a target='_blank' href={article.url}>
        <div style={{ width: "100%", marginLeft: "20%", overflow: "auto" }}>
          <Card.Title className="article-title" style={{ fontWeight: "bold" }}>{article.title}
          </Card.Title>
          <Image src={article.multimedia[0].url} alt="Article Picture" className="article-image" />
        </div>
        </a>
    </>
  )
}