function draw() {
    setInterval(Timer, 1000);
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var y = 0; y < 500; y += 10) {
            for (var x = 0; x < 500; x += 10) {
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.fillRect(x, y, 10, 10);
                ctx.fillStyle = 'rgb(200, 200, 200)';
                ctx.fillRect(x + 1, y + 1, 8, 8);
            }
        }
        Hex(100, 100, 50, 'rgb(255,255, 255)', ctx);
        circle(100, 100, 50, ctx);

    }
    alert("hi");

    function Hex(x, y, len, color, ctx) {
        ctx.fillStyle = color;
        var pi = Math.PI;
        ctx.beginPath();
        ctx.moveTo(x, y);
        for (var i = 90; i <= 450; i += 60) {
            var x1 = x + Math.cos(i * (pi / 180)) * len;
            var y1 = y + Math.sin(i * (pi / 180)) * len;
            ctx.lineTo(x1, y1)
        }
        ctx.fill();
        ctx.closePath();
    }

    function circle(x, y, len, ctx) {
        ctx.beginPath();
        ctx.arc(x, y, len, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath()
    }

    function Timer() {
        let elem = document.getElementById('timer');
        var str = elem.innerText;
        var str = str.split(":");
        var min = parseInt(str[0]);
        var sec = parseInt(str[1]) + 1;
        if (sec == 60) {
            sec = 0;
            min += 1;
        }
        if (sec < 10) {
            var new_str = "0" + min.toString() + ":" + "0" + sec.toString();
        }
        else {
            var new_str = "0" + min.toString() + ":" + sec.toString();
        }
        elem.innerText = new_str;
    }
}



/*ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 100);
    ctx.lineTo(50, 150);
    ctx.lineTo(0, 100);
    ctx.fill();
    ctx.closePath();
    var pi = Math.PI;
    var x = 50;
    var y = 50;
    var len = 20;*/