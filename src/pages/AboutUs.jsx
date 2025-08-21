import { Suspense, lazy } from "react";
const WhoWeAre = lazy(() => import("../components/about/WhoWeAre"));
const CoreValues = lazy(() => import("../components/about/CoreValues"));
const StatsStrip = lazy(() => import("../components/about/StatsStrip"));
const TeamSection = lazy(() => import("../components/about/TeamSection"));
const ConsultationStrip = lazy(() => import("../components/ConsultationStrip"));


export default function AboutUs() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="h-[90vh] flex items-center justify-center text-gray-500">
            Loading...
          </div>
        }
      >
        <WhoWeAre />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-16 text-center  text-gray-500">Loading...</div>
        }
      >
        <CoreValues/>
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <StatsStrip  />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <TeamSection />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <ConsultationStrip />
      </Suspense>
    </main>
  );
}
