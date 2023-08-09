import React, { FC } from "react";
import PostCardMeta from "@/components/PostCardMeta";
import { PostDataType } from "@/data/types";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import Link from "next/link";
import Image from "next/image";
import moment from "moment"
export interface Card13Props {
  className?: string;
  post: any;
}

const Card13: FC<Card13Props> = ({ className = "", post }) => {
  const { name, id, updateTime, summary,status ,image,slug} = post;
  
  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link href={`/blog/${slug}`} className="line-clamp-2" title={name}>
            {name}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ">
          <span className="line-clamp-2"> {summary}</span>
        </span>
        <span className="mt-4 block sm:block text-sm text-neutral-500 ">
          {moment(updateTime).format("YYYY-MM-DD HH:mm:ss")}
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta meta={{ ...post }} />
        </div>
      </div>

      <Link
        href={`/blog/${slug}`}
        className={`block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <Image
          fill
          className="object-cover rounded-xl sm:rounded-3xl"
          src={image?'/client'+JSON.parse(image).src:''}
          alt={name}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={'standard'}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </Link>
    </div>
  );
};

export default Card13;
