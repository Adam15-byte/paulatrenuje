import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartButton from './ShoppingCartButton';
import AuthButtons from './AuthButtons';

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
        <div className="flex gap-4 items-center">
          <ShoppingCartButton />
          <AuthButtons />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
