"use client";

import Image from "next/image";
import Link from "next/link";
import { useMediumBlogs } from "../hook/useMediumBlogs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

export default function Blogs() {
    const { articles, loading } = useMediumBlogs("76a6728be495");

    return (
        <section className="bg-[#FFFAF3] py-24 sm:py-32">
            <div className="mx-auto max-w-[1280px] px-6">
                {/* ----- Header Section ----- */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#0C0C0D]">
                            Check Out Our Blogs
                        </h2>
                        <p className="text-[#555] mt-4 text-base md:text-lg leading-relaxed">
                            Leveraging knowledge is essential for building and increasing assets.
                        </p>
                    </div>
                </div>

                {/* ----- Carousel Section ----- */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
                            >
                                <div className="h-52 bg-gray-200 w-full" />
                                <div className="p-6 space-y-3">
                                    <div className="flex gap-2">
                                        <div className="h-5 w-16 bg-gray-200 rounded-full" />
                                        <div className="h-5 w-20 bg-gray-200 rounded-full" />
                                    </div>
                                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mt-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <Carousel
                            className="relative"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-8">
                                {articles.map((article) => (
                                    <CarouselItem
                                        key={article.id}
                                        className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-8"
                                    >
                                        <Link
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                                        >
                                            {/* Image */}
                                            <div className="relative w-full h-52 overflow-hidden">
                                                <Image
                                                    src={article.image_url || "/assets/no_image.jpeg"}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col justify-between flex-1">
                                                <div className="flex-1">
                                                    {/* Tags */}
                                                    {article.tags && (
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {article.tags.slice(0, 2).map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-3 py-1 bg-secondary text-[#C17B00] text-xs font-medium rounded-full"
                                                                >
                                                                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Title */}
                                                    <h3 className="text-[#0C0C0D] text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[#C17B00] transition-colors">
                                                        {article.title}
                                                    </h3>

                                                    {/* Subtitle */}
                                                    <p className="text-sm text-[#5E5E5E] line-clamp-2">
                                                        {article.subtitle}
                                                    </p>
                                                </div>

                                                {/* Fixed Meta at Bottom */}
                                                <div className="text-xs text-[#888] mt-auto pt-4 border-t border-gray-100">
                                                    <p>
                                                        {/* {article.author ? `${article.author} · ` : ""} */}
                                                        {article.published_at
                                                            ? new Date(
                                                                article.published_at
                                                            ).toLocaleDateString("en-US", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            })
                                                            : ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="hidden sm:flex left-3 xl:-left-20" />
                            <CarouselNext className="hidden sm:flex right-3 xl:-right-20" />
                        </Carousel>

                        {/* ----- View All Button ----- */}
                        <div className="flex justify-center mt-12">
                            <Link
                                href="https://medium.com/@penthian"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#C17B00] text-white font-medium px-8 py-3 rounded-full hover:bg-[#a86a00] transition-all duration-300"
                            >
                                View All Articles
                            </Link>
                        </div>

                    </>
                )}
            </div>
        </section>
    );
}
