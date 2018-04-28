import React from "react";
import "./Search.css";
import API from "../../../utils/API";
import { Jumbotron, Button } from "react-bootstrap";
import { Input, FormButton } from "../../Form";
import Headline from "../../Headline";

const nytApiKey = process.env.REACT_APP_NYTAPIKEY;
const axios = require("axios");
let thisYear = (new Date()).getFullYear();

class Search extends React.Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: []
  };

  noResultsStyle = {
    textAlign: "center"
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    let currentState = this;
    if (this.state.topic && this.state.startYear) {
      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?api-key=' + nytApiKey;
      url += '&q=' + this.state.topic;
      url += '&begin_date=' + (this.state.startYear || "1900") + "0101";
      url += '&end_date=' + (this.state.endYear || thisYear) + "1231";
      axios.get(url)
      .then(function(response) {
        console.log(response.data.response.docs);
        currentState.setState({articles: response.data.response.docs});
      })
      .catch(function(err) {
        console.log(err);
      }); 
    }
  }

  handleSaveButton = data => {
    API.saveHeadline({
      id: data.id,
      headline: data.headline,
      snippet: data.snippet,
      datePublished: data.date,
      url: data.url
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    ;
  }
  
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Search</h2>
          <form>
            <Input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              placeholder="Enter topic here"
            />
            <Input
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name="startYear"
              placeholder="Enter starting year of search (defaults to 1900)"
            />
            <Input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              placeholder="Enter ending year of search (defaults to current year)"
            />
            <FormButton
              disabled={!(this.state.topic)}
              onClick={this.handleFormSubmit}
            >
            Search
            </FormButton>
          </form>
        </Jumbotron>
        {this.state.articles.length ? (
          <ul>
            {this.state.articles.map((article) => {
              let thisArticle = {
                key: article._id, 
                id: article._id,
                headline: article.headline.main,
                url: article.web_url,
                snippet: article.snippet,
                date: article.pub_date
              }
            return (
              <Headline {...thisArticle}>
                <Button onClick={() => this.handleSaveButton(thisArticle)}>Save</Button>
              </Headline>
            )})}
          </ul>
        ) : (
          <h2 style={this.noResultsStyle}>There are no search results.</h2>
        )}         
      </div>
    )
  }
}

export default Search;
