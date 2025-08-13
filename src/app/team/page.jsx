"use client";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { JungleSection } from "../components/JungleSection";
import { TeamMemberSection } from "../components/TeamMemberSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";
// hello
export default function page() {
  return (
    <>
      <HeroAllSection
        title1={"the team behind"}
        title2={"market target"}
        description={`Strategists, creators, and marketers with one goal:<br/> helping service businesses grow with SEO,<br/>  branding, and video that performs.`}
      />

      <TextCounterSection
        text={`Our results come from experience — not hype.<br/> Every project is powered by a team that understands<br/> both strategy and execution.`}
      />
      <BannerSection
        title={"built on strategy. backed by results."}
        bgImg={"/images/banner11.webp"}
      />

      <WhoWeAre
        description={`Meet the people behind the work — SEO specialists, branding experts, and video creatives focused on moving your business forward.`}
      />

      {/* <TeamMemberSection /> */}

      <section className="sm-video3-sec">
        <div className="video3-container">
          <video
            src={`/video/video3.mp4`}
            width="100%"
            height="auto"
            muted
            autoPlay
            loop
            playsInline
            className="video-element"
          />
        </div>
      </section>

      <JungleSection
        title1={"we're hiring"}
        title2={"talented marketers"}
        title3={"& creators"}
        description={`Passionate about SEO, storytelling, <br/>or digital content? We’d love to hear from you.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      />

      <section
        className="banner-parallax-sec"
        style={{ backgroundImage: "url('/images/banner.webp')" }}
      ></section>
    </>
  );
}
