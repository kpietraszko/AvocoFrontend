import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../componentsStateless/spinner/Spinner';
import Modal from '../../componentsStateless/modal/Modal';
import { actionCreators } from '../../actions/homeActions';
import { getFeedApi } from '../../api/home';
import PostInfo from './postInfo/PostInfo';
import replaceImagesWithUrls from '../../services/replaceImagesWithUrls';
import styles from './Home.module.css';

class Home extends Component {
	state = { loading: true }
	componentDidMount = () => {
		getFeedApi()
			.then(response => {
				let posts = response.data;
				replaceImagesWithUrls(posts);
				this.props.setFeedPosts(posts);
			})
			.catch(error => console.log(error))
			.finally(() => this.setState({ loading: false }));
	}
	render() {
		return (
			this.state.loading ?
				<div id={styles.container}>
					<Spinner size={40} />
				</div> :
				<ul className={styles.postsNews}>
					{this.props.home.posts && this.props.home.posts.map(post =>
						<PostInfo key={post.id} post={post} />
					)}
				</ul>
		);
	}
}
const mapStateToProps = (state) => ({
	home: state.home
})
const mapDispatchToProps = (dispatch) => ({
	setFeedPosts: (posts) => dispatch(actionCreators.setFeedPosts(posts))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);