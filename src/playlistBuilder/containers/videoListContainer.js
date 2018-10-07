import React from 'react';
import _ from "lodash";
import VideoListItem from './video_list_item';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const VideoListContainer = ({videoList, onVideoClick}) =>{

    const videoItems = _.map(videoList, (video) => {
        return (<VideoListItem
            onVideoClick={onVideoClick}
            key={video.etag} video={video}/>);
    });

    const transitionSettings = {
        transitionName: 'fade',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
    };
    return (
            <ul className="list-group">
                <ReactCSSTransitionGroup { ...transitionSettings}>
                    {videoItems}
                </ReactCSSTransitionGroup>
            </ul>
    );
};

export default VideoListContainer;