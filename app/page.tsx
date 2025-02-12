import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <p>Home Page</p>
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
