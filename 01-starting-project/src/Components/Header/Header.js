import { Fragment } from 'react';
import React from 'react';
import './Header.css';
import Navigation from '../Navigation/navigation';
import Logo from '../logo/logo';

const Header=(props)=>{
    

    return(
            <Fragment>
                <header className={`Header ${props.scrollDet>99?"heightDec":""}`}>    
                <Logo scrollDet={props.scrollDet}></Logo>
                <Navigation scrollDet={props.scrollDet}></Navigation>
                </header>
            </Fragment>
    );
};

export default Header;