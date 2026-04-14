import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsurl}= this.props;
    return (
        <div>
                <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://img.freepik.com/free-vector/news-grunge-text_460848-9369.jpg?semt=ais_hybrid&w=740&q=80":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read</a>
                </div>
                </div>
            </div>
    )
  }
}

export default Newsitem
