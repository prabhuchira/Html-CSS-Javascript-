
var i = 0;
document.getElementById('caption').textContent = "Image-"+i+".jpg"; 
var j = 0;
document.querySelector('.bar-element').style.width ='0px';

var k = 1;
var g = 0;
// while(k<9){

document.querySelector('.toggle-btn').addEventListener('mouseenter',()=>{
    document.getElementById('nav-bar').style.display = 'block';
    document.getElementById('nav-bar').style.transition = 'display 0.2s';
    
});


document.querySelector('.toggle-btn').addEventListener('click',()=>{
    document.getElementById('nav-bar').style.display = 'block'  ;
    // document.getElementById('nav-bar').classList.add('appear');
    
    
});
document.querySelector('#nav-bar').addEventListener('mouseleave',()=>{
    document.getElementById('nav-bar').style.display = 'none';
    
    
    
});


setInterval(function(){ 
    // document.querySelector('#imageCo').style.transition = '0.2s ease';
  
    document.querySelector('#imageCo').src = 'images/image-'+k+'.jpg';
    document.querySelector('.bar-element').style.width = g * 33.3 + 'px' 
    // console.log(k);
    k++;
    g++;
    if(g===10){
        g=0;
    }
    if(k===9){
        k=1;
    }

     }, 2000);
    
    // }
    
// document.getElementById('bar').style.width = 0;
/* Starting of click Events */
document.getElementById('next').addEventListener('click',function(){
  
   
    j = j + 1;
    i = i +1;
    document.getElementById('imageCo').src = 'images/image-'+i+'.jpg';
    if(i===9){
       
        i = 0;
        
        
    }
    if(j == 10){
        j = 0;
    }
    document.querySelector('.bar-element').style.width = j * 33.3 + 'px' 
    document.getElementById('caption').textContent = "Image-"+i+".jpg";
   
} )


document.getElementById('previous').addEventListener('click',function(){
   
    if(i===0){
        i=9;
    }
    i = i - 1;
    j = j - 1;
    // j = 11 - j;
    if(i===0){
        i=9;
      
    }

    if(j <= 0){
        j = 8;
    }
    document.querySelector('.bar-element').style.width = j * 33.3 + 'px' 

    
    document.getElementById('imageCo').src = 'images/image-'+i+'.jpg';
  
    
    
   
} )



/* Ending of click events */

/* Starting of keyboard events */

window.addEventListener('keydown',function(event){
    if(event.key == 'ArrowRight' || event.key == 'ArrowUp') {

        
 
        j = j + 1;
        i = i +1;
        document.getElementById('imageCo').src = 'images/image-'+i+'.jpg';
        if(i===9){
           
            i = 0;
            
            
        }
        if(j == 9){
            j = 0;
        }
        document.querySelector('.bar-element').style.width = j * 33.3 + 'px';
        document.getElementById('caption').textContent = "Image-"+i+".jpg";
      
    }//Next{}
    else if(event.key == 'ArrowLeft' || event.key == 'ArrowDown'){
        
        if(i===0){
            i=9;
        }
        i = i - 1;
        j = j - 1;
        // j = 11 - j;
        if(i===0){
            i=9;
          
        }
    
        if(j <= 0){
            j = 8;
        }
        document.querySelector('.bar-element').style.width = j * 33.3 + 'px' 
    
        
        document.getElementById('imageCo').src = 'images/image-'+i+'.jpg';
       
      
   
    }//Previous
})

/* Ending of Key board events */



/* Date */

let d =  Date(Date.now());
document.querySelector('.date').textContent = d.toString();