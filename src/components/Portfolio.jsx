import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
      imageUrl: "path/to/project1-image.jpg"
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      imageUrl: "path/to/project2-image.jpg"
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      imageUrl: "path/to/project3-image.jpg"
    }
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <img src={project.imageUrl} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
