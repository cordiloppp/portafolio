import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Work } from "@/components/sections/work";
import { Architecture } from "@/components/sections/architecture";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { personJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Person structured data — rendered server-side for crawlers.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Architecture />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
