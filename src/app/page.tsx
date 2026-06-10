"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { CheckCircle, Cog, Settings, Smile, Users } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain",
      }}
      title="Aracınız Güvende"
      description="AutoFix Garage'da aracınız uzman ellerde, en son teknoloji ve profesyonel hizmetle güvende. Kaliteli tamir ve bakım için doğru adres."
      buttons={[
        {
          text: "Hemen Randevu Al",
          href: "/contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/blurred-nightlights-city_23-2149049642.jpg"
      imageAlt="Lüks araç ve tamirhane görseli"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          value: "5000+",
          description: "Tamir Edilen Araç",
        },
        {
          id: "metric-2",
          value: "15",
          description: "Yıllık Deneyim",
        },
        {
          id: "metric-3",
          value: "1000+",
          description: "Mutlu Müşteri",
        },
      ]}
      title="Başarılarımız"
      description="Yılların deneyimi ve binlerce mutlu müşteri ile gurur duyuyoruz."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Otomotiv Uzmanları",
        "Kalite Kontrol A.Ş.",
        "Araç Muayene Merkezi",
        "Sigorta Destek",
        "Yedek Parça Tedarik",
        "Performans Tuning",
        "Çevre Dostu Oto",
      ]}
      title="Güvenilen Çözüm Ortağınız"
      description="Bölgenin en güvenilir otomotiv servisleri arasında yer almaktan gurur duyuyoruz. Uzmanlığımızı kanıtlayan sertifikalarımız ve iş ortaklarımızla hizmetinizdeyiz."
      speed={40}
      showCard={true}
      tagIcon={CheckCircle}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ahmet Yılmaz",
          role: "Mühendis",
          company: "Tech Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-looking-car_23-2150171223.jpg",
          imageAlt: "Ahmet Yılmaz fotoğrafı",
        },
        {
          id: "2",
          name: "Elif Demir",
          role: "Pazarlama Müdürü",
          company: "Moda Evi",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-servicing-car_1170-1518.jpg",
          imageAlt: "Elif Demir fotoğrafı",
        },
        {
          id: "3",
          name: "Mehmet Can",
          role: "Serbest Çalışan",
          company: "Self-Employed",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-preparing-get-driver-license_23-2150167593.jpg",
          imageAlt: "Mehmet Can fotoğrafı",
        },
        {
          id: "4",
          name: "Zeynep Kaya",
          role: "Öğretmen",
          company: "Devlet Okulu",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17894.jpg",
          imageAlt: "Zeynep Kaya fotoğrafı",
        },
        {
          id: "5",
          name: "Emre Aktaş",
          role: "Girişimci",
          company: "Startup Hub",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-elegant-old-man-car-salon_1157-31926.jpg",
          imageAlt: "Emre Aktaş fotoğrafı",
        },
      ]}
      kpiItems={[
        {
          value: "99%",
          label: "Müşteri Memnuniyeti",
        },
        {
          value: "24/7",
          label: "Acil Servis",
        },
        {
          value: "1 Saat",
          label: "Ort. Teslim Süresi",
        },
      ]}
      title="Müşterilerimiz Ne Diyor?"
      description="Müşterilerimizin AutoFix Garage hakkındaki düşüncelerini okuyun."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Neden Bizi Tercih Etmelisiniz?"
      description="AutoFix Garage olarak, aracınıza gösterdiğimiz özen ve sunduğumuz profesyonel hizmetlerle fark yaratıyoruz. Her bir detayı titizlikle ele alıyor, aracınızın güvenliğini ve performansını en üst seviyede tutmayı hedefliyoruz."
      bulletPoints={[
        {
          title: "Uzman Teknik Ekip",
          description: "Alanında uzman, deneyimli ve sertifikalı teknisyenlerimizle aracınız emin ellerde.",
          icon: Users,
        },
        {
          title: "Son Teknoloji Ekipmanlar",
          description: "En yeni diagnostik cihazları ve tamir ekipmanlarıyla hızlı ve doğru çözümler sunuyoruz.",
          icon: Cog,
        },
        {
          title: "Müşteri Memnuniyeti",
          description: "Şeffaf fiyatlandırma, zamanında teslimat ve kaliteli hizmet anlayışımızla müşteri memnuniyeti odaklı çalışıyoruz.",
          icon: Smile,
        },
        {
          title: "Geniş Hizmet Yelpazesi",
          description: "Motor tamirinden periyodik bakıma, lastik değişiminden kaportaya kadar tüm ihtiyaçlarınız tek adreste.",
          icon: Settings,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/metal-industry-workshop-modern-machinery-building-steel-parts-generated-by-ai_188544-26196.jpg"
      imageAlt="Modern araç bakım atölyesi"
      mediaAnimation="opacity"
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
