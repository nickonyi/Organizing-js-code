const btn = document.querySelector('.btn');
const txt = document.querySelector('.text');
const body = document.querySelector('body');



btn.addEventListener('click',()=>{
   const player1 = new Player('Aaron','x');
   const player3 = new Player('WanBisakaGodon','o');
   const player4 = new Player('Harry','The Lord Maguire')
    printName(player1);
    printName(playerTwo)
    printName(player3)
    player4.sayName();
})


function printName(player){
    const text = document.createElement('div');
    text.textContent = player.name;
    body.appendChild(text);
}

function Player(name,marker){
    this.name = name;
    this.marker = marker;
    this.sayName = ()=> {
        txt.textContent = `${name},${marker}`
    }
}

const playerOne = {
    name: "tim",
    marker: "X"
  };
  
  const playerTwo = {
    name: "jenn",
    marker: "O"
  };



  