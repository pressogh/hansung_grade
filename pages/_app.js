import { NextUIProvider } from '@nextui-org/react';
import Layout from '../layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </Layout>

      <style jsx>{`
        .container {
          margin: 0 10% 0 10%;
        }
      `}</style>
    </NextUIProvider>
  );
}