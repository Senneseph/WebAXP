import React from 'react';
import { useRouter } from '@net.webax/webaxp-router';
import { Button, Card, Container, Heading, Text } from '@net.webax/jellicule';

export const NotFoundView: React.FC = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.navigate('/');
  };

  return (
    <Container>
      <Card>
        <Heading level={1}>404 - Not Found</Heading>
        <Text>The page you are looking for does not exist.</Text>
        <Button onClick={handleHomeClick}>Home</Button>
      </Card>
    </Container>
  );
};
