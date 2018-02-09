var sent = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();
sent = sent.replace('Velociraptor', dinosaur);
console.log(sent.substring(0, (sent.length/2)));