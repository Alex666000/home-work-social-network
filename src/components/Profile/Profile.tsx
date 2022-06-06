import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ActionType, ProfilePageType, updateNewPostText} from '../../redux/state';

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void | any

}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
            />
        </div>
    );
};

