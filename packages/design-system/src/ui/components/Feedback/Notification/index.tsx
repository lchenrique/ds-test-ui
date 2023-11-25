import { toast, ToastContent, ToastOptions } from "react-toastify";
interface NotificationProps {}

function Notification(
  content: ToastContent<unknown>,
  options?: ToastOptions<{}>,
) {
  const _config = options || {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  return toast(content, _config);
}

Notification.error = (
  content: ToastContent<unknown>,
  options?: ToastOptions<{}>,
) => {
  return toast.error(content, options);
};
Notification.success = (
  content: ToastContent<unknown>,
  options?: ToastOptions<{}>,
) => {
  return toast.success(content, options);
};

Notification.warning = (
  content: ToastContent<unknown>,
  options?: ToastOptions<{}>,
) => {
  return toast.warning(content, options);
};

Notification.info = (
  content: ToastContent<unknown>,
  options?: ToastOptions<{}>,
) => {
  return toast.info(content, options);
};

Notification.promise = async (
  promise: Promise<any>,
  {
    successMsg,
    errorMsg,
  }: {
    successMsg?: string;
    errorMsg?: string;
  },
) => {
  const id = toast.loading("Please wait...");

  const result = await promise;

  if (result && !result?.message) {
    toast.update(id, {
      render: successMsg || "Success",
      type: "success",
    });
    return result;
  }

  toast.update(id, {
    render: errorMsg || result?.message,
    type: "error",
  });

  return result;
};

export { Notification };
