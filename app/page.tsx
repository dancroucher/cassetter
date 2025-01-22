import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-8xl font-bold tracking-tighter">
        Cassetter
      </h1>
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">
        Bespoke Video Game Production
      </h2>
      <div className="my-8">
        <p>
        Cassetter is me, <a href="https://www.linkedin.com/in/dancroucher/">Dan Croucher</a> +"<br>"+
          I'm a creative and versatile video game producer and studio leader with 20+ years of hands-on game industry experience./n
          I've shipped many commercially and critically acclaimed games across a large range of platforms, on time and on budget.
          I pride myself on my drive, passion, attention to detail, straightforward approach and pursuit of quality.
          Making games is hard, and a producer is critical for successful development.
          You may only need someone in your team for a limited time. Or some experienced eyes on the important numbers and dates at the end of your pitch. A specialist can assist in fixing an unhappy team, a blown budget or dates you can't hit.
          I can help in all of these situations, and many more. Just get in touch below for a chat.
        </p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </section>
  )
}