import "./globals.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/WhatsAppWidget";


export const metadata = {
  title: "Smartbrains Kenya - Coding for Kids",
  description: "coding for kids, coding, kenya, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        
        <meta name="description" content={metadata.description} />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
      <Navbar />
        <div><Topbar /></div>
        {children}</body>
        <Whatsapp />
        <Footer />
    </html>
  );
}
