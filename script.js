// const player1Buttons = document.querySelectorAll(".left button");
// const player2Buttons = document.querySelectorAll(".right button");
// const resultText = document.querySelector("#result span");

// player1Buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const player1Choice = button.textContent;
//         const player2Choice = player2Buttons[Math.floor(Math.random() * 3)].textContent;
//         const winner = determineWinner(player1Choice, player2Choice);
//         displayResult(winner, player1Choice, player2Choice);
//     });
// });

// function determineWinner(player1Choice, player2Choice) {
//     if (player1Choice === player2Choice) {
//         return "It's a tie!";
//     } else if (
//         (player1Choice === "Rock" && player2Choice === "Scissor") ||
//         (player1Choice === "Paper" && player2Choice === "Rock") ||
//         (player1Choice === "Scissor" && player2Choice === "Paper")
//     ) {
//         return "Player 1 wins!";
//     } else {
//         return "Player 2 wins!";
//     }
// }

// function displayResult(winner, player1Choice, player2Choice) {
//     resultText.textContent = winner + ` (Player 1: ${player1Choice}, Player 2: ${player2Choice})`;
// }
const innerleft=document.querySelector('.innerleft');
var choice=document.querySelectorAll('#leftul .choice');
// const choice2=document.querySelectorAll('#rightul .choice');
let choice1 = ''; // Declare choice1 and choice2 at a higher scope
let choice2 = '';
choice.forEach((e1) =>{
e1.addEventListener('click',function(e){
    if(e1.textContent==='Rock'){
      
        innerleft.setAttribute('src','rock.jpeg.jpg')
       
        // innerleft.style.backgroundImage = 'url("rock.jpeg.jpg")';

        var newImage = document.createElement('img');
        newImage.src = 'rock.jpeg.jpg';
        innerleft.innerHTML = '';
        innerleft.appendChild(newImage);
         choice1=e1.textContent;

        
      
    }
    else if(e1.textContent==='Paper'){
     
            
        innerleft.setAttribute('src','paper.jpeg.jpg')
       
        // innerleft.style.backgroundImage = 'url("rock.jpeg.jpg")';

        var newImage = document.createElement('img');
        newImage.src = 'paper.jpeg.jpg';
        innerleft.innerHTML = '';
        innerleft.appendChild(newImage);
         choice1=e1.textContent;

       
    }
    else if(e1.textContent==='Scissor'){

            innerleft.setAttribute('src','scissor.jpeg.jpg')
           
            // innerleft.style.backgroundImage = 'url("rock.jpeg.jpg")';
    
            var newImage = document.createElement('img');
            newImage.src = 'scissor.jpeg.jpg';
            innerleft.innerHTML = '';
            innerleft.appendChild(newImage);
            choice1=e1.textContent;

    } 

})



})


const innerright=document.querySelector('.innerright');
var choice=document.querySelectorAll('#rightul .choice');

choice.forEach((e1) =>{
    e1.addEventListener('click',function(e){
        if(e1.textContent==='Rock'){
          
            innerright.setAttribute('src','rock.jpeg.jpg')
           
            // innerleft.style.backgroundImage = 'url("rock.jpeg.jpg")';
    
            var newImage = document.createElement('img');
            newImage.src = 'rock.jpeg.jpg';
            innerright.innerHTML = '';
            innerright.appendChild(newImage);
             choice2=e1.textContent;
           checkresult(choice1,choice2);
            
          
        }
        
        else if(e1.textContent==='Paper'){
         
                
            innerright.setAttribute('src','paper.jpeg.jpg')
           
            // innerleft.style.backgroundImage = 'url("rock.jpeg.jpg")';
    
            var newImage = document.createElement('img');
            newImage.src = 'paper.jpeg.jpg';
            innerright.innerHTML = '';
            innerright.appendChild(newImage);
            choice2=e1.textContent;
            checkresult(choice1,choice2);
             
           
        }
        else if(e1.textContent==='Scissor'){
    
            innerright.setAttribute('src','scissor.jpeg.jpg')
               
                // innerleft.style.backgroundImage = 'url("rock.jpeg.jpg")';
        
                var newImage = document.createElement('img');
                newImage.src = 'scissor.jpeg.jpg';
                innerright.innerHTML = '';
                innerright.appendChild(newImage);
                choice2=e1.textContent;
                checkresult(choice1,choice2);
                 
        } 
    
    })
    
    })

    let resulttext=document.getElementById('resulttext');

function checkresult(c1,c2){
    if(c1===c2){
        resulttext.innerHTML='';
        resulttext.innerHTML='Match is Draw !';

    }
    else if((c1==='Rock'&& c2==='Scissor')|| (c1==='Paper'&&c2==='Rock')||c1==='Scissor'&&c2==='Paper'){
        resulttext.innerHTML='';
        resulttext.innerHTML='Player 1 won'
    }
    else {
        resulttext.innerHTML='';
        resulttext.innerHTML='Player 2 won'
    }
    
    let disablebuttons=document.querySelectorAll('.choice');
    disablebuttons.forEach(x => {
        x.disabled = true;
        
    });

    


}

let Restart=document.getElementById('Restart');
Restart.addEventListener('click',function(e){

    let disablebuttons=document.querySelectorAll('.choice');
     
    disablebuttons.forEach(x => {
        x.disabled = false;
        
    });
    resulttext.innerHTML='Result:';
    innerleft.innerHTML = '';
    innerright.innerHTML = '';       
})

    