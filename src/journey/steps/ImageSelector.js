import Board from '../../components/Board';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stats from '../Stats';

class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col><Stats step={1} {...this.props} /></Col>
        </Row>
      </Container>
    );
  }
}

export default ImageSelector;
