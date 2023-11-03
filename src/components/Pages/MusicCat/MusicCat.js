import React, { useEffect, useState } from 'react'
import { Image, Typography } from 'antd';
import { Link } from 'react-router-dom';
import WorldAnimation from '../../Utils/WorldAnimation'
import DatGuiStars from '../../Utils/DatGuiStars';
import './MusicCat.css'

const { Text } = Typography;

function MusicCat() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [showCategoryPage, setShowCategoryPage] = useState(false);

    const categoryList = [
        {
            id: 0,
            title: 'Album 1',
        },
        {
            id: 1,
            title: 'Album 2',
        },
        {
            id: 2,
            title: 'Album 3',
        },
        {
            id: 3,
            title: 'Album 4',
        },
        {
            id: 4,
            title: 'Album 5',
        },
        {
            id: 5,
            title: 'Album 6',
        },
        {
            id: 6,
            title: 'Album 7',
        },
        {
            id: 7,
            title: 'Album 8',
        },
        {
            id: 8,
            title: 'Album 9',
        },
        {
            id: 9,
            title: 'Album 10',
        },
    ];

    const categories = categoryList.map(category => category);

    const handleToggleClass = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCategoryPage(true);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <div className='MusicCategoryWrapper'>
            {
                showCategoryPage ? (
                    <>
                        <div className="animation-wrapper">
                            <WorldAnimation />
                            <Image
                                preview={false}
                                src={require('../../assets/images/albumcircle.png')}  // Use require directly here
                                alt=''
                                width={500}
                                height={500}
                                className='albumImageThumb'
                            />
                        </div>
                        <div className='categoryMusic'>
                            {
                                categories.map((category, index) => (
                                    <div className={`categoryMusicInner album${index + 1} ${activeIndex === index ? 'Albumactive' : ''}`} key={index}>
                                        <div className='antImage ginger'>
                                            <Link
                                                onMouseEnter={() => handleToggleClass(index)}
                                                onMouseLeave={() => handleToggleClass(index)}
                                                className={activeIndex === index ? 'doorImage active' : 'doorImage'}
                                            >
                                            </Link>
                                            <Text className='cursor-scale small'>{category.title}</Text>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <DatGuiStars />
                )}
        </div>
    )
}

export default MusicCat