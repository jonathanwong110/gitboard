import React from 'react';
import { Image, Card } from 'react-bootstrap';

export default function NewsShow(props) {

  const { article } = props

  return (
    <>
      <div style={{ width: "100%", marginLeft: "20%" }}>
        <Card.Title className="news-information">{article.title}</Card.Title>
        <Image src={article.multimedia[0].url} alt="Article Picture" className="news-image" />
      </div>
    </>
  )
}