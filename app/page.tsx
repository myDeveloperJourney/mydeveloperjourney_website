import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        {/* Placeholder sections */}
        <section id="about" className="min-h-screen px-4 sm:px-6 py-16 max-w-4xl mx-auto text-gray-300 fade-in">
          <h2 className="text-3xl font-bold text-purpleAccent mb-6 tracking-tight sm:tracking-normal leading-snug sm:leading-normal">About / Journey</h2>
          <div className="space-y-6 text-justify text-sm sm:text-base tracking-tight sm:tracking-normal leading-snug sm:leading-normal">
            <p>
              Daniel is originally from Fort Worth, TX, where he earned a Bachelor's degree in Business Science with a concentration in Finance. After spending a decade in the financial industry, he saw the potential of software automation to disrupt his role. Determined to stay ahead of the curve, Daniel taught himself software development over two years, all while finishing his career in finance.
            </p>
            <p>
              Daniel now leads MDJ Studios, a software development studio providing solutions for small businesses and non-profits. Since 2017, he has shared his expertise as a Senior Lead Software Engineering Instructor at General Assembly, where he has mentored aspiring software developers and was recognized as a Distinguished Faculty Member for exemplary performance.
            </p>
            <p>
              Daniel is passionate about building software that empowers people and thrives in fast-paced environments. In addition to running his studio, he is actively involved in mentoring the next generation of developers through community events, speaking engagements, workshops, and courses.
            </p>
            <h3 className="text-2xl font-semibold text-purpleAccent mt-8 mb-4 tracking-tight sm:tracking-normal leading-snug sm:leading-normal">Work Experience</h3>
            <ul className="list-none space-y-2 text-sm sm:text-base tracking-tight sm:tracking-normal leading-snug sm:leading-normal">
              <li>
                <strong>MDJ Studios - Owner | Senior Application Developer</strong>
                <p className="mt-1 mb-1"><strong>(2014 - Present)</strong></p>
                <p className="mt-1 mb-5">Established a successful digital agency, building and maintaining websites, web applications, and SaaS platforms for small businesses and non-profits. Mentors aspiring software developers through free workshops and community events.</p>
              </li>
              <li>
                <strong>General Assembly - Senior Lead Software Engineering Instructor</strong>
                <p className="mt-1 mb-1"><strong>(2017 - Present)</strong></p>
                <p className="mt-1 mb-5">Mentored hundreds of students to become junior software engineers through immersive programs. Recognized as a Distinguished Faculty Member for outstanding performance and served on the Product Advisory Board, updating the curriculum to align with industry trends.</p>
              </li>
              <li>
                <strong>JPMorgan Chase - Private Client Banker</strong>
                <p className="mt-1 mb-1"><strong>(2007 - 2017)</strong></p>
                <p className="mt-1 mb-5">Managed client relationships and provided financial services to high-net-worth individuals. Coached junior bankers to improve sales performance and client satisfaction.</p>
              </li>
              <li>
                <strong>U.S. Army - Wheeled Vehicle Mechanic (Sergeant)</strong>
                <p className="mt-1 mb-1"><strong>(2004 - 2010)</strong></p>
                <p className="mt-1 mb-5">Provided security for logistics patrol operations in Iraq, completing dozens of missions and receiving several awards, including the Purple Heart.</p>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-purpleAccent mt-8 mb-4 tracking-tight sm:tracking-normal leading-snug sm:leading-normal">Education</h3>
            <ul className="list-none space-y-2 text-sm sm:text-base tracking-tight sm:tracking-normal leading-snug sm:leading-normal">
              <li>
                <strong>University of Phoenix - Bachelor of Business Science</strong>
                <p className="mt-1 mb-5"><strong>2011 - 2015</strong></p>
              </li>
              <li>
                <strong>University of Phoenix - Associate's Degree of Arts</strong>
                <p className="mt-1 mb-5"><strong>2008 - 2010</strong></p>
              </li>
              <li>
                <strong>Coding Dojo, Dallas - Full-Stack Software Engineering Certificate</strong>
                <p className="mt-1 mb-5"><strong>2017</strong></p>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-purpleAccent mt-8 mb-4 tracking-tight sm:tracking-normal leading-snug sm:leading-normal">Skills</h3>
            <ul className="list-none space-y-2 text-sm sm:text-base tracking-tight sm:tracking-normal leading-snug sm:leading-normal">
              <li>Languages: Python, JavaScript, HTML5, CSS3</li>
              <li>libraries & Frameworks: React, Next.js, Express, Node.js</li>
              <li>Databases: PostgreSQL, MongoDB, Firebase</li>
              <li>Tools & Services: Git, GitHub Actions, VS Code, Vercel, AWS</li>
              <li>Testing: Jest, Mocha, Pytest, Unittest</li>
              <li>Other: OpenAI, CrewAI</li>
              <li>Operating Systems: Linux (Ubuntu, CentOS, Kali), WSL, macOS</li>
            </ul>
          </div>
        </section>
        <section id="mission" className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-gray-300 fade-in">
          <h2 className="text-3xl font-bold text-purpleAccent mb-6">Mission & Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Loyalty → Commitment</li>
            <li>Duty → Ownership</li>
            <li>Respect → Empathy</li>
            <li>Selfless Service → Generosity</li>
            <li>Honor → Principles</li>
            <li>Integrity → Authenticity</li>
            <li>Personal Courage → Boldness</li>
          </ul>
        </section>
        <section id="projects" className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-gray-300 fade-in">
          <h2 className="text-3xl font-bold text-purpleAccent mb-6">Projects & Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-darkbgAlt p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/listing-view.webp"
              alt="ListingView Screenshot"
              className="w-full h-48 rounded mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">ListingView</h3>
            <p className="text-center">Listing View is a SaaS product providing Etsy sellers insights on successful listings. We helped the client with authentication, a full-site audit for compliance, and site rebranding.</p>
          </div>
          <div className="bg-darkbgAlt p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/rogers-wildlife.webp"
              alt="Rogers Wildlife Screenshot"
              className="w-full h-48 rounded mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Rogers Wildlife</h3>
            <p className="text-center">This is a website built for a non-profit bird rescue center. Built with Next.js and Vercel, it includes donation functionality, an interactive map, a photo gallery, and content related to the organization's mission.</p>
          </div>
          <div className="bg-darkbgAlt p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/the-wright-fence-co.webp"
              alt="The Wright Fence Co Screenshot"
              className="w-full h-48 rounded mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">The Wright Fence Co</h3>
            <p className="text-center">Built with Next.js and Netlify, this site includes a services lineup, carousel, embedded chat, interactive map, and several business-oriented features.</p>
          </div>
        </div>
        </section>
        <section id="speaking" className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-gray-300 fade-in">
          <h2 className="text-3xl font-bold text-purpleAccent mb-6">Speaking / Teaching / Workshops</h2>
          <p>Past and current engagements, topics, and media placeholders.</p>
        </section>
        <section id="contact" className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-gray-300 fade-in">
          <h2 className="text-3xl font-bold text-purpleAccent mb-6 text-center">Contact</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="max-w-md mx-auto space-y-6"
          >
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded bg-darkbgAlt border border-purpleAccent text-white focus:outline-none focus:ring-2 focus:ring-purpleAccent" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded bg-darkbgAlt border border-purpleAccent text-white focus:outline-none focus:ring-2 focus:ring-purpleAccent" />
            <textarea name="message" placeholder="Message" required rows={5} className="w-full px-4 py-2 rounded bg-darkbgAlt border border-purpleAccent text-white focus:outline-none focus:ring-2 focus:ring-purpleAccent" />
            {/* Honeypot field */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <button type="submit" className="w-full bg-purpleAccent text-black font-bold py-3 rounded hover:bg-purpleAccent/90 transition">
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-6 text-purpleAccent text-2xl">
            <a href="https://github.com/danielscott" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.202 2.395.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.923.678 1.86 0 1.343-.012 2.425-.012 2.755 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/danielscott" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.06-1.865-3.06-1.865 0-2.151 1.454-2.151 2.957v5.707h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.034 0 3.594 1.996 3.594 4.59v5.605z" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-center text-gray-500 text-sm italic">
            Let’s get in touch. Whether you're learning to code, building something bold, or just looking for guidance—I’d love to hear from you.
          </p>
        </section>
      </main>
    </>
  );
}
