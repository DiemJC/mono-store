import { toasts }  from "svelte-toasts";

export const showToastBR = ({message,title,type}) => {
    toasts.add({
        title,
        description: message,
        duration: 10000, // 0 or negative to avoid auto-remove
        type,
        theme: 'light',
        placement: 'bottom-right',
        type: 'success'
        //onClick: () => {},
        //onRemove: () => {},
        // component: BootstrapToast, // allows to override toast component/template per toast
    }
);

  // toast.remove()

};