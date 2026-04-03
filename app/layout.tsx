import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OGU Media | Photography, Videography & Visual Production Uganda",
  description:
    "Book professional photography and videography services in Uganda. Weddings, Kukyala, corporate events, sports, documentaries & branding. Packages starting from UGX 3M.",
  keywords: [
    "photography Uganda",
    "videography Uganda",
    "wedding photography Kampala",
    "Kukyala photography",
    "event photography Uganda",
    "OGU Media",
    "ogumedia",
    "corporate videography Kampala",
  ],
  openGraph: {
    title: "OGU Media | Photography & Videography Uganda",
    description:
      "Cinematic visual production for weddings, events, and brands. Starting from UGX 3M.",
    type: "website",
    locale: "en_UG",
    siteName: "OGU Media",
    images: [
      {
        url: "/images/portfolio/IMGL7168.jpg",
        width: 1200,
        height: 630,
        alt: "OGU Media - Visual Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGU Media | Photography & Videography Uganda",
    description: "Cinematic visual production for weddings, events & brands.",
    images: ["/images/portfolio/IMGL7168.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#050505" />
      </head>
      <body>{children}</body>
    </html>
  );
}
