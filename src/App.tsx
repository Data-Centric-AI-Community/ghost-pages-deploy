import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="nav-brand">
              <img src="/assets/logo-icon.svg" alt="Data-Centric AI" className="logo-icon" />
              <span className="brand-text">Data-Centric AI Community</span>
            </div>
            <div className="nav-links">
              <a href="https://discord.gg/Z73kKJBRyv" className="nav-link">Discord</a>
              <a href="https://github.com/Data-Centric-AI-Community" className="nav-link">Github</a>
              <a href="#learn-more" className="nav-link">Learn More</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
          <div className="floating-element element-5"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to<br />
              the <span className="highlight">Data-Centric AI</span> Community
            </h1>
            <p className="hero-description">
              Are you intrigued by the possibilities of Data-Centric AI, and you want more?<br />
              Join like-minded experts, thought-leaders and peers at the Data-Centric Community!
            </p>
            <div className="hero-buttons">
              <a href="https://discord.gg/Z73kKJBRyv" className="btn btn-primary">
                <img src="/assets/discord.svg" alt="Discord" className="btn-icon" />
                Join us on Discord
              </a>
              <a href="https://github.com/Data-Centric-AI-Community" className="btn btn-outline">
                <img src="/assets/github.svg" alt="GitHub" className="btn-icon" />
                Join us on Github
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="definition">
        <div className="container">
          <h2 className="section-title">
            Want to understand <span className="highlight">Data-Centric AI</span> better?
          </h2>
          <div className="definition-card">
            <p className="definition-text">
              <strong>Data-Centric AI</strong> is the process of building and testing AI systems by focusing on data-centric operations (i.e. cleaning, cleansing, pre-processing, balancing, augmentation) rather than model-centric operations (i.e. hyper-parameters selection, architectural changes).
            </p>
            <div className="definition-footer">
              <p className="definition-attribution">
                The term is coined by <strong>Andrew Ng</strong>. The definition is provided by <strong>Marco Postiglione</strong> and chosen by the community itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            The Data-Centric AI Community is the place to discuss data quality for data science.
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="/assets/data-profiling.svg" alt="Data Profiling" className="feature-icon" />
              <h3 className="feature-title">Data Profiling</h3>
              <p className="feature-description">
                Understanding the existing data is the first step. Profile your data in a few lines of code.
              </p>
              <a href="https://github.com/ydataai/ydata-profiling" className="feature-link">
                Explore your data with ydata-profiling!
                <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
              </a>
            </div>
            
            <div className="feature-card">
              <img src="/assets/synthetic-data.svg" alt="Synthetic Data" className="feature-icon" />
              <h3 className="feature-title">Synthetic Data</h3>
              <p className="feature-description">
                Synthetic data is artificially created data that keeps the original data properties, ensuring its business value while being privacy compliant.
              </p>
              <a href="https://github.com/ydataai/ydata-synthetic" className="feature-link">
                Expand your data with ydata-synthetic!
                <img src="/assets/chevron-right.svg" alt="Go to" className="chevron" />
              </a>
            </div>
            
            <div className="feature-card">
              <img src="/assets/data-labeling.svg" alt="Data Labeling" className="feature-icon" />
              <h3 className="feature-title">Data Labeling</h3>
              <p className="feature-description">
                Isn't it one of your biggest pain points in data quality? The DCAI Community cultivates meaningful discussions around this and other topics!
              </p>
              <div className="feature-coming-soon">
                Coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">Stay updated on Discord</h2>
          <p className="footer-description">
            Join the Data-Centric AI Community on Discord and be part of the conversation!
          </p>
          <a href="https://discord.gg/Z73kKJBRyv" className="btn btn-secondary">
            <img src="/assets/discord.svg" alt="Discord" className="btn-icon" />
            Join Discord
          </a>
        </div>
      </footer>
    </>
  )
}

export default App