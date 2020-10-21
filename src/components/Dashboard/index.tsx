import React from 'react';

import Sidebar from './Sidebar';

import { Container, Main, Title } from './styles';

interface IDashboardProps {
  children: React.ReactNode;
  isOrphanagesPage?: boolean;
  isPendentPage?: boolean;
  title: string;
  orphanagesLength?: number | 0;
}

const Dashboard: React.FC<IDashboardProps> = ({
  title,
  isOrphanagesPage = false,
  isPendentPage = false,
  orphanagesLength,
  children,
}) => {
  return (
    <Container>
      <Sidebar
        isOrphanagesPage={isOrphanagesPage}
        isPendentPage={isPendentPage}
      />
      <Container>
        <Main>
          <Title>
            <legend>{title}</legend>
            {orphanagesLength ? (
              <p>
                {orphanagesLength && orphanagesLength > 1
                  ? `${orphanagesLength} orfanatos`
                  : `${orphanagesLength} orfanato`}
              </p>
            ) : null}
          </Title>
          {children}
        </Main>
      </Container>
    </Container>
  );
};

export default Dashboard;
