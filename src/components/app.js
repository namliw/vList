import React, {Component} from 'react';
import SearchForm from '../playlistBuilder/components/search_form';
import VideoList from '../playlistBuilder/components/video_list';
import Playlist from '../playlistBuilder/components/playlist';

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="row">
                            <SearchForm/>
                        </div>
                        <div className="row">
                            <VideoList/>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}
