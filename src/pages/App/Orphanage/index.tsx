import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import {
  Container,
  Main,
  OrphanageDetails,
  OrphanageDetailsContent,
  MapContainer,
  Images,
  OpenDetails,
  ContactButton,
} from './styles';
import Sidebar from '../../../components/Sidebar';
import { mapIcon } from '../../../utils/mapIcon';
import OrphanagesRepository, {
  IOrphanage,
} from '../../../repositories/orphanages';

interface IParams {
  id: string;
}

export default function Orphanage() {
  const { id } = useParams<IParams>();
  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const getOrphanages = async () => {
      const response = await OrphanagesRepository.show(id);
      setOrphanage(response?.data);
    };
    getOrphanages();
  }, [id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />
      <Main>
        <OrphanageDetails>
          <img
            src={orphanage?.images[activeImageIndex].url}
            alt={orphanage?.name}
          />

          <Images>
            {orphanage.images.map((image, index) => (
              <button
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                }}
                className={index === activeImageIndex ? 'active' : ''}
                key={index}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </Images>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
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

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </OpenDetails>

            <ContactButton>
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
}
