

window.addEventListener("load", function(response) {
   let formSubmit = document.getElementById('formSubmit');  
   formSubmit.addEventListener("click", function(event) { 
      event.preventDefault(); 
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
   event.preventDefault(); 
   

}

else if(!isNaN(pilot) || !isNaN(coPilot)  || isNaN(fuelLevel) ||  isNaN(cargoMass)){
   alert("Make sure to enter valid information for each field!"); 
   event.preventDefault(); 
  
} 
else if (fuelLevel < 10000) {
   faultyItems.style.visibility = "visible"; 
   pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
   coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
   launchStatus.innerHTML = "Shuttle is not ready for launch.";
   launchStatus.style.color = "red"; 
   fuelStatus.innerHTML = "There is not enough fuel for the journey!";
      event.preventDefault(); 
   }
   else if (cargoMass > 10000){
   faultyItems.style.visibility = "visible"; 
   pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
   coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
   launchStatus.innerHTML = "Shuttle is not ready for launch.";
   launchStatus.style.color = "red"; 
   cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
      event.preventDefault(); 
     



}
 
  


   else if (fuelLevel < 10000 || cargoMass > 10000){
      faultyItems.style.visibility = "visible"; 
      pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
      coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
      launchStatus.innerHTML = "Shuttle is not ready for launch.";
      launchStatus.style.color = "red"; 
      event.preventDefault();

   }
         
  

 else {
 launchStatus.innerHTML = "Shuttle is ready for launch"; 
 faultyItems.style.visibility = "visible";
 pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
 launchStatus.style.color = "green"; 
fuelStatus.innerHTML = "Cargo mass is light enough for launch.";
 cargoStatus.innerHTML = "Fuel levels are sufficient for launch."; 
  

 
 }

})


 
 

   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){ 
    
      response.json().then(function(json){         
         let index = Math.floor(Math.random()*(json.length)); 
         const missionTarget = document.getElementById("missionTarget"); 
          
         missionTarget.innerHTML +=        
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