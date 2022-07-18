---
authors: Chad Stark (chad.program21@gmail.com)
state: draft
---

# RFD 0001 - Project Discussion

## What

Initial discussion document to flush out project details.

## Why

To get the group on the same page when it comes to:

- development stack being used
- design process
- development hurdles
- project goal

## Details

In the first iteration of the DiscordWiki project, we will have the discord bot and webpage setup accordingly:

#### The discord Bot

1.  It will be required to be assigned a unique role in every server.
    - 1a. This role will give the bot certain permissions to "watch" a text channel.
    - 1b. To notify the bot exactly what channels it is to watch will require guilds to setup their text channels with a specific role we require. For example: the role of "wikiwatch" or something like that. (i am not ENTIRELY sure this will work until we begin developing the bot, but in theory this should work)
2.  If the role is setup correctly within the text channel, the bot will then proceed to fetch content, both content posted in the past and continually update in the future.
    - 2a. This content will be sent to our NextJS api where it will be handled appropriatley and then sent to the frontend.

I am not entirely sure how far back in time the initial fetch will be allowed to go, given I dont know Discord's caching system. But some initial google searches do seem to tell us that Discord cache's all messages and content since a channels creation, so this is good news, but will need to be tested, and if we cannot fetch to channels creation, we will cap the fetch to some particular date of our choosing.

#### The Front End

1. The front end will receive the data from the API and display it under a unique URL for each guild.
   - 1a. For example: www.discordwiki.com/gravytrain
        - 1aa. We will need to figure out a way to make each URL unique, even if named the same. Discord allows guilds to be named the same names. We could use Guild IDs?
   - 2a. Each server's webpage is broken down into their respective channels being watched. For example: - General - Food-pron - Wordle
2. I am also thinking we display a basic organization/ possible categorizing feature when users access www.discordwiki.com?
   - 2a. Im thinking how twitter organizes tweets by hashtag, we incorporate a similar system? So if users just want to browse discords they could look under the category "FPS" and see a server list of servers tagged with that category. This can obviously get more specific and allow users to select multiple tags, narrowing down their search of servers.

This is all ive come up with for the front end thus far. I dont have any idea what we could do for design and UX.

### Structure

Utilize NextJs framework to develop front end.
Utilize NextJs API for interactions between the discord bot and front end webpage.
Utilize DiscordJS for bot development and to fetch/update data within guilds.
Utilize TailwindCSS for styling purposes.

### process

Not sure yet.

#### Required Approvers

```
# Required Approvers
* Kyle Ryan Garcia @AlsoPeters
* Casey Cochran @casey-cochran
```

### UX

@AlsoPeters mentioned designing some webpages utilizing Figma. Other than that, not sure.
