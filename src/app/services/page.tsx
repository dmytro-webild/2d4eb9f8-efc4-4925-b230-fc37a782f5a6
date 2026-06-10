"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Ana Sayfa",
          id: "/",
        },
        {
          name: "Hizmetlerimiz",
          id: "/services",
        },
        {
          name: "Hakkımızda",
          id: "/about",
        },
        {
          name: "Galeri",
          id: "/gallery",
        },
        {
          name: "İletişim",
          id: "/contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/employee-checks-car-with-mockup-laptop_482257-91166.jpg"
      brandName="AutoFix Garage"
    />
  </div>

  <div id="services-list" data-section="services-list">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Motor Tamiri",
          description: "Deneyimli ekibimizle motorunuzu ilk günkü performansına kavuşturun.",
          imageSrc: "http://img.b2bpic.net/free-photo/repair-man-making-car-service_1303-26862.jpg",
          imageAlt: "Motor tamiri",
        },
        {
          title: "Periyodik Bakım",
          description: "Aracınızın ömrünü uzatacak düzenli bakımlar için bize ulaşın.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-servicing-car-engine_1170-1283.jpg",
          imageAlt: "Periyodik bakım",
        },
        {
          title: "Lastik Değişimi",
          description: "Güvenli sürüş için lastiklerinizi uzmanlara emanet edin.",
          imageSrc: "http://img.b2bpic.net/free-photo/shelf-with-tools-shiny-car-little-girl-hat-with-big-wrench-hands_613910-17048.jpg",
          imageAlt: "Lastik değişimi",
        },
      ]}
      title="Kapsamlı Araç Hizmetlerimiz"
      description="Aracınızın tüm ihtiyaçları için profesyonel çözümler sunuyoruz."
    />
  </div>

  <div id="services-more" data-section="services-more">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fren Bakımı",
          description: "Yüksek güvenlik için fren sisteminizin kontrol ve bakımı.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-examining-car-wheel-disc-brake_1170-1212.jpg",
          imageAlt: "Fren bakımı",
        },
        {
          title: "Elektrik Sistemleri",
          description: "Karmaşık elektrik arızalarını hızlı ve etkin bir şekilde gideriyoruz.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-circuit-reparing-tool_23-2148419205.jpg",
          imageAlt: "Elektrik sistemleri tamiri",
        },
        {
          title: "Boya ve Kaporta",
          description: "Aracınızın estetiğini ve değerini koruyun, profesyonel boya ve kaporta hizmetleri.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-wearing-equipment_23-2149714354.jpg",
          imageAlt: "Boya ve kaporta tamiri",
        },
      ]}
      title="Uzmanlık Alanlarımız"
      description="Her türlü arıza ve bakım ihtiyacınızda yanınızdayız."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AutoFix Garage"
      columns={[
        {
          title: "Hizmetler",
          items: [
            {
              label: "Motor Tamiri",
              href: "/services#motor-tamiri",
            },
            {
              label: "Periyodik Bakım",
              href: "/services#periyodik-bakim",
            },
            {
              label: "Lastik Değişimi",
              href: "/services#lastik-degisimi",
            },
            {
              label: "Fren Bakımı",
              href: "/services#fren-bakimi",
            },
          ],
        },
        {
          title: "Kurumsal",
          items: [
            {
              label: "Ana Sayfa",
              href: "/",
            },
            {
              label: "Hakkımızda",
              href: "/about",
            },
            {
              label: "Galeri",
              href: "/gallery",
            },
            {
              label: "İletişim",
              href: "/contact",
            },
          ],
        },
        {
          title: "Yasal",
          items: [
            {
              label: "Gizlilik Politikası",
              href: "#",
            },
            {
              label: "Kullanım Koşulları",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 AutoFix Garage. Tüm hakları saklıdır."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
