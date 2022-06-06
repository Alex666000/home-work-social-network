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
//типизация state:
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
//типизация store:
export type RootStoreType = {
    _state: StateType
    getState: () => any //что возвращает???
    _callSubscriber: (val: string | any) => void
    dispatch: (action: ActionType) => void | any
    subscriber: (observer: Function | any) => void
}
export type ActionType = {
    type: string
    newText: string
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
    _callSubscriber(val: string | any) {
        console.log('Hello friends')
    },

    getState() {
        return this._state
    },
    subscriber(observer: Function | any) {
        this._callSubscriber = observer // наблюдатель "observer" - паттерн кто-то наблюдает за объектом потом уведомляет что что-то произошло
    },

    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}








