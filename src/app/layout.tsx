import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'AutoFix Garage - Profesyonel Araç Bakım ve Tamir',
  description: 'AutoFix Garage, aracınız için motor tamiri, periyodik bakım, lastik değişimi ve daha fazlası dahil olmak üzere kapsamlı hizmetler sunar. Güvenli ve kaliteli çözümler için bize ulaşın.',
  keywords: ["araç tamir, oto servis, motor tamiri, periyodik bakım, lastik değişimi, fren bakımı, elektrik sistemleri, boya kaporta, AutoFix Garage, araba tamirhane"],
  openGraph: {
    "title": "AutoFix Garage - Profesyonel Araç Bakım ve Tamir",
    "description": "AutoFix Garage, aracınız için motor tamiri, periyodik bakım, lastik değişimi ve daha fazlası dahil olmak üzere kapsamlı hizmetler sunar.",
    "url": "/",
    "siteName": "AutoFix Garage",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/blurred-nightlights-city_23-2149049642.jpg",
        "alt": "Lüks araç ve tamirhane görseli"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AutoFix Garage - Profesyonel Araç Bakım ve Tamir",
    "description": "AutoFix Garage, aracınız için motor tamiri, periyodik bakım, lastik değişimi ve daha fazlası dahil olmak üzere kapsamlı hizmetler sunar.",
    "images": [
      "http://img.b2bpic.net/free-photo/blurred-nightlights-city_23-2149049642.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
