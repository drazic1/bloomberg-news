import React, { Component } from 'react';
import Story from './Story';


class NewsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latest: [],
    };

    this.sources = {
      bloomberg: 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=cc9596ab2c6b429f8d704ebbe8009fdd',
      reuters: 'https://newsapi.org/v1/articles?source=reuters&sortBy=latest&apiKey=cc9596ab2c6b429f8d704ebbe8009fdd',
    };
    this.allStories = [];
    this.sourcesUpToDate = 0;
  }

  componentDidMount() {
    this.updateNewsBar();
    this.timerID = setInterval(
      () => this.updateNewsBar(),
      35000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateNewsFor(source) {
    const url = this.sources[source];
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
        this.sourcesUpToDate += 1;
        this.allStories = this.allStories.concat(JSON.parse(httpRequest.responseText).articles);
        if (this.sourcesUpToDate === Object.keys(this.sources).length) {
          this.setState({
            latest: this.allStories.sort((a, b) => (new Date(b.publishedAt)) - (new Date(a.publishedAt))),
          });
          this.sourcesUpToDate = 0;
        }
      }
    }
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  updateNewsBar() {
    this.allStories = [];
    Object.keys(this.sources).forEach(source => this.updateNewsFor(source));
  }


  render() {
    return (
      <div className='newsbar-wrapper'>
        <div className='newsbar-marquee'>
          <div className='newsbar-collection'>
            {this.state.latest.map(
              (story, id) => {
                return (
                  <Story title={story.title} url={story.url} date={story.publishedAt}></Story>
                )
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBar;
