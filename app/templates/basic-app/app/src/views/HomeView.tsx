import React from 'react';
import { useRouter } from '@net.webax/webaxp-router';
import { useStore } from '@net.webax/webaxp-state';
import { Button, Card, Container, Heading, Text } from '@net.webax/jellicule';

export const HomeView: React.FC = () => {
  const router = useRouter();
  const { state } = useStore();

  const handleAboutClick = () => {
    router.navigate('/about');
  };

  return (
    <Container>
      <Card>
        <Heading level={1}>Welcome to WebAXP</Heading>
        <Text>
          This is a basic WebAXP application. It demonstrates the use of WebAXP components and
          architecture.
        </Text>
        <Button onClick={handleAboutClick}>About</Button>
      </Card>
    </Container>
  );
};
