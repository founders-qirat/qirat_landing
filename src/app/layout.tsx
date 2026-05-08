// import type {Metadata} from 'next';
// import './globals.css';

// export const metadata: Metadata = {
//   title: 'Qirat Academy | Premium Islamic & Arabic Education',
//   description: 'Live, interactive 45-minute sessions led by certified Aalims. Meaningful Islamic education from the comfort of your home.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
//       </head>
//       <body className="font-body antialiased scroll-smooth">
//         {children}
//       </body>
//     </html>
//   );
// }




import type { Metadata } from 'next';
import Script from "next/script";
import './globals.css';

export const metadata: Metadata = {
  title: 'Qirat Academy | Premium Islamic & Arabic Education',
  description:
    'Live, interactive 45-minute sessions led by certified Aalims. Meaningful Islamic education from the comfort of your home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YEBNZ5YNLH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YEBNZ5YNLH');
          `}
        </Script>
      </head>

      <body className="font-body antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}