import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function NeetCode() {
  return (
    <>
      <div className="m-auto w-4/5">
        <h1 className="margin-auto text-3xl">
          <u>Life is just a game</u>
        </h1>
        <br></br>
        <p>
          I believe that because games are reflective of life, by inversion,
          life is also reflective of games. Games are usually focused on
          resources, stats, efficiency, and skill -- and life is the same. The
          typical strategy here is to level up as many skills as you can via
          dailies, and to spend your resources wisely. The most successful
          people are the most efficient at using their resources with the most
          effective skill spread (not necessarily the highest total level).
        </p>
        <Table>
          <TableHead>
            <TableRow className="*:text-xl">
              <TableCell>Trait</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Muscle health/size</TableCell>
              <TableCell>
                Stat/Efficiency
                <br></br>Max Hitpoints
              </TableCell>
              <TableCell>
                Muscle health makes you stronger, harder to kill, and makes
                daily activities easier to perform. Absolutely essential for a
                long and high quality life.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>
                Stat<br></br>Unavoidable Debuff
              </TableCell>
              <TableCell>
                Age is an unavoidable stat that increases over time, and
                decreases your efficiency in performing tasks, lowering your
                stats across the board by a percent after a certain threshold
                (let&apos;s say 35). Muscle deterioration, slower reaction
                times, and lower energy levels are all symptoms of this debuff.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>VO2 Max</TableCell>
              <TableCell>
                Stat <br></br>Max Mana
              </TableCell>
              <TableCell>
                This was a proven metric that has the highest correlation to a
                longer life span. It is the maximum amount of oxygen your body
                can use during exercise. The higher your VO2 max, the more
                efficient your body is at using oxygen, and the more energy you
                have.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aerobic Base</TableCell>
              <TableCell>
                Stat<br></br>Mana Regen
              </TableCell>
              <TableCell>
                Aerobic base is your ability to use oxygen as a fuel source,
                this is basically how your body will convert your energy stores
                into action, and is has a positive correlation with VO2 Max.
                This is most efficiency trained by cardio (i.e. Zone 2)
                exercises.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Anaerobic Base</TableCell>
              <TableCell>
                Skill <br></br>Increased Mana Cost
              </TableCell>
              <TableCell>
                While this looks like a negative trait, it&apos;s actually the
                ability to use more resources (anaerobic means lack of oxygen,
                aka fuel source) in a shorter period of time (say, a skill
                cast). This increases the effectiveness of the performed skill,
                but at the cost of more resources.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>
                Resource <br></br>Daily cap
              </TableCell>
              <TableCell>
                Time is basically a prescribed amount that you are given every
                day and is the main resource that is spent on everything you do.
                It is the most valuable resource you have, and you can never get
                it back. It&apos;s up to you to decide how you spend it. The
                most successful people are the most efficient at using this
                resource.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Money</TableCell>
              <TableCell>
                Resource <br></br>Gold
              </TableCell>
              <TableCell>
                To no one&apos;s surprise, money is a resource that can be used
                to unlock materials that continues your life progress. Whether
                this is for the sake of efficiency, nutrition, or entertainment,
                money is a mandatory resource that is required. It is wise to
                spend their time to get money, and then spend their money to get
                time.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social/Family Circle</TableCell>
              <TableCell>
                Stat<br></br>Legion
              </TableCell>
              <TableCell>
                Legion (from MapleStory) is basically described as the passive
                accumulation of benefits from achieving larger social and family
                circles. This comes with a variety of benefits such as a social
                life, added financial security, and fellowship. Legion is one of
                the most valuable stats you could get, but some people are born
                with higher legion than others (i.e. if you were born in a
                billionaire household). However, after a certain size, the
                effectiveness of getting a higher legion is dwindled as it takes
                more and more time to maintain. There is a sweet spot for
                everyone, there is no one size fit all for this stat.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hobbies</TableCell>
              <TableCell>
                Skill/Spender<br></br>Dailies
              </TableCell>
              <TableCell>
                This is what most of your adult life will be comprised of. This
                is a critical skill to fully understand and take great care in
                investing because this is what ultimately shapes what your day
                to day satisfaction will look like. Some people prefer to have
                quantity over quality when it comes to this. At the end of the
                day, this is what will ultimately determine which stats go up,
                and which stats stay the same (or decay due to age).
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Life Skills</TableCell>
              <TableCell>
                Skill/Efficiency<br></br>Moveset
              </TableCell>
              <TableCell>
                The larger the moveset, the more versatile you are as a person.
                You can solve more circumstances, and you will be able to
                overcome certain situations better than others. Being a
                homebody/cook is efficient because you don&apos;t have to spend
                time and money finding someone to solve a problem for you. If
                you have the skill unlocked, you have access to a DIY solution
                on the fly. However, just because you have a large moveset,
                doesn&apos;t mean that it&apos;s effective. There&apos;s a
                reason why skills trade is a thing -- you need to level the
                skills up to handle more difficult scenarios
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sleep/Food</TableCell>
              <TableCell>
                Resource<br></br>Restorative Items
              </TableCell>
              <TableCell>
                Fortunately for us, there&apos;s no way to avoid sleep and food,
                as these are critical items that restore our health and mana
                back to its full values. However, the quality of sleep/food
                dictates how much % is being restored at a time. High quality
                sleep and high quality food will yield the best results, but
                also know that it is NOT possible to restore past the max
                values, so there is also a diminishing return on these items. Be
                wary of the cost:output ratios
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
