import React, { useState } from "react"
import { connect } from "react-redux"
import { Container, Row, Col, Card, Table } from "reactstrap"

import { convertSecToHMS } from "../../helpers"

import { request } from "../../api"

import { Layout } from "../../components"

const DashboardPage = props => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null
  })

  return (
    <Layout>
      <Container>
        
      </Container>
    </Layout>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
})

const Dashboard = connect(mapStateToProps)(DashboardPage)

export { Dashboard }

export default Dashboard