"use client";

import { createStore, createEvent } from "effector";

export const toggleNavigation = createEvent();

export const $isOpen = createStore(false);

$isOpen.on(toggleNavigation, (isOpen) => !isOpen);
