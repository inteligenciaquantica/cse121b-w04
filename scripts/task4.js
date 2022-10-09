/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const mySelf = {name:'Jorge de O Echeimberg',
               photo:'images/raquel_jorge.png',
            favoriteFoods:['crab','fish','octopus','shrimp'],
            hobbies:['reading books','watching movies','watching documentaries','listening to songs'],
            placesLived:[]
            }

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

mySelf.placesLived = [{place: '', lenght:''},{place: '', lenght:''},{place: '', lenght:''}];
// Step 8: For each property, add appropriate values as strings
mySelf.placesLived[0].place = 'Brazil';
mySelf.placesLived[0].lenght = '50 years';
// Step 9: Add additional objects with the same properties for each place you've lived

mySelf.placesLived[1].place = 'Italy';
mySelf.placesLived[1].lenght = '2 years';

mySelf.placesLived[2].place = 'USA';
mySelf.placesLived[2].lenght = '6 months';

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML = mySelf.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('src',mySelf.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('alt',mySelf.favoriteFoods);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const nodeLi = document.createElement("li");

let li = [];
for(let i=0;i<mySelf.favoriteFoods.length;i++){ 
    li[i] = mySelf.favoriteFoods[i];
}

const textnodeLi = document.createTextNode(li);
nodeLi.appendChild(textnodeLi);

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById('favorite-foods').appendChild(nodeLi);
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const nodeHo = document.createElement("li");


for(let i=0;i<mySelf.hobbies.length;i++){ 
    li[i] = mySelf.hobbies[i];
}

const textnodeHo = document.createTextNode(li);
nodeHo.appendChild(textnodeHo);

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById('hobbies').appendChild(nodeHo);
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let dt = [];
let dd = [];
const nodeDt = document.createElement("dt");
const nodeDd = document.createElement("dd");
for(let i=0;i<mySelf.placesLived.length;i++){ 
    dt[i] = mySelf.placesLived[i].place;
}
const textnodeDt = document.createTextNode(dt);
nodeDt.appendChild(textnodeDt);

for(let i=0;i<mySelf.placesLived.length;i++){ 
    dd[i] = mySelf.placesLived[i].lenght;
}
const textnodeDd = document.createTextNode(dd);
nodeDd.appendChild(textnodeDd);

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.getElementById('places-lived').appendChild(nodeDt);
document.getElementById('places-lived').appendChild(nodeDd);

