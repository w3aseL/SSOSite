import React from "react"
import { Container, Row, Col, Jumbotron, Button } from "reactstrap"

import { Layout } from "../../components"

const HomeComponent = props => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row className="d-flex">
          <Col md="10" className="ml-auto mr-auto">
            <Jumbotron className="bg-light-wood">
              <h4><em>Welcome to...</em></h4>
              <h1 className="display-3">The Blog</h1>
              <p className="lead">
                <em>The Blog</em> is a site built for my blog. In the future, the home page will display recent blog posts.
                This site will also serve as the writer's hub.
              </p>
              <hr className="my-2" />
              <p>This site was created by Noah Templet. Learn more below!</p>
              <p className="lead">
                <Button href="https://noahtemplet.dev" target="_blank">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default HomeComponent

export { HomeComponent as Home }