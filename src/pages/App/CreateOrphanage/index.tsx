import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { FiCheck } from 'react-icons/fi';

import OrphanageForm from '../../../components/OrphanageForm';
import OrphanagesRepository, {
  IOrphanage,
} from '../../../repositories/orphanages';
import CreateOrphanagePendent from './CreateOrphanagePendent';

import { ContainerButtons, ConfirmButton } from './styles';

export default function CreateOrphanage() {
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [loading, setLoading] = useState(false);

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
    const notify = () =>
      toast.error('Não foi possível cadastrar, tente novamente!');
    setLoading(true);
    const response = await OrphanagesRepository.create(orphanage);
    if (response?.status === 201) {
      setDisplayFeedback(true);
    } else {
      notify();
    }
    setLoading(false);
  }

  return displayFeedback ? (
    <CreateOrphanagePendent />
  ) : (
    <OrphanageForm orphanage={defaultOrphanage} action={createOrphanage}>
      <ToastContainer style={{ fontSize: 15, fontFamily: 'sans-serif' }} />
      <ContainerButtons>
        <ConfirmButton type="submit">
          {!loading ? (
            <>
              <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
              Confirmar
            </>
          ) : (
            <Loader type="Puff" color="#cecece" height={40} width={40} />
          )}
        </ConfirmButton>
      </ContainerButtons>
    </OrphanageForm>
  );
}
