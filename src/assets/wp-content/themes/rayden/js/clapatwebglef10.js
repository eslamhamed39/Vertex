
class ClapatWebGL {

  constructor(opts) {
    this.scene = new THREE.Scene();
    this.vertex = `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}`;
    this.material = opts.material;
    this.fragment = opts.fragment;
    this.uniforms = opts.uniforms;
    this.renderer = new THREE.WebGLRenderer();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    //this.renderer.setClearColor(0xeeeeee, 1);
    this.renderer.setClearColor(0x23272A, 1.0);

    this.container = document.getElementById("canvas-slider");
    this.images = Array.from( document.querySelectorAll('.slide-img') );;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.container.appendChild( this.renderer.domElement );

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 2);

    this.current = 0;
    this.textures = [];

    this.isRunning = false;
    this.paused = true;
    this.initiate(()=>{
      //console.log(this.textures);
      this.setupResize();
      this.addObjects();
      this.resize();
      this.play();
    })

  }

  initiate(cb){

    const promises = [];
    let that = this;
    this.images.forEach((img,i)=>{
      let promise = new Promise(resolve => {

        that.textures[i] = new THREE.TextureLoader().load( img.src, resolve );
      });
      promises.push(promise);
    })

    Promise.all(promises).then(() => {
      cb();
    });
  }

  setupResize() {

    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    // image cover
    this.imageAspect = this.textures[0].image.height/this.textures[0].image.width;
    let a1; let a2;
    if(this.height/this.width>this.imageAspect) {
      a1 = (this.width/this.height) * this.imageAspect ;
      a2 = 1;
    } else{
      a1 = 1;
      a2 = (this.height/this.width) / this.imageAspect;
    }

    this.material.uniforms.resolution.value.x = this.width;
    this.material.uniforms.resolution.value.y = this.height;
    this.material.uniforms.resolution.value.z = a1;
    this.material.uniforms.resolution.value.w = a2;

    const dist  = this.camera.position.z;
    const height = 1;
    this.camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist));

    this.plane.scale.x = this.camera.aspect;
    this.plane.scale.y = 1;

    this.camera.updateProjectionMatrix();

  }

  addObjects() {

    let dispImg = new THREE.TextureLoader().load( jQuery('#showcase-slider-webgl-holder').attr('data-pattern-img') );
		dispImg.wrapS = dispImg.wrapT = THREE.RepeatWrapping;

		this.material = new THREE.ShaderMaterial({
                    			  uniforms: {
                        				effectFactor: { type: "f", value: 0.15 },
                        				dispFactor: { type: "f", value: 0.0 },
                        				currentImage: { type: "t", value: this.textures[0] },
                        				nextImage: { type: "t", value: this.textures[1] },
                        				disp: { type: "t", value: dispImg },
                        				resolution: { type: "v4", value: new THREE.Vector4() },
                    				},
                            vertexShader: this.vertex,
			                      fragmentShader: this.fragment,
			                      transparent: true,
			                      opacity: 1.0 });

    this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  stop() {
    this.paused = true;
  }

  play() {
    this.paused = false;
    this.render();
  }

  render() {

    if (this.paused) return;

    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
