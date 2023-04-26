//list matching
var [ a, ,b ] = [1,2,3];

// can be used parameter position
function func ( { name: x } )
{
    console.log(x)
}

func ({name: 5})

var [a] = [];
a === undefined

var [a = 1] = []
a === 1

