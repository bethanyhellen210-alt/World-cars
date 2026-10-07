import Link from "next/link";
export default function Navbar(){return <header className="border-b bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4"><Link href="/" className="text-xl font-bold">World Cars</Link><nav className="flex gap-5 text-sm"><Link href="/">Home</Link><Link href="/cars">Cars</Link><Link href="/admin">Admin</Link></nav></div></header>}
