//Sets
var s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 3
s.has("hello") === true

//WeakSEt
var ws = new WeakSet()
ws.add({ data: 42 })


//Maps
var m = new Map()
m.set("hello", 42)
m.set(s, 34)
m.get(s) == 34

// Weak Maps
var vm = new WeakMap()
vm.set(s, { extra: 42 });
vm.size === undefined


