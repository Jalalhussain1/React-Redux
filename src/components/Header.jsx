import { React, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import Cart from '../assets/cart.gif'
import { useSelector } from 'react-redux';

const Header = () => {
    
    const getdata =useSelector((state) => state.cartreduser.carts);
    console.log(getdata);


    const [anchorEl, setAnchorEl] = useState  (null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: '60px' }}>
                <Container>
                    <NavLink to='/' className={'text-decoration-none text-light mx-3'}>
                        Add to Cart
                    </NavLink>
                    <Nav className="me-auto">
                        <NavLink to='/' className={'text-decoration-none text-light'}>
                            Home
                        </NavLink>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {/* Correct Font Awesome Icon */}
                        <i className="fa-solid fa-shopping-cart text-light" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className='cart_details d-flex justify-content-center align-items-center ' style={{width:'18rem',padding:6,position:'relative'}}>
                      <i className='fas fa-close smallClose'
                      onClick={handleClose}
                      style={{position:'absolute',top:0,right:5,fontSize:20, cursor:'pointer' }}></i>
                        <p style={{fontSize:22}}>your cart is empty</p>
                       <img src={Cart} alt="" className='emptyCar_img'  style={{width:'5rem',padding:10}}/>
                    </div>
                </Menu>
            </Navbar>
        </>
    );
};

export default Header;
