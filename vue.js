window.onscroll=function(){
if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
> sponsorTop - 100){
    if(!sponsorActive){
        sponsorActive = true
        sponsor.classList.add('active')
    }
}
}