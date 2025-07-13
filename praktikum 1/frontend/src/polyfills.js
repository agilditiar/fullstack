import { Buffer } from 'buffer'
import process from 'process'

window.Buffer = Buffer
window.process = process

if (typeof global === 'undefined') {
  window.global = window
}