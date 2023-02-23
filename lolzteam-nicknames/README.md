# Bad Apple played on Lolzteam nicknames

## How to run
1. Go to <https://zelenka.guru/members/?type=messages>
2. Inject src/styles.css to page's stylesheets (you can use DevTools' "inspector stylesheets")
3. Run basically any HTTP file server in root of bad_apple_video/fragments on 27109 port and make sure it's available in your browser on page from step 1
4. Execute src/index.js

This was made using clipped pieces of video instead of black&white pixels because 5x4 (or 20 pixels in total) is obviously not enough to see anything

At first I wanted to use GIFs but I realised it's 2023 and there are better animation formats. I heard about APNG but my research showed that WEBP has better support in tools (for example ffmpeg). 

![Screenshot](https://user-images.githubusercontent.com/59040542/221032165-2a9002bc-47b6-400b-a80c-a69fa0662e2f.png)

While putting different formats to background I also noticed that CSS does not allow you to resize background image, so real size of video must be the same as real size of HTML element
