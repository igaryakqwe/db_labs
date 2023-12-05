import { FC, Fragment } from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {useRouter} from "next/navigation";

interface DeleteDialogProps {
  userId: number;
  isOpen: boolean;
  closeModal: () => void;
}

const DeleteDialog: FC<DeleteDialogProps> =({ userId, isOpen, closeModal }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md bg-gray-900 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6"
                >
                  Ви впевнені що хочете видалити користувача?
                </Dialog.Title>

                <div className="mt-4" onClick={() => handleDelete()}>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-sm font-medium hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Видалити
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteDialog;
