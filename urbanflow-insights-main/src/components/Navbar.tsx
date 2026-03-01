import { Building2 } from "lucide-react";

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
    <div className="container mx-auto flex h-14 items-center justify-between px-6">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
          <Building2 className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-none tracking-tight text-foreground">
            UrbanFlow
          </span>
          <span className="text-[10px] font-medium leading-tight text-muted-foreground">
            AI-Powered Infrastructure Decision Intelligence
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-success-muted px-2 py-0.5 text-[10px] font-semibold text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          System Online
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
