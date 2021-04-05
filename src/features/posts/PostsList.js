import React, { useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, selectPostIds, selectPostById } from './postsSlice';
import { TimeAgo } from './TimeAgo';

let PostExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId));
  return (
    <article className="post-excerpt" key={post.id}>
      <Card style={{ width: '18rem' }} className="post-excerpt m-3" key={post.id}>
        <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Card.Img variant="top" src={post.images[0].url} />
          <Card.Body className="p-3">
            <Card.Title style={{fontWeight: 700}}>{post.title}</Card.Title>
          </Card.Body>
        </Link>
        <Card.Footer style={{fontWeight: 300}} className="p-1"><TimeAgo timestamp={post.published} /></Card.Footer>
      </Card>
    </article>
  );
}

PostExcerpt = React.memo(PostExcerpt);

export const PostsList = () => {
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);

  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = 
    <div className="loader">
      <div>로딩 중...</div>
      <Spinner animation="border" role="status">
        <span className="sr-only">로딩 중..</span>
      </Spinner>
    </div>
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map(postId => <PostExcerpt key={postId} postId={postId} />);
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2 className="text-primary mt-3 mb-5">SW교육</h2>
      {content}
    </section>
  );
}

export { PostExcerpt };