import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>post list</div>;
  };
};

mapStateToProps = state => {
  return  { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);