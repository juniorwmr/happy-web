import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';

import './styles.css';
import ButtonIcon from '../ButtonIcon';

const Sidebar: React.FC = ({ children }) => {
  const { goBack } = useHistory();

  return (
    <div className="app-sidebar">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />
        {children}
        <footer>
          <ButtonIcon backgroundColor="#12afcb" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </ButtonIcon>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
