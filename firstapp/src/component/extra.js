var a = [{'a': 1}, {'b': 2}, {'c': 3}]
a.map((data) => {
    for(key in data){
        console.log(data[key])
    }
})