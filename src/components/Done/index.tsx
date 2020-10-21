import React from 'react';
import { useHistory } from 'react-router-dom';

import { Wrapper, Container, Image, Button } from './styles';

interface DoneProps {
  imageSrc: string;
  title: string;
  paragraph: string;
  primaryColor: string;
}

const Done: React.FC<DoneProps> = ({
  imageSrc,
  paragraph,
  title,
  primaryColor,
}) => {
  const history = useHistory();

  return (
    <Wrapper primaryColor={primaryColor}>
      <Container>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <Button
          primaryColor={primaryColor}
          type="button"
          onClick={() => history.push('/app')}
        >
          Voltar para o mapa
        </Button>
      </Container>
      <Image src={imageSrc} alt="happy" />
    </Wrapper>
  );
};

export default Done;
