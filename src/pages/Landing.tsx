import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div id="header">
          <img src={logoImg} alt="Happy Logo" />
          <div className="location">
            <strong>Acre</strong>
            <span>Rio Branco</span>
          </div>
          <Link to="/signin" className="btn-signin">
            Acesso restrito
          </Link>
        </div>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
