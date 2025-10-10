import Image from 'next/image'
import logoPic from 'app/components/images/logo.png'
import danCroucherPic from 'app/components/images/headshot_t.png'

export default function DanCroucher() {
  return (
    <section>
      <div className="mb-8">
      {/* <a href="./"><Image
          src={logoPic}
          width={128}
          height={128}
          alt="Logo"
          className="mr-4"
        /></a> */}
        <h1 className="text-8xl font-bold tracking-tighter">Dan Croucher</h1>
        </div>
      <h2 className="mb-4 text-4xl font-bold tracking-tight">Profile</h2>   
      <p className="prose mb-4 flex items-center">
      <span>
          I'm a creative and versatile video game producer and studio leader with 20+ years of hands-on game industry experience. I've worked with big budgets and large teams, on a shoestring with tiny ones, and everything in-between. 
      </span>
      </p>
      <p className="prose">
      I've shipped many commercially and critically acclaimed games across a large range of platforms, on time and on budget. I pride myself on my drive, passion, attention to detail, straightforward approach and pursuit of quality.
      </p>
      <br /><br />
      <h2 className="mb-4 text-4xl font-bold tracking-tight">Experience</h2>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">Lead Producer & Development Director at <a href="https://www.eurogamer.net/goodbye-roll7-you-deserved-so-much-better" target="_blank">Roll7</a></h3>
      <p className="prose">
      <i>Remote, November 2019 - November 2024</i> </p>
      <p className="prose">
      I led the development of the BAFTA-nominated <a href="https://www.youtube.com/watch?v=m0-MbIc96PI" target="_blank">OlliOlli World</a> and collaborated on the BAFTA-winning <a href="https://www.youtube.com/watch?v=xUAhqImHbsE" target="_blank">Rollerdrome</a>.<br><br>Following the acquisition of the studio by Take-Two Interactive I then went on to head up all development at the studio. My responsibilities included scheduling and resourcing multiple teams and concurrent projects across the studio as well as high-level management of all aspects of production and QA, studio strategy and development quality.
      </p><br><br>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">Senior Producer & Development Director at <a href="https://www.gamesindustry.biz/wish-studios-closing-down" target="_blank">Wish Studios</a></h3>
      <p className="prose">
      <i>In-Office, July 2014 - March 2019</i></p>
      <p className="prose">
      I joined Wish Studios to handle pre-production on <a href="https://www.youtube.com/watch?v=92uXFeQNCCk" target="_blank">That's You!</a> - a multi-million budget social party game project that formed the basis of Sony's PS4 Playlink strategy. Over five years at Wish I led the dev team to produce three innovative and ground-breaking social games on PS4, including <a href="https://www.youtube.com/watch?v=ApXbCa-6Coc" target="_blank">Knowledge is Power</a>. After becoming Development Director, I was responsible for running all internal production on existing and new projects, pitching new projects and helping shape strategy and development of the studio as a whole.
      </p><br><br>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">Senior Producer (Contract) at <a href="https://www.mediamolecule.com/" target="_blank">Media Molecule</a></h3>
      <p className="prose">
      <i>Hybrid, June 2025 - Present</i></p>
      <p className="prose">
      At Media Molecule I've joined a large team of Producers taking a large creative project into full production. My role is hands-on, looking after a group of 20 multi-disciplinary artists, designers and writers. Mixing agile process with content pipeline tracking and workflow managment, this technical role leverages my skills in team management and facilitation, and leans on a creative approach to production within a dev team.
      </p><br><br>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">Senior Producer (Contract) at <a href="https://electricsquare.com/" target="_blank">Electric Square</a></h3>
      <p className="prose">
      <i>In-Office, April - October 2019</i></p>
      <p className="prose">
      I joined Electric Square to assist completion of the soft-launch of F2P title Forza Street for Microsoft, on iOS and Android. Working with five producers on a large development team. I collaborated closely with engineering and QA to take this Unreal Engine PC title to a position of performance and quality, as well as working closely with the client publisher and other release partners to ensure a successful launch.  
      </p><br><br>




      <p className="prose">
        <ul>

          <li><a href="https://www.youtube.com/watch?v=jTIw2uAYFR8" target="_blank">Scram Kitty and his Buddy on Rails</a> at <a href="https://dakkodakko.com/presskit/" target="_blank">Dakko Dakko</a></li>
          <li>Five <a href="https://www.youtube.com/watch?v=jso9QEr5Uic" target="_blank">Buzz!</a> quiz games and <a href="https://www.youtube.com/watch?v=sCeiH2sWu8w" target="_blank">Kinect Nat Geo TV</a> at <a href="https://en.wikipedia.org/wiki/Relentless_Software" target="_blank">Relentless Software</a></li>
        </ul>
      </p>
      <br /><br />
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