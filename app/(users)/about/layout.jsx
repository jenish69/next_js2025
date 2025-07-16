import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <>
      <h1 className="font-roboto">About</h1>
        {children}
      <button>
        <Link href="/">Goto Home</Link>
      </button>
    </>
        
  );
}
