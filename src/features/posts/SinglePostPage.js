import React, { useEffect } from 'react';
import { Button, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostById } from './postsSlice';
import { TimeAgo } from './TimeAgo';
import style from './SinglePostPage.module.css';
import { Link } from 'react-router-dom';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const postStatus = useSelector(state => state.posts.status);
  const post = useSelector(state => selectPostById(state, postId));
  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  

  if (!post) {
    return (
      <section>
      </section>
      
    );
  }

  return (
    <section>
      <div className="d-xs-block d-md-none" style={{ height: 50 }} />
      <article className="post">
        <Card>
          <Card.Header className="p-4">
            <Card.Title><strong>{post.title}</strong></Card.Title>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <TimeAgo timestamp={post.published} />
            </div>
          </Card.Header>
          <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className={style.postContent}></div>
          </Card.Body>
        </Card>
      </article>
      <Link to={`/categories/${post.labels[0]}`}><Button variant="light" className="m-3" size="lg">목록</Button></Link>
    </section>
  );
};