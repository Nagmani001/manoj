import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { products } from "../components/product.ts";
import Product from "@/components/productCard";
export default function Landing() {
  return <div>

    <div className="sticky top-0 bg-white">
      <Navbar />
    </div>

    <div className="px-4 py-2">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-3">Featured Products</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map(products =>
          <Product product={products} />
        )}
      </div>
    </div>
    <Footer />
  </div>
}