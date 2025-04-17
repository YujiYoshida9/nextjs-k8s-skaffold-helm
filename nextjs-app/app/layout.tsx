import './globals.css';

// Application metadata
export const metadata = {
  title: 'Next.js App',
  description: 'Next.js with App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}