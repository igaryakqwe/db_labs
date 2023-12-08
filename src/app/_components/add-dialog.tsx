'use client';

import React, { FC, Fragment, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";

interface AddButtonProps {
}

const AddDialog: FC<AddButtonProps> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: Omit<User, 'id'> = {
      mail: event.currentTarget.mail.value,
      password: event.currentTarget.password.value,
      name: event.currentTarget.username.value,
      age: +event.currentTarget.number.value,
      gender: event.currentTarget.gender.value,
    };

    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }

    closeModal();
  };



  return (
    <>
      <div className="w-1/3 self-end pt-3" onClick={openModal}>
        <button className="rounded-full bg-green-700 w-10 h-10 hover:bg-green-600 transition-all hover:rotate-90 transform origin-center grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

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
                        name="username"
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
                        id="number"
                        name="number"
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
                        type="text"
                        placeholder="Enter your gender"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Add user
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

export default AddDialog;
