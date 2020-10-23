import React from 'react';
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
  async function EditOrphanage(orphanage: FormData) {
    orphanage.append('check', String(true));
    const response = await OrphanagesRepository.update(orphanage);
    if (response?.status === 204) {
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
