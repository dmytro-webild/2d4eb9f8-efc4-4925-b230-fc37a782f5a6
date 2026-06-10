"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
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

  <div id="contact-form" data-section="contact-form">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Bize Ulaşın"
      title="Randevu Alın veya Soru Sorun"
      description="Tüm araç bakım ve tamir ihtiyaçlarınız için bizimle iletişime geçin. Ekibimiz en kısa sürede size geri dönüş yapacaktır."
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-crystal-palace-london-july-2008_181624-9360.jpg"
      imageAlt="AutoFix Garage konumunu gösteren Google Haritası"
      mediaAnimation="none"
      mediaPosition="right"
      inputPlaceholder="Adınız Soyadınız"
      buttonText="Gönder"
    />
  </div>

  <div id="faq-contact" data-section="faq-contact">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "Randevu nasıl alabilirim?",
          content: "Web sitemizdeki 'Hemen Randevu Al' butonuna tıklayarak veya iletişim sayfamızdaki formu doldurarak kolayca randevu alabilirsiniz.",
        },
        {
          id: "faq-2",
          title: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          content: "Nakit, kredi kartı ve banka kartı ile ödeme kabul ediyoruz. Ayrıca bazı sigorta şirketleriyle de anlaşmamız bulunmaktadır.",
        },
        {
          id: "faq-3",
          title: "Tamir süresi ne kadar sürer?",
          content: "Tamir süresi aracın durumuna ve arızanın büyüklüğüne göre değişiklik göstermektedir. Detaylı bilgi için uzmanlarımızla görüşebilirsiniz.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Hizmetlerimizle ilgili aklınıza takılan sorulara buradan yanıt bulabilirsiniz."
      faqsAnimation="slide-up"
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
