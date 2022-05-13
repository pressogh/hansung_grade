import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot, atom, selector, useRecoilState, useValue } from "recoil";
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
						margin: 0 10% 0 10%;
					}
				`}</style>
			</NextUIProvider>
		</RecoilRoot>
    );
}
