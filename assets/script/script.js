// nav education 
function nowEducation() {
    const educationContainer = document.getElementById("educationContainer");
    educationContainer.innerHTML = "";

    const sekolah = document.createElement('h2');
    sekolah.className = 'nama-sekolah';
    sekolah.innerText = 'SMK Wikrama Bogor';

    const tahunSekolah = document.createElement('p');
    tahunSekolah.className = 'tahun-sekolah';
    tahunSekolah.innerText = '2024 - Sekarang';

    educationContainer.appendChild(sekolah);
    educationContainer.appendChild(tahunSekolah);
};

function allEducation() {
    const originalContent = `
    <h2 class="nama-sekolah">SMK Wikrama Bogor</h2>
    <p class="tahun-sekolah">2024 - Sekarang</p>    
    <h2 class="nama-sekolah">SMPN 2 Cisarua</h2>
    <p class="tahun-sekolah-lulus">2021 - 2024</p>
    <h2 class="nama-sekolah">MI Hidayatul Bayan</h2>
    <p class="tahun-sekolah-lulus">2015 - 2021</p>
    `;

    const educationContainer = document.getElementById('educationContainer');
    educationContainer.innerHTML = originalContent;
};

// scroll animation 
let cards = document.querySelectorAll(".kartu");
function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {                    
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

let stackArea = document.querySelector(".stack-area");
window.addEventListener("scroll", () => { 
    let distance = window.innerHeight/2;
    let topVal =    stackArea.getBoundingClientRect().top;
    let index = -1 * (topVal / distance + 1);
    index = Math.floor(index);
    for(i = 0; i < cards.length; i++) {
        if (i <= index) {
            cards[i].classList.add("away");
        } else {
            cards[i].classList.remove("away");
        }
    }
    rotateCards();
});

rotateCards();