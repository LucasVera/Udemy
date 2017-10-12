(() => {
    /*
    for(var i=0 ; i<10 ; i++){
        window.setTimeout(()=>{
            console.log(i);
        },0);
    }
*/
    const person = {
        name:{first:'luc', last:'ver'},
        roles: ['admin'],
        isActive: true
    };

    const printPerson = (person)=>{
        const roles = person.roles;
        const firstName = person.name.first;
        const lastName = person.name.last;
        /*
        console.log(roles);
        console.log(roles.length);
        console.log([firstName, lastName]);
        */
    };

    printPerson(person);

    const printPerson2 = (person)=>{
        const {roles, name:{first, last}} = person;
        /*
        console.log(roles);
        console.log(roles.length);
        console.log([first, last]);
        */
    }
    printPerson2(person);

    const printPerson3 = (param1, {roles, name:{first, last}})=>{
        /*
        console.log(param1);
        console.log(roles);
        console.log(roles.length);
        console.log([first, last]);
        */
    }
    printPerson3('a', person);

    const getTrack = () => {
        return {title:'track 1', length: 10};
    }
    const {title, length, description='Desc not found'} = getTrack();


    // arrays deconstruction
    const array = [1,2,3,4,5,6,7];

    const [firstNum, secondNum, thirdNum] = array;
    const [x1, y1, ,,,,, z1] = array; // z1 will be the 7nth position of the array
    const [head1, head2, ... rest] = array; // rest will have the rest of the array positions, minus the 2 firsts
    

    const getPoint = ()=>{
        let x=0;
        let y=0;
        // do stuff with x,y

        return {x,y}; // will return {x:x, y:y}
    };

    const person2={
        name:'test',
        sayHello(){
            /*
            console.log(`hello, ${this.name}`);
            */
        }
    };

    // computed property:
    const person3={
        name:'person3',
        ['computed-' +'property' + Math.random()]:'computed test'
    };




    // promises

    function loadUsers(){
        return new Promise((done, fail)=>{
            $.ajax('/users.json',{
                dataType:'json',
                success(data){done(data);},
                error(error){done(error);}
            });
        });
    }

    function loadTracks(){
        return new Promise((done, fail)=>{
            $.ajax('/tracks.json',{
                dataType:'json',
                success(data){done(data);},
                error(error){done(error);}
            });
        });
    }
/*
    loadUsers().then(
        data => {
            console.log('OK');
            console.log(data);
        },
        error => {
            console.log('Error!');
            console.log(error);
        });
*/    
    function succeedAt(milliseconds){
        return new Promise((done, fail)=>{
            window.setTimeout(done, milliseconds);
        });
    }
    function failAt(milliseconds){
        return new Promise((done, fail)=>{
            window.setTimeout(fail, milliseconds);
        });
    }
/*
    succeedAt(2000)
        .then(()=>loadUsers())
        .then(data=>console.log(data));
*/

    function testPromise(){
        return new Promise((done, fail)=>{
            setTimeout(done, 1500);
        });
    }

    function testPromise2(){
        return new Promise((done,fail)=>{
            setTimeout(done, 1000);
        });
    }
/*
    Promise.all([loadUsers(), loadTracks()])
        .then(data=>{
            const [users, tracks] = data;
            console.log(users);
            console.log(tracks);
        });
*/
    Promise.all([testPromise(), testPromise2()])
        .then(data =>{
            console.log('finished');
        });

})();