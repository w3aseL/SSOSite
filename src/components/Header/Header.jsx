import React from "react"
import { connect } from "react-redux"
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { Avatar } from "@material-ui/core"

import logo from "../../assets/images/blog-icon-256.png"

class HeaderComp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const { loggedIn, user } = this.props

    return (
      <Navbar color="light-wood" dark expand="light-wood">
        <Container>
          <NavbarBrand href="/">
            <div class="d-inline-flex">
              <img src={logo} alt="logo" height="45px" width="auto" />
              <h2 className="text-dark ml-2 my-auto">The Blog</h2>
            </div>
          </NavbarBrand>
            <Nav className="ml-auto mr-0" navbar>
              {loggedIn ?
                <>
                  {!user ?
                    <p>Loading...</p>
                    :
                    <Dropdown isOpen={this.state.isOpen} toggle={e => this.setState({ isOpen: !this.state.isOpen })}>
                      <DropdownToggle tag="div" carat>
                        <Avatar 
                          src={user.avatar_url ? `${user.avatar_url}` : ""}
                        >
                          {`${user.username.charAt(0)}`}
                        </Avatar>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>{user.username}</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem><NavLink className="text-dark" href="/dashboard">Dashboard</NavLink></DropdownItem>
                        <DropdownItem><NavLink className="text-dark" href="/settings">Settings</NavLink></DropdownItem>
                        <DropdownItem><NavLink className="text-dark" href="/logout">Logout</NavLink></DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  }
                </>
              :
              <NavItem>
                <NavLink className="text-dark" href="/login">Login</NavLink>
              </NavItem>
            }
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  const { loggedIn, user } = state.auth

  return { loggedIn, user }
}

const Header = connect(mapStateToProps)(HeaderComp)

export { Header }

export default Header