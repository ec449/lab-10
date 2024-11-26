//Q1
function greatUser(name){
document.getElementById('output').innerText = ("Hello " + name);
}

greatUser("Erica")
  
//Q2
function buttonClicked(){
    document.getElementById('message').innerText= "Hello, World!";
}
//Q3
function AddNumbers(){
    let a = 10;
    let b = 100;
    document.getElementById('result').innerText = (a+b);
}
//Q4
function Display(){
    let say = "My Life";
    document.getElementById('title').innerText = (say);
}
//Q5
function Combination(){
    let home= "I love Newark";
    let state="New Jersey";
    document.getElementById('CombinedText').innerText = home.concat(" and ",state);
}
//Q6
function Change(){
    document.getElementById('colorBox').addEventListener('click', Change);
    colorBox.style.backgroundColor="blue"
}



    
