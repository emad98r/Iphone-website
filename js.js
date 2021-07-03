
  let header=document.querySelector("header"),
  mobileViwe=document.querySelector(".mobileViwe");
  window.addEventListener("scroll",function(){
    if(window.scrollY>=350){
      header.style.backgroundColor="white";
      header.style.color="black";
      mobileViwe.style.color="black";
      
    }else{
      header.style.backgroundColor="";
      header.style.color="white";
      mobileViwe.style.color="white";
      header.style.top="0";
    }
  })

  

  let backgroud=document.querySelector(".backgroud");
  window.addEventListener("scroll",function(){
    if(window.scrollY>=598){
      backgroud.style.display="block";
    }else{
      backgroud.style.display="none";

    }
  })

  let iphBlue=document.querySelector("#iphBlue"),
  iphGold=document.querySelector("#iphGold"),
  iphGrie=document.querySelector("#iphGrie"),
  iphWhite=document.querySelector("#iphWhite"),

   bigBlue=document.querySelector("#bigBlue"),
   bigGold=document.querySelector("#bigGold"),
   bigGrie=document.querySelector("#bigGrie"),
   bigWhite=document.querySelector("#bigWhite");

   iphBlue.addEventListener("click",function(){
     bigBlue.style.display="block";
     bigGold.style.display="none";
     bigGrie.style.display="none";
     bigWhite.style.display="none";
   });
   iphGold.addEventListener("click",function(){
     bigBlue.style.display="none";
     bigGold.style.display="block";
     bigGrie.style.display="none";
     bigWhite.style.display="none";
   });
   iphGrie.addEventListener("click",function(){
     bigBlue.style.display="none";
     bigGold.style.display="none";
     bigGrie.style.display="block";
     bigWhite.style.display="none";
   });
   iphWhite.addEventListener("click",function(){
     bigBlue.style.display="none";
     bigGold.style.display="none";
     bigGrie.style.display="none";
     bigWhite.style.display="block";
   });



  //  0 
  //  699
  //  1480
  //  2180
  //  2880
  //  3547

  let home=document.querySelector("nav ul li:first-of-type"),
  about=document.querySelector("nav ul li:nth-of-type(2)"),
  newFeatures=document.querySelector("nav ul li:nth-of-type(3)"),
  colors=document.querySelector("nav ul li:nth-of-type(4)"),
  upgraded=document.querySelector("nav ul li:nth-of-type(5)"),
  help=document.querySelector("nav ul li:nth-of-type(6)");

  home.addEventListener("click",function(){
    scrollTo({
      top:0,
      behavior:"smooth"
    });
  })



  about.addEventListener("click",function(){
    scrollTo({
      top:699,
      behavior:"smooth"
    });
  })
  newFeatures.addEventListener("click",function(){
    scrollTo({
      top:1480,
      behavior:"smooth"
    });
  })
  colors.addEventListener("click",function(){
    scrollTo({
      top:2180,
      behavior:"smooth"
    });
  })
  upgraded.addEventListener("click",function(){
    scrollTo({
      top:2880,
      behavior:"smooth"
    });
  })
  help.addEventListener("click",function(){
    scrollTo({
      top:3547,
      behavior:"smooth"
    });
  })
  
  let hideList=document.querySelector("#hideList"),
  nav=document.querySelector("nav");
  hideList.addEventListener("click",function(){

    if(nav.style.display==="none"){
      nav.style.display="block";
    }else{
      nav.style.display="none";
    }
  })
  

  let a=window.matchMedia("max-width: 400px");
  a.addEventListener("scroll",function(){
    if(window.scrollY>=1055){
      backgroud.style.display="block";
    }else{
      backgroud.style.display="none";

    
    }
  })
