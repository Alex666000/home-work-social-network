import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType, updateNewPostText} from '../../redux/state';

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: any) => void
}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}

            />
        </div>
    );
};

