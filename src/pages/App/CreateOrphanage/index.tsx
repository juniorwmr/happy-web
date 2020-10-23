import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import OrphanageForm from '../../../components/OrphanageForm';
import OrphanagesRepository, {
  IOrphanage,
} from '../../../repositories/orphanages';
import CreateOrphanagePendent from './CreateOrphanagePendent';

import { ContainerButtons, ConfirmButton } from './styles';

export default function CreateOrphanage() {
  const [displayFeedback, setDisplayFeedback] = useState(false);

  const defaultOrphanage: IOrphanage = {
    id: '',
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
    const response = await OrphanagesRepository.create(orphanage);
    if (response?.status === 201) {
      setDisplayFeedback(true);
    }
  }

  return displayFeedback ? (
    <CreateOrphanagePendent />
  ) : (
    <OrphanageForm orphanage={defaultOrphanage} action={createOrphanage}>
      <ContainerButtons>
        <ConfirmButton type="submit">
          <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
          Confirmar
        </ConfirmButton>
      </ContainerButtons>
    </OrphanageForm>
  );
}
