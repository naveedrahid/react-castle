import React, { useEffect } from 'react';
import * as THREE from 'three';

function ThreeGalaxy() {
    useEffect(() => {
        const particles = 4000;
        const speed = 20;
        const dim = 200; // Dimensions of particle volume

        const canvas = document.getElementById('canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, preserveDrawingBuffer: true, alpha: true });
        renderer.autoClearColor = false; // For trails
        renderer.setClearColor(0x0000);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(90, canvas.width / canvas.height, 0.1, 1000);
        var vertices = [];

        canvas.classList.add('scale-animation');
        const addClassTimeout = setTimeout(() => {
            clearTimeout(addClassTimeout);
            canvas.classList.remove('scale-animation');
        }, 1000);

        for (let i = 0; i < particles; i++) {
            const x = dim * 8 * (Math.random() - 0.5);
            const y = dim * 2 * (Math.random() - 0.5);
            const z = -dim * Math.random();

            vertices.push(x, y, z);
        }

        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        let starMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: .7,
            transparent: true, // For trails
            depthTest: false // For trails
        });
        const starPoints = new THREE.Points(starGeo, starMat);

        // Create a plane geometry
        const width = 0.5; // Set your desired width
        const height = 0.5; // Set your desired height
        const fadeGeo = new THREE.PlaneGeometry(width, height);

        const fadeMat = new THREE.MeshBasicMaterial({
            color: 0x0000,
            transparent: true,
            opacity: .5,
        });
        const fadePlate = new THREE.Mesh(fadeGeo, fadeMat);
        fadePlate.material.renderOrder = -1; // Important!
        fadePlate.position.z = -.1;

        scene.add(fadePlate);
        scene.add(starPoints);
        requestAnimationFrame(draw);

        function draw() {
            if (canvas.height !== canvas.clientHeight ||
                canvas.width !== canvas.clientWidth) {
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
            }
            starGeo.attributes.position.needsUpdate = true;
            let p = starGeo.attributes.position.array;
            for (let i = 0; i < p.length; i += 3) {
                const x = Math.abs(p[i]);
                const y = Math.abs(p[i + 1]);
                const z = p[i + 2];
                if (z >= 0) {
                    p[i] = dim * 8 * (Math.random() - 0.5);
                    p[i + 1] = dim * 2 * (Math.random() - 0.5);
                    p[i + 2] = -dim;
                } else {
                    p[i + 2] += -speed / p[i + 2];
                }
            }

            renderer.render(scene, camera);
            requestAnimationFrame(draw);
        }
        // return () => {
        //     clearTimeout(addClassTimeout);
        //     canvas.classList.remove('scale-animation');
        // };

    }, []);

    return <canvas id='canvas'></canvas>;
}

export default ThreeGalaxy;
