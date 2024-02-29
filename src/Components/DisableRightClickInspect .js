import React, { useEffect } from 'react';

const DisableRightClickInspect = () => {
    useEffect(() => {
        const disableRightClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        const disableInspectMode = (e) => {
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        document.addEventListener('contextmenu', disableRightClick);
        document.addEventListener('keydown', disableInspectMode);

        return () => {
            document.removeEventListener('contextmenu', disableRightClick);
            document.removeEventListener('keydown', disableInspectMode);
        };
    }, []);

    return (
        <div>
          
        </div>
    );
};

export default DisableRightClickInspect;
