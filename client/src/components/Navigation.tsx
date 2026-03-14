import { Link } from "wouter";

const logoImg = "/logo.webp";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex items-center justify-center h-20 sm:h-28">
          <Link href="/" className="flex-shrink-0 group" data-testid="link-logo">
            <img
              src={logoImg}
              alt="Thrive Tools"
              className="h-16 sm:h-24 w-auto max-w-[260px] sm:max-w-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
