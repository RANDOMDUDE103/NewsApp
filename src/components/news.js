import React, { Component } from 'react'
import Newsitem from './newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row my-4'>
            <div className='col-md-4'>
                <Newsitem title="" description="" imageUrl="..."/>
            </div>
            <div className='col-md-4'>
                <Newsitem/>
            </div>
            <div className='col-md-4'>
                <Newsitem/>
            </div>

        </div>

      </div>
    )
  }
}

export default News
