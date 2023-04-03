// // exporting to PDF
// function clickedFn () {
//   const me = document.querySelector('#body-app')
//   const myWindow = window.open("", "MsgWindow", "width=1440,height=1787");
//   const c = me.outerHTML.replace(`<a href="https://github.com/mazipan/bulma-resume-template" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#bd93f9;color:#fff;position:absolute;top:0;border:0;right:0" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>`, '');

//   const alllink = document.getElementsByTagName('link');
//   let csshref = '';
//   for (var i = 0; i< alllink.length; i++) {
//       const href = alllink[i].href;
//       if (href && href.indexOf('dracula') > 0) {
//           csshref = href;
//       }
//   }

//   myWindow.document.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="' + csshref + '"></head><body>');
//   myWindow.document.write(`${c}`);
//   myWindow.document.write('</body></html>');
// }

// setTimeout (() => {
//   document.querySelector("#test-btn").addEventListener("click", clickedFn);
// }, 1000)

//Get form data
const getSearchParameters = () => {
    let prmstr = window.location.search.substr(1);
    return prmstr !== null && prmstr !== "" ? transformToAssocArray(prmstr) : {};
}

const transformToAssocArray = (prmstr) => {
    const params = {};
    const prmarr = prmstr.split("&");
    for (let i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1].replaceAll("+", " ").replaceAll("%40","@");
    }
    return params;
}

const params = getSearchParameters();



const fullName = document.getElementById("fullName")
fullName.innerHTML=`${params.fullName}`
const email = document.getElementById("email")
email.innerHTML=`${params.email}`
const email1 = document.getElementById("email1")
email1.innerHTML=`${params.email}`


if (params.age !== ""){
  const age = document.getElementById("age")
  const age1 = document.getElementById("age1")
age.innerHTML=`${params.age}`
  age1.classList.remove("is-hidden")
}
if (params.address !== ""){
  const address = document.getElementById("address")
  const address1 = document.getElementById("address1")
  const address2 = document.getElementById("address2")
  const address3 = document.getElementById("address3")
    const address4 = document.getElementById("address4")
address4.innerHTML=`<div class="gmap_canvas background back" ><iframe  width="100%" height="680"  id="gmap_canvas" src="https://maps.google.com/maps?q=${params.address}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`
address.innerHTML=`${params.address}`
  address1.classList.remove("is-hidden")
  address2.innerHTML=`${params.address}`
  address3.classList.remove("is-hidden")
}

if (params.number !== ""){
 const number = document.getElementById("number")
number.innerHTML=`${params.number}`
  const number1 = document.getElementById("number1")
  number1.classList.remove("is-hidden")
   const number2 = document.getElementById("number2")
number2.innerHTML=`${params.number}`
  const number3 = document.getElementById("number3")
  number3.classList.remove("is-hidden")
}
if (address.length>0){
 const address = document.getElementById("address")
address.innerHTML=`${params.address}`
  const address1 = document.getElementById("address1")

  address1.classList.remove("is-hidden")
}

if (params.about !==""){
 const about = document.getElementById("about")
about.innerHTML=`${params.about}`
  const about1 = document.getElementById("about1")
  about1.classList.remove("is-hidden")
}
const skill=[]
for (const param in params){
  if(param.startsWith("skill")){
    skill.push(params[param])
  }
}
const value=[]
for (const param in params){
  if(param.startsWith("value")){
    value.push(params[param])
  }
}
for(i=0;i<skill.length;i++){
  if(skill[i] !== ""){
    if (i<2){
      skills=document.getElementById("skills1")}
    else if(i<4){
      skills=document.getElementById("skills2")
    }
    else if (i<6){
      skills=document.getElementById("skills3")}
    else if (i<8){
      skills=document.getElementById("skills4")}
    else {
      skills=document.getElementById("skills5")}
     // elem=document.createElement("div")
      skills.innerHTML+=
        `<div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">${skill[i]}</span>
              <div class="progress">
                <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${value[i]}%;"></div><span class="progress-value">${value[i]}%</span>
              </div></div></div>`
     // skills.append(elem)
    skillsec=document.getElementById("skill")
    skillsec.classList.remove("is-hidden")
    }
  }


console.log(employmentcards)
//Note this assumes all have the same length



  
 



//fetching repeated education
const start=[]
for (const param in params){
  if(param.startsWith("start")){
    start.push(params[param])
  }
}
const schoolname=[]
for (const param in params){
  if(param.startsWith("schoolname")){
    schoolname.push(params[param])
  }
}
const field=[]
for (const param in params){
  if(param.startsWith("field")){
    field.push(params[param])
  }
}


