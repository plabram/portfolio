import "./ExperienceCard.css"

export const experienceCard = (exp) => `
<div>
<h3>${exp.role}</h3>
<h4>${exp.company}</h4>
<p class="date">${exp.dates}</p>
<div>${exp.responsibilities}</div>
</div>
<span class="divider"></span>
`
