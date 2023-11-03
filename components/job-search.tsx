"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "lucide-react";
import { FC, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface JobSearchProps {
  placeHolder: string;
}

const JobSearch: FC<JobSearchProps> = ({ placeHolder }) => {
  const [text, setText] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((text) => {
    setText(text);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (text) {
      params.set("query", text);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative mb-8">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        placeholder={placeHolder}
        className="px-8"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        value={text}
      />
      <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
};

export default JobSearch;
