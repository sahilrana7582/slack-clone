'use client';
import { atom, useAtom } from 'jotai';

const openModal = atom(false);

export const useModal = () => {
  return useAtom(openModal);
};
