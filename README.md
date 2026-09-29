# Doraemon's Birthday Scrapbook

Create a beautiful, cute, modern birthday website for my sister Doraemon.

This should feel like one of those **trendy Instagram birthday websites / cute personalized birthday microsites** that people share on Instagram stories.

IMPORTANT:
Do NOT make it corporate.
Do NOT make it futuristic.
Do NOT make it look like a generic birthday template.
Do NOT use an Iron Man/Jarvis/HUD aesthetic.

The design should be:

* cute
* soft
* minimal
* aesthetic
* warm
* playful
* personal
* slightly emotional
* Instagram-worthy
* mobile-first

Think: Pinterest + Instagram aesthetic + cute scrapbook + birthday letter.

---

# OVERALL EXPERIENCE

Make it a single smooth scrolling website.

The user should start at the top and gradually scroll through:

1. Cute landing screen
2. Birthday greeting
3. Photo memories
4. Small cute message
5. Video memories
6. Personal birthday letter
7. Final birthday wish

Use smooth scroll animations throughout.

The website should feel like something her brother personally made for her.

---

# COLOR & STYLE

Use a soft aesthetic palette:

* Cream / off-white background
* Soft pink
* Blush
* Pastel purple
* Warm beige
* Small amounts of red for hearts

Use lots of whitespace.

Use rounded corners.

Use subtle shadows.

Use handwritten-style typography for headings.

Use a clean modern font for body text.

Do NOT make everything pink.

Keep it elegant and tasteful.

---

# HERO SECTION

At the top create a cute full-screen or near-full-screen hero.

Small text:

"for my favourite headache ♡"

Large heading:

"Happy Birthday, Doraemon🎂"

Under it:

"someone very special was born today..."

Add a cute animated heart.

Below:

"scroll down ↓"

Create a subtle bouncing animation on the arrow.

Background should have tiny floating hearts / stars / sparkles.

Keep it minimal.

---

# SMALL PERSONAL INTRO

After scrolling:

"Okay... before anything else..."

Then:

"Today is your day.
So you are officially allowed to be annoying for the next 24 hours."

Add a small cute illustration/emoji:

"💗 🐷 🎀"

Then:

"Actually... let's be honest.
You're annoying every day."

Small handwritten text:

"but you're my favourite one."

Make this section playful.

---

# PHOTO MEMORY SECTION

Title:

"some memories ♡"

Subtitle:

"proof that we've actually had some good moments"

Create a beautiful scrapbook-style photo gallery.

Use images that I will put inside:

/public/assets/images/

IMPORTANT:
I will add my own photos.

Automatically load images from the configured asset list.

Create a configuration file where I can easily add/remove images.

Example:

const photos = [
"/assets/images/photo1.jpg",
"/assets/images/photo2.jpg",
"/assets/images/photo3.jpg"
];

Do not use stock photos.

Use:

* Polaroid cards
* slightly rotated photos
* rounded image cards
* small tape/sticker decorations
* subtle shadows

Give each photo a tiny random rotation.

When clicked:
open the photo in a beautiful fullscreen/lightbox view.

Add subtle captions such as:

"one of my favourite memories ♡"

"look at us 😭"

"why were we like this"

But don't force captions if I haven't provided them.

---

# CUTE INTERLUDE

Between the photo sections add a small centered message:

"life would be a lot more boring without you."

Then:

"and probably a lot more peaceful too."

Add:

"but who wants peace anyway? 💀"

This should be a cute funny moment.

---

# VIDEO SECTION

Title:

"little pieces of us 🎥"

Use videos from:

/public/assets/videos/

I will add my own videos.

Create beautiful rounded video cards.

Videos should NOT autoplay with sound.

Show a play button.

Clicking a video should open a larger player.

Use lazy loading so all videos don't load at once.

If there are no videos, hide this section gracefully.

---

# MUSIC

Add background music using:

/public/assets/audio/

I will put an MP3 file there.

IMPORTANT:
Browsers can block autoplay.

Therefore start music only after the user's first interaction.

For example, when they click the first "scroll" / "open" interaction.

Add a small floating music button in the bottom-right corner.

It should look cute and minimal:

♫

Clicking it toggles:

* music on
* music off

Music should loop.

Use a soft fade-in.

Do not let the music overpower the page.

