import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

import { Col, Container, Row } from 'reactstrap';

import Header from './Header';
import Sidebar from './Sidebar';

import Dashboard from './Dashboard';


export default () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} lg={12} className="header">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={2} lg={2} className="sidebar">
          <Sidebar />
        </Col>

        <Col md={{ size: 10, offset: 2 }} lg={{ size: 10, offset: 2 }} className="content">
          <Dashboard />
        </Col>
      </Row>
    </Container>
  )
}
