import FlexRow from "@/components/ui/flex-row";

interface Props {
  visible: boolean;
}

export default function SigninMethodSeparator({ visible }: Props) {
  if (!visible) return null;

  return (
    <FlexRow className="items-center">
      <hr className="w-full border-gray-300 dark:border-gray-700" />
      <span className="text-gray-500 dark:text-gray-400">or</span>
      <hr className="w-full border-gray-300 dark:border-gray-700" />
    </FlexRow>
  );
}
