---
title: Are You a Millionaire Somewhere?
category: Misc
description: Webapp to learn NextJS' incremental site regeneration (ISR).  To not exceed the API call limit of exchangeratesapi, I utilised ISR to pull the newest rate data at a maximum of once a day.
techStack: NextJS, Typescript, Material UI
image: ../assets/images/project6.png
imageGif: ../assets/images/goriot.gif
url: https://are-you-a-millionaire-somewhere.vercel.app/
order: 06
---

Next.js allows you to create or update static pages after you’ve built your site. ISR enables you to use static-generation on a per-page basis, without needing to rebuild the entire site. Any requests to the page after the initial request and before 10 seconds are also cached and instantaneous.
