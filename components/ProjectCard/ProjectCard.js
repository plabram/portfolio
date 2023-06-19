import "./ProjectCard.css";

export const projectCard = (project) => `
<div class="projectcard">
<h3>${project.title}</h3>
<p>${project.description}</p>
<p>${project.stack}</p>
<img src="${project.img} />

`;

// title, description, image, link, stack, public;
