export const metadata = {
  title: "Tysiąc App",
  description: "Gra karciana online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
