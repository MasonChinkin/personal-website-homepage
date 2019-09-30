import React from "react";
import { Card, Button } from "react-bootstrap";

const Project = props => {
  const { img, title, description, liveLink, githubLink } = props;

  return (
    <Card>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='primary'>
          <a href={liveLink}>Live</a>
        </Button>
        {githubLink && (
          <Button variant='secondary'>
            <a href={githubLink}>Repo</a>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Project;
