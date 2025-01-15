import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  return <div className="lg:flex h-20 items-center justify-between px-3 py-2 ">

    <div className="flex items-center gap-2">
      <ShoppingCart className="h-6 w-6" />
      <span className="font-semibold text-xl">TechStore</span>
    </div>

    <div className="flex-1 max-w-md mx-4 ">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search products..." className="pl-8 max-w-xl" />
      </div>
    </div>

    <div className="flex items-center gap-4 mr-4">
      <Button variant="outline" onClick={() => { navigate("/signin") }}>
        <User className="h-4 w-4 mr-2" />
        Sign In
      </Button>
      <Button onClick={() => { navigate("/signup") }}>Sign Up</Button>
    </div>

  </div>
}
