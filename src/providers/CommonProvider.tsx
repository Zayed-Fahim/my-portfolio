"use client";
import { CommonContext } from "@/contexts";
import React, { FC, ReactNode, useState } from "react";

type CommonProviderProps = {
  children: ReactNode;
};

const CommonProvider: FC<CommonProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const values = { isLoading, setIsLoading };

  return (
    <CommonContext.Provider value={values}>{children}</CommonContext.Provider>
  );
};

export default CommonProvider;
