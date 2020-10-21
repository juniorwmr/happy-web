import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Orphanage from '../../../components/OrphanageForm';
import { api } from '../../../services/api';

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
      id: number;
      url: string;
    }
  ];
}

export default function CreateOrphanage() {
  const { push } = useHistory();
  const orphanage = {
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    about: '',
    instructions: '',
    opening_hours: '',
    open_on_weekends: true,
    images: [{}],
  };

  async function createOrphanage(orphanage: FormData) {
    const { status } = await api.post(`/orphanages`, orphanage);
    if (status === 201) {
      alert('Orfanato criado com sucesso!');
      push('/dashboard/orphanages');
    }
  }

  return (
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
