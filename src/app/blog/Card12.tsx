import React, { FC } from "react";
import { PostDataType } from "@/data/types";
import PostCardMeta from "@/components/PostCardMeta";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import SocialsShare from "@/shared/SocialsShare";
import { DEMO_POSTS } from "@/data/posts";
import Link from "next/link";
import Image from "next/image";

export interface Card12Props {
  className?: string;
  // post?: PostDataType;
  post?: any;
}

const Card12: FC<Card12Props> = ({
  className = "h-full",
  post
}) => {
  const { name, id, updateTime, summary,status ,image} = post;
  return (
    <div className={`nc-Card12 group relative flex flex-col ${className}`}>
      <Link
        href={`/blog/${id}`}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <Image
          fill
          src={image?'/client'+JSON.parse(image).src:''}
          alt={post.name}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute bottom-2 left-2"
            postType={'standard'}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </Link>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link href={`/blog/${id}`} className="line-clamp-2" title={post.title}>
            {post.title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2"> {post.title}</span>
        </span>
        <PostCardMeta className="mt-5" meta={post} />
      </div>
    </div>
  );
};

export default Card12;
