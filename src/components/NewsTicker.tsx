'use client';

const newsItems = [
  { tag: 'new', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { tag: 'strategy', text: 'Isum dolor sit amet, consectetur adipiscing elit.' },
  { tag: 'racing', text: 'Isum dolor sit amet, consectetur adipiscing elit.' },
];

export default function NewsTicker() {
  return (
    <div className="latest-news-section">
      <div className="ln-title">Latest News</div>
      <div className="news-ticker">
        <div className="news-ticker-content">
          {newsItems.map((item, i) => (
            <div key={i} className="nt-item">
              <span className={`cata ${item.tag}`}>{item.tag}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .latest-news-section {
          overflow: hidden;
          background: var(--bg-secondary);
          padding: 24px 0;
          position: relative;
        }
        .ln-title {
          padding: 0 20px;
          font-size: 18px;
          font-weight: 500;
          color: var(--bg-primary);
          background: var(--accent);
          display: inline-block;
          margin-right: 20px;
          vertical-align: middle;
        }
        .news-ticker {
          display: inline-block;
          overflow: hidden;
          width: calc(100% - 150px);
          vertical-align: middle;
        }
        .news-ticker-content {
          display: flex;
          gap: 35px;
          animation: ticker 20s linear infinite;
        }
        .nt-item {
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          white-space: nowrap;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 767px) {
          .latest-news-section { padding: 16px 15px; }
          .ln-title { display: block; margin: 0 0 12px 0; }
          .news-ticker { width: 100%; }
          .news-ticker-content { flex-wrap: wrap; animation: none; }
        }
      `}</style>
    </div>
  );
}
