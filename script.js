// Write your JavaScript code here!
//The validation for being blank works on all fields, as does the validation for invalid types of inputs. 
//The bottom of the page looks good, with the right information when the form is invalid. 
//The only issue is that the page refreshes when you click submit and all of the fields are valid. 
 
//Other than that, you could also combine some of your conditionals to simultaneously check cargo weight AND fuel level,
// which would make your code more concise.

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

 
  


   else if (fuelLevel < 10000 || cargoMass > 10000){
      event.preventDefault();
      faultyItems.style.visibility = "visible"; 
      pilotStatus.innerHTML = `Pilot ${pilot} is Ready.`; 
      coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is Ready.`; 
      launchStatus.innerHTML = "Shuttle is not ready for launch.";
      launchStatus.style.color = "red"; 
         (fuelLevel < 10000)
         fuelStatus.innerHTML = "There is not enough fuel for the journey!";
         event.preventDefault(); 
      
         (cargoMass > 10000)
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
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