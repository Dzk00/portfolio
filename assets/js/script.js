var toggleBtn = document.getElementById("toggleBtn");
var navMenu = document.getElementById("navMenu");
var body = document.querySelector('body');

toggleBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle("activeMenu");
    toggleBtn.classList.toggle("activeToggle")
})

const navLink = document.querySelectorAll('.nav_link')

navLink.forEach((n) => 
    n.addEventListener('click', ()=> {
        navMenu.classList.remove("activeMenu");
        toggleBtn.classList.remove("activeToggle");
        body.classList.toggle('activeNavMenu')
    })
)

const section = document.querySelectorAll('section[id]');

window.addEventListener('scroll', ()=> {
    const scrollY = window.pageYOffset;
    section.forEach((current) =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navItem a[href*='+sectionId+']').classList.add('active')
        }else{
            document.querySelector('.navItem a[href*='+sectionId+']').classList.remove('active')
        }
    })
})


window.addEventListener('scroll', ()=>{
    const navbar = this.document.getElementById('navbar')
    if(this.scrollY>= 60){
        navbar.classList.add('active_nav')
    }else{
        navbar.classList.remove('active_nav')
    }
})

window.addEventListener('scroll', ()=>{
    const scrollUp = this.document.getElementById('scrollUp')
    if(this.scrollY>= 120){
        scrollUp.classList.add('active_scrollup')
    }else{
        scrollUp.classList.remove('active_scrollup')
    }
})

function ouvrirPDF(url) {
    window.open(url, '_blank');
}
function target(url) {
    window.open(url, '_blank');
}

const scrollRevealAnime = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true,
})

scrollRevealAnime.reveal(`.titleLight, 
                          .titleBold,
                          .proff,
                          .homeText,
                          .home_button,
                          .text_lg,
                          .aboutText,
                          .sign,
                          .progress_bar,
                          .icon_img,
                          .icon_img,
                          .exp_title,
                          .about_card,
                          .blog_card,
                          .contact_icons,
                          .footer_brand,
                          .footer_link,
                          .copyright_msg,
                          .btn`, {
                            interval: 200,
                         });

  function envoyerFormulaire(form) {
    form.preventDefault(); // Empêche le rechargement de la page
    
    // Récupère les valeurs des champs du formulaire
    var nom = form.nom.value;
    var email = form.email.value;
    var message = form.message.value;



    // Envoie les données du formulaire à EmailJS
    emailjs.send("service_tuuwa2n", "template_5o5kif3", {
      name: nom,
      email: email,
      message: message
    }).then(function(response) {
      console.log("E-mail envoyé avec succès !", response.status, response.text);
    }, function(error) {
      console.log("Erreur lors de l'envoi de l'e-mail :", error);
    });

    // Réinitialise le formulaire
    form.reset();
  }

