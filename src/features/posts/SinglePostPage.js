import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import { TimeAgo } from './TimeAgo';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector(state => selectPostById(state, postId));


  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <Card>
          <Card.Header className="p-4">
            <Card.Title><strong>{post.title}</strong></Card.Title>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <TimeAgo timestamp={post.published} />
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
      <Button variant="light" className="m-3" size="lg" href={post.labels[0]=== "SW교육" ? 'swedu' : 'reference'} >목록</Button>
    </section>
  );
};