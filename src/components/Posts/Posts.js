import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import Post from "../Post/Post";
import classes from './Posts.module.css';

class Posts extends Component {
  POSTS = {
    post1: {
      title: 'Titulo 1',
      resumo: 'Resumo de um post para ser alterado mais tarde buscando dados de um servidor',
    },
    post2: {
      title: 'Titulo 2',
      resumo: 'Resumo de um post para ser alterado mais tarde buscando dados de um servidor',
    },
    post3: {
      title: 'Titulo 3',
      resumo: 'Resumo de um post para ser alterado mais tarde buscando dados de um servidor',
    },
    post4: {
      title: 'Titulo 4',
      resumo: 'Resumo de um post para ser alterado mais tarde buscando dados de um servidor',
    }
  };

  render() {
    const postElementsArray = [];
    for(let key in this.POSTS){
      postElementsArray.push({
        id: key,
        data: this.POSTS[key],
      })
    }
    return (
      <div className={classes.Posts}>
        <Container fluid={true}>
          <Row>
            {postElementsArray.map(postElement => (
              <Post
                title={postElement.data.title}
                resumo={postElement.data.resumo}
              />
            ))}
          </Row>
        </Container>
      </div>
    )
  }
};

export default Posts;
