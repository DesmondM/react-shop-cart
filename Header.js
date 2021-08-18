import { Dropdown } from 'bootstrap';
import React from 'react';
import {Badge, Container, DropdownButton, FormControl, Nav, Navbar} from "react-bootstrap";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {RiShoppingBasket2Line} from 'react-icons/ri';
import {  Link } from "react-router-dom"
const Header = () => {
    return( <Navbar bg="dark" variant="dark" style ={{height: 80}}>
        <Container>
            <Navbar.Brand>
                
                <Link to="/">Shopping Cart</Link>
                
            </Navbar.Brand>
            <Navbar.Text className = "search">
                <FormControl
                    style ={{width:500}}
                    placeholder= "Search a product"
                    className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <DropdownToggle>
                        <RiShoppingBasket2Line  color="white" fontSize="25px"/>
                        <Badge>{10}</Badge>
                  </DropdownToggle>
                
                <DropdownMenu alignRight style={{minWidth:370}}>
                            <span style = {{padding:10}}>Cart is empty</span>
            </DropdownMenu>
            </Nav>
        </Container>
    </Navbar>
     
    )
};

export default Header
