let suaidade;
let aventura;
let ação;
let RPG;
let título;
let corpo;
let jogos = {
  menor10: {
  ação: "Yooka-Laylee",
  aventra: "Super Mário Odyssey",
  RPG: "Stardew Valley"
  },
  entre10e14:{
  ação:"Marvel's Spider-Man",
  aventura:"Final Fantasy",
  RPG:"Tales of Arise"
  },
  entre16e18:{
  ação:"DOOM Eternal",
  aventura:"Life Is Strange True Colors",
  RPG:"Persona 5 Royal"
  },
  maior18:{
  ação:"GTA V",
  aventura:"Red Dead Redemption II",
  RPG:"Divinity Original Sin 2"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(600,550).addClass("hidden");
  suaidade = createInput("").position(590,585).addClass("hidden");
  ação = createCheckbox("Gosta de jogos de Ação? 🎮").position(100,600).addClass("hidden");
   aventura = createCheckbox("Gosta de jogos de Aventura? 🎮").position(100,650).addClass("hidden");
   RPG = createCheckbox("Gosta de jogos de RPG? 🎮").position(100,700).addClass("hidden");
  título = "Mochiy Pop One";
  corpo = "Pixelify Sans";
  button = createButton("APERTA MEU BOTÃO😏").position(width/2,505);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el) =>
  el.removeClass("hidden"));
   button.hide();
}

function draw() {
   background(220);
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(30)
  text("MELHOR INDICADOR DE JOGOS", 400,20);
  textFont(corpo);
  
  let idade = parseInt(suaidade.value());
  let checkação = ação.checked();
  let checkaventura = aventura.checked();
  let checkRPG = RPG.checked();
  let jogo = "Insira suas preferências";
  if(suaidade.value() !== ""){
    jogo = mostrajogo(idade, checkação, checkaventura, checkRPG);
}
   fill("black");
  textAlign(CENTER,CENTER);
  textSize(50);
  textFont(corpo);
  text(jogo, width/2, height/2);
}
  
  
function mostrajogo(idade, checkação, checkaventura, checkRPG){
  if (isNaN(idade)){
    return "Idade Inválida";
  } else
    if (idade < 5){
     return "Sai daqui, você é uma criança 🧒🏼"
   } else
     if (idade > 120){
     return "Já morreu, enterra 💀"
   }
  if (idade >= 5 && idade < 10){
    if (checkação){
      return jogos["menor10"]["ação"];
    }
     if (checkaventura){
      return jogos["menor10"]["aventura"];
    }
     if (checkRPG){
      return jogos["menor10"]["RPG"];
    }
  }
  if (idade >= 10 && idade < 14){
    if (checkação){
      return jogos["entre10e14"]["ação"];
    }
     if (checkaventura){
      return jogos["entre10e14"]["aventura"];
    }
     if (checkRPG){
      return jogos["entre10e14"]["RPG"];
    }
  }
  if (idade >= 14 && idade < 14){
    if (checkação){
      return jogos["entre10e14"]["ação"];
    }
     if (checkaventura){
      return jogos["entre10e14"]["aventura"];
    }
     if (checkRPG){
      return jogos["entre10e14"]["RPG"];
    }
  }
}
  