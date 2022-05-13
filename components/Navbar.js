import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import LoginModal from "../components/LoginModal";
import Link from "next/link";
import { Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Navbar() {
    var router = useRouter();
    const [visible, setVisible] = useState(false);

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
                        <Link href="/about">
                            <a>
                                <Text
                                    h3
                                    size={30}
                                    >
                                        about
                                </Text>
                            </a>
                        </Link>
                    </div>
                    <div className="gnb-menu-right">
                        <Button auto color="warning" shadow onClick={handler}>
                            로그인
                        </Button>
                    </div>
                </div>

            </div>

            <style jsx>{`
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
                    margin-right: 10%;
                    align-self: end;
                }

                .gnb-menu-right {
                    margin-right: 10%;
                }

                .gnb-menu-left {
                    margin-left: 10%;
                }
            `}</style>
        </nav>
    );
}