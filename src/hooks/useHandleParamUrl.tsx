import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useHandleParamUrl = (T = {}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchParam, setsearchParam] = useState(searchParams);

  function setQueryParams(params:any) {
    const urlSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.set(key, String(value));
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return {searchParam,setQueryParams}
};
