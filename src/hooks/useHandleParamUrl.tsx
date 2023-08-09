import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useHandleParamUrl = (param:{}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // useEffect(()=>{
  //   const urlSearchParams = new URLSearchParams(
  //     Array.from(searchParams.entries()),
  //   );
  //   if(param){
  //     setQueryParams(param)
  //   }
  // },[])
  function setQueryParams(params:any) {
    
    const urlSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.set(key, String(value));
    });
    if(!urlSearchParams.get('pageNum')){
      urlSearchParams.set("pageNum", "1");
    }
    if(!urlSearchParams.get('pageSize')){
      urlSearchParams.set("pageSize", "20");
    }
    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return {setQueryParams}
};
