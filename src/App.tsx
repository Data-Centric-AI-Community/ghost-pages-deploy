import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="brand">
            <img src="/assets/logo-icon.svg" alt="Data-Centric AI Community" className="logo" />
            <span className="brand-name">Data-Centric AI Community</span>
          </div>
          <nav className="nav">
            <a href="https://discord.gg/mw7xjJ7b7s" className="nav-link discord">
              <img src="/assets/discord.svg" alt="Discord" />
              Discord
            </a>
            <a href="https://github.com/ydataai/community" className="nav-link github">
              <img src="/assets/github.svg" alt="GitHub" />
              GitHub
            </a>
            <a href="#learn-more" className="nav-link">Learn More</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Welcome to the Data-Centric AI Community</h1>
            <p className="hero-description">
              Join a vibrant community of data scientists, ML engineers, and AI practitioners focused on improving data quality for better AI outcomes.
            </p>
            <div className="hero-actions">
              <a href="https://discord.gg/mw7xjJ7b7s" className="btn btn-primary">
                Join Discord
                <img src="/assets/discord.svg" alt="Discord" />
              </a>
              <a href="https://github.com/ydataai/community" className="btn btn-secondary">
                GitHub
                <img src="/assets/github.svg" alt="GitHub" />
              </a>
            </div>
          </div>
        </section>

        <section className="definition">
          <div className="container">
            <h2 className="section-title">What is Data-Centric AI?</h2>
            <div className="definition-content">
              <p className="definition-text">
                <strong>Data-centric AI</strong> is the discipline of systematically engineering the data used to build an AI system.
              </p>
              <div className="definition-attribution">
                <p>— Andrew Ng</p>
                <p>Marco Postiglione adds: <em>"It's all about shifting the focus from model complexity to data quality, ensuring robust and reliable AI systems."</em></p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Explore our tools and resources</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src="/assets/data-profiling.svg" alt="Data Profiling" className="feature-icon" />
                <h3 className="feature-title">Data Profiling</h3>
                <p className="feature-description">Understand your data better with comprehensive profiling and quality assessment tools.</p>
                <a href="https://github.com/ydataai/ydata-profiling" className="feature-link">
                  Explore your data with ydata-profiling!
                  <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                </a>
              </div>

              <div className="feature-card">
                <img src="/assets/synthetic-data.svg" alt="Synthetic Data" className="feature-icon" />
                <h3 className="feature-title">Synthetic Data</h3>
                <p className="feature-description">Generate high-quality synthetic data to augment your datasets and improve model performance.</p>
                <a href="https://github.com/ydataai/ydata-synthetic" className="feature-link">
                  Expand your data with ydata-synthetic!
                  <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                </a>
              </div>

              <div className="feature-card">
                <img src="/assets/data-labeling.svg" alt="Data Labeling" className="feature-icon" />
                <h3 className="feature-title">Data Labeling</h3>
                <p className="feature-description">Efficient and accurate data labeling solutions for supervised learning projects.</p>
                <a href="#" className="feature-link">
                  Coming Soon
                  <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="blog" id="learn-more">
          <div className="container">
            <h2 className="section-title">Want to learn more?</h2>
            <div className="blog-grid">
              <article className="blog-card">
                <img src="/assets/blog/06.png" alt="Blog post" className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">Introducing the Data-Centric AI Community</h3>
                  <p className="blog-description">A place to discuss data quality for data science.</p>
                  <a href="https://venturebeat.com/2022/02/22/ydata-launches-data-centric-ai-community-for-data-scientists/" className="blog-link">
                    Learn More
                    <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                  </a>
                </div>
              </article>
              
              <article className="blog-card">
                <img src="/assets/blog/05.jpeg" alt="Blog post" className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">From model-centric to data-centric</h3>
                  <p className="blog-description">A new paradigm for AI development — focused on data quality.</p>
                  <a href="https://towardsdatascience.com/from-model-centric-to-data-centric-4beb8ef50475" className="blog-link">
                    Learn More
                    <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                  </a>
                </div>
              </article>
              
              <article className="blog-card">
                <img src="/assets/blog/04.jpeg" alt="Blog post" className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">Pandas Profiling for Quicker Data Understanding</h3>
                  <p className="blog-description">Read your data? Pause. Generate the Pandas Profiling report first.</p>
                  <a href="https://towardsdatascience.com/pandas-profiling-for-quicker-data-understanding-83bb9fc6719f" className="blog-link">
                    Learn More
                    <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                  </a>
                </div>
              </article>
              
              <article className="blog-card">
                <img src="/assets/blog/03.png" alt="Blog post" className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">Synthetic Time-Series Data: A GAN approach</h3>
                  <p className="blog-description">Generate synthetic sequential data with TimeGAN.</p>
                  <a href="https://towardsdatascience.com/synthetic-time-series-data-a-gan-approach-869a984f2239" className="blog-link">
                    Learn More
                    <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                  </a>
                </div>
              </article>
              
              <article className="blog-card">
                <img src="/assets/blog/02.jpeg" alt="Blog post" className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">How to Validate the Quality of Your Synthetic Data</h3>
                  <p className="blog-description">A tutorial on how you can combine ydata-synthetic with great expectations.</p>
                  <a href="https://towardsdatascience.com/how-to-validate-the-quality-of-your-synthetic-data-34503eba6da" className="blog-link">
                    Learn More
                    <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                  </a>
                </div>
              </article>
              
              <article className="blog-card">
                <img src="/assets/blog/01.jpeg" alt="Blog post" className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">Versioning and Labeling — Better Together</h3>
                  <p className="blog-description">Data labeling and data versioning provide a rock solid bedrock to build your machine learning models on now and in the future.</p>
                  <a href="https://towardsdatascience.com/versioning-and-labeling-better-together-2dd7d4fe8bd9" className="blog-link">
                    Learn More
                    <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Join our community on <a href="https://discord.gg/mw7xjJ7b7s" className="footer-link">Discord</a> to connect with other data-centric AI practitioners!
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App