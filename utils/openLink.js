export const openLink = (id, func) => {
  const link = document.querySelector(id)
  link.addEventListener('click', (ev) => {
    ev.preventDefault();
    func()
  })
}