import React from "react";
import { Button, Col, Row } from "antd";
import CarModule from "../../Templates/CarModule/CarModule";
import ThreeGalaxy from "../../Utils/ThreeGlaxy";
import SocialIcons from "../../Templates/SocialIcons/SocialIcons";

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
                            WHAT IS MISSING?
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
                                <Button>Enter</Button>
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