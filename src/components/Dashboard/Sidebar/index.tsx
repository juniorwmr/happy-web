import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiAlertCircle, FiMapPin, FiPower } from 'react-icons/fi';

import mapMarkerImg from '../../../images/map-marker.svg';
import ButtonIcon from '../../ButtonIcon';

import { Container, Aside, Footer, Navigation } from './styles';

import { logout } from '../../../services/auth';

interface DashboardAsideProps {
  isOrphanagesPage: boolean;
  isPendentPage: boolean;
}

const DashboardAside: React.FC<DashboardAsideProps> = ({
  isOrphanagesPage,
  isPendentPage,
}) => {
  const history = useHistory();

  function handleOnClickLogOut() {
    logout();
    history.push('/signin');
  }

  return (
    <Container>
      <Aside>
        <img src={mapMarkerImg} alt="Happy" />
        <Navigation>
          <ButtonIcon
            backgroundColor={isOrphanagesPage ? '#FFD666' : '#12AFCB'}
            onClick={() => history.push('/dashboard/orphanages')}
          >
            <FiMapPin size={24} color={isOrphanagesPage ? '#0089A5' : '#FFF'} />
          </ButtonIcon>
          <ButtonIcon
            backgroundColor={isPendentPage ? '#FFD666' : '#12AFCB'}
            onClick={() => history.push('/dashboard/pendents')}
          >
            <FiAlertCircle
              size={24}
              color={isPendentPage ? '#0089A5' : '#FFF'}
            />
          </ButtonIcon>
        </Navigation>
        <Footer>
          <ButtonIcon backgroundColor="#12afcb" onClick={handleOnClickLogOut}>
            <FiPower size={24} color="#FFF" />
          </ButtonIcon>
        </Footer>
      </Aside>
    </Container>
  );
};

export default DashboardAside;
