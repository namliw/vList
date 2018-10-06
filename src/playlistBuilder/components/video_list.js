import React from 'react';
import VideoListItem from '../containers/video_list_item';
import {connect} from 'react-redux';
import {searchVideos, addToPlaylist, removeFromResults} from "../actions/searchAction";
import {setTerm} from "../actions/setTermAction";
import _ from 'lodash';

class VideoList extends React.Component {

    constructor(props){
        super(props);
        this.videoClick = this.videoClick.bind(this);
    }

    nextPage(term, nextPageKey) {
        const {nextPageToken, searchTerm} = this.props;
        this.props.setTerm(searchTerm);
        this.props.searchVideos(searchTerm, nextPageToken);
    }

    videoClick(item){
        this.props.removeFromResults(item);
        this.props.addToPlaylist(item);
    }

    render() {
        const videoItems = _.map(this.props.videoResults, (video) => {
            return (<VideoListItem
                onVideoClick={this.videoClick}
                key={video.etag} video={video}/>);
        });
        if (!videoItems || videoItems.length == 0) {
            return <div>loading ....</div>;
        }
        return (<div>
                <ul className="list-group">
                    {videoItems}
                </ul>
                <button className="btn btn-primary" onClick={this.nextPage.bind(this)}>Load next 5</button>
            </div>
        );
    }
};

function mapStateToProps({videoResults, searchTerm, nextPageToken}) {

    return {
        videoResults: videoResults,
        searchTerm: searchTerm, nextPageToken: nextPageToken
    };
}

export default connect(mapStateToProps, {searchVideos, setTerm, addToPlaylist, removeFromResults})(VideoList);

