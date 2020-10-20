import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import Dashboard from '../../../components/Dashboard';
import { mapIcon } from '../../../utils/mapIcon';

import { api } from '../../../services/api';

import { ButtonIcon, MapContainer, MapItem, MapFooter, Icons } from '../styles';

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

const Orphanages: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

  async function handleClickToDelete(id: number) {
    await api.delete(`/orphanages/${id}`);
    const new_orphanages = orphanages.filter((orphanage: IOrphanages) => {
      return orphanage.id !== id ? orphanage : null;
    });
    setOrphanages(new_orphanages);
  }

  useEffect(() => {
    async function getAllOrphanages() {
      const response = await api.get('/orphanages');
      setOrphanages(response.data);
    }
    getAllOrphanages();
  }, []);

  return (
    <Dashboard
      title="Orfanatos cadastrados"
      orphanagesLength={orphanages?.length}
      isOrphanagesPage={true}
      isPendentPage={false}
    >
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
                  to={{ pathname: '/dashboard/edit', state: { orphanage } }}
                >
                  <FiEdit3 size={20} color="#15C3D6" />
                </ButtonIcon>
                <ButtonIcon onClick={() => handleClickToDelete(orphanage.id)}>
                  <FiTrash size={20} color="#ff9e9e" />
                </ButtonIcon>
              </Icons>
            </MapFooter>
          </MapItem>
        ))}
      </MapContainer>
    </Dashboard>
  );
};

export default Orphanages;
