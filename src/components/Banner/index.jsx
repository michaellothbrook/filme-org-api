import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import "./styles.css"

const Banner = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <img src="./logo192.png" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Banner
