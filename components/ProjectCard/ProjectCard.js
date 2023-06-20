import "./ProjectCard.css"

export const projectCard = (project) => `
<div class="card-text">
<h3><a href="${project.link}">${project.title}</a></h3>
<p class="stack">${project.stack}</p>
<p>${project.description}</p>
</div>
<a href="${project.link}"><img src="${project.image}" /></a>
`
