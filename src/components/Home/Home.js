import React, {Component} from 'react'
import Carousel from "./Carousel/CarouselHome";
import JumbotronHome from "./Jumbotron/JumbotronHome";
import {Jumbotron, Button} from "react-bootstrap"

import Aux from "../../hoc/Auxiliary";
import Projetos from "./Projetos/Projetos";
import classes from './Home.module.css'

class Home extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Home}>
          <div>
            <Carousel/>
          </div>
          <div>
            <JumbotronHome/>
          </div>
          <div>
            <Projetos/>
          </div>
          <div className={classes.Jumbotron}>
            <Jumbotron>
              <h1>Possui interesse?</h1>
              <p>
                Caso você seja um aluno e possua interesse em participar de algum de nossos projetos, ou queira
                começar um novo projeto no nosso laboratório, clique no botão para fazer uma aplicação.
              </p>
              <p>
                <Button variant="info">Aplicar</Button>
              </p>
            </Jumbotron>
          </div>
          <div className={classes.Contato}>
            <h1>Fale com a gente!</h1>
            <p>Rua Pedro João Pereira, nº 150, Planta Piloto, Mato Alto</p>
            <p>Araranguá - SC</p>
            <p>(48) 3721 - 6255</p>
          </div>
        </div>
      </Aux>
    )
  }
}

export default Home;
