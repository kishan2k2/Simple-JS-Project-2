//creating an array of object, so we dont have to hard code it
data=[{
    name: 'Kishan',
    age:'19'
},
{
    name: 'ayush',
    age:'19'
}
]


// selecting query 
const info= document.querySelector('#info')
//mapping all the elements of data, i.e. applying a  higher order function to all the elements in the list.
//ig item is the name of every object that the data array provides, item.contentinside
let details=data.map(function(item) {
    return '<div>'+ item.name+' '+ item.age+'</div>';
});
info.innerHTML=details.join('\n')
console.log(typeof(details))