import React from 'react';
import {Link} from "react-router-dom";
import './Lessons.css';
import { Container, Col, Row } from 'react-bootstrap';

class Lessons extends React.Component {
    render() {
        return (
            <div className="lesson">
                <h1 className="title-page">ANNEX
                    <Link to="/">
                        <button className="sign-out-button">Sign Out</button>
                    </Link>
                </h1>
                <nav aria-label="breadcrumb">
                    <nav className="breadcrumb">
                        <Link to="/">Home / </Link>
                        <Link to="/dashboard">Dashboard / </Link>
                        <Link to="/lessons" className="breadcrumb-item active" aria-current="page">Lessons</Link>
                    </nav>
                </nav>
                <h2>Lesson</h2>
                <Container className="lessons-container">
                    <Row>
                        <Col md={12}>
                            <h2>Lección 1: Presentación</h2>
                            <p>¡Hola! ¿Cómo estás? Mi nombre es <strong>Fernanda</strong> y voy a ser tu maestra de español. Estoy aquí para ayudarte a aprender el español paso a paso. Hoy comenzaremos con las presentaciones básicas.</p>
                            <p>Para comenzar, primero debemos saber nuestros nombres. A continuación, te presento algunas palabras y frases útiles para hacer presentaciones en español:</p>
                            <ul>
                                <li><strong>Hola</strong> (Buenas tardes o noches)</li>
                                <li><strong>Me llamo</strong> [tu nombre]</li>
                                <li><strong>Nací</strong> [en tu país]</li>
                                <li><strong>Soy</strong> [tu profesión o estudio]</li>
                                <li><strong>Vivo en</strong> [tu ciudad]</li>
                                <li><strong>Trabajo en</strong> [tu empresa]</li>
                                <li><strong>Amo hablar</strong> [el idioma que dominas]</li>
                            </ul>
                        </Col>

                        <Col md={12}>
                            <h2 className="lessons-title">Lección 2: Preguntas básicas</h2>
                            <p>Además de hacer presentaciones, también es importante saber cómo preguntar cosas. Aquí tienes algunas preguntas básicas en español:</p>
                            <ul>
                                <li><strong>¿Cómo te llamas?</strong></li>
                                <li><strong>¿Dónde naciste?</strong></li>
                                <li><strong>¿Qué profesión tienes?</strong></li>
                                <li><strong>¿Dónde vives?</strong></li>
                                <li><strong>¿En qué empresa trabajas?</strong></li>
                                <li><strong>¿Qué idioma hablas?</strong></li>
                            </ul>
                        </Col>

                        <Col md={12}>
                            <h2 className="lessons-title">Lección 3: Uso del presente continuo</h2>
                            <p>El presente continuo se utiliza para hablar de acciones que están en curso en el momento en que se habla. </p>
                            <p>En español, se forma utilizando el verbo "estar" seguido del gerundio. Aquí tienes algunos ejemplos:</p>
                            <ul>
                                <li><strong>Estoy trabajando en la oficina.</strong></li>
                                <li><strong>Estoy viendo la televisión.</strong></li>
                                <li><strong>Estoy cocinando para mis amigos.</strong></li>
                            </ul>
                        </Col>

                        <Col md={12}>
                            <h2 className="lessons-title">Lección 4: Números del 1 al 10</h2>
                            <p>Aquí tienes una lista de los números del 1 al 10 en español: </p>
                            <p>En español, se forma utilizando el verbo "estar" seguido del gerundio. Aquí tienes algunos ejemplos:</p>
                            <ul>
                                <li><strong>1. Uno</strong></li>
                                <li><strong>2. Dos</strong></li>
                                <li><strong>3. Tres</strong></li>
                                <li><strong>4. Cuatro</strong></li>
                                <li><strong>5. Cinco</strong></li>
                                <li><strong>6. Seis</strong></li>
                                <li><strong>7. Siete</strong></li>
                                <li><strong>8. Ocho</strong></li>
                                <li><strong>9. Nueve</strong></li>
                                <li><strong>10. Diez</strong></li>
                            </ul>
                            <p>Para formar frases con estos números, puedes utilizarlos como sustantivos y agregarles artículos definidos (el, la, los, las) si son necesarios. Por ejemplo:</p>
                            <ul>
                                <li><strong>Tengo tres perros.</strong></li>
                                <li><strong>La biblioteca tiene doscientos libros.</strong></li>
                                <li><strong>Hay cinco coches en el estacionamiento.</strong></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Lessons;