const end=[]
for (const param in params){
  if(param.startsWith("end")){
    end.push(params[param])
  }
}
const levels=[]
for (const param in params){
  if(param.startsWith("levels")){
    levels.push(params[param])
  }
}
const des=[]
for (const param in params){
  if(param.startsWith("eddes")){
    des.push(params[param])
  }
}

edcards=document.getElementById("edcards")
for(i=0;i<schoolname.length;i++){
  if(schoolname[i]!==""){
     elem= document.createElement('div')
elem.innerHTML=` <div class="card">
      <div class="row">
        <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div class="card-body cc-education-header">
            <p>${start[i]} - ${end[i]}</p>
            <div class="h5">${levels[i]}</div>
          </div>
        </div>
        <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div class="card-body">
            <div class="h5">${field[i]}</div>
            <p class="category">${schoolname[i]}</p>
            <p>${des[i]}</p>
          </div>
        </div>
      </div>
    </div>`
      edcards.append(elem)
   
    
}}
//fetching repeated employments
const emstart=[]
for (const param in params){
  if(param.startsWith("emstart")){
    emstart.push(params[param])
  }
}
const emtitle=[]
for (const param in params){
  if(param.startsWith("emtitle")){
    emtitle.push(params[param])
  }
}
const emdes=[]
for (const param in params){
  if(param.startsWith("emdes")){
    emdes.push(params[param])
  }
}
console.log(emtitle)

const emend=[]
for (const param in params){
  if(param.startsWith("emend")){
    emend.push(params[param])
  }
}
const employers=[]
for (const param in params){
  if(param.startsWith("employer")){
    employers.push(params[param])
  }
}
employmentcards=document.getElementById("employmentcards")
console.log(employmentcards)
//Note this assumes all have the same length
experience=document.getElementById("experience")

console.log(employers)
for(i=0;i<emtitle.length;i++){
  if(emtitle[i].length>0){
     elem= document.createElement('div')
elem.innerHTML=` <div class="card">
      <div class="row">
        <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div class="card-body cc-experience-header">
            <p> ${emstart[i]}- ${emend[i]}</p>
            <div class="h5">${employers[i]}</div>
          </div>
        </div>
        <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div class="card-body">
            <div class="h5">${emtitle[i]}</div>
            <p> ${emdes[i]}</p>
          </div>
        </div>
      </div>
    </div>`
      employmentcards.append(elem)
      experience.classList.remove("is-hidden")
    }
}


/*user enters stuff
page is loaded with images depeding on stuff*/


const ptitle=[]
for (const param in params){
  if(param.startsWith("ptitle")){
    ptitle.push(params[param])
  }
}
const ptype=[]
for (const param in params){
  if(param.startsWith("ptype")){
    ptype.push(params[param])
  }
}
const pdes=[]
for (const param in params){
  if(param.startsWith("pdes")){
    pdes.push(params[param])
  }
}
const plink=[]
for (const param in params){
  if(param.startsWith("plink")){
    plink.push(params[param])
  }
}



for(i=0;i<ptitle.length;i++){
  console.log(ptitle)
  const g=i
  console.log(i)
  if(ptitle[i] !==""){
    portfolio=document.getElementById("portfolio")
    portfolio.classList.remove("is-hidden")
let myQuery=`https://api.unsplash.com/search/photos?query=${ptype[i]}`
    console.log(i)
const fetchData = async () => {
const data = await fetch(myQuery, {
  headers: {
    Authorization: 'Client-ID fKaRb0_5jZ5EL2yptS8wW3pHvuUOPbKIeSZz8-cUaeE'
  }
});
  return data.json();
} 
console.log(i)

fetchData().then(data => {
  console.log(i)

imgurl=data.results[g].links.download
  console.log(i)
  console.log(ptype)
elem= document.createElement('div') 
elem.innerHTML=`
           <a href="https://${plink[g]}" target="_blank" rel="tooltip" title="${pdes[g]}">
                  <figure  class="cc-effect"><img src="${imgurl}" alt="${pdes[g]}"/>
                    <figcaption>
                      <div class="h4">${ptitle[g]}</div>
                      <p>${ptype[g]}</p>
                    </figcaption>
                  </figure></a>`
div=document.getElementById(`img${g}`)
div.append(elem)
div.classList.remove("is-hidden")})
    
  

}}

//Email
let sendButton = document.getElementById('sendButton');
const form = document.getElementById('contact')
sendButton.addEventListener('click', function(e){
  
})

