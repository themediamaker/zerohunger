// app/layout.js or app/layout.jsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: "Donate Meals - Food Donation NGO in Badarpur | Mission Zero Hunger",
  description:
    "Join Mission Zero Hunger – a Delhi-based NGO dedicated to ending hunger. Support food donation drives in Badarpur, volunteer or donate to feed the needy today.",
  keywords:
    "Mission Zero Hunger, donate meals, donation ngo, food donation Delhi, hunger relief NGO, donate food Badarpur, volunteer Delhi NGO",
  openGraph: {
    title: "Mission Zero Hunger | Food Donation NGO in New Delhi",
    description:
      "Help end hunger in Delhi with Mission Zero Hunger. Support food donations, volunteer, or contribute to our cause.",
    url: "https://themissionzerohunger.com/",
    type: "website",
    images: [
      {
        url: "https://themissionzerohunger.com/images/Add_a_heading.png",
        width: 1200,
        height: 630,
        alt: "Mission Zero Hunger Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Zero Hunger | Donate Food in Delhi",
    description:
      "Support hunger relief in Badarpur, Delhi. Volunteer or donate meals with Mission Zero Hunger.",
    images: [
      "https://themissionzerohunger.com/images/Add_a_heading.png",
    ],
  },
  other: {
    "google-site-verification": "Z18dJGl4h4IPUOE6jDw1IoHDjiE7b3S2s-UyUuziZfo",
    "msvalidate.01": "00EBFF9CAB6CB2C3690712B0E81F8CC5",
    "ahrefs-site-verification": "ee80780ce9f57f102d86d10fe57c4d7ab92ea99d3206240bf0906c8ac610e909",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PVG5Q2LQXW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PVG5Q2LQXW');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
