import styles from "./singlePost.module.css";
import Image from "next/image";

const getData = async (slug) => {
  const url = `http://localhost:3000/api/${slug}`;

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

   console.log("post.user:",post.user.userName);


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
        <div className={styles.content}>
          <p>{ post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;