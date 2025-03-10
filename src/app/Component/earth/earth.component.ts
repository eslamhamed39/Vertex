import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Scene, WebGLRenderer, OrthographicCamera, Points, Mesh, Raycaster, Vector2, Clock, Texture, ShaderMaterial, TextureLoader, IcosahedronGeometry, MeshBasicMaterial, SphereGeometry, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({ 
  selector: 'app-earth',
  template: `<div class="globe-wrapper" #globeContainer></div>`,
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements AfterViewInit, OnDestroy {
  @ViewChild('globeContainer', { static: false }) globeContainer!: ElementRef;
  private renderer!: WebGLRenderer;
  private scene!: Scene;
  private camera!: OrthographicCamera;
  private controls!: OrbitControls;
  private globe!: Points;
  private globeMesh!: Mesh;
  private pointer!: Mesh;
  private rayCaster!: Raycaster;
  private mouse!: Vector2;
  private clock!: Clock;
  private earthTexture!: Texture;
  private mapMaterial!: ShaderMaterial;
  private animationFrameId!: number;

  ngAfterViewInit() {
    this.initScene();
    window.addEventListener('resize', () => this.updateSize());
  }

  private initScene() {
    const containerEl = this.globeContainer.nativeElement;
    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Set background color to white
    this.renderer.setClearColor(0xffffff, 0);

    containerEl.appendChild(this.renderer.domElement);

    this.scene = new Scene();
    this.camera = new OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
    this.camera.position.z = 1.1;

    this.rayCaster = new Raycaster();
    this.rayCaster.far = 1.15;
    this.mouse = new Vector2(-1, -1);
    this.clock = new Clock();

    this.createOrbitControls();

    new TextureLoader().load(
      'https://ksenia-k.com/img/earth-map-colored.png',
      (mapTex) => {
        this.earthTexture = mapTex;
        this.createGlobe();
        this.createPointer();
        this.updateSize();
        this.render();
      }
    );
  }

  private createOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.enableDamping = true;
    this.controls.autoRotate = true;
  }

  private createGlobe() {
    const globeGeometry = new IcosahedronGeometry(1, 22);
    this.mapMaterial = new ShaderMaterial({
      vertexShader: `
        uniform sampler2D u_map_tex;
        uniform float u_dot_size;
        uniform float u_time_since_click;
        uniform vec3 u_pointer;

        #define PI 3.14159265359

        varying float vOpacity;
        varying vec2 vUv;

        void main() {
            vUv = uv;
            float visibility = step(.2, texture2D(u_map_tex, uv).r);
            gl_PointSize = visibility * u_dot_size;

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vOpacity = (1. / length(mvPosition.xyz) - .7);
            vOpacity = clamp(vOpacity, .03, 1.);

            float t = u_time_since_click - .1;
            t = max(0., t);
            float max_amp = .15;
            float dist = 1. - .5 * length(position - u_pointer);
            float damping = 1. / (1. + 20. * t);
            float delta = max_amp * damping * sin(5. * t * (1. + 2. * dist) - PI);
            delta *= 1. - smoothstep(.8, 1., dist);
            vec3 pos = position;
            pos *= (1. + delta);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
        }`,
      fragmentShader: `
        uniform sampler2D u_map_tex;
        varying float vOpacity;
        varying vec2 vUv;

        void main() {
            vec3 color = texture2D(u_map_tex, vUv).rgb;
            color -= .2 * length(gl_PointCoord.xy - vec2(.5));
            float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
            if (dot < 0.5) discard;
            gl_FragColor = vec4(color, dot * vOpacity);
        }`,
      uniforms: {
        u_map_tex: { value: this.earthTexture },
        u_dot_size: { value: 0 },
        u_pointer: { value: new Vector3(0, 0, 1) },
        u_time_since_click: { value: 0 }
      },
      transparent: true
    });

    this.globe = new Points(globeGeometry, this.mapMaterial);
    this.scene.add(this.globe);

    this.globeMesh = new Mesh(globeGeometry, new MeshBasicMaterial({
      color: 0x222222,
      transparent: true,
      opacity: 0.05
    }));
    (this.globeMesh.material as MeshBasicMaterial).opacity = 0.5;
    this.scene.add(this.globeMesh);
  }

  private createPointer() {
    const geometry = new SphereGeometry(0.04, 16, 16);
    const material = new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
    this.pointer = new Mesh(geometry, material);
    this.scene.add(this.pointer);
  }

  private updateSize() {
    const containerEl = this.globeContainer.nativeElement;
    const minSide = 0.65 * Math.min(window.innerWidth, window.innerHeight);
    containerEl.style.width = `${minSide}px`;
    containerEl.style.height = `${minSide}px`;
    this.renderer.setSize(minSide, minSide);

    // Adjust dot size dynamically
    if (this.mapMaterial && this.mapMaterial.uniforms) {
        this.mapMaterial.uniforms['u_dot_size'].value = 0.025 * minSide;
    }
  }

  private render = () => {
    this.mapMaterial.uniforms['u_time_since_click'].value = this.clock.getElapsedTime();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.render);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', () => this.updateSize());
  }
}