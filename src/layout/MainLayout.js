import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import pageMotionProps from '@utils/pageTransitionVars';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Hero3D from '@components/Hero3D';

export default function MainLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Hero3D />
      <AnimatePresence exitBeforeEnter initial={false}>
        <LazyMotion features={domAnimation}>
          <m.main {...pageMotionProps} key={router.asPath} className="grid grid-rows-1">
            {children}
          </m.main>
        </LazyMotion>
      </AnimatePresence>
    </>
  );
}
