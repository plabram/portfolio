export const openLink = (id, page) => {
  const link = document.querySelector(id)
  link.addEventListener('click', (ev) => {
    ev.preventDefault();
    const linkHref = ev.target.href;
    page()
    console.log('El link apunta a:', linkHref );
  })
}