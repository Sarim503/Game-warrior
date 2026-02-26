'use client';

import NewsTicker from '@/components/NewsTicker';
import PageInfo from '@/components/PageInfo';

const communityPosts = [
  { img: '/img/authors/1.jpg', name: 'James Smith', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame. Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame. Donec venenatis at eros sit amet aliquam.' },
  { img: '/img/authors/8.jpg', name: 'Partik Williams', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame.', hasAttachment: true },
  { img: '/img/authors/5.jpg', name: 'Cris The Man', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame.' },
  { img: '/img/authors/1.jpg', name: 'James Smith', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame.' },
  { img: '/img/authors/4.jpg', name: 'Cris The Man', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame.' },
  { img: '/img/authors/6.jpg', name: 'James Smith', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame.' },
  { img: '/img/authors/7.jpg', name: 'Maria Doe', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, cdictum nisl onsectetur adipisc ing ipsum dolor sit ame.' },
];

export default function CommunityPage() {
  return (
    <>
      <NewsTicker />
      <PageInfo
        title="Our Community"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        bgImage="/img/page-top-bg/4.jpg"
      />
      <section
        className="page-section community-page set-bg"
        style={{ backgroundImage: 'url(/img/community-bg.jpg)' }}
      >
        <div className="community-warp spad">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="community-top-title">All Members (344)</h3>
              </div>
              <div className="col-md-6 text-lg-right">
                <form className="community-filter">
                  <label htmlFor="filter">Show</label>
                  <select id="filter">
                    <option>Everything</option>
                  </select>
                </form>
              </div>
            </div>
            <ul className="community-post-list">
              {communityPosts.map((post, i) => (
                <li key={i}>
                  <div className="community-post">
                    <div
                      className="author-avator set-bg"
                      style={{ backgroundImage: `url(${post.img})` }}
                    />
                    <div className="post-content">
                      <h5>{post.name} <span>posted an update</span></h5>
                      <div className="post-date">{post.date}</div>
                      <p>{post.text}</p>
                      {post.hasAttachment && (
                        <div className="attachment-file">
                          <img src="/img/attachment.jpg" alt="Attachment" />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="site-pagination sp-style-2">
              <span className="active">01.</span>
              <a href="#">02.</a>
              <a href="#">03.</a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .community-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
        }
        .community-warp { position: relative; z-index: 1; }
        .community-top-title { margin-bottom: 20px; }
        .community-filter {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .community-filter select {
          padding: 8px 15px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: white;
          border-radius: 4px;
        }
        .community-post-list { list-style: none; padding: 0; margin: 0; }
        .community-post {
          display: flex;
          gap: 20px;
          padding: 30px 0;
          border-bottom: 1px solid var(--border);
        }
        .author-avator {
          width: 60px;
          min-width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .post-content h5 span { font-weight: 400; opacity: 0.8; font-size: 14px; }
        .post-date { font-size: 12px; color: var(--text-muted); margin-bottom: 10px; }
        .post-content p { margin: 0 0 15px 0; }
        .attachment-file img { max-width: 100%; border-radius: 8px; margin-top: 15px; }
        .site-pagination {
          display: flex;
          gap: 15px;
          justify-content: center;
          padding: 40px 0;
        }
        .site-pagination a { color: var(--text-secondary); }
        .site-pagination .active { color: var(--accent); font-weight: 700; }
        @media (max-width: 767px) {
          .community-post { flex-direction: column; }
          .text-lg-right { text-align: left; }
        }
      `}</style>
    </>
  );
}
