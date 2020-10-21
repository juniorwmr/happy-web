import React, { useState } from 'react';
import { FiCheck, FiXCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Orphanage from '../../../components/OrphanageForm';
import { api } from '../../../services/api';

import { ContainerButtons, DeleteButton, ConfirmButton } from './styles';

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

interface IOrphanageProps {
  orphanage: IOrphanage;
}

export default function ApproveOrphanage() {
  const { location, push } = useHistory();
  const { orphanage } = location.state as IOrphanageProps;
  const [buttonAction, setButtonAction] = useState<boolean>();

  async function EditOrphanage(orphanage: FormData) {
    if (!buttonAction) {
      await api.delete(`/orphanages/${orphanage.get('id')}`);
      push('/dashboard/pendents');
    } else {
      orphanage.append('check', String(true));
      await api.put(`/orphanages`, orphanage);
      push('/dashboard/orphanages');
    }
  }

  return (
    <Orphanage orphanage={orphanage} action={EditOrphanage}>
      <ContainerButtons>
        <DeleteButton type="submit" onClick={() => setButtonAction(false)}>
          <FiXCircle style={{ marginRight: 10 }} size={20} color="#FFF" />
          Deletar
        </DeleteButton>
        <ConfirmButton type="submit" onClick={() => setButtonAction(true)}>
          <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
          Confirmar
        </ConfirmButton>
      </ContainerButtons>
    </Orphanage>
  );
}
