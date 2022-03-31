
function suite (n){
    let UN = [0, 1, 2]
for(let i=3 ; i<n ; i++)
var x= 2*UN[i-1]+3*UN[i-3]
UN.push(x)
return x 
}
console.log(suite(5));