function alex(){
    console.log("click")
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSclrvDeN74SXJzu_W0qVO39Wf_kp4UTF6H0hLqo-CjSQp9g2Q/formResponse', {
    //fetch('https://docs.google.com/forms/d/e/1FAIpQLSclrvDeN74SXJzu_W0qVO39Wf_kp4UTF6H0hLqo-CjSQp9g2Q/viewform?usp=pp_url', {
        method: 'post',
        
        // mode: 'no-cors',
        //mode: 'no-cors',
        mode: 'cors',
        
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          //"Content-type": "text/plain",
          //"Access-Control-Allow-Origin":""
        },
        body: 
        'entry.2005620554=Mi nombre es tirutiru&entry.1045781291=correo@datos.com&entry.1166974658=5512345678&entry.839337160=Enviando los datos de test'
      }).then( (data) =>{
        console.log(data)
    } );
      
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", ()=>{
  console.log("click")
  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSclrvDeN74SXJzu_W0qVO39Wf_kp4UTF6H0hLqo-CjSQp9g2Q/formResponse', {
  //fetch('https://docs.google.com/forms/d/e/1FAIpQLSclrvDeN74SXJzu_W0qVO39Wf_kp4UTF6H0hLqo-CjSQp9g2Q/viewform?usp=pp_url', {
      method: 'post',
      
      // mode: 'no-cors',
      //mode: 'no-cors',
      mode: 'cors',
      
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        //"Content-type": "text/plain",
        //"Access-Control-Allow-Origin":""
      },
      body: 
      'entry.2005620554=Mi nombre es tirutiru&entry.1045781291=correo@datos.com&entry.1166974658=5512345678&entry.839337160=Enviando los datos de test'
    }).then( (data) =>{
      console.log(data)
  } );
})
