document.addEventListener('DOMContentLoaded', (event) => {
    let canvas, renderer, camera, scene, light, light2, light3, light4;
    let wall1, wall2, wall3, wall4, floor, carpet;
    let sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7;
    let tv1,tv2,tv_chest;
    let cube;
    let a, b, c;
    let target;
    let messageDisplayed = false;
    let raycaster, mouse;

    function initThree() {
        canvas = document.getElementById('gameCanvas');
        renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(1170, 500);
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();
        canvas.addEventListener('click', onClick, false);
    }

    function initCamera() {
        a = 0;
        b = 0;
        c = 0;
        camera = new THREE.PerspectiveCamera(75, 1170 / 500, 1, 10000);
        camera.position.set(0, 200, -600);
        target = new THREE.Vector3(a, b, c);
        camera.lookAt(target);
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
        light5 = new THREE.PointLight(0xcccccc, 1.0);
        light5.position.set(1500, 0, 300);
        light6 = new THREE.PointLight(0xcccccc, 0.5);
        light6.position.set(500, -200, 200);

        scene.add(light);
        // scene.add(light2);
        scene.add(light3);
        // scene.add(light4);
        //scene.add(light5);
        scene.add(light6);
    }

    function initObject() {
        floor = new THREE.Mesh(
            new THREE.BoxGeometry(3000, 10, 3000),
            new THREE.MeshLambertMaterial({ color: 0x726250 })
        );

        carpet = new THREE.Mesh(
            new THREE.CylinderGeometry(1000, 500, 1, 40),
            new THREE.MeshPhongMaterial({ color: 0xffa3ff })
        );

        wall1 = new THREE.Mesh(//front
            new THREE.BoxGeometry(3000, 3000, 10),
            new THREE.MeshBasicMaterial({ color: 0xffdead })
        );

        wall2 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000, 3000),
            new THREE.MeshBasicMaterial({ color: 0xfff8dc})
        );

        wall3 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000, 3000),
            new THREE.MeshBasicMaterial({ color: 0xfff8dc })
        );

        wall4 = new THREE.Mesh(//back
            new THREE.BoxGeometry(3000, 3000, 10),
            new THREE.MeshBasicMaterial({ color: 0xffdead })
        );

        tv1= new THREE.Mesh(
            new THREE.BoxGeometry(5,800,1200),
            new THREE.MeshPhongMaterial({ color: 0x696969 })
        )

        tv2 = new THREE.Mesh(//left
            new THREE.BoxGeometry(5,700,1100),
            new THREE.MeshNormalMaterial({ color: 0xbcffbc })
        )

        tv_chest = new THREE.Mesh(
            new THREE.BoxGeometry(400,100,1000),
            new THREE.MeshToonMaterial({ color: 0xbc8f8f })
        )

        cube = new THREE.Mesh(
            new THREE.BoxGeometry(50,50,50),
            new THREE.MeshToonMaterial({ color: 0x000000 })
        )

        sofa1 = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 200, 500),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f})
        );
        sofa2 = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 200, 500),
            new THREE.MeshLambertMaterial({ color: 0xffdab9})
        );
        sofa3 = new THREE.Mesh(
            new THREE.BoxGeometry(100, 500, 530),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
        );
        sofa4 = new THREE.Mesh(
            new THREE.BoxGeometry(100, 500, 530),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f})
        );
        sofa5 = new THREE.Mesh(
            new THREE.CylinderGeometry(50, 50, 530, 150),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
        );
        sofa6 = new THREE.Mesh(
            new THREE.CylinderGeometry(50, 50, 530, 150),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
        );
        sofa7 = new THREE.Mesh(
            new THREE.CylinderGeometry(500, 500, 50, 200),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
        );

        floor.position.set(0, -500, 0);
        carpet.position.set(0, -490, 0);
        wall1.position.set(0, 0, 1500);
        wall2.position.set(-1500, 0, 0);
        wall3.position.set(1500, 0, 0);
        wall4.position.set(0, 0, -1500);

        scene.add(wall1, wall2, wall3, wall4, floor, carpet);

        tv1.position.set(1490,500,300);
        tv2.position.set(1480,500,300);
        tv_chest.position.set(900,-50,0);
        cube.position.set(800,50,100);

        scene.add(tv1,tv2,tv_chest,cube);

        sofa1.position.set(0, -450, 1300);
        sofa2.position.set(0, -250, 1300);
        sofa3.position.set(500, -200, 1300);
        sofa4.position.set(-500, -200, 1300);
        sofa5.position.set(500, 60, 1300);
        sofa5.rotation.set(Math.PI / 2, 0, 0);
        sofa6.position.set(-500, 60, 1300);
        sofa6.rotation.set(Math.PI / 2, 0, 0);
        sofa7.position.set(0, 0, 1500);
        sofa7.rotation.set(Math.PI / 2, 0, 0);

        scene.add(sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7);
    }

    function onKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                b += 10;
                break;
            case 'ArrowDown':
                b -= 10;
                break;
            case 'ArrowLeft':
                a += 10;
                break;
            case 'ArrowRight':
                a -= 10;
                break;
        }

        const distance = Math.sqrt(a * a + b * b + c * c);
        if (distance > 1500 || c < -600) {
            if (!messageDisplayed) {
                showMessage('首が痛いです。戻ってください。');
                messageDisplayed = true;
            }
        } else {
            if (messageDisplayed) {
                hideMessage();
                messageDisplayed = false;
            }
        }

        if (distance > 1500) {
            const scale = 1500 / distance;
            a *= scale;
            b *= scale;
        }
        if (c < -600) {
            c = -600;
        }

        target.set(a, b, c);
    }

    function onClick(event) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7, wall1, wall2, wall3, wall4, floor, tv1, tv2, tv_chest, cube]);

        if (intersects.length > 0) {
            const intersectedObject = intersects[0].object;
            if (intersectedObject === floor) {
                showMessage('床ですね。');
            } else if (intersectedObject === wall1 || intersectedObject === wall2 || intersectedObject === wall3 || intersectedObject === wall4) {
                showMessage('壁ですよ。');
            } else if(intersectedObject === sofa1 || intersectedObject === sofa2 || intersectedObject === sofa3 || intersectedObject === sofa4 || intersectedObject === sofa5 || intersectedObject === sofa6 || intersectedObject === sofa7){
                showMessage('ソファーですね。');
            } else if(intersectedObject === tv1 || intersectedObject === tv2){
                showMessage('TVですね。');
            } else if(intersectedObject === cube){
                showMessage('cubeを見つけた。');
                
            }
            else{
                showMessage('なにかありました？')
            }
        }
    }

    function render() {
        requestAnimationFrame(render);
        camera.lookAt(target);
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

    function showMessage(message) {
        const messageElement = document.getElementById('gameMessage');
        messageElement.textContent = message;
    }

    function hideMessage() {
        const messageElement = document.getElementById('gameMessage');
        messageElement.textContent = '';
    }

    threeStart();
});
