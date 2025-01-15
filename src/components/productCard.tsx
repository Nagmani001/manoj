import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "lucide-react";

interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string
}
export default function Product({ product }: any) {
  console.log(product)
  return <div>
    <Card key={product.id} className="flex flex-col">
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="mb-2 text-lg md:text-xl">{product.name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
        <p className="text-lg md:text-xl font-bold">${product.price}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge >COD Available</Badge>
          <Badge >Online Payment</Badge>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>

  </div>
}
