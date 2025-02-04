"use client"
import React from "react";
import { useState } from "react";

import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";


const getData = async () => { 
  const localHost = process.env.REACT_APP_LOCAL_HOST;
  const url = `${localHost}/api/posts`;
  //const url = `http://localhost:3000/api/posts`// Assuming you're fetching from the same origin
  console.log("URL:", url);
  const res = await fetch(url, { 
    method: 'GET', // Use a valid HTTP method, typically 'GET' for retrieving data
    cache: 'no-store' // Ensures the response is not cached
  });

  if (!res.ok) { 
    throw new Error("Failed to fetch data");
  }
  return res.json(); // Parse the response as JSON
};




const BlogPage = async () => { 
  
  const posts = await getData();
  return (
    <div className={styles.container}>
      {
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      }
      
    </div>);
}

export default BlogPage;