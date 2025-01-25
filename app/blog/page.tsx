// import { BlogPosts } from 'app/components/posts'

// export const metadata = {
//   title: 'Blog',
//   description: 'Read my blog.',
// }
import Image from 'next/image'
import logoPic from './components/images/logo.png'


export default function Page() {
  return (
    // <section>
    //   <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
    //   <BlogPosts />
    // </section>
    <section>
              
              <div>

</div>
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
  <h2 className="mb-4 text-4xl font-bold tracking-tighter">
    Bespoke Video Game Production
  </h2>
      <h3 className="mb-4 text-2xl font-bold tracking-tighter">
        Services     
      </h3>
          <p className="prose">&nbsp;</p>
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
    </section>
  )
}