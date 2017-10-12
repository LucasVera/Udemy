'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
    /*
    for(var i=0 ; i<10 ; i++){
        window.setTimeout(()=>{
            console.log(i);
        },0);
    }
    */
    var person = {
        name: { first: 'luc', last: 'ver' },
        roles: ['admin'],
        isActive: true
    };

    var printPerson = function printPerson(person) {
        var roles = person.roles;
        var firstName = person.name.first;
        var lastName = person.name.last;
        /*
        console.log(roles);
        console.log(roles.length);
        console.log([firstName, lastName]);
        */
    };

    printPerson(person);

    var printPerson2 = function printPerson2(person) {
        var roles = person.roles,
            _person$name = person.name,
            first = _person$name.first,
            last = _person$name.last;
        /*
        console.log(roles);
        console.log(roles.length);
        console.log([first, last]);
        */
    };
    printPerson2(person);

    var printPerson3 = function printPerson3(param1, _ref) {
        /*
        console.log(param1);
        console.log(roles);
        console.log(roles.length);
        console.log([first, last]);
        */

        var roles = _ref.roles,
            _ref$name = _ref.name,
            first = _ref$name.first,
            last = _ref$name.last;
    };
    printPerson3('a', person);

    var getTrack = function getTrack() {
        return { title: 'track 1', length: 10 };
    };

    var _getTrack = getTrack(),
        title = _getTrack.title,
        length = _getTrack.length,
        _getTrack$description = _getTrack.description,
        description = _getTrack$description === undefined ? 'Desc not found' : _getTrack$description;

    // arrays deconstruction


    var array = [1, 2, 3, 4, 5, 6, 7];

    var firstNum = array[0],
        secondNum = array[1],
        thirdNum = array[2];
    var x1 = array[0],
        y1 = array[1],
        z1 = array[7]; // z1 will be the 7nth position of the array

    var head1 = array[0],
        head2 = array[1],
        rest = array.slice(2); // rest will have the rest of the array positions, minus the 2 firsts


    var getPoint = function getPoint() {
        var x = 0;
        var y = 0;
        // do stuff with x,y

        return { x: x, y: y }; // will return {x:x, y:y}
    };

    var person2 = {
        name: 'test',
        sayHello: function sayHello() {
            /*
            console.log(`hello, ${this.name}`);
            */
        }
    };

    // computed property:
    var person3 = _defineProperty({
        name: 'person3'
    }, 'computed-' + 'property' + Math.random(), 'computed test');

    // promises

    function loadUsers() {
        return new Promise(function (done, fail) {
            $.ajax('/users.json', {
                dataType: 'json',
                success: function success(data) {
                    done(data);
                },
                error: function error(_error) {
                    done(_error);
                }
            });
        });
    }

    function loadTracks() {
        return new Promise(function (done, fail) {
            $.ajax('/tracks.json', {
                dataType: 'json',
                success: function success(data) {
                    done(data);
                },
                error: function error(_error2) {
                    done(_error2);
                }
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
    function succeedAt(milliseconds) {
        return new Promise(function (done, fail) {
            window.setTimeout(done, milliseconds);
        });
    }
    function failAt(milliseconds) {
        return new Promise(function (done, fail) {
            window.setTimeout(fail, milliseconds);
        });
    }
    /*
        succeedAt(2000)
            .then(()=>loadUsers())
            .then(data=>console.log(data));
    */

    function testPromise() {
        return new Promise(function (done, fail) {
            setTimeout(done, 1500);
        });
    }

    function testPromise2() {
        return new Promise(function (done, fail) {
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
    Promise.all([testPromise(), testPromise2()]).then(function (data) {
        console.log('finished');
    });
})();