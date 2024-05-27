import Center from "@/components/ui/center";
import OverlaySpinner from "@/components/ui/overlay-spinner";
import Spinner from "@/components/ui/spinner";

export default function Loading() {
  return (
    // <Center className="h-screen">
    //   <Spinner className="w-6 h-6" visible />
    //   <span className="sr-only">Loading...</span>
    // </Center>
    <OverlaySpinner visible />
  );
}
