import { Suspense } from "react";
import Marquee from "./components/marquee";
import MainNewsPage from "./MainNews/page";
import SectionCardPage, { SectionData } from "./components/SectionCard";
import MostReadPage from "./MostRead/page";



export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections', {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const sections = data?.data || [];
  const mainNews = sections[0]?.articles || [];
  const excludedKeywords = [
    "হোয়াটসঅ্যাপ",
    "হোয়াটসঅ্যাপ",
    "ইন্সটাগ্রাম",
    "ইনস্টাগ্রাম",
    "সামাজিক মাধ্যমে",
  ];
  const otherSections = sections
    .slice(1)
    .filter((s: SectionData) => !excludedKeywords.some((keyword) => s.title?.includes(keyword)));
  return (
    <div className="min-h-screen bg-white">
      <Marquee />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* news section */}
          <div className="lg:col-span-2">
            <Suspense fallback="Loading...">
              <MainNewsPage mainNews={mainNews} key={mainNews.id} />
              <div className="mt-12 space-y-12">
                {otherSections.map((os: SectionData, index: number) => (
                  <SectionCardPage key={os.curationId || index} sectionData={os} />
                ))}
              </div>
            </Suspense>
          </div>

          {/* most read section */}
          <div className="lg:col-span-1">
            <MostReadPage />
          </div>
        </div>
      </div>
    </div>
  );
}
