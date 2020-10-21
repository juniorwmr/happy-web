import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import Orphanage from '../../../components/OrphanageForm';
import { api } from '../../../services/api';
import CreateOrphanagePendent from './CreateOrphanagePendent';

import { ContainerButtons, ConfirmButton } from './styles';

interface IOrphanage {
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
      id?: number;
      url?: string;
    }
  ];
}

export default function CreateOrphanage() {
  const [displayFeedback, setDisplayFeedback] = useState(false as boolean);

  const orphanage = {
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    about: '',
    instructions: '',
    opening_hours: '',
    open_on_weekends: true,
    images: [],
  };

  async function createOrphanage(orphanage: FormData) {
    const { status } = await api.post(`/orphanages`, orphanage);
    if (status === 201) {
      setDisplayFeedback(true);
    }
  }

  return displayFeedback ? (
    <CreateOrphanagePendent />
  ) : (
    <Orphanage orphanage={orphanage} action={createOrphanage}>
      <ContainerButtons>
        <ConfirmButton type="submit">
          <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
          Confirmar
        </ConfirmButton>
      </ContainerButtons>
    </Orphanage>
  );
}
