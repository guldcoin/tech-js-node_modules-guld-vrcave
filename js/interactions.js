   /*  document.addEventListener('click', function() {
                        event.preventDefault();

            onDocumentMouseDown(event);

        }, false);

 var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var objs=[guldScreen];
        function onDocumentMouseDown(event) {


            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera.children[0]);


            //  var target = raycaster.intersectObjects(targets, true);
            var intersects = raycaster.intersectObjects(objs, true);
            if (intersects && intersects[0]) {
                console.log(intersects[0])
                    window.open("./presentation.html","_self")

               
          
            }
        }*/
    
 /*       
document.addEventListener("keydown", function() {
    var x = event.keyCode;
    if ((x == 87 || x == 38) && animations[choose].isPlaying == false) { //W || Up arrow --> walk forward
        animations[choose].play();
        animations[choose].timeScale = 1;
    } else if ((x == 83 || x == 40) && animations[choose].isPlaying == false) { //S || Down arrow --> walk backward
        animations[choose].play();
        animations[choose].loop = true;
        animations[choose].timeScale = -1;
        setTimeout(function() {
            animations[choose].loop = false;
        }, 50)
    } else if (x == 69) {
        if (animations[choose].isPlaying == false) { //E --> auto walk forward
            animations[choose].play();
            animations[choose].loop = true;
            animations[choose].timeScale = 1;

            //setTimeout(function(){animations[choose].loop=false;}, 50)
        } else if (animations[choose].isPlaying == true) {
            animations[choose].loop = false;

        }
    } else if ((x == 32) && animations[choose].isPlaying == false) { //SPACEBAR
        animationz[0].play();
        animationz[0].timeScale = 1;
    }
})
*/