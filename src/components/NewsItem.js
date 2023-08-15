import React from 'react'
import failed from './failed.png'
const NewsItem=(props)=> {
  let {description,imageUrl,newsUrl,author,date} =props;
    return (
        <div className="card">
        <img src={!imageUrl? failed: imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank'  className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
  
}

export default NewsItem
