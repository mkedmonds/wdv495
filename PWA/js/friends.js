// const friends = {"Friend":[
//     {
let amy = {
            name:"Amy Apricot",
            phone:"555-555-5555",
            address:"123 Apricot Ave - Ames,IA 55555"
        };

let jesse = {
            name:"Jesse Josephs",
            phone:"222-222-2222",
            address:"456 Josephs St - Johnson, IA 22222"
        };

let mari = {
            name:"Mari Morrison",
            phone:"111-111-1111",
            address:"789 Morrison Dr. - Marshalltown, IA 11111"
        };

let noodle = {
            name:"Noodle Noddlestorm",
            phone:"333-333-3333",
            address:"012 Noodlestorm Lake - North Liberty, IA 33333"
        };

let olive = {
            name:"Olive Oliver",
            phone:"888-888-8888",
            address:"345 Oliver Railway - Ottumwa, IA 88888"
        };

let friends = [amy, jesse, mari, noodle,olive];
        
//     }
// ]}

let friendJSON = JSON.stringify(friends);

console.log(friendJSON);

window.localStorage.setItem("FriendsInfo", friendJSON);