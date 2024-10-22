import { Link } from "react-router-dom";
import { FaMountain } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-muted py-8 md:py-12">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start gap-2">
            <Link to="/" className="flex items-center gap-2">
              <FaMountain className="h-6 w-6" />
              <span className="text-lg font-semibold">Acme Inc</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Beautifully designed components that you can copy and paste into your apps.
            </p>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <Link to="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link to="/features" className="text-sm hover:underline">
              Features
            </Link>
            <Link to="/pricing" className="text-sm hover:underline">
              Pricing
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-semibold">Resources</h4>
            <Link to="/documentation" className="text-sm hover:underline">
              Documentation
            </Link>
            <Link to="/blog" className="text-sm hover:underline">
              Blog
            </Link>
            <Link to="/support" className="text-sm hover:underline">
              Support
            </Link>
            <Link to="/community" className="text-sm hover:underline">
              Community
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-semibold">Legal</h4>
            <Link to="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-sm hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}


export default Footer;