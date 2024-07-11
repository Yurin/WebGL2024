document.addEventListener('DOMContentLoaded', (event) => {
    let canvas, renderer, camera, scene, light, light2, light3;
    let wall1,wall2,wall3,wall4,floor;
    let sofa1,sofa2,sofa3,sofa4,sofa5,sofa6,sofa7,sofa8,sofa9,sofa10;

    function initThree() {
        canvas = document.getElementById('gameCanvas');
        renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(1170, 500);
    }

    function initCamera() {
        camera = new THREE.PerspectiveCamera(75, 1170 / 500, 1, 10000);
        camera.position.x = 0;
        camera.position.y = 5000; // カメラの高さを上げる
        camera.position.z = 1000; // カメラを床に対して斜めに配置する
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    function initScene() {
        scene = new THREE.Scene();
    }

    function initLight() {
        light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(200, 250, -300);
        light2 = new THREE.PointLight(0xcccccc, 2.0);
        light2.position.set(-160, 0, 280);
        light3 = new THREE.PointLight(0xcccccc, 2.0);
        light3.position.set(150, -40, 280);

        scene.add(light);
        scene.add(light2);
        scene.add(light3);
    }

    function initObject() {
        floor = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 10, 3000),                
            new THREE.MeshLambertMaterial({ color: 0xf5f9e9 })
        );

        wall1 = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 3000,10),                
            new THREE.MeshBasicMaterial({color: 0xffa0cb})
        );
        
        wall2 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000,3000),                
            new THREE.MeshBasicMaterial({color: 0xffc0cb})
        );

        wall3 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000,3000),                
            new THREE.MeshBasicMaterial({color: 0xffc0cb})
        );

        wall4 = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 3000,10),                
            new THREE.MeshBasicMaterial({color: 0xffa0cb})
        );

        sofa1 = new THREE.Mesh(
            new THREE.CubeGeometry(200, 50, 95),                
            new THREE.MeshPhongMaterial({color: 0xcd2691e})
        );
        sofa2 = new THREE.Mesh(
            new THREE.CubeGeometry(200, 20, 100),                
            new THREE.MeshPhongMaterial({color: 0xcd2691e})
        );
        sofa3 = new THREE.Mesh(//左の肘掛
            new THREE.CubeGeometry(20, 60, 110),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa4 = new THREE.Mesh(
            new THREE.CubeGeometry(20, 60, 110),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa5 = new THREE.Mesh(//後ろ
            new THREE.CubeGeometry(200, 100, 10),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa6 = new THREE.Mesh(
            new THREE.CylinderGeometry(10, 10,110, 30),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa7 = new THREE.Mesh(
            new THREE.CylinderGeometry(10, 10,110, 30),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa8 = new THREE.Mesh(
            new THREE.CylinderGeometry(40,40,10, 40),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa9 = new THREE.Mesh(
            new THREE.CylinderGeometry(40,40,10, 40),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        sofa10 = new THREE.Mesh(
            new THREE.CubeGeometry(123,79,10),                
            new THREE.MeshPhongMaterial({color: 0xd2691e})
        );
        


        floor.position.set(0,-500,0);
        wall1.position.set(0,0,1500);
        wall2.position.set(-1500,0,0);
        wall3.position.set(1500,0,0);
        wall4.position.set(0,0,-1500);

        scene.add(wall1,wall2,wall3,wall4,floor); 

        sofa1.position.set(0,-110,230);
        sofa2.position.set(0,-90,230);
        sofa3.position.set(100,-100,230);
        sofa4.position.set(-100,-100,230);
        sofa5.position.set(0,-90,280);
        sofa6.position.set(100,-70,230);
        sofa6.rotation.set(Math.PI/2,0,0);
        sofa7.position.set(-100,-70,230);
        sofa7.rotation.set(Math.PI/2,0,0);
        sofa8.position.set(60,-40,280);
        sofa8.rotation.set(Math.PI/2,0,0);
        sofa9.position.set(-60,-40,280);
        sofa9.rotation.set(Math.PI/2,0,0);
        sofa10.position.set(0,-39.6,280);

        scene.add(sofa1,sofa2,sofa3,sofa4,sofa5,sofa6,sofa7,sofa8,sofa9,sofa10);

    }

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initObject();
        render(); // レンダリングループを開始
    }

    threeStart();
});
