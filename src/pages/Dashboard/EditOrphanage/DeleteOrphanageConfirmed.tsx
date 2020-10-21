import React from 'react';
import Done from '../../../components/Done';

import doneImg from '../../../images/delete-done.svg';

const DeleteOrphanageConfirmed: React.FC = () => {
  return (
    <Done
      primaryColor="#ff669d"
      imageSrc={doneImg}
      title="Excluir!"
      paragraph="Você tem certeza que quer
  excluir Orf. Esperança?"
    />
  );
};

export default DeleteOrphanageConfirmed;
