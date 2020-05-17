const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
let startingX;

    //console.log(pointerStatus);
    button.addEventListener('touchstart', this.handleGestureStart, true);
    button.addEventListener('touchmove', this.handleGestureMove, true);
    button.addEventListener('touchend', this.handleGestureEnd, true);
    button.addEventListener('touchcancel', this.handleGestureEnd, true);

    function handleGestureStart(evt) {
       console.log(evt);
        startingX = evt.touches[0].clientX;
    
        console.log(startingX);
    }

    function handleGestureMove(evt){
        var touch = evt.touches[0];
        var change = startingX- touch.clientX;

        if (change < 0){
            return;
        }

        button.style.left = `-${change}px`;
        button2.style.display = 'block';
        button2.style.left = `${screen.width - change}px`;
        evt.preventDefault();
    }


    function handleGestureEnd(evt) {
        var change = startingX - evt.changedTouches[0].clientX;
        var threshold = screen.width/2;
        if(change < threshold){
            button.style.left = '0';
            button2.style.left='100%';
            button2.style.display='none';
        }else{
            button.style.transition = 'all .3s';
            button2.style.transition = 'all .3s';
            button.style.left = '-100%';
            button2.style.left='0';
            button2.style.display='block';
        }
    }

