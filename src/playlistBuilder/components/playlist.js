import React from 'react';
import VideoListItem from '../containers/video_list_item';
import {connect} from 'react-redux';

class Playlist extends React.Component {
    render() {
        const videos = this.props.playlist;
        if (!videos || videos.length == 0) {
            return <div>Playlist</div>;
        }
        console.log(videos, 'aaa');

        const videoItems = videos.map((video) => {
            return (<VideoListItem
                key={video.etag} video={video}/>);
        });

        return (<div>
                <span>
                    Playlist
                </span>
                <ul className="list-group">
                    {videoItems}
                </ul>
            </div>
        );
    }
};

function mapStateToProps({playlist}) {
    return {playlist};
}
export default connect(mapStateToProps)(Playlist);

