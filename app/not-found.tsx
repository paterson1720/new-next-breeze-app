import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-[420px] border border-secondary">
        <CardHeader className="text-center">
          <CardTitle className="lg:text-7xl text-4xl">404</CardTitle>
          <CardDescription>The page you’re looking for doesn’t exist.</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <a href="/">Go Back</a>
        </CardFooter>
      </Card>
    </div>
  );
}
