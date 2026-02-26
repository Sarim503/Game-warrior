'use client';

import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from '@/components/NewsTicker';
import PageInfo from '@/components/PageInfo';

const gameItems = [
  { img: '/img/recent-game/1.jpg', cata: 'racing', title: 'Suspendisse ut justo tem por, rutrum' },
  { img: '/img/recent-game/2.jpg', cata: 'racing', title: 'Susce pulvinar metus nulla, vel facilisis sem' },
  { img: '/img/recent-game/3.jpg', cata: 'adventure', title: 'Susce pulvinar metus nulla, vel facilisis sem' },
  { img: '/img/recent-game/4.jpg', cata: 'racing', title: 'Suspendisse ut justo tem por, rutrum' },
  { img: '/img/recent-game/5.jpg', cata: 'racing', title: 'Susce pulvinar metus nulla, vel facilisis sem' },
  { img: '/img/recent-game/6.jpg', cata: 'adventure', title: 'Susce pulvinar metus nulla, vel facilisis sem' },
  { img: '/img/recent-game/7.jpg', cata: 'racing', title: 'Suspendisse ut justo tem por, rutrum' },
  { img: '/img/recent-game/8.jpg', cata: 'racing', title: 'Susce pulvinar metus nulla, vel facilisis sem' },
];

const latestPosts = [
  { img: '/img/latest-blog/1.jpg', date: 'June 21, 2018', text: 'Ipsum dolor sit amet, consectetur adipisc ing consecips', author: 'By Admin' },
  { img: '/img/latest-blog/2.jpg', date: 'June 21, 2018', text: 'Ipsum dolor sit amet, consectetur adipisc ing consecips', author: 'By Admin' },
  { img: '/img/latest-blog/3.jpg', date: 'June 21, 2018', text: 'Ipsum dolor sit amet, consectetur adipisc ing consecips', author: 'By Admin' },
];

const topComments = [
  { img: '/img/authors/1.jpg', name: 'James Smith', text: 'Lorem consec ipsum dolor sit amet, co' },
  { img: '/img/authors/2.jpg', name: 'Michael James', text: 'Cras sit amet sapien aliquam' },
  { img: '/img/authors/3.jpg', name: 'Justin More', text: 'Lorem ipsum dolor consecsit amet, co' },
];

export default function CategoriesPage() {
  return (
    <>
      <NewsTicker />
      <PageInfo
        title="Video Gallery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        bgImage="/img/page-top-bg/1.jpg"
      />
      <section className="page-section recent-game-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {gameItems.map((g, i) => (
                  <div key={i} className="col-md-6">
                    <div className="recent-game-item">
                      <div className="rgi-thumb set-bg" style={{ backgroundImage: `url(${g.img})` }}>
                        <div className={`cata ${g.cata}`}>{g.cata}</div>
                      </div>
                      <div className="rgi-content">
                        <h5>{g.title}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet.</p>
                        <Link href="#" className="comment">3 Comments</Link>
                        <div className="rgi-extra">
                          <div className="rgi-star">
                            <Image src="/img/icons/star.png" alt="" width={20} height={20} />
                          </div>
                          <div className="rgi-heart">
                            <Image src="/img/icons/heart.png" alt="" width={20} height={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="site-pagination">
                <span className="active">01.</span>
                <Link href="#">02.</Link>
                <Link href="#">03.</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 sidebar pt-5 pt-lg-0">
              <div className="widget-item">
                <form className="search-widget">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><span>🔍</span></button>
                </form>
              </div>
              <div className="widget-item">
                <h4 className="widget-title">Latest Posts</h4>
                <div className="latest-blog">
                  {latestPosts.map((p, i) => (
                    <div key={i} className="lb-item">
                      <div className="lb-thumb set-bg" style={{ backgroundImage: `url(${p.img})` }} />
                      <div className="lb-content">
                        <div className="lb-date">{p.date}</div>
                        <p>{p.text}</p>
                        <a href="#" className="lb-author">{p.author}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="widget-item">
                <h4 className="widget-title">Top Comments</h4>
                <div className="top-comment">
                  {topComments.map((c, i) => (
                    <div key={i} className="tc-item">
                      <div className="tc-thumb set-bg" style={{ backgroundImage: `url(${c.img})` }} />
                      <div className="tc-content">
                        <p><a href="#">{c.name}</a> <span>on</span> {c.text}</p>
                        <div className="tc-date">June 21, 2018</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .rgi-thumb { height: 200px; position: relative; }
        .rgi-content {
          padding: 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
        }
        .rgi-extra { display: flex; margin-top: 10px; }
        .rgi-star { background: var(--accent); padding: 6px; }
        .rgi-heart { background: var(--accent-new); padding: 6px; }
        .site-pagination {
          margin-top: 30px;
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .site-pagination a, .site-pagination span { color: var(--text-secondary); }
        .site-pagination .active { color: var(--accent); font-weight: 700; }
        .search-widget { display: flex; margin-bottom: 25px; }
        .search-widget input {
          flex: 1;
          padding: 12px 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: white;
          border-radius: 4px 0 0 4px;
        }
        .search-widget button {
          padding: 12px 20px;
          background: var(--accent);
          border: none;
          color: var(--bg-primary);
          cursor: pointer;
          border-radius: 0 4px 4px 0;
        }
        .widget-title { margin-bottom: 20px; }
        .lb-item, .tc-item { display: flex; gap: 15px; margin-bottom: 20px; }
        .lb-thumb, .tc-thumb { width: 70px; min-width: 70px; height: 70px; border-radius: 8px; }
      `}</style>
    </>
  );
}
