import { toast } from 'react-toastify';

export const tostify = (message, type) => {
    if (type === 'success') {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else if (type === 'error') {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};
