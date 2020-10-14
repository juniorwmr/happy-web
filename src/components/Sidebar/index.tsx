import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';

import './styles.css';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <div className="app-sidebar">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
