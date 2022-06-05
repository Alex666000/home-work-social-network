export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type RootStoreType = {
    _state: StateType
    _rerenderThree: (val: string | any) => void
    addPost: (newPost: string) => void
    updateNewPostText: (newText: string) => void
    subscriber: (observer: Function | any) => void
}
// store - объект по принципам ООП а не разбросаны файлы как у state:
export let store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likeCount: 12},
                {id: 2, message: 'How are you?', likeCount: 10}
            ],
            newPostText: 'My name is Aleksandr'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Margarita'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Victor'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What is your name'},
                {id: 4, message: 'My name is....'},
                {id: 5, message: 'Let\'s go'},
            ]
        }
    },
    _rerenderThree(val: string) {
        console.log('Hello friends')
    },
    addPost() {
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likeCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderThree(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderThree(this._state)
    },
    subscriber(observer: Function | any) {
        this._rerenderThree = observer // наблюдатель "observer" - паттерн кто-то наблюдает за объектом потом уведомляет что что-то произошло
    }
}
// window.store = store







