import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
    return ( <div className="h-full relative">
        <div className="hidden h-full md:flex md min-w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
            <div><Sidebar/></div>
        </div>
        <main className="md:pl-72">{children}
        <Navbar/></main>
    </div> );
}
 
export default DashboardLayout;{
    
}