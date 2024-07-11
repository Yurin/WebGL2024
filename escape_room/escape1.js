document.addEventListener('DOMContentLoaded', (event) => {
    // Three.js の初期化コード
    const canvas = document.getElementById('gameCanvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1170 / 500, 1, 10000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(1170, 500);

    // // 床の作成
    // const floorGeometry = new THREE.PlaneGeometry(20, 20);
    // const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
    // const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    // floor.rotation.x = Math.PI / 2;
    // scene.add(floor);

    // // 壁の作成
    // const wallGeometry = new THREE.PlaneGeometry(20, 10);
    // const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

    // const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
    // wall1.position.z = -10;
    // wall1.position.y = 5;
    // scene.add(wall1);

    // const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
    // wall2.position.z = 10;
    // wall2.position.y = 5;
    // wall2.rotation.y = Math.PI;
    // scene.add(wall2);

    // const wall3 = new THREE.Mesh(wallGeometry, wallMaterial);
    // wall3.position.x = -10;
    // wall3.position.y = 5;
    // wall3.rotation.y = Math.PI / 2;
    // scene.add(wall3);

    // const wall4 = new THREE.Mesh(wallGeometry, wallMaterial);
    // wall4.position.x = 10;
    // wall4.position.y = 5;
    // wall4.rotation.y = -Math.PI / 2;
    // scene.add(wall4);

    // 簡単なオブジェクト（箱）の作成
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = 0.5;
    scene.add(box);

    // カメラの位置設定
    camera.position.z = 15;
    camera.position.y = 5;

    // 照明の追加
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // レンダリングループ
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});
