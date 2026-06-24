import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD Shahbaz | Full Stack Developer",
  description: "Personal portfolio website of MD Shahbaz. MCA Student at Impact College, Full Stack MERN Developer, and Software Tester based in Patna, India.",
  openGraph: {
    title: "MD Shahbaz | Full Stack Developer",
    description: "Personal portfolio website of MD Shahbaz. MCA Student at Impact College, Full Stack MERN Developer, and Software Tester based in Patna, India.",
    type: "website",
    locale: "en_US",
    siteName: "MD Shahbaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Shahbaz | Full Stack Developer",
    description: "Personal portfolio website of MD Shahbaz. MCA Student at Impact College, Full Stack MERN Developer, and Software Tester.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
