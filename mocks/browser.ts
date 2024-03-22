"use client"
// eslint-disable-next-line import/no-unresolved
import { setupWorker } from "msw/browser"

import { handlers } from "./handlers"

export const worker = setupWorker(...handlers)
