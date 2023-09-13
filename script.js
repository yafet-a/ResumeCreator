//DARK MODE

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var containerElement = document.getElementById("form-container");

containerElement.classList.toggle("dark-mode");

  // Add the dark-mode class to all elements with class "box"
  var boxElements = document.querySelectorAll(".box");
  boxElements.forEach(function (boxElement) {
    boxElement.classList.toggle("dark-mode-box");
  });


  
  };

//WEBCAM
const webCamElement = document.getElementById('webCam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webCamElement, "user", canvasElement);
webcam.start();
retake = document.getElementById('retake')

function takePic(){
  let picture = webcam.snap();
  document.querySelector("a").href = picture;
};


//employment1 = document.getElementById("employment1")
//This is a temporary solution for a js thing. So for some reason, data fetched from appended stuff doesn't appear only things that have been on the html page from the beginning
addemployment = document.getElementById("add-employment")
employment = document.getElementById("employment")
emcounter = 1
addemployment.addEventListener("click", e => {
  emcounter++
  em = document.getElementById(`employment${emcounter}`)
  em.classList.remove("is-hidden")
  const inputs = em.querySelectorAll('input')
  console.log(em)
  console.log(inputs)
  for (const input of inputs) {
    console.log(input)
    input.removeAttribute('disabled')
  }
})

outputs=[]
sliders=[]

addSkills = document.getElementById("addSkills")
skills = document.getElementById("skills")
scounter = 1
addSkills.addEventListener("click", e => {
  scounter++
  s = document.getElementById(`skills${scounter}`)
  s.classList.remove("is-hidden")
  const inputs = s.querySelectorAll('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')}
sliderr = document.getElementById(`slider${scounter}`);
sliders.push(sliderr)
outputt = document.getElementById(`demo${scounter}`);
outputs.push(outputt)
  for(i=0;i<sliders.length;i++){
 
sliders[i].addEventListener("input", (e) => {
  outputs[sliders.indexOf(e.target)].innerHTML = e.target.value;
})
}
}
)

// const elem = 
//   document.createElement('div')
//   elem.innerHTML=`    
//      <br> <br>

//           <!-- JOB TITLE -->
//           <div class="field">
//             <p class="control has-icons-left">
//               <input name="emtitle${emcounter}"
//               class="input is-medium" type="jobtitle" placeholder="Job title" />
//               <span class="icon is-small is-left">
//                 <i class="fas fa-lock"></i>
//               </span>
//             </p>
//           </div>

//           <!-- EMPLOYER -->
//           <div class="field">
//             <p class="control has-icons-left has-icons-right">
//               <input name="employer${emcounter}" class="input is-medium" type="employer" placeholder="Employer" />
//               <span class="icon is-medium is-left">
//                 <i class="fas fa-envelope"></i>
//               </span>
//               <span class="icon is-medium is-right">
//               </span>
//             </p>
//           </div>

//           <!-- START DATE -->
//           <div class="field">
//             <p class="control has-icons-left has-icons-right">
//               <input name="emstart${emcounter}" class="input is-medium" type="startdate" placeholder="Start date" />
//               <span class="icon is-medium is-left">
//                 <i class="fas fa-phone"></i>
//               </span>
//               <span class="icon is-medium is-right">
//               </span>
//             </p>
//           </div>

//           <!-- END DATE -->
//           <div class="field">
//             <p class="control has-icons-left">
//               <input name="emend${emcounter}"class="input is-medium" type="enddate" placeholder="End date" />
//               <span class="icon is-small is-left">
//                 <i class="fas fa-calendar"></i>
//               </span>
//             </p>
//           </div>
//           `
//     employment1.append(elem)
// });
//trying next school
education1 = document.getElementById("education1")

addEducation = document.getElementById("addEducation")

edcounter = 1
addEducation.addEventListener("click", e => {
  edcounter++
  ed = document.getElementById(`school${edcounter}`)
  validateDates(`start${edcounter}`, `end${edcounter}`)

  ed.classList.remove("is-hidden")
  const inputs = ed.querySelectorAll('input')
  const drops = ed.querySelectorAll('select')
for (const drop of drops) {
   drop.removeAttribute('disabled')
  }
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }})
addProjects = document.getElementById("addProjects");

