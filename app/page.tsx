import { BlogPosts } from 'app/components/posts'
import { Navbar } from './components/nav'
import Image from 'next/image'
import headerPic from './components/images/header.png'
import logoPic from './components/images/logo.png'

export default function Page() {
  return (
    <section>
         
      <div>

    </div>
      <h1 className="mb-8 text-8xl font-bold tracking-tighter">
      <Image
        src={logoPic}
        width={200}
        height={200}
        alt=""
      />
      <a href="/">Cassetter</a>
      </h1>
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">
        Bespoke Video Game Production
      </h2>
          <p className="prose">&nbsp;</p>
          <p className="prose">Cassetter is me, <a href="https://www.linkedin.com/in/dancroucher/">Dan Croucher</a>.</p>
          <p className="prose">&nbsp;</p>
          <p className="prose">I'm a creative and versatile video game producer and studio leader with 20+ years of hands-on game industry experience.</p>
          <p className="prose">&nbsp;</p>
          <p className="prose">
          Making games is hard, and a producer is critical for successful development. 
          </p>
          <p className="prose">&nbsp;</p>
          <p className="prose">
          You may only want someone in your team for a limited time. Or just some experienced eyes on the important numbers and dates at the end of your pitch. Or maybe you're from outside of games and don't know where to start.
          </p>
          <p className="prose">&nbsp;</p>
          <p className="prose">
          The right person in production can get things done. Fix an unhappy team or build one. Rescue a blown budget or write one from scratch. Make development easier, faster and happier. 
          </p>
          <p className="prose">&nbsp;</p>
          <p className="prose">
          I can help in these situations, and <a href="/blog">many more</a>.
          </p>
    </section>
  )
}