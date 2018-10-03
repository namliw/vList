import React, { Component } from 'react';
import SearchForm from '../playlistBuilder/components/search_form'
import SimpleForm from '../playlistBuilder/containers/simple'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchForm />
          <SimpleForm/>
      </div>
    );
  }
}
