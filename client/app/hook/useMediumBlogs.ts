"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export interface MediumArticle {
  id: string;
  title: string;
  subtitle?: string;
  author?: string;
  published_at?: string;
  tags?: string[];
  claps?: number;
  reading_time?: number;
  url: string;
  image_url?: string;
}

export function useMediumBlogs(userId: string) {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // 1️⃣ Get article IDs
        const listRes = await axios.get(
          `https://medium2.p.rapidapi.com/user/${userId}/articles`,
          {
            headers: {
              "x-rapidapi-key":
                process.env.NEXT_PUBLIC_MEDIUM_API_KEY,
              "x-rapidapi-host": "medium2.p.rapidapi.com",
            },
          }
        );

        const ids: string[] = listRes.data.associated_articles.slice(0, 10); // show top 10

        // 2️⃣ Fetch each article in parallel
        const detailed = await Promise.all(
          ids.map(async (id) => {
            const { data } = await axios.get(
              `https://medium2.p.rapidapi.com/article/${id}`,
              {
                headers: {
                  "x-rapidapi-key":
                    process.env.NEXT_PUBLIC_MEDIUM_API_KEY,
                  "x-rapidapi-host": "medium2.p.rapidapi.com",
                },
              }
            );
            return data;
          })
        );

        setArticles(detailed);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [userId]);

  return { articles, loading };
}
