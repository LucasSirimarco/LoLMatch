import "./news.css";

const News = () => {
  return (
    <div className="news-container">
      <section className="main-news">
        <h2>Latest News</h2>
        <article className="news-item">
          <h3>Breaking News</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lacus eget sapien faucibus tincidunt.</p>
        </article>
        <article className="news-item">
          <h3>Technology</h3>
          <p>Quisque gravida eros id nisi tincidunt, ac pretium justo lacinia. Nam volutpat diam ut dui mollis laoreet.</p>
        </article>
      </section>

      <aside className="sidebar">
        <h2>Trending Topics</h2>
        <ul className="trending-topics">
          <li>#ReactJS</li>
          <li>#WebDevelopment</li>
          <li>#TechNews</li>
        </ul>
      </aside>

      <section className="carousel">
        <h2>Featured Stories</h2>
        <div className="carousel-container">
          <div className="carousel-item">
            <img src="https://via.placeholder.com/150" alt="Story 1" />
            <p>Story 1 description</p>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/150" alt="Story 2" />
            <p>Story 2 description</p>
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/150" alt="Story 3" />
            <p>Story 3 description</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
