import React, { Component } from 'react';

class Story extends Component {
  render(){
    return (
      <div className='newsStory'>
        <a href={this.props.url}>{ this.props.title }</a>
        <span className='publishedAt'> { (new Date(this.props.date)).toLocaleTimeString() }</span>
      </div>
    )
  }
}

export default Story;
