import { useEffect } from "react"
import animationBg from "../../assets/images/animation_bg.png";

export default function Animation(props){

useEffect(() => {
        const canvas = document.getElementById('container');
    const clone = document.getElementById('blurCanvasBottom');
    const cloneCtx = clone.getContext('2d');
    const ctx = canvas.getContext('2d');

    let ww = window.innerWidth;
    let wh = window.innerHeight;
    canvas.width = ww;
    canvas.height = wh;

    const partCount = 100;
    const particles = [];

    class Particle {
    constructor() {
        this.color = `rgba(255, 255, 255, ${Math.random()})`;
        this.x = randomInt(0, ww);
        this.y = randomInt(0, wh);
        this.direction = {
        x: -1 + Math.random() * 2,
        y: -1 + Math.random() * 2,
        };
        this.vx = 0.3 * Math.random();
        this.vy = 0.3 * Math.random();
        this.radius = randomInt(2, 10);
    }

    float() {
        this.x += this.vx * this.direction.x;
        this.y += this.vy * this.direction.y;
    }

    changeDirection(axis) {
        this.direction[axis] *= -1;
    }

    boundaryCheck() {
        if (this.x >= ww) {
        this.x = ww;
        this.changeDirection("x");
        } else if (this.x <= 0) {
        this.x = 0;
        this.changeDirection("x");
        }
        if (this.y >= wh) {
        this.y = wh;
        this.changeDirection("y");
        } else if (this.y <= 0) {
        this.y = 0;
        this.changeDirection("y");
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
    }

    function clearCanvas() {
    cloneCtx.clearRect(0, 0, ww, wh);
    ctx.clearRect(0, 0, ww, wh);
    }

    function createParticles() {
    for (let i = 0; i < partCount; i++) {
        const p = new Particle();
        particles.push(p);
    }
    }

    function drawParticles() {
    particles.forEach(p => p.draw());
    }

    function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.float();
        p.boundaryCheck();
    }
    }

    function animateParticles() {
    clearCanvas();
    drawParticles();
    updateParticles();
    cloneCtx.drawImage(canvas, 0, 0);
    requestAnimationFrame(animateParticles);
    }

    createParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
    cloneCtx.drawImage(canvas, 0, 0);

    window.addEventListener('resize', function () {
    ww = window.innerWidth;
    wh = window.innerHeight;
    canvas.width = ww;
    canvas.height = wh;
    clearCanvas();
    particles.length = 0;
    createParticles();
    drawParticles();
    });

    function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function velocityInt(min, max) {
    return Math.random() * (max - min + 1) + min;
    }
}, [])

    return(
        <div style={{backgroundImage: `url(${animationBg})`}} className="contrast animation-wrapper bg-[length:100%_100%]">
            <canvas className="container" id="container" role="main"></canvas>
                <div className="content">
                    <h1 className={`cinzel bg-[rgba(0,_0,_0,_0.5)] rounded-xl max-sm:text-[40px] text-[60px] text-white text-center font-bold`}>More Than 10 Years Of Experience</h1>
                </div>
        <div className="blur blurTop"><canvas class="canvas"id="blurCanvasTop"></canvas></div>
        <div className="blur blurBottom"><canvas width="1000px" height="1000px" class="canvas" id="blurCanvasBottom"></canvas></div>
    </div>
    )
}