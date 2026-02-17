import React from 'react'

//importação do css
import './css/Navbar.css';

//importação da imagem
import Logo from '../assets/NavLogo.svg';

export default function Navbar() {
    return (
        <div>
            <nav className='nav-top'>
                <div className='container-principal'>
                    <div className='d-flex align-items-center   col-sm-6'>
                        <img className='img-logo' src={Logo} alt="Logo principal" />
                    </div>
                    <div className='d-flex align-items-center justify-content-end   col-sm-6'>
                        <a href="#" className='linkNav'>Seja um Anfitrião</a>
                        <a href="#" className='iconNav'><i className="mdi mdi-web"></i></a>
                        <div className="dropdown ms-2">
                            <a className="button-login dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fs-6 mdi mdi-menu ps-3 me-2"></i>
                                <i className='fs-5 position-relative mdi mdi-account-circle pe-2'>
                                    <span className="position-absolute top-0 start-50  badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                                </i>
                            </a>

                            <ul style={{borderRadius: '15px'}} className="dropdown-menu mt-2 border-0 shadow py-3" aria-labelledby="dropdownMenuButton3">
                                <li className="d-flex align-items-center"><i className="mdi mdi-help-circle-outline ps-3 "></i> <a className="dropdown-item p-2 px-3" href="#">Central de ajuda</a></li>
                                <li><hr className='dropdown-divider'/></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Indique um anfitrião</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Encontre um coanfitrião</a></li>
                                <li><a className="dropdown-item p-2 px-3" href="#">Cartões de presente</a></li>
                                <li><hr className='dropdown-divider'/></li>
                                <li><a className="fw-bold dropdown-item p-2 px-3" href="#">Entrar ou cadastrar-se</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
