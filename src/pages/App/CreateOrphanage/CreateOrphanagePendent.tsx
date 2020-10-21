import React from 'react';
import Done from '../../../components/Done';

import doneImg from '../../../images/create-done.svg';

const CreateOrphanagePendent: React.FC = () => {
  return (
    <Done
      primaryColor="#37C77F"
      imageSrc={doneImg}
      title="Ebaaa!"
      paragraph="O cadastro deu certo e foi enviado
      ao administrador para ser aprovado.
      Agora é só esperar :)"
    />
  );
};

export default CreateOrphanagePendent;
