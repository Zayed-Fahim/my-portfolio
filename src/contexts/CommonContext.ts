import { createContext, Dispatch, SetStateAction } from "react";

type CommonContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const CommonContext = createContext<CommonContextType | null>(null);

export default CommonContext;
