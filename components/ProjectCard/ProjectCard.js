import "./ProjectCard.css"

export const projectCard = (project) => `
<div class="card-text">
<h3>${project.title}</h3>
<p class="stack">${project.stack}</p>
<p>${project.description}</p>
</div>
<img src="${project.image}" />

`
