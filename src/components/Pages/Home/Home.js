import React from "react";
import { Button, Col, Row, Typography } from "antd";
import CarModule from "../../Templates/CarModule/CarModule";
import ThreeGalaxy from "../../Utils/ThreeGlaxy";
import SocialIcons from "../../Templates/SocialIcons/SocialIcons";
import { Link } from 'react-router-dom';
import { AuthenticatedRoutesConstant } from "../../../libs/menuConstant";
const { Title } = Typography;

function Home() {

    return (
        <div className="Home pageWrapper">
            <div className='castleWrapper'>
                <CarModule />
                <ThreeGalaxy />
            </div>
            <div className="HomeSection">
                <div className="muzieknootjesMain">
                    <div className="muzieknootjes one">
                        <div className="noot-1">
                            ♫ ♩
                        </div>
                        <div className="noot-2">
                            ♩
                        </div>
                        <div className="noot-3">
                            ♯ ♪
                        </div>
                        <div className="noot-4">
                            ♪
                        </div>
                    </div>
                    <div className="muzieknootjes two">
                        <div className="noot-1">
                            ♫ ♩
                        </div>
                        <div className="noot-2">
                            ♩
                        </div>
                        <div className="noot-3">
                            ♯ ♪
                        </div>
                        <div className="noot-4">
                            ♪
                        </div>
                    </div>
                    <div className="muzieknootjes three">
                        <div className="noot-1">
                            ♫ ♩
                        </div>
                        <div className="noot-2">
                            ♩
                        </div>
                        <div className="noot-3">
                            ♯ ♪
                        </div>
                        <div className="noot-4">
                            ♪
                        </div>
                    </div>
                </div>
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
                                className="ginger textMissing cursor-scale"
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
                                    className='ginger btnEnter cursor-scale'
                                >
                                    <Link to={AuthenticatedRoutesConstant.ABOUT}>enter in castle</Link>
                                </Button>
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