import {Button, Jumbotron, ListGroup} from "react-bootstrap";
import React from "react";

import classes from './Jumbotron.module.css'

const jumbotronHome = (props) => {
  return(
    <div className={classes.Jumbotron}>
      <center>
        <Jumbotron>
          <h1 className={{color: 'black'}}>Linhas de Pesquisa</h1>
          <p>
            Trabalhamos com diversas áreas de pesquisas focadas sempre na pesquisa aplicada. Nossa pesquisa envolve
          </p>
          <div className={classes.ListGroup}>
            <ListGroup>
              <ListGroup.Item variant={'primary'}>Eficiência Energética</ListGroup.Item>
              <ListGroup.Item variant={'primary'}>Inteligência Artificial</ListGroup.Item>
              <ListGroup.Item variant={'primary'}>Computação Embarcada</ListGroup.Item>
              <ListGroup.Item variant={'primary'}>Sensoriamento Remoto</ListGroup.Item>
            </ListGroup>
          </div>
          <p>
            <Button variant="info">Saiba Mais</Button>
          </p>
        </Jumbotron>
      </center>
    </div>
  )
};

export default jumbotronHome;
