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
      id?: number;
      url?: string;
    }
  ];
}

interface IOrphanageProps {
  orphanage: IOrphanage;
}

export default function EditOrphanage() {
  const history = useHistory();
  const { orphanage } = history.location.state as IOrphanageProps;
  async function EditOrphanage(orphanage: FormData) {
    orphanage.append('check', String(true));
    const { status } = await api.put(`/orphanages`, orphanage);
    if (status === 204) {
      history.push('/dashboard/orphanages');
    }
  }

  return (
    <Orphanage orphanage={orphanage} action={EditOrphanage}>
      <ContainerButtons>
        <ConfirmButton type="submit">
          <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
          Confirmar
        </ConfirmButton>
      </ContainerButtons>
    </Orphanage>
  );
}
