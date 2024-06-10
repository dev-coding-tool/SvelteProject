// place files you want to import through the `$lib` alias in this folder.
const obj = {
    test: 'test'
}

function testFunction(test){
    if(test){
        console.log(test);
    }else{
        console.log('hello');
    }
}

class Commmon{
    constructor(){
        console.log('index.js');
    }
}

export {obj, testFunction, Commmon};