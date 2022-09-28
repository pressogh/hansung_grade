import React, {useEffect, useState} from "react";
import Image from "next/image";
import { Button, Text, User } from "@nextui-org/react";
import LoginModal from "../components/LoginModal";
import Link from "next/link";

import { useRecoilState, useRecoilValue } from "recoil";
import { infoData } from '../utils/States';
import {getInfo} from "../utils/Api";

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const info = useRecoilValue(infoData);

    const handler = () => {
        setVisible(true);
    };

    const closeHandler = () => {
        setVisible(false);
    }

    return (
        <nav className="navbar">
            <LoginModal visible={visible} closeHandler={closeHandler} />
            <div className="container">
                <div className="gnb-menu-left">
                    <Link href="/">
                        <a className="title">
                            <Text
                                h1
                                size={50}
                                css={{
                                textGradient: "90deg, $blue500 -20%, $pink500 50%",
                                marginLeft: "30px"
                                }}
                            >
                                한움
                            </Text>
                        </a>
                    </Link>
                </div>
                <div className="gnb-wrap">
                    <div className="gnb-menu-right">
                        {
                            info ? <div className="info-text">
                                <User
                                    name={info.name}
                                    squared
                                />
                            </div>
                                :
                            <Button auto color="primary" shadow onClick={handler}>
                                로그인
                            </Button> 
                        }

                    </div>
                </div>
            </div>

            <style jsx>{`
                .navbar {
                    margin-top: 1vh;
                }
                
                .container {
                    display: flex;
                    justify-content: space-between;
                }
                
                .title {
                    display: flex;
                    justify-content: center;
                }

                .gnb-wrap {
                    display: flex;
                    align-self: center;
                }

                .gnb-menu-right {
                    margin-right: 10vw;
                }

                .gnb-menu-left {
                    margin-left: 10vw;
                }
                
                .info-text {
                    display: flex;
                    flex-direction: row;
                }
            `}</style>
        </nav>
    );
}