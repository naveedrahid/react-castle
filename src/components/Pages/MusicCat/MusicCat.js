import React from 'react'
import { Image, Typography } from 'antd';
import WorldAnimation from '../../Utils/WorldAnimation'
import './MusicCat.css'

const { Text } = Typography;


function MusicCat() {

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

    const titles = categoryList.map(category => category.title);

    return (
        <div className='MusicCategoryWrapper'>
            <WorldAnimation />
            <div className='categoryMusic'>
                {
                    titles.map((title, index) => (
                        <div className={`categoryMusicInner album${index + 1}`} key={index}>
                            <Image
                                preview={false}
                                src={require('../../assets/images/door.png')}  // Use require directly here
                                alt=''
                                width={80}
                            />
                            <Text>{title}</Text>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MusicCat