import React from 'react';
import { useRouter } from '@net.webax/webaxp-router';
import { Button, Card, Container, Heading, Text } from '@net.webax/jellicule';

export const AboutView: React.FC = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.navigate('/');
  };

  return (
    <Container>
      <Card>
        <Heading level={1}>About WebAXP</Heading>
        <Text>
          WebAXP is a Progressive Web App framework based on the WebAX architecture. It combines
          jcule (Business Logic Controller) and jellicule (UI Component Library) to create a
          complete framework for building web applications.
        </Text>
        <Text>
          WebAXP follows the WebAX architecture principles of separation of concerns, declarative
          UI-to-API mapping, event-based communication, multi-tab support, and state
          synchronization.
        </Text>
        <Button onClick={handleHomeClick}>Home</Button>
      </Card>
    </Container>
  );
};
