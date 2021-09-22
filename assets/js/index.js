//-------------------------------------------------FUNCTIONS
let savoirPlus=(liens,div)=>{


    liens.addEventListener('click',(e)=>{
    
        e.preventDefault();
        div.classList.toggle('invisible');
        
       


        
        
    })


};

let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click',(e)=>{

    alert("Envoyez Moi un mail: bleyvanalfred@gmail.com")
})
let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click',(e)=>{

    alert("Mon numero de telephone : 0757476085")
})
//-------------------------marketing
let aplus_marketing= document.querySelector('.aplus_marketing');
let divmarkview= document.querySelector('.marketing > div')



savoirPlus(aplus_marketing,divmarkview);

//----------------------------website

let aplus_website= document.querySelector('.aplus_website')
let divwebview= document.querySelector('.website > div');
savoirPlus(aplus_website,divwebview)
//-------------------------UI/UI designe

let aplus_design= document.querySelector('.aplus_design')
let divdesignview=document.querySelector('.design > div');
savoirPlus(aplus_design,divdesignview)

//-----------------------creative
let aplus_creative= document.querySelector('.aplus_creative')
let divcreativeview=document.querySelector('.creative > div');
savoirPlus(aplus_creative,divcreativeview)
//------------Optimisation
let aplus_opt= document.querySelector('.aplus_opt')
let divoptview=document.querySelector('.opt > div');
savoirPlus(aplus_opt,divoptview)
//--------------------bussiness
let aplus_buss= document.querySelector('.aplus_buss')
let divbussview=document.querySelector('.buss > div');
savoirPlus(aplus_buss,divbussview)

//----------------------------------------------------------------------------------------------------------------------