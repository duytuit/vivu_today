import React, { FC, use } from "react";
import { PostDataType } from "@/data/types";
import Card12 from "./Card12";
import Card13 from "./Card13";
import { fetchListPost } from "@/components/Blog/service";

export interface SectionMagazine5Props {
  posts: PostDataType[];
}
type Props = {
  promise: Promise<any[]>
}
const SectionMagazine5 = async () => {


  
  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {/* {posts[0] && <Card12 post={posts[0]} />}
        <div className="grid gap-6 md:gap-8">
          {posts.map((item, index) => (
              <Card13 key={index} post={item} />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default SectionMagazine5;
