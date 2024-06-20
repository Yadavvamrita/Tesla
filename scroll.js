document.lastScrollPosition=0;
document.lastCentred=0;
document.onWayTo = null;
document.addEventListener('scroll',()=>{
const direction= window.pageYOffset - document.lastScrollPoasition > 0? 'down': 'up';
const sections =[...document.querySelectorAll('section')];
if(document.onWayTo=== null){
   const destIndex = direction == 'up' ? document.lastCentered-1: document.lastCentered +1;
   if (destIndex >=0 && destIndex <section.length){
      console.log({destIndex, direction});
      document.onWayTo = destIndex;
       window.scroll( sections[destIndex].offsetTop);
   }
}



sections.forEach((section , index)=>{
   if (window.pageYOffset ===section.offsetTop){
document.lastCentres= index;
section.className = 'active';
if(document.onWayTo===index){
 document.onWayTo = null; 
}
   } else{
      section.className='';
   }
})

document.lastScrollPosition = window.pageYOffset;
})