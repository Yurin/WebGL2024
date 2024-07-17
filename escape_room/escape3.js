document.addEventListener('DOMContentLoaded', (event) => {
    let canvas, renderer, camera, scene, light, light2, light3, light4;
    let wall1, wall2, wall3, wall4, floor, carpet;
    let sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7;
    let tv1, tv2, tv_chest;
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
        scene.add(light3);
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

        wall1 = new THREE.Mesh( //front
            new THREE.BoxGeometry(3000, 3000, 10),
            new THREE.MeshBasicMaterial({ color: 0xffdead })
        );

        wall2 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000, 3000),
            new THREE.MeshBasicMaterial({ color: 0xfff8dc })
        );

        wall3 = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3000, 3000),
            new THREE.MeshBasicMaterial({ color: 0xfff8dc })
        );

        wall4 = new THREE.Mesh( //back
            new THREE.BoxGeometry(3000, 3000, 10),
            new THREE.MeshBasicMaterial({ color: 0xffdead })
        );

        tv1 = new THREE.Mesh(
            new THREE.BoxGeometry(5, 800, 1200),
            new THREE.MeshPhongMaterial({ color: 0x696969 })
        );

        tv2 = new THREE.Mesh( //left
            new THREE.BoxGeometry(5, 700, 1100),
            new THREE.MeshNormalMaterial({ color: 0xbcffbc })
        );

        tv_chest = new THREE.Mesh(
            new THREE.BoxGeometry(400, 100, 1000),
            new THREE.MeshToonMaterial({ color: 0xbc8f8f })
        );

        cube = new THREE.Mesh(
            new THREE.BoxGeometry(50, 50, 50),
            new THREE.MeshToonMaterial({ color: 0x000000 })
        );

        sofa1 = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 200, 500),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
        );
        sofa2 = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 200, 500),
            new THREE.MeshLambertMaterial({ color: 0xffdab9 })
        );
        sofa3 = new THREE.Mesh(
            new THREE.BoxGeometry(100, 500, 530),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
        );
        sofa4 = new THREE.Mesh(
            new THREE.BoxGeometry(100, 500, 530),
            new THREE.MeshLambertMaterial({ color: 0xbc8f8f })
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

        tv1.position.set(1490, 500, 300);
        tv2.position.set(1480, 500, 300);
        tv_chest.position.set(900, -50, 0);
        cube.position.set(800, 50, 100);

        scene.add(tv1, tv2, tv_chest, cube);

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
            } else if (intersectedObject === sofa1 || intersectedObject === sofa2 || intersectedObject === sofa3 || intersectedObject === sofa4 || intersectedObject === sofa5 || intersectedObject === sofa6 || intersectedObject === sofa7) {
                showMessage('ソファーですね。');
            } else if (intersectedObject === tv1 || intersectedObject === tv2) {
                showMessage('TVですね。');
            } else if (intersectedObject === cube) {
                showMessage('cubeを見つけた。同じ色を消していこう.詰まったらシャッフルボタンをクリック');
                loadPuzzleGame();
            } else {
                showMessage('なにかありました？');
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

    function loadPuzzleGame() {
        // 元のシーンを一旦非表示にする
        document.getElementById('gameCanvas').style.display = 'none';

        // パズルゲームのシーンを初期化する
        initPuzzleGame();
    }

    function returnToMainScene() {
        // パズルゲームのシーンを非表示にする
        document.getElementById('puzzleCanvas').style.display = 'none';
        document.getElementById('ui').style.display = 'none';

        // 元のシーンを再表示する
        document.getElementById('gameCanvas').style.display = 'block';
        threeStart();
    }

    function initPuzzleGame() {
        // グローバル変数
        let selectedPiece = null;
        let lastSelectedPiece = null;
        let remainingColors = [];
        let puzzlePieces = [];

        // Three.js の初期設定
        const puzzleCanvas = document.getElementById('puzzleCanvas');
        const puzzleRenderer = new THREE.WebGLRenderer({ canvas: puzzleCanvas });
        puzzleRenderer.setSize(1170, 500);
        puzzleRenderer.setClearColor(0xf5deb3, 1);

        // 環境マッピングのテクスチャをロード
        const textureLoader = new THREE.CubeTextureLoader();
        const textureCube = textureLoader.load([
            'Stone1.jpg', 'Stone1.jpg',
            'Stone1.jpg', 'Stone1.jpg',
            'Stone1.jpg', 'Stone1.jpg'
        ]);

        // キラキラ材質を作成する関数
        const createSparkleMaterial = (color) => {
            return new THREE.MeshStandardMaterial({
                color: color,
                envMap: textureCube,
                metalness: 2,
                roughness: 0.1
            });
        };

        // カメラの初期位置と注視点の設定
        const puzzleCamera = new THREE.PerspectiveCamera(45, 1170 / 500, 1, 100);
        puzzleCamera.position.set(7, 7, 7);
        puzzleCamera.lookAt(0, 0, 0);

        // シーンを初期化
        const puzzleScene = new THREE.Scene();

        // パズルピースの生成と色のランダム設定
        const createPuzzlePiece = (x, y, z, color) => {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: color });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, y, z);
            cube.userData.color = color; // 色情報をuserDataに保存
            return cube;
        };

        // 色の生成関数
        const generateColors = (numPairs) => {
            const colors = [];
            for (let i = 0; i < numPairs; i++) {
                const color = new THREE.Color(Math.random(), Math.random(), Math.random());
                colors.push(color, color); // 同じ色のペアを生成
            }
            return colors;
        };

        // シャッフル関数
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        // 初期化関数
        const initializeColors = () => {
            const numPairs = 32; // 32種類の色のペアを生成する
            remainingColors = generateColors(numPairs);
        };

        // 色のシャッフル
        const shuffleColors = () => {
            const existingPieces = puzzlePieces.filter(piece => piece.parent); // 存在するピースのみ取得
            const numPairs = existingPieces.length / 2; // 必要なペア数
            let colors = generateColors(numPairs);
            colors = shuffleArray(colors); // 色をシャッフル

            let colorIndex = 0;
            existingPieces.forEach((piece) => {
                piece.material.color.set(colors[colorIndex]);
                piece.userData.color = colors[colorIndex];
                colorIndex++;
            });

            remainingColors = colors.slice(); // 残りの色を更新する
        };

        // パズルピースの生成
        const createPuzzlePieces = () => {
            const numPairs = Math.floor((64) / 2);
            let colors = generateColors(numPairs);
            colors = shuffleArray(colors);

            const pieces = [];
            let index = 0;
            for (let x = -1.5; x <= 1.5; x++) {
                for (let y = -1.5; y <= 1.5; y++) {
                    for (let z = -1.5; z <= 1.5; z++) {
                        const piece = createPuzzlePiece(x, y, z, colors[index]);
                        pieces.push(piece);
                        puzzleScene.add(piece);
                        index++;
                    }
                }
            }
            return pieces;
        };

        // 初期化処理
        initializeColors();
        puzzlePieces = createPuzzlePieces();
        animate(); // レンダリングループの開始

        // レンダリングループの関数
        function animate() {
            requestAnimationFrame(animate);
            puzzleRenderer.render(puzzleScene, puzzleCamera);
        }

        // クリックイベントの処理
        function onDocumentMouseDown(event) {
            const rect = puzzleRenderer.domElement.getBoundingClientRect();
            const mouse = new THREE.Vector2();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, puzzleCamera);
            const intersects = raycaster.intersectObjects(puzzleScene.children);
        
            if (intersects.length > 0) {
                const selectedObject = intersects[0].object;
        
                if (!selectedPiece) {
                    selectedPiece = selectedObject;
                    selectedPiece.userData.originalMaterial = selectedPiece.material; // 保存原始材质
                    selectedPiece.material = createSparkleMaterial(selectedPiece.userData.color); // 应用闪烁材质
                    return;
                }
        
                if (selectedPiece !== selectedObject) {
                    selectedPiece.material = selectedPiece.userData.originalMaterial; // 恢复原始材质
        
                    if (selectedPiece.userData.color === selectedObject.userData.color) {
                        puzzleScene.remove(selectedPiece);
                        puzzleScene.remove(selectedObject);
                        selectedPiece = null;
                        lastSelectedPiece = null;
                        checkClear();
                    } else {
                        selectedPiece = selectedObject;
                        selectedPiece.userData.originalMaterial = selectedPiece.material; // 保存原始材质
                        selectedPiece.material = createSparkleMaterial(selectedPiece.userData.color); // 应用闪烁材质
                    }
                }
            }
        }
        
        document.addEventListener('mousedown', onDocumentMouseDown, false);
        

        // ウィンドウサイズ変更時の処理
        window.addEventListener('resize', () => {
            puzzleCamera.aspect = 1170 / 500;
            puzzleCamera.updateProjectionMatrix();
            puzzleRenderer.setSize(1170, 500);
        });

        // シャッフルボタンのイベントリスナー
        const shuffleButton = document.getElementById('shuffleButton');
        shuffleButton.addEventListener('click', () => {
            shuffleColors();
        });

        // ゲームクリアのチェック関数
        function checkClear() {
            if (puzzlePieces.filter(piece => piece.parent).length === 0) {
                alert("ゲームクリア！おめでとう^^鍵をゲット！");
                returnToMainScene();
            }
        }

        // パズルコンテナを表示
        document.getElementById('puzzle_container').style.display = 'block';
    }

    threeStart();
});
