const header=document.getElementById("header");
window.onscroll=function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop>200 ){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
}