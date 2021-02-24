import React, { lazy, Suspense } from 'react';

const LazyStaking = lazy(() => import('./Staking'));

const Staking = props => (
  <Suspense fallback={null}>
    <LazyStaking {...props} />
  </Suspense>
);

export default Staking;
