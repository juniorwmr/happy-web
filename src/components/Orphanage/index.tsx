import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { mapIcon } from '../../utils/mapIcon';

import Sidebar from '../Sidebar';
import {
  Container,
  Main,
  Form,
  Fieldset,
  InputField,
  ImageContainer,
  SelectButton,
  RemoveButton,
} from './styles';

import { FiPlus, FiX } from 'react-icons/fi';

interface IOrphanagesImages {
  id: number;
  url: string;
}

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: IOrphanagesImages[];
}

interface IOrphanageProps {
  orphanage: IOrphanage;
  action: (data: FormData) => void;
  children: ReactNode;
}

const Orphanage: React.FC<IOrphanageProps> = ({
  orphanage,
  action,
  children,
}) => {
  const [id] = useState(orphanage.id);
  const [name, setName] = useState(orphanage.name);
  const [position, setPosition] = useState({
    latitude: orphanage.latitude,
    longitude: orphanage.longitude,
  });
  const [about, setAbout] = useState(orphanage.about);
  const [instructions, setInstructions] = useState(orphanage.instructions);
  const [openingHours, setOpeningHours] = useState(orphanage.opening_hours);
  const [openOnWeekends, setOpenOnWeekends] = useState(
    orphanage.open_on_weekends
  );
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<IOrphanagesImages[]>(
    orphanage.images
  );
  const [removeImage, setRemoveImage] = useState<IOrphanagesImages[]>([]);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (!files || files.length === 0) {
      return;
    }
    const selectedImages = Array.from(files);

    selectedImages.forEach((image) => {
      setImages((oldImages) => [...oldImages, image]);
    });

    const selectedImagesPreview = selectedImages.map((image, index) => {
      const id = index;
      const url = URL.createObjectURL(image);
      return { id, url };
    });

    selectedImagesPreview.forEach((selectedImage) => {
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

  function onSubmitEditForm(event: FormEvent) {
    event.preventDefault();
    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('id', String(id));
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
    removeImage.forEach((image) => {
      data.append('id_images_remove', String(image.id));
    });

    action(data);
  }

  return (
    <Container>
      <Sidebar />
      <Main>
        <Form onSubmit={(event: FormEvent) => onSubmitEditForm(event)}>
          <Fieldset>
            <legend>Dados</legend>
            <Map
              center={[position.latitude, position.longitude]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
              name="position"
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={mapIcon}
                position={[position.latitude, position.longitude]}
              />
            </Map>

            <InputField>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </InputField>
            <InputField>
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
            </InputField>
            <InputField>
              <label htmlFor="images">Fotos</label>
              <ImageContainer>
                {previewImages?.map((image, index) => (
                  <div>
                    <img key={index} src={image.url} alt={name} />
                    <RemoveButton
                      onClick={() => {
                        setRemoveImage((oldImages) => [...oldImages, image]);
                        const newPreviewIamges = previewImages.filter(
                          (previewImage) => {
                            if (previewImage.url !== image.url) {
                              return previewImage;
                            }
                            return null;
                          }
                        );
                        setPreviewImages(newPreviewIamges);
                      }}
                    >
                      <FiX size={20} color="#FF669D" />
                    </RemoveButton>
                  </div>
                ))}

                <label htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input
                  multiple
                  onChange={handleSelectImages}
                  type="file"
                  id="image[]"
                />
              </ImageContainer>
            </InputField>
          </Fieldset>
          <Fieldset>
            <legend>Visitação</legend>
            <InputField>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                name="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </InputField>
            <InputField>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                name="opening_hours"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
              />
            </InputField>
            <InputField>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>
              <SelectButton>
                <button
                  type="button"
                  name="open_on_weekends"
                  className={openOnWeekends ? 'active' : ''}
                  onClick={() => {
                    setOpenOnWeekends(true);
                  }}
                >
                  Sim
                </button>
                <button
                  type="button"
                  name="open_on_weekends"
                  className={!openOnWeekends ? 'active dont-open' : ''}
                  onClick={() => {
                    setOpenOnWeekends(false);
                  }}
                >
                  Não
                </button>
              </SelectButton>
            </InputField>
          </Fieldset>
          {children}
        </Form>
      </Main>
    </Container>
  );
};

export default Orphanage;
