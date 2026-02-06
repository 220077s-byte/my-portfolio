let btncontact = document.getElementById("btn-contact");

function meningFunksiyam(yangiMatn) {
    let popup = document.getElementById("popup");

    popup.innerHTML = "";

    let pTegi = document.createElement("p");

    pTegi.innerText = yangiMatn;

    popup.appendChild(pTegi);

    popup.style.top = "45px";

    setTimeout(function() {
        popup.style.top = "-100px";
    }, 3000);
}

function addRecommendation() {
  let textareaa = document.getElementById("textareaa");
  let roykat = document.getElementById("roykat");
  if (textareaa.value.trim() !== "") {
    let yangiQuti = document.createElement("div");
    yangiQuti.className = "quti";
    yangiQuti.innerHTML = "<p>" + textareaa.value + "</p>";
    roykat.appendChild(yangiQuti);
    meningFunksiyam('✅ Tavsiya qo\'shildi!')
    textareaa.value = "";
  } else {
    meningFunksiyam("❌ Iltimos, xabar yozing!");
  }
}

window.onscroll = function () {
    let scrollBtn = document.getElementById("scrollly");
    if (scrollBtn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    }
};

function tepagaChiq() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    document.getElementById("scrollly").style.display = "none";
}