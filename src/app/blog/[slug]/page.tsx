'use client';

import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from '@/components/NewsTicker';
import PageInfo from '@/components/PageInfo';

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

const comments = [
  { img: '/img/authors/1.jpg', name: 'James Smith', date: 'June 21, 2018', text: 'Donec venenatis at eros sit amet aliquam. Donec vel orci efficitur, dictum nisl vitae, scelerisque nibh.' },
  { img: '/img/authors/2.jpg', name: 'James Smith', date: 'June 21, 2018', text: 'Donec venenatis at eros sit amet aliquam. Donec vel orci efficitur, dictum nisl vitae, scelerisque nibh.' },
];

export default function SingleBlogPage() {
  return (
    <>
      <NewsTicker />
      <PageInfo
        title="Genji - The Game"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        bgImage="/img/page-top-bg/2.jpg"
      />
      <section className="page-section single-blog-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-thumb set-bg" style={{ backgroundImage: 'url(/img/recent-game/big.jpg)' }}>
                <div className="cata new">new</div>
                <div className="rgi-extra">
                  <div className="rgi-star">
                    <Image src="/img/icons/star.png" alt="" width={20} height={20} />
                  </div>
                  <div className="rgi-heart">
                    <Image src="/img/icons/heart.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>
              <div className="blog-content">
                <h3>Genji: Suspendisse ut justo tem porrutrum</h3>
                <a href="" className="meta-comment">3 comment</a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.
                  Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque id nibh ac congue.
                </p>
                <p>
                  Donec venenatis at eros sit amet aliquam. Donec vel orci efficitur, dictum nisl vitae,
                  scelerisque nibh. Curabitur eget ipsum pulvinar nunc gravida interdum.
                </p>
              </div>
              <div className="comment-warp">
                <h4 className="comment-title">Top Comments</h4>
                <ul className="comment-list">
                  {comments.map((c, i) => (
                    <li key={i}>
                      <div className="comment">
                        <div className="comment-avator set-bg" style={{ backgroundImage: `url(${c.img})` }} />
                        <div className="comment-content">
                          <h5>{c.name} <span>{c.date}</span></h5>
                          <p>{c.text}</p>
                          <a href="" className="reply">Reply</a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="comment-form-warp">
                <h4 className="comment-title">Leave Your Comment</h4>
                <form className="comment-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Subject" />
                      <textarea placeholder="Message" rows={5} />
                      <button type="submit" className="site-btn btn-sm">Send</button>
                    </div>
                  </div>
                </form>
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
        .blog-thumb {
          height: 400px;
          position: relative;
          margin-bottom: 30px;
        }
        .blog-thumb .cata { position: absolute; top: 28px; left: 29px; }
        .blog-thumb .rgi-extra { position: absolute; bottom: 20px; right: 20px; display: flex; }
        .blog-thumb .rgi-star { background: var(--accent); padding: 8px; }
        .blog-thumb .rgi-heart { background: var(--accent-new); padding: 8px; }
        .blog-content h3 { margin-bottom: 10px; }
        .meta-comment { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; display: block; }
        .comment-warp { margin: 40px 0; }
        .comment-title { margin-bottom: 25px; }
        .comment-list { list-style: none; padding: 0; margin: 0; }
        .comment {
          display: flex;
          gap: 20px;
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid var(--border);
        }
        .comment-avator {
          width: 60px;
          min-width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .comment-content h5 span { font-weight: 400; font-size: 14px; color: var(--text-muted); }
        .reply { font-size: 14px; color: var(--accent); }
        .comment-form input, .comment-form textarea {
          width: 100%;
          padding: 14px 20px;
          margin-bottom: 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: white;
          border-radius: 4px;
        }
        .search-widget { display: flex; margin-bottom: 25px; }
        .search-widget input {
          flex: 1;
          padding: 12px 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: white;
        }
        .search-widget button {
          padding: 12px 20px;
          background: var(--accent);
          border: none;
          color: var(--bg-primary);
          cursor: pointer;
        }
        .lb-item, .tc-item { display: flex; gap: 15px; margin-bottom: 20px; }
        .lb-thumb, .tc-thumb { width: 70px; min-width: 70px; height: 70px; border-radius: 8px; }
      `}</style>
    </>
  );
}
