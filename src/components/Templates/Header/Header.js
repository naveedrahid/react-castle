import React, { useState } from 'react'
import { Col, Image, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faXmark } from '@fortawesome/free-solid-svg-icons'
// import SideMenu from './SideMenu'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {

  const [showEquals, setShowEquals] = useState(true);

  const toggleIcon = () => {
    setShowEquals(prevState => !prevState);
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
              >{
                  showEquals ? (
                    <div className='MenuIcons'>
                      <FontAwesomeIcon icon={faEquals} />
                    </div>
                  ) : (
                    <div className='MenuIcons'>
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                  )
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* {console.log(showEquals)} */}
      {/* <SideMenu  /> */}
      <div className={showEquals ? 'headerSlideClosed' : 'headerSlideShow'}>
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Header