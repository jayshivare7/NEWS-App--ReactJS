import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=>{

const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)

const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// document.title= `${capitalizeFirstLetter( props.category)}- NewsMonkey`;

const upadateNews=async()=>{
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKeey}&page=1&pagesize=10`;
  setLoading(true);
  let data=await fetch(url);
   props.setProgress(30);
  let parsedData=await data.json();
   props.setProgress(70);
  //  setState({articles: parsedData.articles,totalResults:parsedData.totalResults, loading: false});
  
setArticles(parsedData.articles);
setTotalResults(parsedData.totalResults);
setLoading(false);
   props.setProgress(100);
}
useEffect(()=>{
upadateNews();
}, [])

 const fetchMoreData =async() => {
  let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=662b4dbb31df4a329654e8a1b7123e21&page=${page+1}&pagesize=10`;
  setLoading(true);
  setPage(page+1);
  let data=await fetch(url);
  let parsedData=await data.json();
  //setState({articles: articles.concat(parsedData.articles),totalResults:parsedData.totalResults, loading: false});
  //  setPage(page-1);
  setArticles(articles.concat(parsedData.articles));
   setLoading(false);
   setTotalResults(parsedData.totalResults);
   
};

    return (

<>
      <h1 className="text-center" style={{margin:'35px 0px' , marginTop:'90px'}}>NewsMonkey-Top {capitalizeFirstLetter( props.category)} Headlines</h1>
   <InfiniteScroll
          dataLength={ articles.length}
          next={ fetchMoreData}
          hasMore={ articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
<div className="row">
{ articles.map((element)=>{
return <div className="col-md-3 mb-3" key={element.url}>
<NewsItem title= {element.title?element.title:""}  description={element.description?element.description:""}   imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
</div> })}
</div>
</div>
</InfiniteScroll>
</>

    )
}

News.defaultProps={
  country: "in",
  category:"technology",
  totoalResults: 0
    }
 News.propTypes={
  country: PropTypes.string,
  category: PropTypes.string
  }

export default News