pcounter = 1
addProjects.addEventListener("click", e => {
  pcounter++
  p = document.getElementById(`projects${pcounter}`)
  p.classList.remove("is-hidden")
  const areas=p.querySelectorAll('textarea')
  for (const area of areas){
    area.removeAttribute('disabled')
  }
  const inputs = p.querySelectorAll('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }})
// addEducation.addEventListener("click", e => {
//   edcounter++
//   const elemed =
//     document.createElement('div')
//   elemed.innerHTML = `    
//      <br> <br>
// <!-- SCHOOL NAME -->
//           <div class="field ">
//             <p class="control has-icons-left">
//               <input class="input is-medium" type="schoolname" placeholder="School name" />
//               <span class="icon is-small is-left">
//                 <i class="fas fa-lock"></i>
//               </span>
//             </p>
//           </div>

//           <!-- EDUCATION LEVEL -->
//           <div class="dropdown">
//             <label for="educationLevel">Education Level </label>
//             <select name="levels" id="educationLevel">
//               <option value="highschool">Highschool</option>
//               <option value="Undergraduate">Undergraduate</option>
//               <option value="Postgraduate">Postgraduate</option>
//               <option value="Other">Other</option>

//             </select>
//           </div>

//           <!-- START DATE  -->
//           <div class="field">
//             <p class="control has-icons-left has-icons-right">
//               <input id="start1" class="input is-medium" type="startdate" placeholder="Start date" />
//               <span class="icon is-medium is-left">
//                 <i class="fas fa-envelope"></i>
//               </span>
//               <span class="icon is-medium is-right">
//               </span>
//             </p>
//           </div>

//           <!-- END DATE -->
//           <div class="field">
//             <p class="control has-icons-left has-icons-right">
//               <input id="end1" class="input is-medium" type="enddate" placeholder="End Date/ Expected End Date" />
//               <span class="icon is-medium is-left">
//                 <i class="fas fa-phone"></i>
//               </span>
//               <span class="icon is-medium is-right">
//               </span>
//             </p>
//           </div>

//           <!-- FIELD OF EDUCATION -->
//           <div class="field">
//             <!-- extension: make this into drop down select -->
//             <p class="control has-icons-left">
//               <input class="input is-medium" type="field" placeholder="Field of education" />
//               <span class="icon is-small is-left">
//                 <i class="fas fa-calendar"></i>
//               </span>
//             </p>
//           </div>`
//   education1.append(elemed)

// });
// project1 = document.getElementById("project1");

// project = document.getElementById("projects");

// projectscounter = 1
// addProjects.addEventListener("click", e => {
//   projectscounter++
//   const elemp =
//     document.createElement('div')
//   elemp.innerHTML = `
//       <br> <br>
//   <!-- PROJECT TITLE -->
//           <div class="field">
//             <p class="control has-icons-left">
//               <input class="input is-medium" type="projecttitle" placeholder="Project/ Work Experiences title" />
//               <span class="icon is-small is-left">
//                 <i class="fas fa-lock"></i>
//               </span>
//             </p>
//           </div>

//           <!-- DETAILS -->
//           <div class="field">
//             <textarea class="textarea" placeholder="Give details of your project/ work experience."
//               rows="10"></textarea>
//           </div>`
//   project1.append(elemp)
// });


//const nextpers = document.querySelector("#NextPersonal");  //way of accessing the DOM
//console.log(nextpers)
//login.addEventListener("click", event => { window.open("#") });

//const nextpers =document.getElementbyId("nextpers")
//nextpers.addEventListener("click",e=>{
//personalclassList.remove("is-hidden")
//});

//personal next (show education)
const nextpersonal = document.getElementById("nextpersonal")
education = document.getElementById("education")
nextpersonal.addEventListener("click", e => {
  education.classList.remove("is-hidden")
});
//education next (show employment)
const nextschool = document.getElementById("nexteducation")
nextschool.addEventListener("click", e => {
  employment.classList.remove("is-hidden")
});
//employment next (show projects)
const nextemployment = document.getElementById("nextemployment")
/*const nextslider = document.getElementById("nextslider")
slider = document.addEventListener("click", e => {
  slider.classList.remove("is-hidden")
});*/
projects = document.getElementById("projects")
skills = document.getElementById("skills")
nextemployment.addEventListener("click", e => {
  skills.classList.remove("is-hidden")
});

const nextskill=document.getElementById("nextskill")
nextskill.addEventListener("click", e => {
  projects.classList.remove("is-hidden")
});
//project next
//const nextproject=document.getElementById("nextproject")
//nextproject.addEventListener("click",e=>{
//  employment.classList.remove("is-hidden")
//});

//commented this as it stops my stuff working. you can comment paragraphs rather than doing it line by line with /* */
// const submit = document.querySelector("#submit");  //way of accessing the DOM
// console.log(submit)
// submit.addEventListener("click", event => { window.open("resumepg.html") });



//SLIDER 1
let slider1 = document.getElementById("slider1");
let output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
}

//SLIDER 2


/*
let slider3 = document.getElementById("slider3");
 output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value; 
slider3.oninput = function() {
  output3.innerHTML = this.value;
}*/


// skills1 = document.getElementById("skills1")

// addSkills = document.getElementById("addSkills")

// skcounter = 1
// addSkills.addEventListener("click", e => {
//   skcounter++
//   const elemsk =
//     document.createElement('div')
//   elemsk.innerHTML += `<input class="input is-small" type="text" placeholder="Skill"> <p> <span id="demo1"></span></p>
//     <input type="range" min="1" max="100" value="50" class="slider" id="slider1">

        
//         <!--<div class="slidecontainer"--> <p> <span id="demo2"></span></p>
//   <input type="range" min="1" max="100" value="50" class="slider" id="slider2"
// `
//   skills1.append(elemsk)
// });
/*function addSkills(){
  demo2.innerHTML("<br> <br>
        <div id="skills1">
          <input class="input is-small" type="text" placeholder="Skill"> <p> <span id="demo1"></span></p>
    <input type="range" min="1" max="100" value="50" class="slider" id="slider1">")
};*/

const validateDates = (startId, endId) => {
  let end = document.getElementById(endId);
  let start = document.getElementById(startId)
  end.addEventListener('input', (e) => {
     let endval = end.value
     let startval = start.value;
  if (endval<startval) {
    end.setCustomValidity('End date has to be after start date');
  } else {
    e.target.setCustomValidity('');
  }
  })
}

//check start date is after end date
validateDates('start1', 'end1')

validateDates('emstart1', 'emend1')

// var end1 = document.getElementById('end1');
// end1.addEventListener('input', function() {
//   var endval = document.getElementById('end1').value;
//   var startval = document.getElementById('start1').value;
//   if (endval<startval) {
//     end1.setCustomValidity('End date has to be after start date');
//   } else {
//     event.target.setCustomValidity('');
//   }
// });
// var emend1 = document.getElementById('emend1');
// emend1.addEventListener('input', function() {
//   var endval = document.getElementById('emend1').value;
//   var startval = document.getElementById('emstart1').value;
//   if (endval<startval) {
//     emend1.setCustomValidity('End date has to be after start date');
//   } else {
//     event.target.setCustomValidity('');
//   }
// });















