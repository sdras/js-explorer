#!/usr/bin/env node

'use strict'
import { store } from './store.js'
import minimist from 'minimist'
import { logFinalAnswer } from './logFinalAnswer.js'

// gather the name as argument parameters and turn it into a string
let argv = minimist(process.argv.slice(2));
let finalArgv = argv._.join(" ")

// look up the answer in the store
logFinalAnswer(store.get(finalArgv))
