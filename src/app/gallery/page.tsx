"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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

  <div id="gallery-repairs-1" data-section="gallery-repairs-1">
      <ProductCardThree
      animationType="opacity"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "repair-1",
          name: "Detaylı Temizlik",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/male-hand-with-foam-sponge-washing-car_1157-36587.jpg",
          imageAlt: "Araba iç detaylı temizlik",
        },
        {
          id: "repair-2",
          name: "Alt Şasi Koruma",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-servicing-car_1170-1337.jpg",
          imageAlt: "Araba alt şasi koruma",
        },
        {
          id: "repair-3",
          name: "Jant Onarımı",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934324.jpg",
          imageAlt: "Araba jant onarımı",
        },
        {
          id: "repair-4",
          name: "Klasik Restorasyon",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/two-bearded-mechanics-specialist-repairs-car-engine-which-is-raised-hydraulic-lift-garage-service-station_613910-19619.jpg",
          imageAlt: "Klasik araba restorasyon",
        },
        {
          id: "repair-5",
          name: "Pasta Cila",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193575.jpg",
          imageAlt: "Araba pasta cila uygulaması",
        },
        {
          id: "repair-6",
          name: "Motor Revizyon",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545645.jpg",
          imageAlt: "Motor revizyon işlemi",
        },
      ]}
      title="Tamirhane Galeri"
      description="Gerçekleştirdiğimiz bazı tamir ve bakım projelerimizden görüntüler."
    />
  </div>

  <div id="gallery-repairs-2" data-section="gallery-repairs-2">
      <ProductCardThree
      animationType="opacity"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "repair-7",
          name: "Fren Sistemi Yükseltme",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-with-tool-wheel-hands-mechanic-blue-work-clothes_1157-46154.jpg",
          imageAlt: "Yükseltilmiş fren sistemi",
        },
        {
          id: "repair-8",
          name: "Şanzıman Tamiri",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/interlocked-machinery-turning-steel-gears-with-teamwork-generated-by-ai_188544-47385.jpg",
          imageAlt: "Şanzıman tamiri",
        },
        {
          id: "repair-9",
          name: "Yürüyen Aksam Bakımı",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-checks-engine-his-car_1157-27214.jpg",
          imageAlt: "Yürüyen aksam bakımı",
        },
        {
          id: "repair-10",
          name: "Özel Boya Uygulamaları",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-checking-car-s-wheel_23-2149385720.jpg",
          imageAlt: "Özel boya uygulaması",
        },
        {
          id: "repair-11",
          name: "Araç Elektrik Onarım",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-female-technician-with-soldering-iron-electronics-motherboard_23-2148816365.jpg",
          imageAlt: "Araç elektrik onarımı",
        },
        {
          id: "repair-12",
          name: "Lastik Balans Ayarı",
          price: "İstek üzerine",
          imageSrc: "http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service-checking-tyres_627829-3849.jpg",
          imageAlt: "Lastik balans ayarı",
        },
      ]}
      title="Bitmiş Projelerimiz"
      description="Müşterilerimize teslim ettiğimiz, başarılı bir şekilde tamamlanmış araçlarımızdan seçmeler."
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
