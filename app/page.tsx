import { ModeToggle } from "@/components/toggle";
import MyHome from "./home/page";
export const dynamic = 'force-dynamic';
 

export default function Home() {
  return (
     <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"> 
      <div className=" pointer-events-none  flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
    </div>
         <MyHome/>
    
      
    
    </div>
    
  );
}
