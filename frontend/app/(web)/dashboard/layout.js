import Link from "next/link";
import AuthCard from "@/app/(auth)/AuthCard";
import ApplicationLogo from "@/components/ApplicationLogo";
import Header from "@/components/ui/Header";

export const metadata = {
  title: "Laravel",
};

const Layout = ({ children }) => {
  return (
    <div className="text-gray-900 antialiased">
      <p>Dashboard Header</p>
    </div>
  );
};

export default Layout;
