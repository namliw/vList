import React from 'react';
import {connect} from 'react-redux';
import {searchVideos, addToPlaylist, removeFromResults} from "../actions/searchAction";
import {setTerm} from "../actions/setTermAction";
import VideoListContainer from "../containers/videoListContainer";

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
        const loadMore = _.isEmpty(this.props.videoResults)?'':(
            <button className="btn btn-primary" onClick={this.nextPage.bind(this)}>Load next 5</button>);

        return (<div>
                <VideoListContainer videoList={this.props.videoResults} onVideoClick={this.videoClick} />
                {loadMore}
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

