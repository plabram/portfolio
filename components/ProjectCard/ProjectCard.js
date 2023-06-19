import "./ProjectCard.css"

export const projectCard = (project) => `
<h3>${project.title}</h3>
<p class="stack">${project.stack}</p>
<p>${project.description}</p>
<img src="${project.image}" />

`
