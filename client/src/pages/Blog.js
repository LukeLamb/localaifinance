import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Local AI is the Future of Financial Privacy',
      excerpt: 'Discover why running AI locally on your device is the only way to truly protect your financial data in an increasingly connected world.',
      date: '2025-09-15',
      readTime: '5 min read',
      category: 'Privacy'
    },
    {
      id: 2,
      title: 'Getting Started with Local AI Finance',
      excerpt: 'A comprehensive guide to setting up and making the most of your local AI financial assistant.',
      date: '2025-09-10',
      readTime: '8 min read',
      category: 'Tutorial'
    },
    {
      id: 3,
      title: 'The Power of Offline AI Analysis',
      excerpt: 'Learn how our offline AI can provide insights without ever connecting to the internet.',
      date: '2025-09-05',
      readTime: '6 min read',
      category: 'Technology'
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero section">
        <div className="container text-center">
          <h1>Blog</h1>
          <p className="text-secondary">
            Insights, updates, and guides for mastering local AI finance
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid grid grid-3">
            {blogPosts.map(post => (
              <article key={post.id} className="card blog-card">
                <div className="blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a href={`#post-${post.id}`} className="btn btn-secondary">
                  Read More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
