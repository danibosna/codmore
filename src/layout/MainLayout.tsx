import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import pageMotionProps from '@utils/pageTransitionVars';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Hero3D from '@components/Hero3D';
import { ReactNode, useEffect } from 'react';
import Web3 from 'web3';
import Header from '@common/Header';
import Nav from '@common/Nav';

declare var window: any;
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      web3.eth?.requestAccounts().then(console.log);
    }
  }, []);
  const router = useRouter();
  return (
    <>
      <Header />
      <Nav />
      <Hero3D>
        <AnimatePresence exitBeforeEnter initial={false}>
          <LazyMotion features={domAnimation}>
            <m.main {...pageMotionProps} key={router.asPath} className="w-full h-screen absolute z-30 bottom-0">
              {children}
            </m.main>
          </LazyMotion>
        </AnimatePresence>
      </Hero3D>
    </>
  );
}
