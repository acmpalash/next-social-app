import { atom } from "recoil";
import React from 'react';

export const modalAtom = atom( {
    key: 'modelState',
    default: false,
});