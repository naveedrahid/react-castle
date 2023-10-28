import React, { useEffect } from 'react';
import gsap from 'gsap';
import './SocialIcons.css';
import { List } from 'antd';
import amazon from '../../assets/images/amazon.png';
import beatport from '../../assets/images/beatport.png';
import freeItunes from '../../assets/images/free-itunes.png';
import instagram from '../../assets/images/instagram.png';
import logoOnly from '../../assets/images/logo-only.png';
import shazam from '../../assets/images/shazam.png';
import spotify from '../../assets/images/spotify.png';
import tiktok from '../../assets/images/tiktok.png';

function SocialIcons() {
    useEffect(() => {
        // console.clear();

        let icons = document.querySelectorAll(".toolbarItem");
        let dock = document.querySelector(".toolbar");
        let firstIcon = icons[0];

        let min = 48; // 40 + margin
        let max = 100;
        let bound = min * Math.PI;

        gsap.set(icons, {
            transformOrigin: "50% -20%",
            height: 40
        });

        gsap.set(dock, {
            position: "relative",
            height: 100
        });

        dock.addEventListener("mousemove", (event) => {
            let offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;
            updateIcons(event.clientX - offset);
        });

        dock.addEventListener("mouseleave", (event) => {
            gsap.to(icons, {
                duration: 0.3,
                scale: 1,
                x: 0
            });
        });

        function updateIcons(pointer) {
            for (let i = 0; i < icons.length; i++) {
                let icon = icons[i];
                let distance = (i * min + min / 2) - pointer;
                let x = 0;
                let scale = 1;

                if (-bound < distance && distance < bound) {
                    let rad = distance / min * 0.5;
                    scale = 1 + (max / min - 1) * Math.cos(rad);
                    x = 2 * (max - min) * Math.sin(rad);
                } else {
                    x = (-bound < distance ? 2 : -2) * (max - min);
                }

                gsap.to(icon, {
                    duration: 0.3,
                    x: x,
                    scale: scale
                });
            }
        }
    }, []);

    return (
        <div className="socialWrapper">
            <ul
                // itemLayout="horizontal"
                className='toolbar'
            >
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                        <img className="toolbarImg" src={amazon} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                    <img className="toolbarImg" src={beatport} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                    <img className="toolbarImg" src={freeItunes} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                        <img className="toolbarImg" src={instagram} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                        <img className="toolbarImg" src={logoOnly} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                        <img className="toolbarImg" src={shazam} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                        <img className="toolbarImg" src={spotify} alt="" />
                    </a>
                </List.Item>
                <List.Item
                    className='toolbarItem'
                >
                    <a
                    className='toolbarLink'
                    >
                        <img className="toolbarImg" src={tiktok} alt="" />
                    </a>
                </List.Item>
            </ul>
        </div>
    );
}

export default SocialIcons
