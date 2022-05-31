import {NextUIProvider} from "@nextui-org/react";
import { RecoilRoot } from "recoil";
import Layout from "../layouts/Layout";
import {ToastContainer, Zoom} from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';


export default function App({ Component, pageProps }) {
    return (
		<RecoilRoot>
			<NextUIProvider>
				<Layout>
					<div className="container">
						<Component {...pageProps} />
						<ToastContainer
							position="top-center"
							autoClose={3000}
							pauseOnHover={false}
							transition={Zoom}
							style={{ width: "40vw" }}
						/>
					</div>
				</Layout>

				<style jsx>{`
					.container {
						margin: 0 10vw 0 10vw;
					}
				`}</style>
			</NextUIProvider>
		</RecoilRoot>
    );
}