const supabaseUrl = 'https://iarjrxbkgeicfsdvdfil.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcmpyeGJrZ2VpY2ZzZHZkZmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTA4NjAsImV4cCI6MjA4Mzk2Njg2MH0.MkXmwSnSxXPjcpZ0GTDePjv-G-yw9K74TOaaUQSOsVg'; 
const upabase = supabase.createClient(supabaseUrl, supabaseKey); 

// Just one function definition
async function checkRegistration() {
    console.log("Check starting...");
    const { data: { user }, error: authError } = await upabase.auth.getUser();

    if (!user) {
        window.location.href = "08_login.html";
        return;
    }

    const { data: profile, error: dbError } = await upabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

    if (dbError || !profile) {
        window.location.href = "07_sign.html"; 
    } else if (profile.role === 'admin') {
        window.location.href = "22_adminNormal_dashboard.html";
    }
}

// THE MOST IMPORTANT LINE: Call it so it runs!
checkRegistration();


    // ... rest of your logic
    const logoo = document.getElementById("logo");
const navbar = document.getElementById("navbar");
const singuplogin = document.getElementById('signinlogin');
const singlog = document.getElementById('register');
const mobileQuery = window.matchMedia("(max-width: 480px)");
const lottie = document.getElementById('lottie');
const ltext = document.getElementById('ltext');
const logocon = document.getElementById("logocontain");
const logo = document.getElementById("aboutlogo");
const fadeabout1 = document.getElementById("about1");
const fadeabout2 = document.getElementById("about2");
const fadeabout3 = document.getElementById("about3");
const fadeabout4 = document.getElementById("about4");
const ofse1 = document.getElementById("ofselect1");
const ofse2 = document.getElementById("ofselect2"); 
const ofse3 = document.getElementById("ofselect3"); 
const ofse4 = document.getElementById("ofselect4"); 
const ofse5 = document.getElementById("ofselect5"); 
const ofse6 = document.getElementById("ofselect6"); 
const ofse1show = document.getElementById("executive");
const ofse2show = document.getElementById("mulpub");
const ofse3show = document.getElementById("extres");
const ofse4show = document.getElementById("comelect");
const ofse5show = document.getElementById("otherof");
const ofse6show = document.getElementById("yearrep");


mobileQuery.addEventListener('change', handleMobileChange);
handleMobileChange(mobileQuery);

lottie.addEventListener('mouseenter', enter);
lottie.addEventListener('mouseleave', out);
logocon.addEventListener('mouseenter', abtlogo);
logocon.addEventListener('mouseleave', aboutlogodo);
fadeabout1.addEventListener('mouseenter', in1);
fadeabout1.addEventListener('mouseleave', out1);
fadeabout2.addEventListener('mouseenter', in2);
fadeabout2.addEventListener('mouseleave', out2);
fadeabout3.addEventListener('mouseenter', in3);
fadeabout3.addEventListener('mouseleave', out3);
fadeabout4.addEventListener('mouseenter', in4);
fadeabout4.addEventListener('mouseleave', out4);




startShow();

function handleMobileChange(event) {
    if (event.matches) {
        logoo.addEventListener("click", navshow);
    }
}

function navshow() {
    navbar.classList.toggle('open');
}

function dosomething() {
    singlog.classList.toggle('open');
}

function enter() {
    ltext.classList.add('open');
}

function out() {
    ltext.classList.remove('open'); 
}

function abtlogo() {
    logo.style.transform = "rotateY(180deg)";
    logo.style.transition = "transform 0.6s ease-in-out .15s"; 
}

function aboutlogodo() {
    logo.style.transform = "rotateY(0deg)";
    logo.style.transition = "transform 0.9s ease-in-out .15s"; 
}

