import React from "react";
import "./App.css";

function FlexBox() {
  return (
    <>
      <h1>Flexbox with Athletes</h1>
      <section class="cards">
        <h2>Different Sports Personality </h2>
        <div class="columns">
          <article class="card">
            <h3 class="card__title">AB de Villiers</h3>
            <p>
              RAbraham Benjamin de Villiers (born 17 February 1984) is a former
              South African professional cricketer. He holds the record for
              fastest 50,100 and 150 in ODI cricket and he is the only batsman
              ever to average above 50 with a strike rate of above 100 (batsmen
              with minimum 5000 runs). He is widely regarded as one of the
              greatest batsmen of all time. He is credited for revolutionizing
              the game by regularly utilizing attacking unorthodox shots
              particularly against the yorker.{" "}
            </p>
          </article>
          <article class="card gradient-shadow">
            <h3 class="card__title">Mason Mount</h3>
            <p>
              Mason Tony Mount (born 10 January 1999) is an English professional
              footballer who plays as an attacking or central midfielder for
              Premier League club Chelsea and the England national team. Mount
              began his senior club career with Chelsea, and joined Vitesse and
              Derby County on consecutive loans between 2017 and 2019. He
              established himself as an integral player for Chelsea in the
              following years, and won the UEFA Champions League and the UEFA
              Super Cup in 2021. Mount won the UEFA European Under-19
              Championship with the England national under-19 team in 2017. He
              made his senior international debut in 2019, at age 20, and was
              part of the England team at UEFA Euro 2020..
            </p>
          </article>
          <article class="card gradient-shadow">
            <h3 class="card__title">Michael Phelps</h3>
            <p>
              Michael Fred Phelps II (born June 30, 1985)is an American former
              competitive swimmer. He is the most successful and most decorated
              Olympian of all time with a total of 28 medals Phelps also holds
              the all-time records for Olympic gold medals (23), Olympic gold
              medals in individual events (13), and Olympic medals in individual
              events (16).When Phelps won eight gold medals at the 2008 Beijing
              Games, he broke fellow American swimmer Mark Spitz's 1972 record
              of seven first-place finishes at any single Olympic Games. At the
              2004 Summer Olympics in Athens, Phelps already tied the record of
              eight medals of any color at a single Games by winning six gold
              and two bronze medals. At the 2012 Summer Olympics in London,
              Phelps won four gold and two silver medals, and at the 2016 Summer
              Olympics in Rio de Janeiro, he won five gold medals and one
              silver. This made him the most successful athlete of the Games for
              the fourth Olympics in a row
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default FlexBox;

/*import React from "react";
import "./App.css";

function FlexBox() {
  return (
    <div>
      <nav>
        <ul class="nav-list">
          <li>
            {" "}
            <a href="#"> Home </a>
          </li>
          <li>
            {" "}
            <a href="#"> About Us </a>
          </li>
          <li>
            {" "}
            <a href="#"> Our Services</a>
          </li>
          <li>
            {" "}
            <a href="#"> Blog</a>
          </li>
          <li>
            {" "}
            <a href="#"> Contact Us </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FlexBox;
*/
