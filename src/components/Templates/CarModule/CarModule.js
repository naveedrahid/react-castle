import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'jquery-touchswipe';
import car1 from '../../assets/images/car_1-min.png';
import car2 from '../../assets/images/car_2-min.png';
import car3 from '../../assets/images/car_3-min.png';
import car4 from '../../assets/images/car_4-min.png';
import car5 from '../../assets/images/car_5-min.png';
import car6 from '../../assets/images/car_6-min.png';
import car7 from '../../assets/images/car_7-min.png';
import car8 from '../../assets/images/car_8-min.png';
import car9 from '../../assets/images/car_9-min.png';
import car10 from '../../assets/images/car_10-min.png';
import car11 from '../../assets/images/car_11-min.png';
import car12 from '../../assets/images/car_12-min.png';
import car13 from '../../assets/images/car_13-min.png';
import car14 from '../../assets/images/car_14-min.png';
import car15 from '../../assets/images/car_15-min.png';
import car16 from '../../assets/images/car_16-min.png';

function CarModule() {
    const carImages = [
        { index: 0, src: car1 },
        { index: 1, src: car2 },
        { index: 2, src: car3 },
        { index: 3, src: car4 },
        { index: 4, src: car5 },
        { index: 5, src: car6 },
        { index: 6, src: car7 },
        { index: 7, src: car8 },
        { index: 8, src: car9 },
        { index: 9, src: car10 },
        { index: 10, src: car11 },
        { index: 11, src: car12 },
        { index: 12, src: car13 },
        { index: 13, src: car14 },
        { index: 14, src: car15 },
        { index: 15, src: car16 },
    ];
    const carNum = carImages.length;
    useEffect(() => {

        // Preload all the images into hidden div
        carImages.forEach((car) => {
            const creatImg = document.createElement('img');
            creatImg.src = car.src;
            creatImg.style.display = 'none'; // Hide the preloaded images
            document.getElementById('preload-imgs').appendChild(creatImg);
        });

        // Control swipes using jquery.touchSwipe.min.js
        const swipeCarOptions = {
            triggerOnTouchEnd: true,
            swipeStatus: swipeStatus,
            allowPageScroll: "vertical",
            threshold: 75
        }

        $(function () {
            const getCarImgs = $(".img-container");
            getCarImgs.swipe(swipeCarOptions);
        });

        function swipeStatus(event, phase, direction, distance) {
            const duration = 0;
            if (direction == "left") {
                changeImg(distance);
            } else if (direction == "right") {
                changeImgR(-distance);
            }
        }

        function changeImg(imgNum) {
            imgNum = Math.floor(imgNum / 8);
            // Assuming you have an img element with the id "myImg"
            const myImg = document.getElementById("myImg");

            let currentIndex = carImages.findIndex((car) => car.src === myImg.src);
            let newIndex = (currentIndex + imgNum) % carNum;

            if (newIndex < 0) {
                newIndex += carNum;
            }

            myImg.src = carImages[newIndex].src;
        }

        function changeImgR(imgNum) {
            imgNum = Math.floor(imgNum / 8);
            const myImg = document.getElementById("myImg");

            let currentIndex = carImages.findIndex((car) => car.src === myImg.src);
            let newIndex = (currentIndex + imgNum) % carNum;

            if (newIndex < 0) {
                newIndex += carNum;
            }

            myImg.src = carImages[newIndex].src;
        }

    }, []);

    return (
        <div>
            <div id="preload-imgs"></div>
            <div className="img-container">
                <img id="myImg" width='100%' src={carImages[0].src} alt="Car" />
            </div>
        </div>
    );
}

export default CarModule;
