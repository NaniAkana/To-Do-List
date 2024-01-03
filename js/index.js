const inboxx=document.getElementById('input');
const list=document.getElementById('data');
function data(){
if(inboxx.value === '')
{
    alert("enter text");
}
else{
    let li=document.createElement('li');
    li.innerHTML = inboxx.value;
    list.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML='REMOVE';
    li.appendChild(span);
    }
    inboxx.value="";


}