function in1() {
    fadeabout1.style.transition = "all .2s ease-in .1s";
    fadeabout1.style.transform = "scale(1.1) translateY(-5px)";
    fadeabout2.style.transition = "all .1s ease-in .2s";
    fadeabout3.style.transition = "all .1s ease-in .2s";
    fadeabout4.style.transition = "all .1s ease-in .2s";
    fadeabout2.style.filter = "grayscale(100%)";
    fadeabout2.style.opacity = "0.2";
    fadeabout3.style.filter = "grayscale(100%)";
    fadeabout3.style.opacity = "0.2";
    fadeabout4.style.filter = "grayscale(100%)";
    fadeabout4.style.opacity = "0.2";
}

function out1() {
    fadeabout1.style.transition = "all .2s ease-in .1s";
    fadeabout1.style.transform = "scale(1) translateY(0px)";
    reset();
}

function in2() {
    fadeabout2.style.transition = "all .2s ease-in .1s";
    fadeabout2.style.transform = "scale(1.1) translateY(-5px)";
    fadeabout1.style.transition = "all .1s ease-in .2s";
    fadeabout3.style.transition = "all .1s ease-in .2s";
    fadeabout4.style.transition = "all .1s ease-in .2s";
    fadeabout1.style.filter = "grayscale(100%)";
    fadeabout1.style.opacity = "0.2";
    fadeabout3.style.filter = "grayscale(100%)";
    fadeabout3.style.opacity = "0.2";
    fadeabout4.style.filter = "grayscale(100%)";
    fadeabout4.style.opacity = "0.2";
}

function out2() {
    fadeabout2.style.transition = "all .2s ease-in .1s";
    fadeabout2.style.transform = "scale(1) translateY(0px)";
    reset();
}

function in3() {
    fadeabout3.style.transition = "all .2s ease-in .1s";
    fadeabout3.style.transform = "scale(1.1) translateY(-5px)";
    fadeabout1.style.transition = "all .1s ease-in .2s";
    fadeabout2.style.transition = "all .1s ease-in .2s";
    fadeabout4.style.transition = "all .1s ease-in .2s";
    fadeabout1.style.filter = "grayscale(100%)";
    fadeabout1.style.opacity = "0.2";
    fadeabout2.style.filter = "grayscale(100%)";
    fadeabout2.style.opacity = "0.2";
    fadeabout4.style.filter = "grayscale(100%)";
    fadeabout4.style.opacity = "0.2";
}

function out3() {
    fadeabout3.style.transition = "all .2s ease-in .1s";
    fadeabout3.style.transform = "scale(1) translateY(0px)";
    reset();
}

function in4() {
    fadeabout4.style.transition = "all .2s ease-in .1s";
    fadeabout4.style.transform = "scale(1.1) translateY(-5px)";
    fadeabout1.style.transition = "all .1s ease-in .2s";
    fadeabout3.style.transition = "all .1s ease-in .2s";
    fadeabout2.style.transition = "all .1s ease-in .2s";
    fadeabout1.style.filter = "grayscale(100%)";
    fadeabout1.style.opacity = "0.2";
    fadeabout3.style.filter = "grayscale(100%)";
    fadeabout3.style.opacity = "0.2";
    fadeabout2.style.filter = "grayscale(100%)";
    fadeabout2.style.opacity = "0.2";
}

function out4() {
    fadeabout4.style.transition = "all .2s ease-in .1s";
    fadeabout4.style.transform = "scale(1) translateY(0px)";
    reset();
}

function reset() {
    fadeabout1.style.transition = "all .12s ease-in .2s";
    fadeabout1.style.opacity = "1";
    fadeabout1.style.filter = "grayscale(0%)";
    fadeabout2.style.transition = "all .12s ease-in .2s";
    fadeabout2.style.opacity = "1";
    fadeabout2.style.filter = "grayscale(0%)"; 
    fadeabout3.style.transition = "all .12s ease-in .2s";
    fadeabout3.style.opacity = "1";
    fadeabout3.style.filter = "grayscale(0%)"; 
    fadeabout4.style.transition = "all .12s ease-in .2s";
    fadeabout4.style.opacity = "1";
    fadeabout4.style.filter = "grayscale(0%)";
}

