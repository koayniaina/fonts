import Navbar from "@/components/header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div> <Navbar/>{children}</div>;
}
