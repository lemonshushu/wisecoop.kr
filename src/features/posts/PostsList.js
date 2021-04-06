import React, { useEffect } from 'react';
import { Card, Col, Row} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, selectAllPosts } from './postsSlice';
import { TimeAgo } from './TimeAgo';


let PostExcerpt = ({post}) => {
  return (
    <Col>
      <article className="post-excerpt" key={post.id}>
        <Card style={{width: 'auto'}} className="post-excerpt m-3" key={post.id}>
          <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Card.Img variant="top" src={post.images[0].url} />
            <Card.Body className="p-3">
              <Card.Title style={{ fontWeight: 700 }}>{post.title}</Card.Title>
            </Card.Body>
          </Link>
          <Card.Footer style={{ fontWeight: 300 }} className="p-1"><TimeAgo timestamp={post.published} /></Card.Footer>
        </Card>
      </article>
    </Col>
  );
}

PostExcerpt = React.memo(PostExcerpt);

export const PostsList = ({match}) => {
  const {label} = match.params;
  console.log(label);
  const dispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);

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
      </div>
  } else if (postStatus === 'succeeded') {
    console.log(allPosts);
    content = allPosts.filter(post => post.labels[0] === label);
    content = content.map(post => <PostExcerpt key={post.id} post={post} />);
    content = <Row xs={1} md={2} lg={3}>{content}</Row>;
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <div className="d-xs-block d-md-none" style={{ height: 50 }} />
      <h2 className="text-primary mt-3 mb-5">{label}</h2>
      {content}
    </section>
  );
}

export { PostExcerpt };