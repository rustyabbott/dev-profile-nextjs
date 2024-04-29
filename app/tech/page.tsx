
import Image from "next/image";

export default function Tech() {
  return (
    <main className="pageWrapper">
      <h1>&lt;Technology /&gt;</h1>
      <h2>Software &amp; Languages</h2>
      <p>JavaScript, React, jQuery, ES6, PHP, MySQL, MariaDB, Python, Bash, HTML5, CSS3, SASS, Symfony, Linux, Apache, Nginx, Node.js, Yarn, npm, Webpack, Adobe Suite, AWS, Git, GitHub, GitLab, Docker, OpenStack, Kubernetes, Ubuntu, CentOS, cPanel, WordPress.</p>
      <h2>SureSwift Capital (<a href="https://www.sureswiftcapital.com" target="_blank" rel="noopener noreferrer">Company Site</a>)</h2>
      <div className="gif-wrapper">
        <a href="https://mailparser.io" target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/mailparser.png"
            alt="mailparser.io app screenshot"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: 'auto' }}
          />
        </a>
      </div>
      <p>I&apos;m currently a software engineer at SureSwift Capital where I work on two SaaS applications, <a href="https://mailparser.io" target="_blank" rel="noopener noreferrer">Mailparser</a> &amp; <a href="https://docparser.com" target="_blank" rel="noopener noreferrer">Docparser</a>. We use a variety of technologies and languages including PHP, MySQL, jQuery, AWS Simple Queing Systems (SQS), Docker, and Redis. The apps allow customers to extract data from emails, PDFs, XLS documents (plus many more options) and disperse the data through integrations and APIs like Google Sheets, Zapier, and Microsoft Power Automate.</p>
      <div className="gif-wrapper">
        <a href="https://docparser.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/docparser.png"
            alt="docparser.com app screenshot"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: 'auto' }}
          />
        </a>
      </div>
      <h2>REP Fitness (<a href="https://www.repfitness.com" target="_blank" rel="noopener noreferrer">eCommerce Site</a>)</h2>
      <div className="gif-wrapper">
        <a href="https://www.repfitness.com" target="_blank" rel="noopener noreferrer">
          <Image
              src="/img/repfitness.png"
              alt="repfitness.com screenshot"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}
          />
        </a>
      </div>
      <p>Prior to SureSwift Capital, I was a Solutions Developer for REP Fitness in Denver, Colorado. Responsibilities included automating processes and maximizing procedural efficiency. Tech stack: PHP, MySQL, Magento 2, jQuery, Git, webhooks, and multiple REST API integrations (Kuebix, Brightpearl, ShipStation, UPS, and more).</p>
      <h2>InMotion Hosting (<a href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">Marketing Site</a>)</h2>
      <div className="gif-wrapper">
        <a href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">
          <Image
              src="/img/imh-ww2-home.png"
              alt="inmotionhosting.com screenshot"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}
          />
        </a>
      </div>
      <p>Prior to REP Fitness, I was a developer for InMotion Hosting, working on multiple marketing sites and blogs, including <a href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">inmotionhosting.com</a> and <a href="https://www.webhostinghub.com" target="_blank" rel="noopener noreferrer">webhostinghub.com</a>. Technologies included Symfony 2 & 4, PHP, GitLab CI/CD, jQuery/Javascript, Sass, Nginx, MariaDB, WordPress, and CentOS.</p>
      <h2>RustyAbbott.com (<a href="https://github.com/rustyabbott/rustyabbott.com" target="_blank" rel="noopener noreferrer">GitHub</a>)</h2>
      <p>The web app you&apos;re currently viewing was built with Facebook&apos;s <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>. It utilizes hookrouter for routing and SASS/SCSS for styling.</p>
      <h2>Memory Game (<a href="https://github.com/rustyabbott/memory-game" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://rustyabbott.github.io/memory-game/" target="_blank" rel="noopener noreferrer">Play Live</a>)</h2>
      <p>Match all cards to win! Project two for the Grow with Google / Udacity front-end web development program. Coded with jQuery.</p>
      <div className="gif-wrapper">
        <Image
            src="/img/memory-game.gif"
            alt="memory game"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: 'auto' }}
            unoptimized
          />
      </div>
      <h2>Arcade Game (<a href="https://github.com/rustyabbott/arcade-game" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://rustyabbott.github.io/arcade-game/" target="_blank" rel="noopener noreferrer">Play Live</a>)</h2>
      <p>A remake of the classic arcade game, &quot;Frogger&quot;, for the Grow with Google / Udacity front-end web developer program. Desktop only. Use the arrows on your keyboard to play.</p>
      <div className="gif-wrapper">
        <Image
              src="/img/arcade-game.gif"
              alt="arcade game"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}
              unoptimized
          />
      </div>
      <h2>Analog Clock (<a href="https://github.com/rustyabbott/clock" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://rustyabbott.github.io/clock/" target="_blank" rel="noopener noreferrer">Play Live</a>)</h2>
      <p>Simple analog clock in JavaScript utilizing HTML5 Canvas.</p>
      <div className="gif-wrapper">
        <Image
            src="/img/analog-clock.gif"
            alt="analog clock"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '80%', height: 'auto' }}
            unoptimized
          />
      </div>
    </main>
  );
}
    