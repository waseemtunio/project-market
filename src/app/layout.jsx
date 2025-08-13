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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${softype.variable} ${dmMono.variable}`}
    >
      <body>
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
