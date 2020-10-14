import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from 'react-icons/fi';

import Sidebar from '../components/Sidebar';
import { mapIcon } from '../utils/mapIcon';

import '../styles/pages/create-orphanage.css';
import { api } from '../services/api';

export default function CreateOrphanage() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [openOnWeekends, setOpenOnWeekends] = useState(0);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (!files || files.length === 0) {
      return;
    }
    const selectedImages = Array.from(files);

    selectedImages.map((image) => {
      setImages((oldImages) => [...oldImages, image]);
    });

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    selectedImagesPreview.map((selectedImage) => {
      console.log(selectedImage);
      setPreviewImages((oldPreviews) => [...oldPreviews, selectedImage]);
    });
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', openingHours);
    data.append('open_on_weekends', String(openOnWeekends));
    images.forEach((image) => {
      data.append('images', image);
    });

    const response = await api.post('orphanages', data);
    alert('Cadastro realizado com sucesso!');
    history.push('/app');
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />
      <main>
        <form
          className="create-orphanage-form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-9.973695, -67.8392679]}
              style={{ width: '100%', height: 280 }}
              zoom={13}
              onClick={handleMapClick}
              name="position"
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages?.map((image, index) => (
                  <img key={index} src={image} alt={name} />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input
                  multiple
                  onChange={handleSelectImages}
                  type="file"
                  id="image[]"
                  className=""
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                name="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                name="opening_hours"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  name="open_on_weekends"
                  className={openOnWeekends ? 'active' : ''}
                  onClick={() => {
                    setOpenOnWeekends(1);
                  }}
                >
                  Sim
                </button>
                <button
                  type="button"
                  name="open_on_weekends"
                  className={!openOnWeekends ? 'active dont-open' : ''}
                  onClick={() => {
                    setOpenOnWeekends(0);
                  }}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
