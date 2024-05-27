import { Metadata } from "next";
import Unauthorized from "@/components/unauthorized";

export const metadata: Metadata = {
  title: "Full-Stack-Kit - Unauthorized!",
  description: "You are not authorized to view this page.",
};

export default function Page() {
  return <Unauthorized />;
}
