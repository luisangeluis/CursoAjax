/*
(()=>{
    const xhr = new XMLHttpRequest();
    $xhr = document.getElementById('xhr');
    $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange',(e)=>{

        if(xhr.readyState!==4)return;
        //console.log(xhr);

        if(xhr.status>=200 && xhr.status<400){
            console.log(xhr);
            console.log('exito');
            console.log(xhr.responseText);

        }else{
            console.log('error');

        }

    });
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.send();
})();
*/
(()=>{
    //alert('hola');
    const xhr = new XMLHttpRequest();
    $xxhr = document.getElementById('xhr');
    $fragment = document.createDocumentFragment();


    xhr.addEventListener('readystatechange',(e)=>{
        if(xhr.readyState!==4)
        return;
        //console.log(xhr);

        if(xhr.status>=200 && xhr.status<300){
            console.log('exito');
            //console.log(xhr.responseText);
            
            let json =JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li = document.createElement('li');
                 $li.innerText = `${el.name}--${el.email}`;
                 $fragment.appendChild($li);
            })
            $xxhr.appendChild($fragment);

            
        }else{
            console.log('error');
        }
        
       

    });

   // xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.open('GET','/CURSOAJAX/js/api.json');

    xhr.send();




})();