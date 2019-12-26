import React from "react";
import {Button, Card} from "react-bootstrap";
import classes from './Projetos.module.css'

const projetos = (props) => (
  <div className={classes.Container}>
    <h1>Projetos</h1>
    <div className={classes.Projetos}>
      <div className={classes.Card}>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="holder.js/100px180"/>
          <Card.Body>
            <Card.Title>Projeto 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Ver Projeto</Button>
          </Card.Body>
        </Card>
      </div>
      <div className={classes.Card}>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="holder.js/100px180"/>
          <Card.Body>
            <Card.Title>Projeto 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Ver Projeto</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default projetos;
