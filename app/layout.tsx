import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],variable:'--font-inter' });
const ibmPlexerSerif = IBM_Plex_Serif({subsets:['latin'],
  weight:['400','700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Modern banking plateform",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
