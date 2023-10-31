import React, { useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import CarModule from "../../Templates/CarModule/CarModule";
import ThreeGalaxy from "../../Utils/ThreeGlaxy";
import SocialIcons from "../../Templates/SocialIcons/SocialIcons";
import { Link, useHistory } from 'react-router-dom';
const { Title } = Typography;

function Home() {

    return (
        <div className="Home pageWrapper">
            <div className='castleWrapper'>
                <CarModule />
                <ThreeGalaxy />
            </div>
            <div className="HomeSection">
                <div className="container">
                    <Row
                        align='middle'
                        className="HomeSectionRow"
                    >
                        <Col
                            span={8}
                            md={{
                                span: 8,
                            }}
                            lg={{
                                span: 8,
                            }}
                        >
                            <Title
                                className="ginger textMissing"
                                level={3}
                            >
                                WHAT IS MISSING?
                            </Title>
                        </Col>
                        <Col
                            span={8}
                            md={{
                                span: 8,
                            }}
                            lg={{
                                span: 8,
                            }}
                        >
                            <div className='btnCenter'>
                                <Button
                                    className='ginger btnEnter'
                                >enter in castle</Button>
                            </div>
                        </Col>
                        <Col
                            span={8}
                            md={{
                                span: 8,
                            }}
                            lg={{
                                span: 8,
                            }}
                        >
                            <SocialIcons />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Home