function startShow() {
    page1Show();
    setTimeout(page2Show, 3000);
    setTimeout(page3Show, 6000);
    setTimeout(page4Show, 9000);
    setTimeout(page5Show, 12000);
    setTimeout(page6Show, 15000);
    setTimeout(startShow, 18000);
}

function page1Show() {
    ofse1show.classList.toggle("open");
    ofse1.style.backgroundColor = "rgb(211, 224, 241)";
    ofse2.style.backgroundColor = "seashell";
    ofse3.style.backgroundColor = "seashell";
    ofse4.style.backgroundColor = "seashell";
    ofse5.style.backgroundColor = "seashell";
    ofse6.style.backgroundColor = "seashell";
    ofse2show.classList.remove("open");
    ofse3show.classList.remove("open");
    ofse4show.classList.remove("open");
    ofse5show.classList.remove("open");
    ofse6show.classList.remove("open");
}

function page2Show() {
    ofse2show.classList.toggle("open");
    ofse2.style.backgroundColor = "rgb(211, 224, 241)";
    ofse1.style.backgroundColor = "seashell";
    ofse3.style.backgroundColor = "seashell";
    ofse4.style.backgroundColor = "seashell";
    ofse5.style.backgroundColor = "seashell";
    ofse6.style.backgroundColor = "seashell";
    ofse1show.classList.remove("open");
    ofse3show.classList.remove("open");
    ofse4show.classList.remove("open");
    ofse5show.classList.remove("open");
    ofse6show.classList.remove("open");
}

function page3Show() {
    ofse3show.classList.toggle("open");
    ofse3.style.backgroundColor = "rgb(211, 224, 241)";
    ofse2.style.backgroundColor = "seashell";
    ofse1.style.backgroundColor = "seashell";
    ofse4.style.backgroundColor = "seashell";
    ofse5.style.backgroundColor = "seashell";
    ofse6.style.backgroundColor = "seashell";
    ofse1show.classList.remove("open");
    ofse2show.classList.remove("open");
    ofse4show.classList.remove("open");
    ofse5show.classList.remove("open");
    ofse6show.classList.remove("open");
}

function page4Show() {
    ofse4show.classList.toggle("open");
    ofse4.style.backgroundColor = "rgb(211, 224, 241)";
    ofse2.style.backgroundColor = "seashell";
    ofse3.style.backgroundColor = "seashell";
    ofse1.style.backgroundColor = "seashell";
    ofse5.style.backgroundColor = "seashell";
    ofse6.style.backgroundColor = "seashell";
    ofse1show.classList.remove("open");
    ofse2show.classList.remove("open");
    ofse3show.classList.remove("open");
    ofse5show.classList.remove("open");
    ofse6show.classList.remove("open");
}

function page5Show() {
    ofse5show.classList.toggle("open");
    ofse5.style.backgroundColor = "rgb(211, 224, 241)";
    ofse2.style.backgroundColor = "seashell";
    ofse3.style.backgroundColor = "seashell";
    ofse4.style.backgroundColor = "seashell";
    ofse1.style.backgroundColor = "seashell";
    ofse6.style.backgroundColor = "seashell";
    ofse1show.classList.remove("open");
    ofse2show.classList.remove("open");
    ofse4show.classList.remove("open");
    ofse3show.classList.remove("open");
    ofse6show.classList.remove("open");
}

function page6Show() {
    ofse6show.classList.toggle("open");
    ofse6.style.backgroundColor = "rgb(211, 224, 241)";
    ofse2.style.backgroundColor = "seashell";
    ofse3.style.backgroundColor = "seashell";
    ofse4.style.backgroundColor = "seashell";
    ofse5.style.backgroundColor = "seashell";
    ofse1.style.backgroundColor = "seashell";
    ofse1show.classList.remove("open");
    ofse2show.classList.remove("open");
    ofse4show.classList.remove("open");
    ofse5show.classList.remove("open");
    ofse3show.classList.remove("open");
}

