import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";


export const MobileNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex flex-col sm:flex-row h-auto sm:h-20 items-center justify-between px-3 py-2">
      {/* Logo and Cart */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <ShoppingCart className="h-6 w-6" />
        <span className="font-semibold text-xl">TechStore</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-4 mt-4 sm:mt-0">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-8 max-w-xl w-full" />
        </div>
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center gap-4 mr-4 mt-4 sm:mt-0">
        <Button variant="outline" onClick={() => { navigate("/signin") }} className="w-full sm:w-auto mb-2 sm:mb-0">
          <User className="h-4 w-4 mr-2" />
          Sign In
        </Button>
        <Button onClick={() => { navigate("/signup") }} className="w-full sm:w-auto">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

