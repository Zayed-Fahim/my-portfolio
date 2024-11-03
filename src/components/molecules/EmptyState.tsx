import { MoodSad } from "@/constants";
import { cn } from "@/utils/cn";

const EmptyState = ({ message }: { message: string }) => {
  return (
    <div
      className={cn(
        "my-4 flex flex-col items-center justify-center space-y-1 py-3"
      )}
    >
      <MoodSad className={cn("size-12")} />
      <p className="text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
