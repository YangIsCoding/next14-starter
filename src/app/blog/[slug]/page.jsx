import styles from "./singlePost.module.css";
import Image from "next/image";
import { marked } from 'marked';
import { promises as fs } from 'fs';
import path from 'path';

const getData = async (slug) => {
  const apiUrl = process.env.API_URL;
  const url = `${apiUrl}/${slug}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) { 
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const SinglePostPage =async ({ params}) => { 
  console.log(params);

  const { slug } = params;

  const post = await getData(slug);

  console.log("post.user:", post.user.userName);
  const postPath = post.filePath;
  console.log("postPath:", postPath);//posts/post1.md
  const data = await fs.readFile(postPath, 'utf8');
  const dataHTML = marked(data);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.postImg} alt="picture" fill />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{ post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src={ post.user.userImg} alt="picture2" width={50} height={50}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{post.user.userName}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.postTime}</span>
          </div>
        </div>
        <article dangerouslySetInnerHTML={{__html:dataHTML}} />
      </div>
    </div>
  );
}

export default SinglePostPage;