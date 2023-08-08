"use client";
import { CustomLink } from "@/data/types";
import React, { FC, useEffect, useState } from "react";
import twFocusClass from "@/utils/twFocusClass";
import Link from "next/link";
import { Route } from "@/routers/types";
import { useHandleParamUrl } from "@/hooks/useHandleParamUrl";

const DEMO_PAGINATION: CustomLink[] = [
  {
    label: "1",
    href: "#",
  },
  {
    label: "2",
    href: "#",
  },
  {
    label: "3",
    href: "#",
  },
  {
    label: "4",
    href: "#",
  },
];

export interface PaginationProps {
  className?: string;
}

const Pagination: FC<PaginationProps> = ({ className = "" }) => {
  const defaultParam={ pageNum: 1, pageSize: 20 };
  const {searchParam,setQueryParams} = useHandleParamUrl();
   useEffect(()=>{
    setQueryParams(defaultParam)
  },[searchParam])
  const Previous=()=>{
    const pageNum= searchParam.get('pageNum');
    if(pageNum && parseInt(pageNum) >1){
      setQueryParams({...defaultParam,pageNum:parseInt(pageNum)-1})
    }
  }
  const Next=()=>{
    const pageNum= searchParam.get('pageNum');
    if(pageNum){
      setQueryParams({...defaultParam,pageNum:parseInt(pageNum)+1})
    }
  }
  const renderItem = (pag: CustomLink, index: number) => {
    if (index === 0) {
      // RETURN ACTIVE PAGINATION
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {pag.label}
        </span>
      );
    }
    // RETURN UNACTIVE PAGINATION
    return (
      <Link
        key={index}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        href={pag.href as Route}
      >
        {pag.label}
      </Link>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
        <button className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
         onClick={Previous}
      >
        {'<<'}
      </button>
      <p>
        {/* Page {currentPage} of {totalPages} */}
      </p>
      <button className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        onClick={Next}
      >
       {'>>'}
      </button>
    </nav>
  );
};

export default Pagination;
