import { changeAvatar, changeName } from "../features/user/userSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";



type AvatarProps = {
    size: string;
};

const Avatar = ({size} : AvatarProps) => {
    const { avatar, name } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <div
            onContextMenu={e => {
                e.preventDefault();
                console.log('Right click on avatar container');
                const newName = prompt('Enter your name');
                if (newName?.trim()) dispatch(changeName(newName.trim()));
            }}
            style={{ display: 'inline-block', cursor: 'pointer' }} // добавь для удобства
        >
            <img
                onClick={() => {
                    const url = prompt('Enter your avatar URL');
                    if (url?.trim()) {
                        dispatch(changeAvatar(url.trim()));
                    }
                }}
                className={`user-avatar ${size ?? ''}`}
                src={avatar}
                alt={name}
            />
        </div>
    );
};

export default Avatar;