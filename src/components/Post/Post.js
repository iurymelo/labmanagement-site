import React from 'react';
import { Card, Button } from 'react-bootstrap'

import brasao from '../../assets/images/brasao_default.png'
import classes from './Post.module.css'

const post = props => {
  return (
    <div className={classes.Post} >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={brasao} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.resumo}
          </Card.Text>
          <Button variant="primary">Ver</Button>
        </Card.Body>
      </Card>
    </div>
  )
};

export default post;
