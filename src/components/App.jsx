import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';

import Header from './Header';
import Sidebar from './Sidebar';

import Dashboard from './Dashboard';


export default () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>

        <Col lg={10}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  )
}
