import { defineComponent, toRefs, reactive, onMounted, ref } from "vue";
import { useRouter } from "@src/util/myHook";
import style from "./three.module.scss";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Stats from 'three/addons/libs/stats.module.js';

export default defineComponent({
    name: "Three",
    setup(props, context) {
        const router = useRouter();

        const threeRef = ref<HTMLElement | null>(null);
        const state = reactive({});

        const opt = reactive({});

        function loadmodels(scene: THREE.Scene) {
            const loader = new GLTFLoader();
            loader.load(
                "GLTF/hu_tao/scene.gltf",
                function (gltf) {
                    gltf.scene.position.set(0,-0.8,0);
                    scene.add(gltf.scene);
                },
                undefined,
                function (error) {
                    console.error(error);
                },
            );
        }

        onMounted(() => {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xa0a0a0 );
            scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.set(0,0,1.5);
            // camera.lookAt(0,2000,0);

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            const stats = new Stats();
            threeRef.value!.appendChild( stats.dom );
            threeRef.value!.appendChild(renderer.domElement);

            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            // scene.add(cube);
            loadmodels(scene);

            // const light = new THREE.AmbientLight( new THREE.Color("rgb(255, 255, 255)") ); // soft white light
            const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
            hemiLight.position.set(0,10,20);
            const dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
            dirLight.position.set( - 3, 10, - 10 );
            // dirLight.castShadow = true;
            // dirLight.shadow.camera.top = 2;
            // dirLight.shadow.camera.bottom = - 2;
            // dirLight.shadow.camera.left = - 2;
            // dirLight.shadow.camera.right = 2;
            // dirLight.shadow.camera.near = 0.1;
            // dirLight.shadow.camera.far = 40;
            scene.add( hemiLight );
            scene.add( dirLight );
            const controls = new OrbitControls( camera, renderer.domElement );
            controls.enableDamping = true;
            controls.rotateSpeed = 3;
            controls.maxDistance = 5;
            controls.minDistance = 1;


            //
            const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
            mesh.rotation.x = - Math.PI / 2;
            mesh.receiveShadow = true;
            mesh.position.set(0,-1,0)
            scene.add( mesh );

            function animate() {
                requestAnimationFrame(animate);

                // cube.rotation.x += 0.01;
                // cube.rotation.y += 0.01;
                controls.update();
                stats.update();
                renderer.render(scene, camera);
            }

            animate();
        });

        return {
            threeRef,
            ...toRefs(state),
            opt,
            router,
        };
    },
    render() {
        return <div ref={"threeRef"}></div>;
    },
});
