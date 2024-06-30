import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartIcon from './ShoppingCartButton';

const NavBar = () => {
  return (
    <header className="w-full z-10 py-2 bg-white">
      <nav className="container mx-auto flex justify-between items-center sm:px-16 px-6">
        <Link href="/">
          <Image
            src="/LogoBezNapisu1.png"
            alt="Paula Trenuje Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>
        <ShoppingCartIcon />
      </nav>
    </header>
  );
};

export default NavBar;
