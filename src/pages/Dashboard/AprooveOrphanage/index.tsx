import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { FiCheck, FiXCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Orphanage from '../../../components/OrphanageForm';
import OrphanagesRepository, {
  IOrphanage,
} from '../../../repositories/orphanages';

import { ContainerButtons, DeleteButton, ConfirmButton } from './styles';

interface IOrphanageProps {
  orphanage: IOrphanage;
}

export default function ApproveOrphanage() {
  const history = useHistory();
  const { orphanage } = history.location.state as IOrphanageProps;
  const [buttonAction, setButtonAction] = useState<boolean>();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingAproove, setLoadingAproove] = useState(false);
  const notify = (props: any) => toast.error(props.msg);

  async function EditOrphanage(orphanage: FormData) {
    if (!buttonAction) {
      setLoadingDelete(true);
      const response = await OrphanagesRepository.delete(
        orphanage.get('id') as string
      );
      if (response?.status === 200) {
        history.push('/dashboard/pendents');
      } else {
        notify('Não foi possível deletar, tente novamente!');
      }
    } else {
      setLoadingAproove(true);
      orphanage.append('check', true as any);
      const response = await OrphanagesRepository.update(orphanage);
      if (response?.status === 204) {
        history.push('/dashboard/orphanages');
      } else {
        notify('Não foi possível aprovar, tente novamente!');
      }
    }
    setLoadingDelete(false);
    setLoadingAproove(false);
  }

  return (
    <Orphanage orphanage={orphanage} action={EditOrphanage}>
      <ToastContainer style={{ fontSize: 15, fontFamily: 'sans-serif' }} />
      <ContainerButtons>
        <DeleteButton type="submit" onClick={() => setButtonAction(false)}>
          {!loadingDelete ? (
            <>
              <FiXCircle style={{ marginRight: 10 }} size={20} color="#FFF" />
              Deletar
            </>
          ) : (
            <Loader type="Puff" color="#cecece" height={40} width={40} />
          )}
        </DeleteButton>
        <ConfirmButton type="submit" onClick={() => setButtonAction(true)}>
          {!loadingAproove ? (
            <ConfirmButton>
              <FiCheck style={{ marginRight: 10 }} size={20} color="#FFF" />
              Confirmar
            </ConfirmButton>
          ) : (
            <Loader type="Puff" color="#cecece" height={40} width={40} />
          )}
        </ConfirmButton>
      </ContainerButtons>
    </Orphanage>
  );
}
