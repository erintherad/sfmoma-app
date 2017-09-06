import React from 'react';
import _ from 'lodash';
import '../styles/index.css';
import { Pager } from 'react-bootstrap';

export default class Artwork extends React.Component {

  constructor() {
    super();
    this.state = {
      artworks: [],
      resultCount: 0,
      nextPage: "",
      previousPage: "",
      type: ""
    };
    this.debouncedSearch = _.debounce(this.searchByType, 500).bind(this);
  }

  componentWillMount() {
    this.searchByType();
  }

  render() {
    var artworks = _.map(this.state.artworks, (artwork) => {
      var imgUrl = artwork.images[0] ? artwork.images[0].public_image : 'placeholder.jpg'
      return <div className="col-md-3" key={ artwork.slug }>
                <div className="card container-style">
                  <div className="card-block">
                    <a href={ artwork.web_url } target="_blank">
                      <div className="card-img-content">
                        <img className="card-img-top" src={ imgUrl } alt="" />
                        <h4 className="card-title">{ artwork.title.display }</h4>
                      </div>
                      <div className="card-content">
                        <h4 className="card-text">{ artwork.artists[0].artist.name_display }</h4>
                        <p className="card-text"><span className="orange">Type:</span> { artwork.type }, { artwork.date.display }</p>
                        <p className="card-text keyword-overflow"><span className="orange">Keywords:</span> { artwork.object_keywords }</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>;
    })

    return (
      <div className="col-md-12 artwork-container">
        <div className="row">
          <div className="col-md-12 artwork-input-container">
            <input className="form-control text-center search-input"
                     placeholder="Search by keyword: clay, paint, video..."
                     ref="query"
                     onChange={ this.debouncedSearch }
                     type="text" />
                   <div className="text-center results-div">{ this.state.resultCount } results for <span className="orange">{ this.showResults(this.state.type) }</span></div>
          </div>
          <div className="col-md-12 artwork-results-container">
            <div className="card-deck row">{ artworks }</div>
          </div>
          <div className="col-md-12">
            <Pager>
              <Pager.Item href={ this.state.previousPage }
                          disabled={ this.state.previousPage === '' }
                          onClick={ this.pagerOnClick.bind(this) }><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Previous</Pager.Item>
              {' '}
              <Pager.Item href={ this.state.nextPage }
                          disabled={ this.state.nextPage === '' }
                          onClick={ this.pagerOnClick.bind(this) }>Next <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></Pager.Item>
            </Pager>
          </div>
        </div>
      </div>
    );
  }

  pagerOnClick(event) {
    event.preventDefault();
    this.search(event.target.href);
  }

  searchByType() {
    var query;
    if (this.refs.query) {
      query = this.refs.query.value;
    } else {
      query = "photograph";
    }
    this.setState({ type: query });
    this.search(`/api/collection/artworks/?page_size=8&has_images=1&object_keywords__iregex=\\y${query}(s|es)*\\y`);
  }

  search(url) {
    fetch(url)
      .then(res => res.json())
      .catch(e => e)
      .then(res => this.setState({
        artworks: res.results,
        resultCount: res.count,
        nextPage: (res.next || "").replace('https://www.sfmoma.org', ''),
        previousPage: (res.previous || "").replace('https://www.sfmoma.org', '') }));
  }

  showResults(type) {
    return type ? type : "all";
  }
}
