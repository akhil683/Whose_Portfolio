export const metadata = {
  title: 'blogs | Akhil',
  description: 'This page consist of the latest blogs which are written by Akhil Palsra.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>{children}</main>
  )
}
