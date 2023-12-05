import React, { FC, Fragment, useState } from 'react';
import { User } from "@/types/user";
import { Dialog, Transition } from "@headlessui/react";
import {useRouter} from "next/navigation";

interface UpdateDialogProps {
  user: User;
}

const UpdateDialog: FC<UpdateDialogProps> = ({ user }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<User>({
    id: user.id,
    mail: user.mail,
    password: user.password,
    name: user.name,
    age: user.age || 0,
    gender: user.gender || '',
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      router.refresh();
      closeModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button className="mx-6" onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:fill-gray-800 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </button>

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
                    Введіть дані користувача
                  </Dialog.Title>

                  <form className="max-w-md mx-auto mt-8 pr-8 rounded" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-bold mb-2" htmlFor="mail">
                        Email:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                        id="mail"
                        name="mail"
                        value={formData.mail}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-bold mb-2" htmlFor="number">
                        Number:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                        id="age"
                        name="age"
                        value={formData.age ? formData.age : 0}
                        onChange={handleInputChange}
                        type="number"
                        placeholder="Enter your number"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-bold mb-2" htmlFor="gender">
                        Gender:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                        id="gender"
                        name="gender"
                        value={formData.gender ? formData.gender : ''}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter your gender"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Update user
                      </button>
                    </div>
                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateDialog;
