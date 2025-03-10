import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { WebGLRenderer, Scene, PerspectiveCamera, Points, Vector3, BufferGeometry, Float32BufferAttribute, PointsMaterial, TextureLoader } from 'three';
import { TweenMax, Power2 } from 'gsap';
import { Router } from '@angular/router';

interface CustomVector3 extends Vector3 {
  destination: { x: number; y: number; z: number };
  speed: number;
}

interface CustomBufferGeometry extends BufferGeometry {
  customData: CustomVector3[];
}

@Component({
  selector: 'app-logo3d',
  templateUrl: './logo3d.component.html',
  styleUrls: ['./logo3d.component.css']
})
export class Logo3dComponent implements AfterViewInit {
  private renderer!: WebGLRenderer;
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private particles!: Points;
  private ww!: number;
  private wh!: number;
  private centerVector = new Vector3(0, 0, 0);
  private previousTime = 0;
  private imagedata!: ImageData;

  constructor(private el: ElementRef, private router: Router) { }

  navigateWithReload(url: string) {
    this.router.navigateByUrl(url).then(() => {
      window.location.reload();
    });
  }

  ngAfterViewInit() {
    this.init();
  }

  private init() {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;

    this.renderer = new WebGLRenderer({
      canvas: this.el.nativeElement.querySelector('#map'),
      antialias: true,
    });
    this.renderer.setSize(this.ww, this.wh);
    this.renderer.setClearColor(0x000);

    this.scene = new Scene();

    this.camera = new PerspectiveCamera(
      50,
      this.ww / this.wh,
      0.1,
      10000
    );

    // تعديل موقع الكاميرا بناءً على حجم الشاشة
    const cameraDistance = this.ww < 768 ? 600 : 320; // أقرب على الموبايل
    this.camera.position.set(-100, 0, cameraDistance);
    this.camera.lookAt(this.centerVector);
    this.scene.add(this.camera);

    const textureLoader = new TextureLoader();
    textureLoader.crossOrigin = '';
    textureLoader.load(
      'https://i.ibb.co/JWsfjrpG/white-Log-small.webp',
      (texture) => {
        this.imagedata = this.getImageData(texture.image);
        this.drawTheMap();
      }
    );

    window.addEventListener('resize', this.onResize.bind(this));
  }

  private getImageData(image: HTMLImageElement): ImageData {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, image.width, image.height);
  }

  private drawTheMap() {
    const geometry = new BufferGeometry() as CustomBufferGeometry;
    const positions: number[] = [];
    const customData: CustomVector3[] = [];

    for (let y = 0, y2 = this.imagedata.height; y < y2; y += 2) {
      for (let x = 0, x2 = this.imagedata.width; x < x2; x += 2) {
        if (
          this.imagedata.data[x * 4 + y * 4 * this.imagedata.width + 3] > 128
        ) {
          const vertex = new Vector3() as CustomVector3;
          vertex.x = Math.random() * 1000 - 500;
          vertex.y = Math.random() * 1000 - 500;
          vertex.z = -Math.random() * 500;

          positions.push(vertex.x, vertex.y, vertex.z);

          vertex.destination = {
            x: x - this.imagedata.width / 2,
            y: -y + this.imagedata.height / 2,
            z: 0,
          };

          vertex.speed = Math.random() / 10 + 0.015;
          customData.push(vertex);
        }
      }
    }

    geometry.setAttribute(
      'position',
      new Float32BufferAttribute(positions, 3)
    );
    geometry.customData = customData;

    // تعديل حجم النقاط بناءً على حجم الشاشة
    const particleSize = this.ww < 768 ? 1.5 : 3; // أصغر على الموبايل
    const material = new PointsMaterial({
      size: particleSize,
      color: 0x4c4e51,
      sizeAttenuation: false,
    });

    this.particles = new Points(geometry, material);
    this.scene.add(this.particles);
    this.animate();
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    const geometry = this.particles.geometry as CustomBufferGeometry;
    const positions = geometry.attributes['position'].array as Float32Array; // Use bracket notation
    const customData = geometry.customData;

    for (let i = 0, j = customData.length; i < j; i++) {
      const particle = customData[i];
      particle.x += (particle.destination.x - particle.x) * particle.speed;
      particle.y += (particle.destination.y - particle.y) * particle.speed;
      particle.z += (particle.destination.z - particle.z) * particle.speed;

      positions[i * 3] = particle.x;
      positions[i * 3 + 1] = particle.y;
      positions[i * 3 + 2] = particle.z;
    }

    const currentTime = performance.now();
    if (currentTime - this.previousTime > 100) {
      const index = Math.floor(Math.random() * customData.length);
      const particle1 = customData[index];
      const particle2 = customData[customData.length - index - 1];
      TweenMax.to(particle1, Math.random() * 2 + 1, { x: particle2.x, y: particle2.y, ease: Power2.easeInOut });
      TweenMax.to(particle2, Math.random() * 2 + 1, { x: particle1.x, y: particle1.y, ease: Power2.easeInOut });
      this.previousTime = currentTime;
    }

    geometry.attributes['position'].needsUpdate = true; // Use bracket notation
    this.camera.position.x = Math.sin(currentTime / 5000) * 100;
    this.camera.lookAt(this.centerVector);

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize')
  onResize() {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;
    this.renderer.setSize(this.ww, this.wh);
    this.camera.aspect = this.ww / this.wh;

    // تحديث موقع الكاميرا عند تغيير الحجم
    const cameraDistance = this.ww < 768 ? 600 : 320;
    this.camera.position.set(-100, 0, cameraDistance);
    this.camera.updateProjectionMatrix();

    // تحديث حجم النقاط عند تغيير الحجم
    const particleSize = this.ww < 768 ? 1.5 : 3;
    (this.particles.material as PointsMaterial).size = particleSize;
  }
}