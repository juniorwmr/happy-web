import React, { useState } from 'react';
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

  async function EditOrphanage(orphanage: FormData) {
    if (!buttonAction) {
      await OrphanagesRepository.delete(orphanage.get('id') as string);
      history.push('/dashboard/pendents');
    } else {
      orphanage.append('check', true as any);
      await OrphanagesRepository.update(orphanage);
      history.push('/dashboard/orphanages');
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
