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
            //console.log('exito');
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

   xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    //xhr.open('GET','/CURSOAJAX/js/api.json');

    xhr.send();




})();

(()=>{

    //METODO FETCH
    const $fetch = document.querySelector('#fetch');
    $fragment = document.createDocumentFragment();
    //THEN RESPUESTA EXITOSA
    fetch('https://jsonplaceholder.typicode.com/user').then((res)=>{
        //TE MANDA LA INFO EN FORMATO READABLESTREAM
        console.log(res);
        
        //VALIDACION PARA QUE SE EJECUTE EL CATCH EN CASO QUE APLIQUE
        return res.ok?res.json():Promise.reject(res);
        
    }).then((json)=>{
        console.log(json);
    }).catch((err)=>{
        console.log("Estamos en el catch: ",err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerText =`Error: ${err.status}: ${message}`;
    }).finally(()=>{
        console.log('Esto se ejecuta independientemente del resultado de la promesa Fetch');
    });
})();