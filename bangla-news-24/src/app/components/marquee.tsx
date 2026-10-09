import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
import Link from 'next/link';

interface MarqueeNewsItem {
  id?: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/?limit=10', {
    next: { revalidate: 60 },
  });
  const data = res.ok ? await res.json() : { data: [] };
  const news: MarqueeNewsItem[] = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className="w-full bg-red-700 text-white overflow-hidden py-1.5 flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="shrink-0 bg-red-800 px-4 py-1 rounded text-sm font-medium flex items-center justify-center mr-3">
          সর্বশেষ সংবাদ :
        </div>
        <div className="flex-1 min-w-0 flex items-center overflow-hidden">
          <MarqueeText direction="right" duration={15} pauseOnHover={true}>
            {news.map((h: MarqueeNewsItem, index: number) => {
              const href = h.id ? `/NewsDetail/${h.id}` : '#';
              return (
                <span key={h.id || index} className="inline-block px-3 text-sm sm:text-base">
                  <Link
                    href={href}
                    className="hover:underline transition-opacity hover:opacity-90"
                  >
                    {h.title}
                  </Link>
                  <span className="ml-3 font-semibold opacity-75">•</span>
                </span>
              );
            })}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;