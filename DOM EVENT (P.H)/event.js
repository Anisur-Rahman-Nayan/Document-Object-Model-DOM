function makeBgTomato(){
    document.body.style.backgroundColor = 'tomato'
}




const blueBtn = document.getElementById('blue-btn')
blueBtn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = "blue"
}



const makeGreenBtn = document.getElementById('green-btn');
makeGreenBtn.onclick = function greenBtn(){
    document.body.style.backgroundColor = 'green'
}



const goldenrodBtn = document.getElementById('goldenrod-btn')
goldenrodBtn.addEventListener('click',makeGoldenRod);
function makeGoldenRod (){
    document.body.style.backgroundColor = "goldenrod"
}



const blackBtn = document.getElementById('black-btn')
blackBtn.addEventListener('click',function makeBlack(){
    document.body.style.backgroundColor = 'black'
})



document.getElementById('lawnGreen-btn').addEventListener('click',function(){
    document.body.style.backgroundColor = 'lawngreen'
})





function handleJustFunctionClick(){
    const clickingMethod = document.getElementById('clicking-method')
    clickingMethod.innerText="Set By Using Function !"
}



document.getElementById('handle-event').addEventListener('click',function(){
    const p = document.getElementById('clicking-method')
    p.innerText = 'Set By Using Direct Add Event Listener!'    
})




document.getElementById('update-name').addEventListener('click',function(){
    const nameField = document.getElementById('name-Field')
    const p = document.getElementById('clicking-method')
    p.innerText = nameField.value;
    nameField.value = ' ' 

})




document.getElementById('submit-comment').addEventListener('click',function(){
    const commentBox = document.getElementById('new-comment').value;
    
    const p = document.createElement('p')
    p.innerText = commentBox
    
    const showComment = document.getElementById('comment-container')
    showComment.appendChild(p)

    document.getElementById('new-comment').value = ' '

})





document.getElementById('delete-btn').addEventListener('click',function(){
    const messageDisplay = document.getElementById('display')
    messageDisplay.style.display = 'none'
    
})




document.getElementById('infoBox').addEventListener('focus',function(){
   document.body.style.background = 'lightcoral'
})


document.getElementById('infoBox').addEventListener('blur',function(){
   document.body.style.background = 'white'
})


// document.getElementById('infoBox').addEventListener('keydown',function(){
//    console.log('key Down !')
// })

// document.getElementById('infoBox').addEventListener('keypress',function(){
//    console.log('key press !')
// })

// document.getElementById('infoBox').addEventListener('keyup',function(){
//    console.log(document.getElementById('infoBox').value)
// })


// document.getElementById('infoBox').addEventListener('change',function(){
//    console.log(document.getElementById('infoBox').value)
// })

document.getElementById('infoBox').addEventListener('keyup',function(event){
    if (event.target.value == 'agree'){
        document.getElementById('btn-delete').removeAttribute('disabled')
    }
    else{
        document.getElementById('btn-delete').setAttribute('disabled',true)
    }
    
})


document.getElementById('btn-delete').addEventListener('click',function(){
    const getMessage = document.getElementById('infoBox').value
    if (getMessage == 'agree'){
        document.getElementById("display-box").style.display = 'none'
        document.getElementById('infoBox').value = ' '
    }
})


// document.getElementById('mouse-move').addEventListener('mousemove',function(){
//     console.log("mouse Is moving!")
// })


// document.getElementById('mouse-move').addEventListener('mouseenter',function(){
//     console.log("mouse is entered!")
// })


document.getElementById('mouse-move').addEventListener('mouseout',function(){
    console.log("mouse is outed!")
})
