import { spawn } from 'child_process'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url)) + '/'

for(let i = 0; i < 25; i++) {
  const x = i % 5
  const y = ~~(i/5)
  const process = spawn('ffmpeg', ['-y', '-i', __dirname + '../bad_apple_video/resized.mp4', '-filter:v', `fps=fps=30,crop=40:33:(${40*x}):(${33*y})`, '-lossless', '1', '-loop', '1', '-preset', 'default', __dirname + `../bad_apple_video/fragments/x${x}_y${y}.webp`])
  process.stdout.on('data', e => console.log(e.toString('utf-8')))
  process.stderr.on('data', e => console.error(e.toString('utf-8')))
  await new Promise(resolve => process.on('exit', resolve))
}