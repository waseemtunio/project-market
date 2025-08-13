// ✅ Metadata API for App Router
export const metadata = {
  title: "Contact Market Target | Start Your Project",
  description:
    "Talk to Market Target about SEO, branding, video, or website development. Based in the Netherlands, serving clients worldwide.",
};

export default function ContactLayout({ children }) {
  return (
    <div className="contact-layout">
      {/* You can add header/footer specific to contact page here */}
      {children}
    </div>
  );
}
