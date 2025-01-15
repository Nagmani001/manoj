import { Mail, MapPin, Phone, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export default function Footer() {
  return <footer className="border-t bg-muted/50">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-semibold text-xl">TechStore</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Your one-stop destination for premium tech products. We offer the latest gadgets with secure payment options and reliable delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">About Us</a>
            <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Terms & Conditions</a>
            <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Shipping Information</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="break-all">support@techstore.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>123 Tech Street, Digital City</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TechStore. All rights reserved.
      </div>
    </div>
  </footer>

}
