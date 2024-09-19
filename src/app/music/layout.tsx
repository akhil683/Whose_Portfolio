export const metadata = {
  title: 'Favourite Music | Akhil',
  description: "This page contains the list of Akhil Palsr's favourite songs and artists.",
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
