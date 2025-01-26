import Image from 'next/image'
import logoPic from 'app/components/images/logo.png'


export default function DanCroucher() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src={logoPic}
          width={100}
          height={100}
          alt="Logo"
          className="mr-4"
        />
        <h1 className="text-8xl font-bold tracking-tighter">Cassetter</h1>
      </div>
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">Dan Croucher</h2>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">Game Developer</h3>
      <h4 className="mb-4 text-xl font-medium tracking-tight">Discipline: Video Game Production</h4>
      
      <p className="prose mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h3 className="mb-4 text-2xl font-bold tracking-tighter">Services</h3>
      <p className="prose">
        <ul>
          <li>Experience-driven advice and practical assistance on all aspects of game development.</li>
          <li>Evaluation and troubleshooting of existing development pipelines, teams and projects.</li>
          <li>Real-world project planning, scheduling, and resourcing.</li>
          <li>Finding developmental methods to ship on time, on budget, and at high quality.</li>
          <li>Hands-on, day-to-day production of game development at any stage, for any duration and level of involvement.</li>
          <li>Providing processes and leadership for any and all phases of game development - concept generation, prototyping, pre-production, production, endphases and post-launch.</li>
          <li>Strategic planning for studio growth and high-quality development at a range of team sizes.</li>
          <li>Advise on hiring, team building, and maintaining studio culture, especially in fully remote teams.</li>
          <li>Assisting with management of publisher-client relationships from pitch to post-launch.</li>
          <li>Creating pitch presentations, including key creative, production and business aspects.</li>
          <li>Costing projects and creating resource plans for project pitches.</li>
          <li>Sourcing, costing and running key service providers, especially QA, localisation and user-testing.</li>
          <li>Structuring and building cross-disciplinary teams.</li>
          <li>Leading producers, QA, and creative staff.</li>
          <li>Solving problems in creative and technical teams with collaborative leadership.</li>
          <li>Managing certification planning for Sony, Nintendo, and Microsoft platforms.</li>
          <li>Supporting multi-platform releases across PC, console, and mobile.</li>
        </ul>
      </p>

      <footer className="mt-8">
        <h4 className="text-lg font-semibold">Connect with me:</h4>
        <ul className="flex space-x-4">
          <li><a href="https://twitter.com/yourprofile" className="text-blue-500 hover:underline">Twitter</a></li>
          <li><a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn</a></li>
        </ul>
      </footer>
    </section>
  )
} 