function _reduce(array, fn, init) {
    //fn (a,b)=>{}, init
    if (array.length === 0) {
        return;
    }

    let result;
    if (init) {
        result = init
        for (let i = 0; i < array.length; i++) {
            result = fn(result, array[i])
        }
    } else {
        result = array[0]
        for (let i = 1; i < array.length; i++) {
            result = fn(result, array[i])
        }
    }

    return result;
};

let h = _reduce([1, 2, 3], (a, b) => a + b, 10)
console.log(h)


//line=readline()
//print(line

let data = {
    value: 1,
    left: {
        value: 2,
        right:{
            value: 3,
        },
    },
    right: 3
}


function iderator(node){
    let result=[];
    if(node){
        result.push(node.value);
    }

    if(node.left){
        result=result.concat(iderator(node.left))
    }else if(node.right){
        result=result.concat(iderator(node.right))
    }
    return result
}

console.log(iderator(data))