If no music file exists, the website should still work perfectly.

---

# THE LETTER SECTION ❤️

This is the most important section.

Create a beautiful paper/card design.

Maybe a slightly textured cream paper with subtle shadow.

Title:

"okay... one serious thing"

Then display my actual birthday letter.

IMPORTANT:
DO NOT correct my spelling.
DO NOT change my Punjabi/Hinglish.
DO NOT rewrite anything.
Keep the emojis.
Keep the funny wording.
Keep the imperfect spelling because that is how I wrote it.

Letter:

Adarniee Doraemon ji💩 ,

Happy Birthday to someone truly special!🎂

Bache apko Janamdin par bohot sarii happy hapyyy walii whishingss,
Jaise k apko patta hai aap iss din jamme the, orr rab ne aisa mental peice ek he bnaya tha.

Baki baba g thora dmaag v den kyuki upparlaa dabba khalli e.

Chall mzaak side te, ajj special day a ta apna din enjoy kri and sad na hoya kr guu.

Am so lucky tere vrgi bhen milli jo ena support te care krdi a te kde jatondi b ni har moment te menu guide krdi a, thanks for everything 🐷.

Baki bakwaas me phone te kruga, hehehe 🌚

Love you  🥰

With love and best wishes,
Apka sohna sunakhaa bhai 💝
Mr Jassu 🦬💞

---

# LETTER ANIMATION

Don't dump the entire letter onto the screen immediately.

As the user scrolls into the section:

First reveal:

" Doraemon ji💩"

Then gently reveal the rest.

Use:

* fade-in
* slight upward movement
* handwritten feeling

Do NOT use an aggressive typewriter effect because it can make a long letter annoying to read.

The entire letter should eventually remain visible.

---

# FINAL PHOTO / MEMORY

After the letter, add a final small photo section.

Title:

"and one last thing..."

Display one particularly nice image from the image collection prominently.

Under it:

"thank you for being my sister,
my supporter,
my guide,
and sometimes...
my personal headache."

Then:

"wouldn't trade you for anyone ❤️"

---

# FINAL BIRTHDAY SECTION

Create a beautiful final section with a soft pink/cream background.

Large text:

"Once again Happy Birthday Guuuuuuuu🎂❤️"

Then:

"Stay happy.
Keep smiling.
Keep annoying me."

Pause/spacing.

"Love you always."

Then handwritten signature:

"— Mr Jassu 🦬💞"

Add subtle floating hearts and confetti.

Do NOT make this section overly flashy.

It should feel warm and emotional.

---

# MICRO-INTERACTIONS

Add tasteful small animations:

* floating hearts
* tiny sparkles
* gentle image hover
* cards slightly lifting on hover
* smooth scrolling
* fade-in sections
* subtle parallax
* button hover animations
* heart pulse
* small confetti at the end

Keep animations smooth and lightweight.

---

# MOBILE FIRST

This website will primarily be opened on a phone.

Make the mobile experience excellent.

Test:

* iPhone
* Android
* desktop

Photos should look beautiful vertically on mobile.

Videos should fit the screen.

The letter should have comfortable reading width and font size.

No horizontal scrolling.

Buttons should be easy to tap.

---

# TECHNICAL STRUCTURE

Use React + TypeScript.

Create reusable components:

Hero
IntroMessage
PhotoGallery
VideoGallery
Letter
FinalMessage
MusicPlayer

Create:

/public/assets/images/
/public/assets/videos/
/public/assets/audio/

Create an easy configuration file for:

* photos
* videos
* music
* captions

I should be able to add new photos by simply adding their filename to the configuration.

---

# DESIGN DETAILS

Use subtle decorative elements:

♡
✦
☆
🎀
💗
🌷
🧸

But don't spam emojis.

Use small hand-drawn doodles around some sections.

Use a scrapbook-like feeling.

Some elements can look like stickers.

Keep the overall composition clean.

---

# IMPORTANT FINAL REQUIREMENT

The website should look like something that could genuinely be posted as:

"made this birthday website for my sister 🥹❤️"

on Instagram.

It should feel personal, cute, trendy and shareable.

The first impression should be:

"OMG this is so cute 😭"

NOT:

"This is a complicated web application."

Build the complete website and make every section polished and responsive.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a2ad1fa4-33f2-451f-a500-e453a436178d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
