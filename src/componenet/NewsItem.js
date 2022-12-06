import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, discription , urlImage , newsUrl,author , date ,source} = this.props;
    return (
        <div >
            <div className="card my-3" style={{width:"20rem"}}>
  <img src={urlImage} className="card-img-top" alt="..." />
                <div className="card-body">
                      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:'1'}}> {source} </span>
    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <p className="card-text"><small className="text-danger">{author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        </div>
    )
  }
}
