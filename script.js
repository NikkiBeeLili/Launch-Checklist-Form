// Write your JavaScript code here!

//not sure where else to add preventDefault()
window.addEventListener("load", function(response) {
   let formSubmit = document.getElementById('formSubmit');  
   formSubmit.addEventListener("click", function(event) { 
      let pilot = document.getElementById('pilotName').value; 
      let coPilot = document.querySelector('input[name=copilotName]').value; 
      let fuelLevel = document.querySelector('input[name=fuelLevel]').value; 
      let cargoMass = document.querySelector('input[name=cargoMass]').value; 
      let pilotStatus = document.getElementById('pilotStatus'); 
      let coPilotStatus = document.getElementById('copilotStatus'); 
      let fuelStatus = document.getElementById('fuelStatus'); 
      let cargoStatus = document.getElementById('cargoStatus'); 
      let launchStatus= document.getElementById('launchStatus');
      let faultyItems= document.getElementById('faultyItems')
      
if (pilot === ''|| coPilot === '' ||fuelLevel === ''||cargoMass ==='') {
   alert("All fields are required!");
   launchStatus.innerHTML = "Shuttle is not ready for launch.";
   event.preventDefault(); 
   

}

else if(!isNaN(pilot) || !isNaN(coPilot)  || isNaN(fuelLevel) ||  isNaN(cargoMass)){
   alert("Make sure to enter valid information for each field!"); 
   launchStatus.innerHTML = "Shuttle is not ready for launch.";
   event.preventDefault(); 
  
} 
//else {
   //pilotStatus.innerHTML = `Pilot: ${pilot} Ready.`; 
   //coPilotStatus.innerHTML = `Co-Pilot: ${coPilot} Ready.`; 
//}
 
  


   if (fuelLevel < 10000){
      faultyItems.style.visibility = "visible"; 
      pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
      coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
      launchStatus.innerHTML = "Shuttle is not ready for launch.";
      fuelStatus.innerHTML = "There is not enough fuel for the journey!";
      launchStatus.style.color = "red"; 
      event.preventDefault(); 
  } 
  else if (cargoMass > 10000){
   faultyItems.style.visibilty = "visible"; 
   pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
   coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
   launchStatus.innerHTML = "Shuttle is not ready for launch.";
   cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
   launchStatus.style.color = "red";
   event.preventDefault(); 


  }

 else {
 launchStatus.innerHTML = "Shuttle is ready for launch"; 
 pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
 launchStatus.style.color = "green"; 
fuelStatus.innerHTML = "Cargo mass is light enough for launch.";
 cargoStatus.innerHTML = "Fuel levels are sufficient for launch."; 
  

 
 }

})


 
 

   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){ //Generating in Browser with link to launchcode page
    
      response.json().then(function(json){         //But not recognizing the objects. 
         let index = Math.floor(Math.random()*(json.length)); 
         const missionTarget = document.getElementById("missionTarget"); //not generating with link to file in folder at all. 
          //unsure how to handle picking destination array results 
         missionTarget.innerHTML +=  //Would like to implement the bonus mission       
         `<h2>Mission Destination</h2> 
         <ol>
        <li>Name: ${json[index].name} </li> 
        <li>Diameter: ${json[index].diameter}</li> 
        <li>Star: ${json[index].star}</li>          
        <li>${json[index].distance}</li> 
        <li>${json[index].moons}</li>
       </ol>
        <img src= ${json[index].image} height=250></img> 

`;

      
      
      })


});

 }); 

     

 //Change the lists to reflect objects and values(too?)     
   




// more event.preventDefaults
//I need the event.preventDefault probably for the missionTarget section. 






//document.getElementById (replace HTML with Javascript, innerHTML)

   /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */ 