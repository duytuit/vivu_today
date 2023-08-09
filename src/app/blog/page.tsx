// "use client"
import React from "react";
import SectionAds from "./SectionAds";
import SectionMagazine5 from "./SectionMagazine5";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import { fetchCategory, fetchCountPostGroupCategory, fetchListPost, fetchTagGroupTag } from "@/components/Blog/service";
import Card12 from "./Card12";
import Card13 from "./Card13";
import { useHandleParamUrl } from "@/hooks/useHandleParamUrl";

const BlogPage = async ({searchParams}:{searchParams:any}) => {
   const defaultParam={ 
    pageNum: 1, 
    pageSize: 20
   };
  const postsData = await fetchListPost({...defaultParam,...searchParams})
  const TagGroupTag = await fetchTagGroupTag({type:2})
  const countPostGroupCategory = await fetchCountPostGroupCategory({})
  const category= await fetchCategory({type:2})
  //  console.log(TagGroupTag);
  //  console.log("countPostGroupCategory",countPostGroupCategory);
   console.log(category);
   
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      {/* ======= START CONTAINER ============= */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {postsData?.data?.rows[0] && <Card12 post={postsData.data.rows[0]} />}
            <div className="grid gap-6 md:gap-8">
              {postsData?.data?.rows.filter((_:any, i:number) => i < 4).map((item:any, index:any) => (
                   <Card13 key={index} post={item} />
                ))}
            </div>
          </div>
        </div>
        </div>

        {/* === SECTION 1 === */}
        {/* <SectionAds /> */}

        {/* === SECTION 8 === */}
        <SectionLatestPosts category={category} TagGroupTag={TagGroupTag} countPostGroupCategory={countPostGroupCategory} posts={postsData.data.rows} className="py-16 lg:py-28" />

        {/* === SECTION 1 === */}
        <SectionSubscribe2 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default BlogPage;
