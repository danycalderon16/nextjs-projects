import { Navbar } from "@/components";

export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
      {children}
    </>
  );
}