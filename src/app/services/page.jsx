import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { ServicesSection } from "../components/ServicesSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

// ✅ Metadata API for App Router
export const metadata = {
  title:
    "Our Services | SEO, Branding, Video & Web Development | Market Target",
  description:
    "Discover Market Target’s range of services for service-based businesses — from SEO and branding to video content and website development. Proven strategies for measurable growth.",
};
export default function page() {
  return (
    <>
      {/* we help you get found, 
    trusted, and chosen. 
    */}
      xa
      <HeroAllSection
        id={"secrion1"}
        title1={"we help you get found,"}
        title2={"trusted, and chosen."}
        description={`No hype. Just proven strategies to grow service-based<br/> businesses — through SEO, brand clarity, and<br/> high-converting content.`}
      />
      <TextCounterSection
        text={`We help service businesses turn attention<br /> into action — with technical precision, compelling<br /> messaging, and scroll-stopping visuals.<br />`}
      />
      <BannerSection
        title={"strategy meets execution. results follow."}
        bgImg={"/images/banner.webp"}
      />
      <WhoWeAre
        description={`We work with service businesses that want more than just traffic — they want trust, visibility, and qualified leads. Every service we offer is focused on one thing: measurable growth.<br />`}
      />
      <ServicesSection
        title={`website <br />development`}
        description={`Luxury, conversion-focused websites tailored to your brand – specializing in real estate, home services, and corporate sites that impress and perform.`}
        list1={`<p>React JS</p>
                <p>Next JS</p>
                <p>Node JS</p>
                <p>Angular JS</p>
                <p>WordPress</p>
                <p>Magento</p>
                <p>Shopify</p>
                <p>Laravel</p>
                <p>PHP</p>`}
        list2={`<p>HTML5 & CSS3</p>
                <p>LESS & SASS</p>
                <p>Bootstrap</p>
                <p>Tailwind</p>
                <p>Foundation</p>
                <p>Javascript</p>
                <p>jQuery</p>`}
      />
      <ServicesSection
        title={`seo that gets <br />you found`}
        description={`We audit, fix, and optimize your site from the ground up — site structure, speed, schema, and content — so you rank higher and stay there.`}
        list1={`<p>Site audits</p>
                  <p>Keyword strategy</p>
                  <p>Core Web Vitals</p>
                  <p>Structured data</p>
                  `}
        list2={`<p>Local SEO</p>
                  <p>On-page SEO</p>
                  <p>Performance optimization</p>`}
      />
      <ServicesSection
        title={`video that builds trust and converts`}
        description={`We create short-form, cinematic, and aerial video content that shows your expertise and elevates your brand across web and social.`}
        list1={`<p>Drone videography</p>
                  <p>Service explainers</p>
                  <p>Social video content</p>`}
        list2={`<p>Brand overviews</p>
                  <p>ouTube & web-ready formats</p>`}
      />
      <ServicesSection
        title={`branding that makes you the obvious choice`}
        description={`We craft brands that are consistent, credible, and easy to choose — from logos and color systems to tone of voice and trust-building assets.`}
        list1={`<p>Brand positioning</p>
                  <p>Messaging frameworks</p>
                  <p>Visual identity</p>`}
        list2={`<p>Logo & typography</p>
                  <p>Style guides</p>`}
      />
      <ServicesSection
        title={`drone photogrammetry & aerial mapping`}
        description={`We capture high-resolution drone imagery to create detailed maps, 3D models, and precision measurements — perfect for campsites, resorts, and outdoor venues looking to plan, manage, and showcase their spaces from above.<br /><br />
          <p>High-accuracy aerial mapping & orthophotos</p>
          <p>3D terrain and structure modeling</p>
          <p>Campsite layout & planning visuals</p>
          <p>Marketing-ready aerial photography</p>
          <p>Accurate measurements for planning & maintenance</p>
          `}
        list1={`<p></p>
                  `}
        list2={`<p></p>
                 `}
      />
      <LogoTracker />
    </>
  );
}
