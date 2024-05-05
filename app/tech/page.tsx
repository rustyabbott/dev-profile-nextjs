
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export default function Tech() {
  return (
    <>
      <Header />

      <main className="pageWrapper">

        <h1>&lt;Technology /&gt;</h1>

        <h2>Software, Languages, &amp; Frameworks</h2>

        <p>
          Proficieny: PHP, JavaScript, TypeScript, MySQL, Laravel, React, Vue, Symfony, Tailwind, CSS, Linux (Ubuntu), Bash, AWS services (EC2, ASG, CloudWatch, S3, SQS), CI/CD via GitLab & GitHub. Familiarity: Python, Django, Go, Kubernetes, PyTorch.
        </p>

        <h2>
          National Wild Turkey Federation (<Link href="https://www.nwtf.org/" target="_blank" rel="noopener noreferrer">Company Site</Link>)
        </h2>

        <div className="gif-wrapper">
          <Link href="https://www.nwtf.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/nwtf.png"
              alt="National Wild Turkey Federation"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}
              className="m-auto"
            />
          </Link>
        </div>

        <p>
          I&apos;m currently a full stack developer at the National Wild Turkey Federation. My primary project is re-writing their events management system with Laravel Sail + Inertia.js (Vue). I also maintain and update the existing system, plus lead Devops using GitLab CI/CD and AWS services.
        </p>

        <h2>
          SureSwift Capital (<Link href="https://www.sureswiftcapital.com" target="_blank" rel="noopener noreferrer">Company Site</Link>)
        </h2>

        <div className="gif-wrapper">
          <Link href="https://mailparser.io" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/mailparser.png"
              alt="mailparser.io app screenshot"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}
            />
          </Link>
        </div>

        <p>
          Prior to the NWTF, I was a a software engineer at SureSwift Capital where I worked on two SaaS web applications, <Link href="https://mailparser.io" target="_blank" rel="noopener noreferrer">Mailparser</Link> &amp; <Link href="https://docparser.com" target="_blank" rel="noopener noreferrer">Docparser</Link>. We used a variety of technologies and languages including PHP, MySQL, jQuery, AWS Simple Queing Systems (SQS), Docker, and Redis. The apps allow customers to extract data from emails, PDFs, XLS documents (plus many more options) and disperse the data through integrations and APIs like Google Sheets, Zapier, and Microsoft Power Automate.
        </p>

        <div className="gif-wrapper">
          <Link href="https://docparser.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/docparser.png"
              alt="docparser.com app screenshot"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}
            />
          </Link>
        </div>

        <h2>
          REP Fitness (<Link href="https://www.repfitness.com" target="_blank" rel="noopener noreferrer">eCommerce Site</Link>)
        </h2>

        <div className="gif-wrapper">
          <Link href="https://www.repfitness.com" target="_blank" rel="noopener noreferrer">
            <Image
                src="/img/repfitness.png"
                alt="repfitness.com screenshot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
            />
          </Link>
        </div>

        <p>
          Prior to SureSwift Capital, I was a Solutions Developer for REP Fitness in Denver, Colorado. Responsibilities included automating processes and maximizing procedural efficiency. Tech stack: PHP, MySQL, Magento 2, jQuery, Git, webhooks, and multiple REST API integrations (Kuebix, Brightpearl, ShipStation, UPS, and more).
        </p>

        <h2>
          InMotion Hosting (<Link href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">Marketing Site</Link>)
        </h2>

        <div className="gif-wrapper">
          <Link href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">
            <Image
                src="/img/imh-ww2-home.png"
                alt="inmotionhosting.com screenshot"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
            />
          </Link>
        </div>

        <p>
          Prior to REP Fitness, I was a developer for InMotion Hosting, working on multiple marketing sites and blogs, including <Link href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">inmotionhosting.com</Link> and <Link href="https://www.webhostinghub.com" target="_blank" rel="noopener noreferrer">webhostinghub.com</Link>. Technologies included Symfony 2 & 4, PHP, GitLab CI/CD, jQuery/Javascript, Sass, Nginx, MariaDB, WordPress, and CentOS.
        </p>

        <h2>
          RustyAbbott.com (<Link href="https://github.com/rustyabbott/rustyabbott.com" target="_blank" rel="noopener noreferrer">GitHub</Link>)
        </h2>

        <p>
          The web app you&apos;re currently viewing was originally built with Facebook&apos;s <Link href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</Link>. Recently I&apos;ve migrated to Next.js and use GitHub Actions to deploy to an AWS EC2 instance.
        </p>

        <h2>
          Memory Game (<Link href="https://github.com/rustyabbott/memory-game" target="_blank" rel="noopener noreferrer">GitHub</Link>, <Link href="https://rustyabbott.github.io/memory-game/" target="_blank" rel="noopener noreferrer">Play Live</Link>)
        </h2>

        <p>
          Match all cards to win! Project two for the Grow with Google / Udacity front-end web development program. Coded with jQuery.
        </p>

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

        <h2>
          Arcade Game (<Link href="https://github.com/rustyabbott/arcade-game" target="_blank" rel="noopener noreferrer">GitHub</Link>, <Link href="https://rustyabbott.github.io/arcade-game/" target="_blank" rel="noopener noreferrer">Play Live</Link>)
          </h2>
        <p>
          A remake of the classic arcade game, &quot;Frogger&quot;, for the Grow with Google / Udacity front-end web developer program. Desktop only. Use the arrows on your keyboard to play.
        </p>

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

        <h2>
          Analog Clock (<Link href="https://github.com/rustyabbott/clock" target="_blank" rel="noopener noreferrer">GitHub</Link>, <Link href="https://rustyabbott.github.io/clock/" target="_blank" rel="noopener noreferrer">Play Live</Link>)
        </h2>

        <p>
          Simple analog clock in JavaScript utilizing HTML5 Canvas.
        </p>
        
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
    </>
  );
}
    