import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiAlertCircle, FiMapPin, FiPower } from 'react-icons/fi';

import mapMarkerImg from '../../../images/map-marker.svg';
import ButtonIcon from '../../ButtonIcon';

import {
  Container,
  Aside,
  Footer,
  Navigation,
  NotificationContainer,
  Notification,
} from './styles';

import { logout } from '../../../services/auth';
import { api } from '../../../services/api';

interface DashboardAsideProps {
  isOrphanagesPage: boolean;
  isPendentPage: boolean;
}

const DashboardAside: React.FC<DashboardAsideProps> = ({
  isOrphanagesPage,
  isPendentPage,
}) => {
  const history = useHistory();
  const [isOrphanagePendent, setIsOrphanagePendent] = useState<boolean>(false);

  function handleOnClickLogOut() {
    logout();
    history.push('/signin');
  }

  useEffect(() => {
    async function getOrphanagesPendent() {
      const { data } = await api.get('/orphanages/pendents');
      if (data.length > 0) {
        setIsOrphanagePendent(true);
      }
    }
    getOrphanagesPendent();
  }, []);

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
            <NotificationContainer>
              <FiAlertCircle
                size={24}
                color={isPendentPage ? '#0089A5' : '#FFF'}
              />
              <Notification state={isOrphanagePendent} />
            </NotificationContainer>
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
