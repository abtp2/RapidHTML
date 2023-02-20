"use strict";

/* do check is class or id or name is given or not, then do if else*/


function createHtmlElement(element) {
  const el = document.createElement(element['tag-name']);    
  if('class' in element){
  el.className = element['class']; 				
  }
  if('id' in element){
  el.id = element['id']; 				
  }
  if('src' in element){
  el.src = element['src']; 				
  }
  if('href' in element){
  el.href = element['href'];		
  }
  if('title' in element){
  el.title = element['title'];		
  }
  if('name' in element){
  el.name = element['name'];		
  }
  if('width' in element){
  el.style.width = element['width'];		
  }
  if('height' in element){
  el.style.height = element['height'];		
  }
  if('contenteditable' in element){
    if(element.contenteditable =="true"){
    el.contentEditable = true;
    }
    else{
    el.contentEditable = false;	
    }
  }
  if('content' in element){
  el.textContent = element.content;  				
  }



  
 
  
/*  
  if('tag-count' in element){
for (let i = 0; i < element['tag-count']; i++) {
  const content = element['content'][i];
  const html = `<${element['tag-name']} ${element.class[i+1]}>${content}</${element['tag-name']}>`;
}
}
 */



const hasClass = Object.keys(element)
  .filter(key => key.startsWith('attr'))
  .some(key => element[key][0] === 'class');



if('style' in element){
var classCheck = 'class' in element;

  if(classCheck == true || hasClass == true){
  el.className += " " + element['style'];			
  }  
  if(classCheck == false){
  el.className = " " + element['style'];			
  }
} 










  const attributes = Object.entries(element)
    .filter(([key, value]) => key.startsWith('attr'))
    .map(([key, value]) => value);
    

  for (let attr of attributes) {
    for(let i = 0;i < attributes.length; i += 2){
    el.setAttribute(attr[i], attr[i+1]);
    }
  }

  
return el;
}













function RH(x){
var check = 'container' in x;

if('container' in x && x['container'] !=""){
const el = createHtmlElement(x);
document.querySelector(x['container']).appendChild(el);	
}
else if(check !="true"){
const el = createHtmlElement(x);
document.body.appendChild(el);	
}
}
