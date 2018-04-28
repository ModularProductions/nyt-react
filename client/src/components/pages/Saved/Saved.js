import React from "react";
import "./Saved.css";
import API from "../../../utils/API";
import Headline from "../../Headline";
import { Button } from "react-bootstrap";

class Saved extends React.Component {
  state = { articles: [] };

  noResultsStyle = {
    textAlign: "center"
  };

  loadArticles = () => {
    API.getHeadlines()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err))
    ;
  }
  
  handleRemoveButton = data => {
    API.deleteHeadline(data._id)
      .then(res => {
        console.log("removeButton res =", res);  
        this.loadArticles();
      })
      .catch(err => console.log(err))
    ;
  }
  
  // handleAddCommentButton = data => {
  //   console.log(data);
  // }

  // handleViewCommentsButton = data => {
  //   console.log(data);
  // }

  componentDidMount() {
    this.loadArticles();
  };

  render() {
    return (
      <div className="results">
        {this.state.articles.length ? (
          <ul>
            {this.state.articles.map((article) => (
              <Headline
                key={article._id} {...article}
              >
                {/* {article.comments.length ?  (<Button onClick={() => this.handleAddCommentButton(article)}>Add Comment</Button>) : (<Button onClick={() => this.handleViewCommentsButton(article)}>View Comments</Button>)} */}
                <Button onClick={() => this.handleRemoveButton(article)}>Remove</Button>
              </Headline>
            ))}
          </ul>
        ) : (
          <h2 style={this.noResultsStyle}>There are no saved articles.</h2>
        )}
      </div>
    )
  }
};

export default Saved;
