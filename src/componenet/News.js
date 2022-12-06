import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: "in",
            pageSize: 6,
        category: "general",
        
                
    }
    capitalise = (string) => {
       
    return string.charAt(0).toUpperCase() + string.slice(1);

    
 }
    static propTypes = {
          country: PropTypes.string,
            pageSize: PropTypes.number,
             category: PropTypes.string
    }
    async updateNews() {
         let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       let data = await fetch(Url);
       let parseData = await data.json();
       this.setState({
           articles: parseData.articles,
           totalResults: parseData.totalResults,
           category: parseData.category
       });
        
    }
   async componentDidMount() {
       this.updateNews();
    }
    
      constructor(props){
          super(props);
            this.state = {
                articles: [],
                loading: false  ,
                page: 1
          }
          document.title = `${this.capitalise(this.props.category)} News Universe`;
    }
    handlePrev = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }
    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
            
        } else {
         
        this.setState({ page: this.state.page + 1 })
            this.updateNews();
        }
    }
    render() {
     
      return (
          <div className='container my-3'>
               <h2 className='text-center ' style={{marginTop:'90px'}}>News Universe - Top {this.capitalise(this.props.category)} headlines</h2>
              <div className='row my-3' >
                  {this.state.articles.map((element) => {
                      console.log(element);
                    return   <div className='col md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} author={element.author} date={element.publishedAt} source={element.source.name} discription={element.description?element.description.slice(0,88):""} category={element.category} urlImage={!element.urlToImage?"https://sportshub.cbsistatic.com/i/r/2022/12/03/556f5615-46be-42c6-b8c2-797c42566e88/thumbnail/1200x675/de847c62352bbf7be4ac82b4644feee2/deion-sanders-jackson-state-cg-2022-us.png":element.urlToImage} newsUrl ={element.url}  />
            </div>
                  })}
            
              </div>
              <div className="d-flex justify-content-between">
              <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePrev}>&#8592; Previous</button>
                  <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &#8594;</button>
                  </div>
              </div>
    )
  }
}
