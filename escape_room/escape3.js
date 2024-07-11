document.addEventListener('DOMContentLoaded', (event) => {
    let canvas, renderer, camera, scene, light, light2, light3,light4;
    let wall1, wall2, wall3, wall4, floor,carpet;
    let sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7;

    function initThree() {
        canvas = document.getElementById('gameCanvas');
        renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(1170, 500);
    }

    function initCamera() {
        camera = new THREE.PerspectiveCamera(75, 1170 / 500, 1, 10000);
        camera.position.set(0,200, -600); // カメラの位置を適切に設定
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    function initScene() {
        scene = new THREE.Scene();
    }

    function initLight() {
        light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(500, 1500, -500);
        light2 = new THREE.PointLight(0xcccccc, 1.0);
        light2.position.set(-500, 1500, 500);
        light3 = new THREE.PointLight(0xcccccc, 1.0);
        light3.position.set(500, 1500, 500);
        light4 = new THREE.PointLight(0xcccccc, 1.0);
        light4.position.set(-500, 1500, -500);

        scene.add(light);
        scene.add(light2);
        scene.add(light3);
        scene.add(light4);
    }

    function initObject() {
        floor = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 10, 3000),
            new THREE.MeshLambertMaterial({ color: 0xf5f9e9 })
        );

        carpet = new THREE.Mesh(
            new THREE.CylinderGeometry(1000,500,1, 40),                
            new THREE.MeshBasicMaterial({color: 0xffa0cb})
        );

        wall1 = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 3000, 10),
            new THREE.MeshBasicMaterial({ color: 0xffa0cb })
        );

        wall2 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000, 3000),
            new THREE.MeshBasicMaterial({ color: 0xffc0cb })
        );

        wall3 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000, 3000),
            new THREE.MeshBasicMaterial({ color: 0xffc0cb })
        );

        wall4 = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 3000, 10),
            new THREE.MeshBasicMaterial({ color: 0xffa0cb })
        );

        sofa1 = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 200, 500),
            new THREE.MeshPhongMaterial({ color: 0xd2691e})
        );
        sofa2 = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 200, 500),
            new THREE.MeshPhongMaterial({ color: 0xd2691e })
        );
        sofa3 = new THREE.Mesh(//左肘
            new THREE.BoxGeometry(100, 500, 530),
            new THREE.MeshPhongMaterial({ color: 0xd2691e })
        );
        sofa4 = new THREE.Mesh(//右肘
            new THREE.BoxGeometry(100, 500, 530),
            new THREE.MeshPhongMaterial({ color: 0xd2691e })
        );
        sofa5 = new THREE.Mesh(
            new THREE.CylinderGeometry(50, 50, 530, 150),
            new THREE.MeshPhongMaterial({ color: 0xd2691e })
        );
        sofa6 = new THREE.Mesh(
            new THREE.CylinderGeometry(50, 50, 530, 150),
            new THREE.MeshPhongMaterial({ color: 0xd2691e })
        );
        sofa7 = new THREE.Mesh(
            new THREE.CylinderGeometry(500, 500, 50, 200),
            new THREE.MeshPhongMaterial({ color: 0xd2691e })
        );

        floor.position.set(0, -500, 0);
        carpet.position.set(0,-490,0);
        wall1.position.set(0, 0, 1500);
        wall2.position.set(-1500, 0, 0);
        wall3.position.set(1500, 0, 0);
        wall4.position.set(0, 0, -1500);

        scene.add(wall1, wall2, wall3, wall4, floor,carpet);

        sofa1.position.set(0, -450, 1300);
        sofa2.position.set(0, -250, 1300);
        sofa3.position.set(500, -200, 1300);
        sofa4.position.set(-500, -200, 1300);
        sofa5.position.set(500, 70, 1300);
        sofa5.rotation.set(Math.PI / 2, 0, 0);
        sofa6.position.set(-500, 70, 1300);
        sofa6.rotation.set(Math.PI / 2, 0, 0);
        sofa7.position.set(0, 0, 1500);
        sofa7.rotation.set(Math.PI / 2, 0, 0);

        scene.add(sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7);
    }

    function onKeyDown(event) {//矢印キーでカメラの上下可能
        switch (event.key) {
            case 'ArrowUp':
                if (camera.position.y < 1000) {
                    camera.position.y += 10;
                }
                break;
            case 'ArrowDown':
                if (camera.position.y > 0) {
                    camera.position.y -= 10;
                }
                break;
        }
    }

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function threeStart() {
        initThree();
        initScene();
        initCamera();
        initLight();
        initObject();
        document.addEventListener('keydown', onKeyDown);
        render();
    }

    threeStart();
});
