function blocked(a) {
  for (let i = 2; i <= 5; i++) {
    if (i == 4) {
      i++;
    }
    document.images[i].src = "images/tab-bg.png";
    if (i == a) {
      document.images[i].src = "images/tab-bg-active.png";
    }
    if (a == 3) {
      document.images[4].src = "";
    }
    if (a == 5) {
      document.images[6].src = "";
    }
  }
}
// let divideP = document.getElementById("text2");
// console.log(parseInt(divideP.textContent) / 4);
document.getElementById("popX").style.display = "none";
document.getElementById("qMarkDiv").style.display = "none";
document.getElementById("plusImg").style.marginTop = "-525px";

document.getElementById("yoveldge").style.marginTop = "-10px";
document.getElementById("yoveldge").style.marginBottom = "10px";
document.getElementById("yoveldgiuri").style.marginBottom = "45px";
document.getElementById("rightBlock").style.marginTop = "35px";

function diffDate(b) {
  document.getElementById("yoveldge").style.marginTop = "20px";
  document.getElementById("rightBlock").style.marginTop = "25px";
  document.getElementById("yoveldgiuri").style.marginBottom = "25px";
  document.getElementById("firstDate").style.backgroundColor = "#1a293b";
  document.getElementById("secondDate").style.backgroundColor = "#1a293b";
  document.getElementById("thirdDate").style.backgroundColor = "#1a293b";
  document.getElementById("fourthDate").style.backgroundColor = "#1a293b";
  document.getElementById("ertSpinze").innerHTML =
    "ერთ სპინზე დაფიქსირებული მოგების ყველაზე მაღალი კოეფიციენტი არის შენი ქულა ლიდერბორდში";
  document.getElementById("yoveldge").innerHTML =
    "ყოველდღე მიიღე შემთხვევითი ფულადი პრიზი ნებისმიერ სპინზე";
  document.getElementById("yoveldgiuri").innerHTML =
    "ყოველდღიური, 36 000₾-ის ფულადი პრიზები";
  document.getElementById("firstRight").innerHTML = "ყოველდღიური 248 000₾";
  document.getElementById("secondRight").innerHTML = "1500 პრიზი";
  document.getElementById("prizi").innerHTML = "პრიზი";
  document.getElementById("bTThrd").innerHTML = "";
  document.getElementById("bTFrth").innerHTML = "";
  document.getElementById("plusImg").style.marginTop = "-525px";
  document.getElementById("prizi").style.marginLeft = "380px";
  document.getElementById("spinzeFsoni").innerHTML =
    "სპინზე ფსონის მინ. რაოდენობა - 2₾";
  document.getElementById("qMarkDiv").style.display = "none";
  document.querySelector(".chngTxt").textContent = "370";
  document.querySelector(".text21").textContent = "40 000₾";
  document.querySelector(".text22").textContent = "20 000₾";
  document.querySelector(".text23").textContent = "8 000₾";
  document.querySelector(".text24").textContent = "4 000₾";
  document.querySelector(".text25").textContent = "2 000₾";
  document.querySelector(".text26").textContent = "800₾";
  document.querySelector(".text27").textContent = "300₾";
  document.querySelector(".text28").textContent = "100₾";
  document.querySelector(".text29").textContent = "50₾";

  document.querySelector(".text31").textContent = "4 000₾";
  document.querySelector(".text32").textContent = "2 000₾";
  document.querySelector(".text33").textContent = "400₾";
  document.querySelector(".text34").textContent = "200₾";
  document.querySelector(".text35").textContent = "80₾";
  document.querySelector(".text36").textContent = "40₾";
  document.querySelector(".text37").textContent = "20₾";
  document.querySelector(".text38").textContent = "15₾";
  document.querySelector(".text39").textContent = "5₾";
  document.getElementById("popX").style.display = "none";

  if (b == 1) {
    document.getElementById("firstDate").style.backgroundColor = "#2e9ea1";
  }
  if (b == 2) {
    document.getElementById("secondDate").style.backgroundColor = "#2e9ea1";
    document.getElementById("ertSpinze").innerHTML =
      "დაიკავე საპრიზო ადგილი: ერთ სპინზე დაფიქსირებული მოგების ყველაზე მაღალი კოეფიციენტი არის შენი ქულა ლიდერბორდში";
    document.getElementById("yoveldge").innerHTML =
      "ჩამოაგდე მულტიპლიკატორები ან მიიღე ფრისპინები";
    document.getElementById("yoveldge").style.marginTop = "-10px";
    document.getElementById("yoveldge").style.marginBottom = "10px";
    document.getElementById("yoveldgiuri").innerHTML =
      "მიიღე ფულადი პრიზი: თამაშის დროს შემთხვევით ჩამოგდებული ფულადი მულტიპლიკატორი გამრავლებული ფსონის ოდენობაზ";
    document.getElementById("yoveldgiuri").style.marginBottom = "55px";
    document.getElementById("firstRight").innerHTML = "ყოველდღიური 36 000₾";
    document.getElementById("secondRight").innerHTML = "500 პრიზი";
    document.getElementById("prizi").innerHTML = "მულტიპლიკატორი";
    document.getElementById("bTThrd").innerHTML =
      "*თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 40₾-ს, მაშინ მოთამაშის მოგებული მულტიპლიკატორი გამრავლდება 40₾-ზე";
    document.getElementById("bTFrth").innerHTML =
      "*ფრისპინების მოგების შემთხვევაში, 10 ცალი ფრისპინის ნომინალი განისაზღვრებამომგებიან სპინზე დადებული ფსონის შესაბამისად. თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 4₾-ს, მოთამაშე ჯამურად მიიღებს 10 ცალ 4 ლარიან ფრისპინს";
    document.getElementById("plusImg").style.marginTop = "-493px";
    document.getElementById("prizi").style.marginLeft = "330px";
    document.getElementById("spinzeFsoni").innerHTML =
      "*სპინზე ფსონის მინ. რაოდენობა შეზღუდული არ არის.";
    document.getElementById("qMarkDiv").style.display = "block";
    document.getElementById("popX").style.display = "flex";
    document.querySelector(".chngTxt").textContent = "320";

    document.querySelector(".text21").textContent = "10 000₾";
    document.querySelector(".text22").textContent = "5 000₾";
    document.querySelector(".text23").textContent = "2 000₾";
    document.querySelector(".text24").textContent = "1 500₾";
    document.querySelector(".text25").textContent = "500₾";
    document.querySelector(".text26").textContent = "200₾";
    document.querySelector(".text27").textContent = "100₾";
    document.querySelector(".text28").textContent = "20₾";
    document.querySelector(".text29").textContent = "5₾";

    document.querySelector(".text31").textContent = "1 000₾";
    document.querySelector(".text32").textContent = "500₾";
    document.querySelector(".text33").textContent = "100₾";
    document.querySelector(".text34").textContent = "50₾";
    document.querySelector(".text35").textContent = "20₾";
    document.querySelector(".text36").textContent = "10₾";
    document.querySelector(".text37").textContent = "5₾";
    document.querySelector(".text38").textContent = "4₾";
    document.querySelector(".text39").textContent = "1₾";
    document.getElementById("plusImg").style.marginTop = "-470px";
    document.getElementById("rightBlock").style.marginTop = "55px";
  }
  if (b == 3) {
    document.getElementById("thirdDate").style.backgroundColor = "#2e9ea1";
  }
  if (b == 4) {
    document.getElementById("fourthDate").style.backgroundColor = "#2e9ea1";
  }
}

//accordion

var acc = document.getElementsByClassName("realAccordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.getElementById("whiteDiv").style.display = "none";
function questionMark() {
  document.getElementById("whiteDiv").style.display = "block";
}

function qMRemove() {
  document.getElementById("whiteDiv").style.display = "none";
}
