import Image from 'next/image'
import logoPic from 'app/components/images/logo.png'
import danCroucherPic from 'app/components/images/headshot_t.png'

export default function DanCroucher() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="mb-8">
      <a href="./"><Image
          src={logoPic}
          width={128}
          height={128}
          alt="Logo"
          className="mr-4"
        /></a>
        <h1 className="text-8xl font-bold tracking-tighter">Cassetter</h1>
        </div>
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">Dan Croucher</h2>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">Dev Director, Exec Producer, Producer</h3>      
      <p className="prose mb-4 flex items-center justify-between">
        <span>
          I'm a creative and versatile video game producer and studio leader with 20+ years of hands-on game industry experience. I've worked with big budgets and large teams, on a shoestring with tiny ones, and everything in-between. 
          I've shipped many commercially and critically acclaimed games across a large range of platforms, on time and on budget. I pride myself on my drive, passion, attention to detail, straightforward approach and pursuit of quality - both at a game development and studio management level.
        </span>
        <Image
            src={danCroucherPic}
            width={160}
            height={180}
            alt="Logo"
            className="ml-4"
          />
      </p>


      <h3 className="mb-4 text-2xl font-bold tracking-tighter">Things I can do</h3>
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