import type { Metadata, ResolvingMetadata } from 'next'
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header/Header";
import "./global.scss"
import { bodyFont, headerFont, subheadingFont, buttonFont } from "./fonts";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";






export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle("settings")
  return {
    title: `${page.data.site_title}` || "Airi Treats",
    description: "Airi Treats has transformed your favourite snacks into an airy and crunchy treat that melts in your mouth; bursting with delicious flavours you will love. It's a shelf-stable treat that will last for more than a decade! Treat yourself to these special freeze-dried snacks. Made in Canada, with love, grab yours today!",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headerFont.variable} ${subheadingFont.variable} ${buttonFont.variable}`}>

      <body>
        <Suspense fallback={<Loading />}>
          <Header />
          <div id="snipcart" className="snipcart"></div>
          {children}
          <Footer />
          <Toaster position="top-center" richColors duration={2500} />

        </Suspense>
        <script defer dangerouslySetInnerHTML={{
          __html: `
          window.SnipcartSettings = {
            publicApiKey: "${process.env.SNIPCART_API_KEY}",
            loadStrategy: "on-user-interaction",
            modalStyle: "side",
            addProductBehavior: "none",
            currency: "cad"
          };
          (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).currency)!=null||(s.currency="usd");var l,p;(p=(l=window.SnipcartSettings).timeoutDuration)!=null||(l.timeoutDuration=2750);var w,u;(u=(w=window.SnipcartSettings).domain)!=null||(w.domain="cdn.snipcart.com");var m,g;(g=(m=window.SnipcartSettings).protocol)!=null||(m.protocol="https");var f,v;(v=(f=window.SnipcartSettings).loadCSS)!=null||(f.loadCSS=!0);var E=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,y=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(y.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),$(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),y.forEach(function(h){return document.removeEventListener(h,o)})}function $(t){!E||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
          `
        }} />
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=airitreats"></script>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
