import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex w-full max-w-7xl justify-between px-8 py-6 border-t border-gray">
      <p className="mr-6">@2023 PaulaTrenuje. All Rights Reserved</p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/" className="text-gray-500">
          Regulamin
        </Link>
        <Link href="/" className="text-gray-500">
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
