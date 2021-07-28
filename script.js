let cp = document.getElementById('contact-point');
let toggler = document.querySelectorAll('.navbar-toggler')
let contact = document.querySelector('#contact');
cp.addEventListener('click', () => {
  console.log(contact.classList)
  if (contact.classList.contains('displaynone')) {
    setTimeout(() => {contact.classList.remove('displaynone')}, 400);
  } 
})

toggler.forEach(element => element.addEventListener('click', () => {
  if (!contact.classList.contains('displaynone')) {
    contact.classList.add('displaynone');
  }
}))