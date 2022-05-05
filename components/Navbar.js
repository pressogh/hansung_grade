import Link from "next/link";
import { Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Navbar() {
    var router = useRouter();

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/">
                    <a className="title">
                        <h2>한</h2>
                        <h2>움</h2>
                    </a>
                </Link>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    border-bottom: 1px solid gray;
                }
                
                .title {
                    display: flex;
                    justify-content: center;
                }

                a {
                    margin: 10px;
                }
            `}</style>
        </nav>
    );
}