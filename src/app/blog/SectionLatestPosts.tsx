"use client";
import React, { FC, use, useEffect, useState } from "react";
import Heading from "@/shared/Heading";
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import ButtonPrimary from "@/shared/ButtonPrimary";
import WidgetTags from "./WidgetTags";
import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";
import { useHandleParamUrl } from "@/hooks/useHandleParamUrl";

export interface SectionLatestPostsProps {
  // posts?: PostDataType[];
  posts?: [];
  className?: string;
  postCardName?: "card3";
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  posts,
  postCardName = "card3",
  className = "",
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState({ pageNum: 1, pageSize: 20});
  const {setQueryParams} = useHandleParamUrl(pageNumber)
 useEffect(()=>{
   if(posts){
    setItems(items=>[...items, ...posts])
   }
   setLoading(false)
 },[posts])
  const handlePageChange = () => {
    setLoading(true)
    setPageNumber({...pageNumber,pageNum:pageNumber.pageNum+1})
    setQueryParams({...pageNumber,pageNum:pageNumber.pageNum+1})
  };
  
  const renderCard = (post: any) => {
    switch (postCardName) {
      case "card3":
        return <Card3 key={post.id} className="" post={post} />;
      default:
        return null;
    }
  };

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>Latest Articles 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {items.map((post:any) => renderCard(post))}
          </div>
          <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <ButtonPrimary onClick={()=>{
                 handlePageChange()
            }} loading={loading}>Show me more</ButtonPrimary>
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetTags />
          <WidgetCategories />
          <WidgetPosts />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
