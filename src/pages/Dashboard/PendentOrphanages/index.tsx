import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiArrowRight } from 'react-icons/fi';

import Dashboard from '../../../components/Dashboard';
import { mapIcon } from '../../../utils/mapIcon';

import { api } from '../../../services/api';

import {
  ButtonIcon,
  MapContainer,
  MapItem,
  MapFooter,
  Icons,
  ImgContainer,
} from '../styles';
import LogoBW from '../../../images/logo-bw.svg';

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

const PendentOrphanages: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

  useEffect(() => {
    async function getAllOrphanages() {
      const response = await api.get('/orphanages/pendents');
      setOrphanages(response.data);
    }
    getAllOrphanages();
  }, []);

  return (
    <Dashboard
      title="Orfanatos pendentes"
      orphanagesLength={orphanages.length}
      isOrphanagesPage={false}
      isPendentPage={true}
    >
      {orphanages.length <= 0 ? (
        <ImgContainer>
          <img src={LogoBW} alt="Logo" />
          <p>Nenhum no momento</p>
        </ImgContainer>
      ) : (
        <MapContainer>
          {orphanages.map((orphanage) => (
            <MapItem key={orphanage.id}>
              <Map
                className="map"
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: '100%' }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>
              <MapFooter>
                <h2>{orphanage.name}</h2>
                <Icons>
                  <ButtonIcon
                    as={Link}
                    to={{
                      pathname: '/dashboard/aproove',
                      state: { orphanage },
                    }}
                  >
                    <FiArrowRight size={20} color="#15C3D6" />
                  </ButtonIcon>
                </Icons>
              </MapFooter>
            </MapItem>
          ))}
        </MapContainer>
      )}
    </Dashboard>
  );
};

export default PendentOrphanages;
