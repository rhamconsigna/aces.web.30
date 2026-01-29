const verifReq = document.getElementById('verifReq');
const allmem = document.getElementById('allmem');
const manualAt = document.getElementById('manualAt');
const attenReq = document.getElementById('attenReq');
const regRep = document.getElementById('regRep');
const qrScanner = document.getElementById('qrScanner');

const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');
const content5 = document.getElementById('content5');
const content6 = document.getElementById('content6');

verifReq.addEventListener('click', ad1);
allmem.addEventListener('click', ad2);
manualAt.addEventListener('click', ad3);
attenReq.addEventListener('click', ad4);
regRep.addEventListener('click', ad5);
qrScanner.addEventListener('click', ad6);


function ad1() {
    console.log("Opening Verification Requests...");
     content1.classList.toggle('open');
}

function ad2() {
    console.log("Viewing All Members...");
     content2.classList.toggle('open');
}

function ad3() {
    console.log("Starting Manual Attendance...");
     content3.classList.toggle('open');
}

function ad4() {
    console.log("Opening Attendance Requests...");
     content4.classList.toggle('open');
}

function ad5() {
    console.log("Generating Registration Reports...");
     content5.classList.toggle('open');
}

function ad6() {
    console.log("Starting QR Scanner...");
     content6.classList.toggle('open');
}