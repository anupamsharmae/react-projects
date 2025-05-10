import classes from './PostItem.module.css';

export default function PostItem({ post }: {post: {id:string;title:string; body:string}}) {

   return (
      <article className={classes.item}>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
      </article>
   )
}