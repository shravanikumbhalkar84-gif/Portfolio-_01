import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL, withBasePath } from '@/lib/siteConfig';
import { Analytics } from "@vercel/analytics/next";
import profile from '@/data/profile.json';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shravani Kumbhalkar | Embedded Systems & Python Developer',
    template: '%s | Shravani Kumbhalkar',
  },
  description:
    '2nd-year B.Tech Electronics & Telecommunication student building practical solutions with embedded systems, C++, Python and AI.',
  keywords: [
    'Shravani Kumbhalkar',
    'Embedded Systems',
    'Python Developer',
    'C++ Programmer',
    'Artificial Intelligence',
    'Verilog HDL',
    'FPGA',
    'Portfolio',
    'Nagpur',
    'India',
  ],
  authors: [{ name: 'Shravani Kumbhalkar', url: SITE_URL }],
  creator: 'Shravani Kumbhalkar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Shravani Kumbhalkar',
    title: 'Shravani Kumbhalkar | Embedded Systems & Python Developer',
    description:
      '2nd-year B.Tech Electronics & Telecommunication student building practical solutions with embedded systems, C++, Python and AI.',
    images: [
      {
        url: withBasePath('/assets/about.webp'),
        alt: 'Shravani Kumbhalkar | Embedded Systems & Python Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shravani Kumbhalkar | Embedded Systems & Python Developer',
    description:
      '2nd-year B.Tech Electronics & Telecommunication student building practical solutions with embedded systems, C++, Python and AI.',
    images: [withBasePath('/assets/about.webp')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: withBasePath('/favicons/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: withBasePath('/favicons/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: withBasePath('/favicons/favicon-48x48.png'), sizes: '48x48', type: 'image/png' },
      { url: withBasePath('/favicons/favicon.ico'), sizes: 'any' },
    ],
    apple: [
      { url: withBasePath('/favicons/apple-touch-icon.png') },
      { url: withBasePath('/favicons/apple-touch-icon-180x180.png'), sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: withBasePath('/favicons/android-chrome-192x192.png'), sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: withBasePath('/favicons/android-chrome-512x512.png'), sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: withBasePath('/favicons/manifest.webmanifest'),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name.full,
              url: SITE_URL,
              email: profile.email,
              jobTitle: profile.roles.short,
              sameAs: profile.socials.map((social) => social.href),
            }),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
