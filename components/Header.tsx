import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="max-w-7xl mx-auto px-2 pt-2 flex justify-between items-center">
      <div>
        <Image src="/logo1.png" width={75} height={40} alt="logo" />
      </div>
      <div>Search</div>
      <div className="flex items-center gap-3">
        <ShoppingCart />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
