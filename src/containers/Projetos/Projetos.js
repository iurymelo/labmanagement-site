import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";

import Aux from "../../hoc/Auxiliary";
import classes from './Projetos.module.css'

class Projetos extends Component {
  render() {
    const projetos = [
      {
        id: 1,
        name: 'Criação Reator Nuclear para Celular',
        type: 'TCC',
        responsible: 'Iury Melo',
        participants: ['Roderval Marcelino', 'Rodrigo Piloto'],
        abstract: 'Projeto para desenvolvimento de um reator nuclear para utilizar em celular',
      },
      {
        id: 2,
        name: 'Viajem a Lua com Elon Musk',
        type: 'Pesquisa',
        responsible: 'Roderval Marcelino',
        participants: ['Roderval Marcelino', 'Elon Musk'],
        abstract: 'A ida a lua com um tesla tem como objetivo pegar pedra para atirar na cruz.',
      },
      {
        id: 3,
        name: 'Açoitar Bolsistas',
        type: 'Extensão',
        responsible: 'Roderval marcelino',
        participants: [''],
        abstract: 'Aumento de produtividade no laboratório',
      },
      {
        id: 4,
        name: 'Criar um Computador Quantico',
        type: 'Tese',
        responsible: 'Yuri Crotti',
        participants: ['Roderval Marcelino', 'Yuri Crotti'],
        abstract: 'Criar um computador quantico funcional e comercializável.',
      },
    ];

    const cardProjetos = (
      projetos.map(projeto => (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{projeto.name}</Card.Title>
              <Card.Subtitle>{projeto.responsible}, {projeto.type}</Card.Subtitle>
              <Card.Text>
                {projeto.abstract}
              </Card.Text>
              <Button variant="primary">Ver Projeto</Button>
            </Card.Body>
          </Card>
        </div>
      ))
    )
    return(
      <Aux>
        <div className={classes.MainContainer}>
          <div className={classes.CenterContainer}>
            {cardProjetos}
          </div>
        </div>
      </Aux>
    )
  }
}

export default Projetos;
