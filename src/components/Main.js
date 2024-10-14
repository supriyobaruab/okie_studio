import "./Main.css";
import group_logo from "./Images/okie.png";
import React from "react";
// import Mom from "./Mom";
// import Members from "./Members";

// //importing images
// import wenai from "./Images/wenai.png";
// import sindey from "./Images/sindey.png";
// import kraykra from "./Images/kraykra.png";
// import singmay from "./Images/singmay.png";
// import nupaing from "./Images/nupaing.png";
// import mumu from "./Images/mumu.png";
// import priyanka from "./Images/priyanka.png";
// import mongsain from "./Images/mongsain.png";
// import me from "./Images/me.png";
// import aongkon from "./Images/anirudaw.png";
// import debongshi from "./Images/debongshi.png";
// import jojo from "./Images/jojo.png";
// import emong from "./Images/emong.png";
// import pyaw from "./Images/pyaw.png";
// import evan from "./Images/Evan.png";
// import ukay from "./Images/ukay.png";
// //Done importing images
export default function Main() {
  return (
    <main className="main">
      {/* Home */}
      <section className="home align-content-center" id="first-page">
        <div className="container p-4">
          <div className="row gx-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-content-lg-center">
              <div className="about">
                <h1>
                  OKIE <span>GROUP</span>
                </h1>
                <h3>Where all the crazy people are gathered</h3>
                <p>
                  The okie group was formed in the early days of elementary
                  school when a group of sixteen children from the same
                  neighborhood and school began to bond over shared interests
                  and adventures. Their connection was instantaneous, marked by
                  a collective love for imaginative play, outdoor exploration,
                  and creative projects.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-content-lg-center">
              <div className="image">
                <img src={group_logo} alt="group_image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="members">
        <Mom />
        <Members
          firstPerson={wenai}
          Ftitle="Wenei"
          Fsubtitle="The Troublemaker"
          Finfo="Most Extroverted & and the baddie among girlies. Gets involved in drama without doing nothing . Lack of  savvy yet  the best person to be comfortable and vibe with.
"
          secondPerson={sindey}
          Stitle="Sindey"
          Ssubtitle="A party horse"
          Sinfo="If there's a party there is Sindey. Comical personality but lacks a sense of humour. Always calm in every situation. A fun person to be tagged around them. ( We miss you Sindey )
"
          thirdPerson={kraykra}
          Ttitle="Kraykra"
          Tsubtitle="Miss Perfect"
          Tinfo="A visible hard worker and has a goofy characteristic personality. Very passionate and enthusiastic about everything she's surrounded by. 
"
          fourthPerson={singmay}
          Fftitle="Singmay"
          Ffsubtitle="The Ghost"
          Ffinfo="The one who talks the least in group chat also has the least activities but always sees all texts. A hidden singer . Naturally talented and a great observer"
        />
        <Members
          firstPerson={nupaing}
          Ftitle="Nupaing"
          Fsubtitle="The divine Beauty"
          Finfo="Has a great charismatic aura and alluring beauty. The one who is admired by everyone and called wife material . A bit goofy good at responsibilities and good at working with her true strength."
          secondPerson={mumu}
          Stitle="Mumu"
          Ssubtitle="The best girl"
          Sinfo="An rational thinker. Always in the side of the rights. Has least appearance in group activities but always brings good energy. The least problematic   & has an appealing character."
          thirdPerson={priyanka}
          Ttitle="Priyanka"
          Tsubtitle="The chronicle online user"
          Tinfo="The cute one . Radiant Hyper active energy also at the same time calms as water. The one who has a low tolerance level and always passes out. Great enthusiasm and good calm sarcastic personality."
          fourthPerson={mongsain}
          Fftitle="Mong Sain"
          Ffsubtitle="The funniest"
          Ffinfo="Definition  of Comical personality. The liar. A creative Thinker but lacks responsibilities. Very goofy and fragile but has a great harmony  and is adored by everyone for his uniqueness"
        />
        <Members
          firstPerson={me}
          Ftitle="Supriyo"
          Fsubtitle="A dependable Person"
          Finfo="A Prince with a golden spoon. That one friend who is every Parents Favourite . Quirky personality with good sense of humour. Good observer , good at responsibilities and a faithful character."
          secondPerson={aongkon}
          Stitle="Aongkon"
          Ssubtitle="Crime Partner"
          Sinfo="That one supportive Character behind every friend who is the best to be around them . The best friend of all friends."
          thirdPerson={debongshi}
          Ttitle="Debongshi"
          Tsubtitle="The OG introvert of introverts"
          Tinfo="A loner yet never misses any social events or casual meetups. A silent listener but spills  sometimes random words that become iconic among friends."
          fourthPerson={jojo}
          Fftitle="Jojo"
          Ffsubtitle="The teller of Lies"
          Ffinfo="Good at fake promises and good at excuses. The loner but lives the best of his life. The real tank/supporter of the group. Very Witty and has a good judgement."
        />
        <Members
          firstPerson={emong}
          Ftitle="Eemong"
          Fsubtitle="A strong will leader"
          Finfo="Efficient & sufficient about his works & resources , gives the best version of himself . A true All-Rounder."
          secondPerson={evan}
          Stitle=""
          Ssubtitle=""
          Sinfo=""
          thirdPerson={pyaw}
          Ttitle="Pyaw"
          Tsubtitle="The Happiness"
          Tinfo="Has a Great positive energy & dynamic.  Very expressive and outgoing also an intellectual thinker with good mortality and ethicality."
          fourthPerson={ukay}
          Fftitle="Ukay"
          Ffsubtitle="The follower & The messiest"
          Ffinfo="Has a good initiative drive and good calm personality . Likes to brag about silly things. The one who takes inspo from every thing is surrounded by him but outshines everyone."
        />
      </section> */}
    </main>
  );
}
