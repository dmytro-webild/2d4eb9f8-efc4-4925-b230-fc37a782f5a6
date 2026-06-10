"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

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

  <div id="about-us" data-section="about-us">
      <TextAbout
      useInvertedBackground={false}
      title="AutoFix Garage Hakkında"
      description="AutoFix Garage olarak 15 yılı aşkın süredir otomotiv sektöründe hizmet vermekteyiz. Müşteri memnuniyetini ve araç güvenliğini ön planda tutarak, son teknoloji ekipmanlarımız ve uzman ekibimizle kaliteli çözümler sunuyoruz. Aracınız bizim için bir tutkudan daha fazlası; değer verdiğiniz her şeyin güvencesi."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "team-1",
          name: "Can Yılmaz",
          role: "Baş Mekaniker",
          imageSrc: "http://img.b2bpic.net/free-photo/repairman-with-folder-smiling-workshop_23-2147897928.jpg",
          imageAlt: "Can Yılmaz fotoğrafı",
        },
        {
          id: "team-2",
          name: "Deniz Kara",
          role: "Oto Elektrik Uzmanı",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-repairman-pulling-rack-with-car-tires-looking-camera-workshop_637285-7542.jpg",
          imageAlt: "Deniz Kara fotoğrafı",
        },
        {
          id: "team-3",
          name: "Murat Demir",
          role: "Kaporta Ustası",
          imageSrc: "http://img.b2bpic.net/free-photo/young-technician-grey-uniform-standing-with-crossed-arms-looking-spiteful_176474-35390.jpg",
          imageAlt: "Murat Demir fotoğrafı",
        },
      ]}
      title="Uzman Ekibimiz"
      description="Aracınıza en iyi hizmeti sunmak için kendini adamış profesyonellerle çalışıyoruz."
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
