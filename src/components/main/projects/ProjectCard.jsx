import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = props => {
  const { img, title, description, liveLink, githubLink } = props;

  return (
    <Card>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>
          <a href={liveLink}>
            <Button variant='primary'>Live</Button>
          </a>
          {githubLink && (
            <a href={githubLink}>
              <Button variant='secondary'>Repo</Button>
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
