import { Buffer } from 'buffer'
import process from 'process'
import './polyfills'

window.Buffer = Buffer
window.process = process