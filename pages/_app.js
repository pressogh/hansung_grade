import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";
import Layout from "../layouts/Layout";

export default function App({ Component, pageProps }) {
    return (
		<RecoilRoot>
			<NextUIProvider>
				<Layout>
					<div className="container">
						<Component {...pageProps} />
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
