import React from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import VideoListContainer from "../containers/videoListContainer";

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentVideo: null};
        this.setCurrentVideo = this.setCurrentVideo.bind(this);
    }

    setCurrentVideo(currentVideo) {
        this.setState({currentVideo});
    }

    render() {
        const {currentVideo} = this.state;

        return (<div className="row">
                <div className="row">
                    {(currentVideo) ?
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${currentVideo.id.videoId}`} playing/> : ''}
                </div>
                <div className="row">
                    <span>
                        Playlist
                    </span>
                    <VideoListContainer videoList={this.props.playlist} onVideoClick={this.setCurrentVideo}/>
                </div>
            </div>
        );
    }
};

function mapStateToProps({playlist}) {
    return {playlist};
}

export default connect(mapStateToProps)(Playlist);

