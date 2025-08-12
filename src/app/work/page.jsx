"use client";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { WorkSection1 } from "../components/WorkSection1";
export default function page() {
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"work that builds trust"}
        title2={"and drives results"}
        description={`Explore how we help service businesses stand out,<br/> rank higher, and convert better — through SEO, branding,<br/> and aerial content that moves people.`}
      />
      <WorkSection1 />

      <LogoTracker />
      {/* WorkSection1.jsx */}
    </>
  );
}
