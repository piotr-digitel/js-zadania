uniqueCount = ['a','2','2','a','a'];


let counts = {};
let rezults='';
uniqueCount.forEach(function(element) {
  counts[element] = (counts[element] ?? 0) + 1;
});

for (let element in counts) {
    if(counts[element]>1) rezults+=  counts[element];
}

console.log( rezults);