function random(low, high) {
    return Math.random() * (high - low) + low;
  }


  const head = document.querySelector(".header")
  console.log(head.offsetWidth)
  class Visual {
    constructor() {
      this.canvas = document.querySelector('#canvas');
      this.context = this.canvas.getContext('2d');
      this.canvasWidth = 0;
      this.canvasHeight = 0;
      this.particleLength = 500;
      this.particles = [];
      this.particleMaxRadius = 20;
  
      this.handleMouseMoveBind = this.handleMouseMove.bind(this);
      this.handleClickBind = this.handleClick.bind(this);
      this.handleResizeBind = this.handleResize.bind(this);
  
      this.initialize();
      this.render();
    }
  
    initialize() {
      this.resizeCanvas();
      for (let i = 0; i < this.particleLength; i++) {
        this.particles.push(this.createParticle(i));
      }
      //this.bind();
    }

    handleMouseMove(e) {
      this.enlargeParticle(e.clientX, e.clientY);
    }
  
    handleClick(e) {
      this.burstParticle(e.clientX, e.clientY);
    }
  
    handleResize() {
      this.resizeCanvas();
    }
  
    resizeCanvas() {
      this.canvasWidth = head.offsetWidth;
      this.canvasHeight = head.offsetHeight;
      this.canvas.width = this.canvasWidth * window.devicePixelRatio;
      this.canvas.height = this.canvasHeight * window.devicePixelRatio;
      this.context = this.canvas.getContext('2d');
      this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  
    createParticle(id, isRecreate) {
      const radius = random(1, this.particleMaxRadius);
      const x = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
      let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
      y += random(-100, 100);
      const alpha = random(0.05, 1);
  
      return {
        id: id,
        x: x,
        y: y,
        startY: y,
        radius: radius,
        defaultRadius: radius,
        startAngle: 0,
        endAngle: Math.PI * 2,
        alpha: alpha,
        color: { r: 255 /*random(0, 100)*/, g: 255 /*random(0, 100)*/, b: 255 },
        speed: alpha + 1,
        amplitude: random(50, 300),
        isBurst: false
      };
    }
  
    drawParticles() {
      this.particles.forEach(particle => {
        // 位置情報更新
        this.moveParticle(particle);
  
        // particle描画
        this.context.beginPath();
        this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
        this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
        this.context.fill();
      });
    }
  
    moveParticle(particle) {
      particle.x += particle.speed;
      particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
    }
  
    enlargeParticle(clientX, clientY) {
      this.particles.forEach(particle => {
        if (particle.isBurst) return;
  
        const distance = Math.hypot(particle.x - clientX, particle.y - clientY);
  
        if (distance <= 100) {
          const scaling = (100 - distance) / 1.5;
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius + scaling,
            ease: Power2.easeOut
          });
        } else {
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius,
            ease: Power2.easeOut
          });
        }
      });
    }
  
    burstParticle(clientX, clientY) {
      this.particles.forEach(particle => {
        const distance = Math.hypot(particle.x - clientX, particle.y - clientY);
  
        if (distance <= 100) {
          particle.isBurst = true;
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius + 200,
            alpha: 0,
            ease: Power2.easeOut,
            onComplete: () => {
              this.particles[particle.id] = this.createParticle(particle.id, true);
            }
          });
        }
      });
    }
  
    render() {
      // canvas初期化
      this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);
  
      // particleを描画
      this.drawParticles();
  
      // 画面から消えたら新しいparticleに差し替え
      this.particles.forEach(particle => {
        if (particle.x - particle.radius >= this.canvasWidth) {
          this.particles[particle.id] = this.createParticle(particle.id, true);
        }
      });
  
      requestAnimationFrame(this.render.bind(this));
    }
  }
  

  export default Visual;