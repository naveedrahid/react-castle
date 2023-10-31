import React, { useState } from 'react'
import { Col, Image, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faXmark } from '@fortawesome/free-solid-svg-icons'
// import SideMenu from './SideMenu'
import { Link } from 'react-router-dom'
import './Header.css'
import SideMenu from './SideMenu'

function Header() {

  const [showEquals, setShowEquals] = useState(true);

  const toggleIcon = () => {
    setShowEquals(prevState => !prevState);
    const icons = document.querySelectorAll('.MenuIcons');

    icons.forEach(icon => {
      icon.classList.toggle('rotate');
    });
  }

  return (
    <div className='mainHeaderWrapper'>
      <div className='container'>
        <Row>
          <Col
            span={12}
            sm={{
              span: 8
            }}
            md={{
              span: 12,
            }}
            lg={{
              span: 12,
            }}
          >
            <div className='headerLogo'>
              <Image
                preview={false}
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt=''
                width={200}
              />
            </div>
          </Col>
          <Col
            span={12}
            sm={{
              span: 8
            }}
            md={{
              span: 12,
            }}
            lg={{
              span: 12,
            }}
          >
            <div className='headerMenu'>
              <div
                className='headerMenuIcons'
                onClick={toggleIcon}
              >
                <div className='MenuIcons'>
                  <FontAwesomeIcon icon={showEquals ? faEquals : faXmark} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={showEquals ? 'headerSlideClosed' : 'headerSlideShow'}>
          <SideMenu />
      </div>
    </div>
  )
}

export default Header