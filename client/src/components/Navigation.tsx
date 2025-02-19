import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="text-2xl font-bold text-primary">ElevenLabs</h1>
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-6">
              <NavigationMenuItem>
                <Link href="#features">Features</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#use-cases">Use Cases</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#products">Products</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing">Pricing</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
