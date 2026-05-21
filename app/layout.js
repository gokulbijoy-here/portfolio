import "./globals.css";

export const metadata = {
  title: "Gokul V B",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}