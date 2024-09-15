import { Card } from "@/components/ui/card";

const AuthCard = ({ children }) => (
  <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
    <Card className="w-full max-w-[500px]">{children}</Card>
  </div>
);

export default AuthCard;
