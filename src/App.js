import React, { Component } from "react";
import "./styles.css";
import SearchBar from "./Components/SearchBar/searchBar";
import Api from "./youtubeApi";
import VideoList from "./Components/videoList/videoList";
import VideoPlayer from "./Components/VideoPlayer/videoPlayer";
import Loader from "./loader";

class App extends Component {
  state = {
    selectedVideo: null,
    videos: [],
    loading: false
  };

  onFormSubmit = async (value) => {
    this.setState({ loading: true });

    let response = await Api.get("/search", {
      params: {
        q: value
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: null,
      loading: false
    });
    // console.log(response);
  };

  onselectvideo = (vid) => {
    this.setState({ selectedVideo: vid });
  };

  render() {
    // console.log("Render--", this.state.selectedVideo);
    let classes = this.state.selectedVideo ? "ui grid container" : "ui";
    let rightClasses = this.state.selectedVideo ? "ui seven wide column" : "ui";
    let leftClasses = this.state.selectedVideo ? "ui nine wide column" : "ui";
    return (
      <div className="App ui container">
        <h1 className="title-header">
          <i class="video icon"></i>TeddTube
        </h1>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className={classes}>
            {this.state.selectedVideo ? (
              <div className={leftClasses}>
                <VideoPlayer video={this.state.selectedVideo} />
              </div>
            ) : (
              ""
            )}
            <div className={rightClasses}>
              {this.state.videos ? (
                <VideoList
                  onSelect={this.onselectvideo}
                  videos={this.state.videos}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
