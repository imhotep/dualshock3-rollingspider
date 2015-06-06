var dualShock = require('dualshock-controller');
var RollingSpider = require("rolling-spider");

var myDrone = new RollingSpider();

var controller = dualShock(
        {
            config: "dualShock3",
            accelerometer: true,
            analogStickSmoothing: false
        });


myDrone.connect(function() {
    myDrone.setup(function() {
        
        controller.connect();
        myDrone.flatTrim();
        myDrone.startPing();
        
        controller.on('error', function(data) {
            console.log("An error occurred", data);
        });

        controller.on('left:move', function(data) {
            console.log("Left Move:", data);
        });

        controller.on('right:move', function(data) {
            console.log('Right Move:', data);
        });

        controller.on('connected', function(data) {
            console.log('Connected to PS3 Dualshock Controller. Press Start button to take off!', data);
        });
        
        controller.on('cross:press', function(data) {
            console.log('Cross pressed!', data);
        });

        controller.on('cross:release', function(data) {
            console.log('Cross released. Performing a back flip!', data);
            myDrone.backFlip();
        });

        controller.on('square:press', function(data) {
            console.log('Square pressed!', data);
        });

        controller.on('square:release', function(data) {
            console.log('Square released. Performing a left flip!', data);
            myDrone.leftFlip();
        });
        
        controller.on('triangle:press', function(data) {
            console.log('Triangle pressed!', data);
        });

        controller.on('triangle:release', function(data) {
            console.log('Triangle released. Performing a front flip!', data);
            myDrone.frontFlip();
        });

        controller.on('circle:press', function(data) {
            console.log('Circle pressed!', data);
        });

        controller.on('circle:release', function(data) {
            console.log('Circle released. Performing a right flip!', data);
            myDrone.rightFlip();
        });

        controller.on('start:press', function(data) {
            console.log('Start pressed!', data);
        });

        controller.on('start:release', function(data) {
            console.log('Start released! Taking off!', data);
            myDrone.takeOff();
        });
        
        controller.on('select:press', function(data) {
            console.log('Select pressed!', data);
        });

        controller.on('select:release', function(data) {
            console.log('Select released! Landing!', data);
            myDrone.land();
        });
        
        // Motions
       // controller.on('rightLeft:motion', function (data) {
       //     //...doStuff();
       //     console.log("Right Left motion", data);
       // });
       // 
       // controller.on('forwardBackward:motion', function (data) {
       //     //...doStuff();
       //     console.log("Forward Backward motion", data);
       // });
       // 
       // controller.on('upDown:motion', function (data) {
       //     //...doStuff();
       //     console.log("Up Down motion", data);
       // });



        controller.on('battery:change', function (value) {
            //console.log(value);
        });
        controller.on('connection:change', function (value) {
            //console.log(value);
        });
        controller.on('charging:change', function (value) {
            //console.log(value);
        });
    });
});

