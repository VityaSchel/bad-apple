import { spawn } from 'child_process'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url)) + '/'

const i = 0
const x = i % 5
const y = ~~(N/5)
const process = spawn('ffmpeg', ['-i', __dirname + '../bad_apple_video/resized.mp4', '-filter:v', `crop=40:33:(${40*x}):(${33*y})`, __dirname + `fragments/x${x}_y${y}.webp`])