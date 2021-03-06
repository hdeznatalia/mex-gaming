import Board from '../../components/Board';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stats from '../Stats';

class BoardGenerator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col><Stats step={2} {...this.props} /></Col>
        </Row>
      </Container>
    );
  }
}

export default BoardGenerator;
