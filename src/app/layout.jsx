// src/app/layout.jsx
import { DM_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingWrapper from "./components/LoadingWrapper";
import ThemeProvider from "./components/ThemeProvider";
import ClickSound from "./components/ClickSound"; // ✅ <-- New Component
import ClientFluidLoader from "./components/ClientFluidLoader";
import CursorFollower from "./components/CursorFollower";
import "./globals.css";

// Define your custom Softype font
const softype = localFont({
  src: "../../public/fonts/softype-reg.woff2",
  variable: "--font-softype",
  display: "swap",
});

// Configure Google Font (Syne)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "800"],
  display: "swap",
});

// Configure Google Font (DM_Mono)
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dmmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title:
    "Market Target | SEO, Branding & Video Content for Service-Based Businesses",
  description:
    "Boost your service-based business with Market Target’s SEO, branding, and video solutions. Drive visibility, build trust, and get more leads worldwide.",
  // You can also include your Google Site Verification here
  other: {
    "google-site-verification": "BaU-sFeeD4GylDxwTSLVDVP-uOuFypuVFOpdT8PST1M",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${softype.variable} ${dmMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZJDJ82');`}
        </Script>
      </head>
      <body>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZJDJ82"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingWrapper>
            <ClickSound /> {/* ✅ Global Click Sound */}
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
