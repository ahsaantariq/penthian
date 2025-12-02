"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Add / edit your blogs here manually
const manualArticles = [
  {
    id: "1",
    title: "How To Earn A Passive Income With NFTs?",
    subtitle: "Non-fungible tokens have taken the digital world by storm by offering a unique way for creators to protect, store, and sell their work for fair value.",
    url: "https://medium.com/@penthian/how-to-earn-a-passive-income-with-nfts-313fd3e5ccc1",
    image_url: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*sWd5wyOy01SVkqHy.jpg",
    tags: ["Crypto", "Cryptocurrency"],
    published_at: "Aug 28, 2024",
  },
    {
    id: "2",
    title: "5 Ways To Generate Income From Your Real Estate Investments",
    subtitle: "Are you looking for a passive income source? Did you know you can utilize your real estate properties to generate a good passive income?",
    url: "https://medium.com/@penthian/5-ways-to-generate-income-from-your-real-estate-investments-44a1fe4aa6a5",
    image_url: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*ozjYZpYu_ZzdxlfM.jpg",
    tags: ["Nft", "Nft Marketplace"],
    published_at: "Aug 22, 2024",
  },
   {
    id: "3",
    title: "What Are Income-Generating Real Estate Investments?",
    subtitle: "Real estate is considered among the best choices for long-term investments with good returns.",
    url: "https://medium.com/@penthian/what-are-income-generating-real-estate-investments-75c62a55a7c8",
    image_url: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*1Ot0W6hq5NJ8fBY7.jpg",
    tags: ["Cryptocurrency Investment", "Crypto Trading"],
    published_at: "Aug 14, 2024",
  },
   {
    id: "4",
    title: "Property Tokenization: What are Real Estate NFTs?",
    subtitle: "Real Estate NFTs are tokenized assets sold in the form of non-fungible tokens that are revolutionizing the way people buy and sell properties.",
    url: "https://medium.com/@penthian/property-tokenization-what-are-real-estate-nfts-971f355e5ad7",
    image_url: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*mtUuoaFRxpRsfV4b.jpg",
    tags: ["Cryptocurrency News", "Blockchain"],
    published_at: "Aug 6, 2024",
  },
  
  // Add more blogs here...
];

export default function Blogs() {
  return (
    <section className="bg-[#FFFAF3] py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
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

        {/* Carousel */}
        <Carousel className="relative" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-8">
            {manualArticles.map((article) => (
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
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={article.image_url || "/assets/no_image.jpeg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="flex-1">
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

                      <h3 className="text-[#0C0C0D] text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[#C17B00] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-sm text-[#5E5E5E] line-clamp-2">
                        {article.subtitle}
                      </p>
                    </div>

                    <div className="text-xs text-[#888] mt-auto pt-4 border-t border-gray-100">
                      <p>
                        {new Date(article.published_at).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
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

        {/* View All Button */}
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
      </div>
    </section>
  );
}
