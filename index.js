const content=document.querySelector('#counter');

function increment() {
    var value=parseInt(content.innerText);
    value=value+1;
    content.innerText=value;
}

function decrement() {
    var value=parseInt(content.innerText);
    value=value-1;
    content.innerText=value;
}