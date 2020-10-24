import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Orphanage from '../../../components/OrphanageForm';
import OrphanagesRepository, {
  IOrphanage,
} from '../../../repositories/orphanages';

import { ContainerButtons, ConfirmButton } from './styles';
interface IOrphanageProps {
  orphanage: IOrphanage;
}

export default function EditOrphanage() {
  const history = useHistory();
  const { orphanage } = history.location.state as IOrphanageProps;
  const [loading, setLoading] = useState(false);
  const notify = () => toast.error('Não foi possível editar, tente novamente!');

  async function EditOrphanage(orphanage: FormData) {
    setLoading(true);
    orphanage.append('check', String(true));
    const response = await OrphanagesRepository.update(orphanage);
    if (response?.status === 204) {
      history.push('/dashboard/orphanages');
    } else {
      notify();
    }
    setLoading(false);
  }

  return (
    <Orphanage orphanage={orphanage} action={EditOrphanage}>
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
    </Orphanage>
  );
}
