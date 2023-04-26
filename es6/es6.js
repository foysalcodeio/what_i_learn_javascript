var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibrary: function(){
        //console.log(this);
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};

javascript.printLibrary();