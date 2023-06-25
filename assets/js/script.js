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

document.getElementById('pdf').addEventListener('click', function() {
    target('assets/pdf/CV-dev.pdf')});
document.getElementById('sushi').addEventListener('click', function() {
    target('https://dzk00.github.io/sushi/')});
document.getElementById('kyoto').addEventListener('click', function() {
    target('https://dzk00.github.io/kyoto/')});
document.getElementById('hosting').addEventListener('click', function() {
    target('https://dzk00.github.io/hosting/')});
document.getElementById('georgia').addEventListener('click', function() {
    target('https://dzk00.github.io/georgia/')});
document.getElementById('tocontact').addEventListener('click', function() {
    targetnb('#contact')});
            
function target(url) {
    window.open(url, '_blank');
}
function targetnb() {
    var contactLayout = document.getElementById('contact');
    contactLayout.scrollIntoView({ behavior: 'smooth' });
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


document.getElementById('sendform').addEventListener('click', function() {
    sendMail()});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("msg").value,
    };

    const serviceID = "service_tuuwa2n";
    const templateID = "template_5o5kif3";
    
    emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("msg").value = "";
            console.log(res);
            alert("OK BOI");
        })
        .cath((err) => console.log(err));
}

