import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostMessage: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    // получили ref ссылку на textarea чтобы связать textarea с кнопкой при её клике после того как ввели текст клик для оптавки поста:
    let newPostElement: any = React.createRef()
//локальный колбек addPost
    let addPost = () => {
        debugger
        let text = newPostElement.current.value
        //вызываем  второй колбек addPost в колбеке addPost - из BLL:
        props.addPost(text)
    }

    let postsElements = props.posts.map((p) => <Post id={1} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost} className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

