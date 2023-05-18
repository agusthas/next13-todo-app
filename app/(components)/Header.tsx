import Link from "next/link";

export default function Header() {
  return (
    <header className="py-3 px-6 border-b border-b-gray-100 bg-white">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Next 13
        </Link>
      </div>
    </header>
  );
}
