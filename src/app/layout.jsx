// src/app/layout.jsx
import "./globals.css";
import { DM_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script"; // ✅ import Script from next/script

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingWrapper from "./components/LoadingWrapper";
import ThemeProvider from "./components/ThemeProvider";
import ClickSound from "./components/ClickSound";
import ClientFluidLoader from "./components/ClientFluidLoader";
import CursorFollower from "./components/CursorFollower";

// Fonts
const softype = localFont({
  src: "../../public/fonts/softype-reg.woff2",
  variable: "--font-softype",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "800"],
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dmmono",
  weight: ["400", "500"],
  display: "swap",
});

// ✅ Your SEO + verification
export const metadata = {
  title:
    "Market Target | SEO, Branding & Video Content for Service-Based Businesses",
  description:
    "Boost your service-based business with Market Target’s SEO, branding, and video solutions. Drive visibility, build trust, and get more leads worldwide.",
  verification: {
    google: "BaU-sFeeD4GylDxwTSLVDVP-uOuFypuVFOpdT8PST1M",
  },
};

const GTM_ID = "GTM-PZJDJ82"; // ✅ define your GTM container ID here

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${softype.variable} ${dmMono.variable}`}
    >
      <body>
        {/* ✅ Google Tag Manager (script) */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* ✅ Google Tag Manager (noscript) — keep right after <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingWrapper>
            <ClickSound /> {/* Global Click Sound */}
            <CursorFollower />
            <ClientFluidLoader />
            <Header />
            {children}
            <Footer />
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
