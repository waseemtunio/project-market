import { BannerSection } from "../components/BannerSection";
import { CounterSection } from "../components/CounterSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

// ✅ Metadata API for App Router
export const metadata = {
  title:
    "About Market Target | Strategic Growth Partner for Service Businesses",
  description:
    "Market Target helps service-based brands get found, build trust, and win clients through data-backed SEO, compelling branding, and high-impact video.",
};

export default function About() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"a strategic growth partner"}
        title2={"for service businesses."}
        description={`We help service brands get found,<br/> build trust, and win clients — using data-backed SEO,<br/> compelling branding, and high-impact video.`}
      />
      <TextCounterSection
        text={`Market Target is built on 10+ years<br/> of helping service-based businesses<br/> rise above the noise.`}
        paragraph={`We've helped agencies, consultants,<br/> and tradespeople turn traffic into leads and<br/> leads into revenue — without wasting a cent.`}
      />

      <BannerSection
        title={"strategic. sreative. built to convert."}
        bgImg={"/images/banner11.webp"}
      />

      <WhoWeAre
        title1={"who"}
        title2={"we are"}
        description={`We’re not a creative agency.<br /> We’re a results agency.
 Market Target combines deep<br /> technical SEO, brand positioning, and high-quality<br /> video to help service-based businesses increase visibility, <br />build credibility, and generate real leads.

                <br />`}
        paragraph={`We stay ahead of algorithm changes, design trends, and buyer behavior so you don’t have to. We bring measurable clarity to your online presence.`}
        btn_text={"About Us"}
        btn_link={"/about"}
      />
      <CounterSection />
      {/*   <PageTitle /> */}
      {/*  <ClientTestimonial /> */}
      <LogoTracker />
      {/* 
      HeroAboutSection.jsx
      */}
    </>
  );
}
