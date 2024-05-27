import Link from "next/link";

import appConfig from "@/app/app.config";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-[420px] border border-secondary">
        <CardHeader className="text-center">
          <CardTitle className="lg:text-7xl text-4xl">401</CardTitle>
          <CardDescription>You are not authorized to view this page.</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href={appConfig.pages.dashboard}>Go Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
