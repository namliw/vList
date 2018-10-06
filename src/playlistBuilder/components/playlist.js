import React from 'react';
import VideoListItem from '../containers/video_list_item';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import _ from 'lodash';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentVideo: null};
        this.setCurrentVideo = this.setCurrentVideo.bind(this);
    }

    setCurrentVideo(currentVideo) {
        console.log('setting state', currentVideo);
        this.setState({currentVideo});
    }

    render() {

        const videoItems = _.map(this.props.playlist, (video) => {
            return (<VideoListItem
                onVideoClick={this.setCurrentVideo}
                key={video.etag} video={video}/>);
        });

        if (!videoItems || videoItems.length == 0) {
            return <div>Playlist</div>;
        }
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
                    <ul className="list-group">
                        {videoItems}
                    </ul>
                </div>
            </div>
        );
    }
};

function mapStateToProps({playlist}) {
    return {playlist};
}

export default connect(mapStateToProps)(Playlist);

