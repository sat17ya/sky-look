import { Suspense, lazy } from "react";

const HeroBanner = lazy(() => import("../components/home/HeroBanner"));
const CompanyOverview = lazy(() =>
  import("../components/home/CompanyOverview")
);
const FeaturedProjects = lazy(() =>
  import("../components/home/FeaturedProjects")
);
const Overview = lazy(() => import("../components/home/Overview"));
const ConsultationStrip = lazy(() => import("../components/ConsultationStrip"));
const FAQ = lazy(() => import("../components/FAQ"));
const SocialHighlights = lazy(() =>
  import("../components/home/SocialHighlights")
);
export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="h-[90vh] flex items-center justify-center text-gray-500">
            Loading...
          </div>
        }
      >
        <HeroBanner />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-10 text-center text-gray-500">Loading...</div>
        }
      >
        <CompanyOverview />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <FeaturedProjects />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <Overview />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <ConsultationStrip />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <FAQ category="home" />
      </Suspense>
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-500">Loading...</div>
        }
      >
        <SocialHighlights />
      </Suspense>
    </main>
  );
}
