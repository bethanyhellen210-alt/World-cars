import "./globals.css";

export const metadata = {
  title: "World Cars | Remarkable cars, worldwide",
  description: "Discover exceptional vehicles from trusted sellers around the globe.",
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
