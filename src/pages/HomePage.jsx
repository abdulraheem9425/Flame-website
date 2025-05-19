import React, { lazy, Suspense } from 'react';


const HomeHero = lazy(() => import('../components/home/HomeHero'));
const HomeSilder = lazy(() => import('../components/home/HomeSilder'));
const HomeSilderCard = lazy(() => import('../components/home/HomeSilderCard'));
const ConnectSection = lazy(() => import('../components/home/ConectSection'));

const Home = () => {
  return (
    <Suspense fallback={<div className="text-center py-10 text-red-600">Loading...</div>}>
      <HomeHero />
      <HomeSilder />
      <HomeSilderCard />
      <ConnectSection />
    </Suspense>
  );
};

export default Home;
