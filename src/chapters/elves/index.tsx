import { meta } from "./meta"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Prose from "@/components/ui/Prose"
import ReadingTime from "@/components/ui/ReadingTime"
import Figure from "@/components/ui/Figure"

export default function ELVES() {
  return (
    <>
      <Section>
        <Heading level={1}>{meta.title}</Heading>
        <p className="mt-2 text-md text-muted-foreground">{meta.date}</p>
        <ReadingTime wordCount={meta.wordCount} />
      </Section>

      <Figure src="/assets/elves/clock.jpg" alt="An image of a clock in the dark."/>

      <Heading level={2}>Elves</Heading>
      <Section>
        <Prose>
          <p>
            In some far away land, there is a young elf by the name of Zeit. His home lies at the heart of the largest city within
            the region. Zeit comes from a wealthy family, and so he is used to getting what he wants, whenever he wants it. May it be
            new toys to play with, the latest release of his favourite book series, or even, his favourite chocolate bars. At only age 7,
            he finds many things fascinating and sees the world as an endless opportunity for exploration.
          </p>
          <p>
            One day, as Zeit was wandering around the fields near his house, he wandered a little too far, and ended up
            bumping into a girl with fiery red hair. She looked to be around his age, and the longer he stared at her hair, the more
            his eyes began to sting, but he couldn't stop looking at her. It was the first time he had come into contact with something
            of such <em>vibrant colour</em>.
          </p>
          <p>
            Although, there was something off about this girl, and Zeit wasn't able to put it together right away, but he noticed soon
            enough. Her ears; they weren't nearly as long or sharp as his was. No, instead, they had a more narrow and round shape to them.
            He had never seen someone who had ears like this before.
          </p>
          <p>
            "Hi, I'm Kaya!"
          </p>
          <p>
            "I'm Zeit."
          </p>
          <p>
            Some time passes, and later that night, Zeit returns home and runs to his mother. As he tugs on her apron, he asks "Mom, what's
            a human?"
          </p>
        </Prose>
      </Section>
      <Heading level={2}>Kaya</Heading>
      <Section>
        <Prose>
          <p>
            It's hard to say how the above story would end. However, here's what I think would happen.
          </p>
          <p>
            The two children continue to grow closer to each other. They both enroll at the same academy for mystical arts and begin studying
            cool things like incantations, cantrips, spells, and other fantastical subjects. It would normally be quite unusual for an elf and
            a human to go to the same school, but Zeit lives in quite the multi-cultural and robust city, so in this landscape, these things are not
            so uncommon.
          </p>
          <p>
            Through classes, extracurriculars, and other notable events within this period, the two grow to be inseperable. Romantic feelings may
            develop as the two grow older, or they may not; it doesn't matter. They spend most of their free time with each other, learning and 
            growing together.
          </p>
          <p>
            Eventually, Kaya graduates from school while Zeit continues his studies under a different program. They would both be around 20 years
            old each at this point. Perhaps Kaya leaves the city and goes to find employment as a researcher in another place, or perhaps she decides
            to stay and become a teacher at the academy.
          </p>
          <p>
            Over the next few years, Kaya accomplishes many things. She becomes renown all across the region as one of the brightest minds of the modern
            era. She discovers recipes for potions and new ways to cast stronger spells more efficiently than before. She constantly pushes the boundry
            of innovation and contributes vast amounts of knowledge to the research of the arcane.
          </p>
          <p>
            She publishes papers, teaches classrooms full of students, all fully engaged and eager to learn from one of the geniuses they have heard so
            much about throughout the years. Her colleagues all praise her as being diligent, and relentless in the pursuit of her goals. Her constant
            motivation allows her to surpass expectation after expectation placed upon her. She is, in all rights, extraordinary.
          </p>
          <p>
            Decades pass and Kaya is now 80 years old. She is known as one of the founders of the modern Theory of the Arcane, and developed a collection
            of fundamental theorem which are absolutely essential to the way society understands magic. Despite her long list of achievements, there is
            still an endless ocean of things that she wanted to do, millions of spells that she had yet to understand, and even more that she had not yet
            discovered.
          </p>
          <p>
            But she is getting old now. The years continue to pass, and every day Kaya loses more and more of her physical ability. Her posture starts to
            bend, and she is finding it increasingly difficult to move quickly around the house. Her and Zeit are now married at this point, and he helps
            her out with the more labor-intensive tasks around the house.
          </p>
          <p>
            On her death bed, Kaya has many things that she still has not done that she wishes she could do. She has many regrets; decisions that she made
            in the past that she will not be forever unable to rectify. She dreams of what the future would look like 10, 100, or even 1000 years from now,
            and feels a tinge of sadness knowing that she won't be here to see it. Right before her last breath, she mutters something to Zeit, standing at her
            side.
          </p>
          <p>
            "I wish I had more time."
          </p>
        </Prose>
      </Section>
      <Heading level={2}>Zeit</Heading>
      <Section>
        <Prose>
          <p>
            Elves can live up to 1000 years, with most of them living for around 650-750 years. Zeit had turned 100 around the time of Kaya's passing, and
            although he cherished every minute spent with her, he couldn't help but pollute her last moments with negative thoughts in his mind. "Why did
            she have to be a human?" he kept asking himself in the moment. He couldn't understand why he had to spend 90 or so long years of his life with
            the person he loved, only to have her pass away before even a seventh of his own life had passed.
          </p>
          <p>
            Zeit would spend the next 5 or so years grieving his his loss. He would bring flowers to her grave regularly, and would continue to maintain it
            every month. He would make it a routine to stop by on his way home from the academy, where he was now a senior researcher. He decided to follow
            in Kaya's footsteps and devote himself to finishing the research that she had started.
          </p>
          <p>
            20 years would pass, and Zeit began to visit Kaya's grave less frequently. He would notice on the 25th anniversary of her death that he no longer
            got those unbearable waves of sadness that came whenever he thought of her. He couldn't help but wonder when these feelings started to dissipate, but
            was unable to come up with even an estimate of when it started.
          </p>
          <p>
            100 more years would pass, and Zeit has been an adult elf for more than 120 years. He had accomplished everything that Kaya left in the journal after
            her passing, and had answered all of the questions that she had postulated. Granted, he knew that if she were still alive today, the journal would have
            likely continued to expand well beyond its current size.
          </p>
          <p>
            He would notice on the 125th anniversary of her death that he couldn't remember what Kaya looked or sounded like. Not to mention he hasn't been by her 
            grave in decades by this point.
          </p>
          <p>
            More time would pass. 100, 200, and even 300 years would go by. Zeit would meet new friends, romance different people, and discover a vast collection of spells
            that he never could have thought of. He travelled to many different cities and engaged with a variety of different cultures across the regions. He fought
            countless foes and saved an even larger number of lives. As time went on, things started to matter less to Zeit. After all, everything that he would experience
            from this point onward would likely on make up less than 5% of his entire life.
          </p>
          <p>
            400 more years would go by, and Zeit would continue to travel the world, meeting new people. He would get betrayed by his loved ones more times than he could
            remember, and he would continue to deeply influence the lives of those he met. People have told him about his importance in their lives; how he taught them
            life-saving spells, gave them profound insights on their lives, and how they were one of the key reasons for their current success. But these notions were
            foreign to him, and had been so for quite some time now. Nothing seemed to matter as much to Zeit any more because he had done it all. His hunger for knowledge
            was satiated, his desire to not be lonely was met, and nothing that happened from this point forward meant anything to him.
          </p>
          <p>
            Passing away at 812 years old, Zeit cannot think of the specific parts of his life that he treasured most. Not that he wasn't able to remember it all, but that
            there was simply too many. Eight hundred and twelve years of experience living in the world tends to dull one's senses. Perhaps that is why elves don't live
            until they're 2000 years old.
          </p>
        </Prose>
      </Section>
      <Heading level={2}>Time</Heading>
      <Section>
        <Prose>
          <p>
            I think the thing that most people wish they had more of is <b>time</b>. The problem with humans is that we're so ambitious. It seems like we always have things that
            we want to do. Whether it may be learning how to play the guitar, getting better at creating animations, reading that novel that you've been putting
            off for a while, or even just spending more time with your loved ones, we always have things that we want to do.
          </p>
          <p>
            I also think it's fair to say that the life expectancy of an average person is too short given the amount of things that we want to do in our lives. This means that
            it is usually the case that we end up dying before we get to accomplish everything that we want to. Most would see this as a huge blunder; it is unfortunate that we
            do not have more time to spend on doing the things we want. It would be nicer if we just had a bit more time.
          </p>
          <p>
            But it is precisely because our time is so limited that what we choose to spend it on matters so much more. When I tell you that I would love to have dinner with you,
            I'm telling you that I want to spend a little bit of the already small amount of time that I have with you, and that means something.
          </p>
        </Prose>
      </Section>
    </>
  )
}
