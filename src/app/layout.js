import { Geist , JetBrains_Mono , Instrument_Serif , Inter , Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "./fonts.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jira Clone",
  description: "Your Excuse To Look Busy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${jetBrainsMono.variable} ${instrumentSerif.variable} ${hankenGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}