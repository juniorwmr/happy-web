import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Container, Aside, Header, CreateButton } from './styles';

import mapMarkerImg from '../../../images/map-marker.svg';
import { mapIcon } from '../../../utils/mapIcon';

import { api } from '../../../services/api';

interface IOrphanages {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: [
    {
      id: number;
      url: string;
    }
  ];
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

  useEffect(() => {
    const getOrphanages = async () => {
      const { data } = await api.get('/orphanages');
      setOrphanages(data);
    };
    getOrphanages();
  }, []);

  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <footer>
          <strong>Acre</strong>
          <span>Rio Branco</span>
        </footer>
      </Aside>

      <Map
        center={[-9.944267, -67.8211988]}
        zoom={13}
        keyboard={false}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages?.map((orphanage, index) => (
          <Marker
            key={index}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={mapIcon}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateButton to="/orphanage/create">
        <FiPlus size={32} color="#FFF" />
      </CreateButton>
    </Container>
  );
};

export default OrphanagesMap;
