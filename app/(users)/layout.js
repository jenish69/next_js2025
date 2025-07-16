import Navigation from "@/component/navigation";

export default function RootLayout({ children }) {
  return (
    <>
        <Navigation />

        {children}
    </>
  );
}
