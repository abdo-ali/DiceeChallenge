

$("button").click(function () {

  var randomNumber1 = Math.floor(Math.random()*6)+1;
  document.getElementsByClassName('img1')[0].setAttribute("src","images\\dice" + randomNumber1 + ".png");
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  document.getElementsByClassName('img2')[0].setAttribute("src","images\\dice" + randomNumber2 + ".png");






  if(randomNumber1 > randomNumber2){
    document.getElementsByTagName('h1')[0].innerText="Abdo win";
  }else if (randomNumber1 == randomNumber2) {
    document.getElementsByTagName('h1')[0].innerText="Draw";

  }else {
    document.getElementsByTagName('h1')[0].innerText="Radwa win";
  }

});
