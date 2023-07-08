import React, {useContext} from 'react';
import AppContext from '../../../AppContext';

const NotAuthorContextMenu = ({comment, close}) => {
    const {dispatchAction} = useContext(AppContext);

    const openModal = () => {
        dispatchAction('openPopup', {
            type: 'reportPopup',
            comment
        });
        close();
    };

    return (
        <div className="flex flex-col">
            <button type="button" className="w-full text-left text-[14px]" onClick={openModal}>
                <span>Denunciar </span><span className="hidden sm:inline">comentário</span>
            </button>
        </div>
    );
};

export default NotAuthorContextMenu;
