import "./globals.css";

export const metadata = {
  title: "AutoWorld Marketplace",
  description: "Worldwide Car Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
