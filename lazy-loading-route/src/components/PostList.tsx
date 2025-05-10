import { Link } from 'react-router';
import classes from './PostList.module.css';

export default function PostList({posts}:{posts: {id:string; title:string; body:string}[]}){
   return(
      <ul className={classes.list}>
         {posts && posts.map(post => (
            <li key={post.id}>
               <Link to={post.id.toString()}>{post.title}</Link>
            </li>
         ))}
      </ul>
   )
}