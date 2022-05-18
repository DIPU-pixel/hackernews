import React from 'react'
import  "./style.css"

const NewsCard = ({article}) => {
    if (!article.title) return null ;

  return (
    <>
    <div className='news-card'>
        <h3>{article.title}</h3>
        <h3>{article.points}</h3>
        <a href={article.url}>Read more</a>


    </div>
    </>
  )
}

export default NewsCard