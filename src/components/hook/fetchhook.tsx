import { projectsInfoDetails } from "@/constants";
import { useState } from "react";

export const useFetchInfo = (projectTitle: string) => {
  const [title, setTitle] = useState(projectTitle);
  const data = projectsInfoDetails.filter((item) => {
    return item.title === title;
  });

  const setTitleFn = (title: string) => {
    setTitle(title);
  };
  return {
    data,
    setTitleFn,
    title,
  };
};

export default useFetchInfo;
