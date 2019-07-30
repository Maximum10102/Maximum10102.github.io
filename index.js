let gif = document.getElementById('g')

if(document.clientWidth <= 1280 || document.clientHeight <= 576){
    gif.outerHTML ='<img src="/Computer.gif" style="max-width: 500;" alt="Old computer  gif" id="g"></img>'
}