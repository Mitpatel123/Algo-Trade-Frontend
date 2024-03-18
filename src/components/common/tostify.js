import { Bounce, toast } from 'react-toastify';
const style = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}
export const tostify = (message, type) => {
    if (type === 'success') {
        toast.success(message, style);
    } else if (type === 'error') {
        toast.error(message, style);
    }
};
