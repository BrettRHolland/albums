import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}
	componentWillMount() {
		fetch("https://rallycoding.herokuapp.com/api/music_albums")
			.then(response => response.json())
			.then(body => {
				this.setState({
					albums: body
				});
			});
	}
	renderAlbums() {
		return this.state.albums.map(album => (
			<AlbumDetail key={album.title} album={album} />
		));
	}
	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;
