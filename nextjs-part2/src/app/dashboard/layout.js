import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Learn Next Js | Dashboard",
  description: "Learn Next Js",
};

const DashboardLayout = ({ children }) => {
  return (
    <section className="flex mx-auto">
      <Sidebar></Sidebar>
      {children}
    </section>
  );
};

export default DashboardLayout;
