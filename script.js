const clickme= document.getElementById('btn');



clickme.addEventListener('click', (e) => {
    e.preventDefault()
    
    
    const text = document.getElementById('textarea').value;
    console.log(text)
    const li = document.createElement('li');
    console.log(li)
    li.innerText=text;
    console.log(li);
    const task = document.getElementsByClassName('original');
    task[0].appendChild(li);
     
    

    
     })