# Tweeter Project 

## Project Description 

#### Goal 

This is a simplified single-page Twitter clone using HTML, CSS, JS, jQuery, and AJAX on the front-end, and Node, Express and MongoDB on the back-end.

## Explore tinyApp

!['']()
!['']()

**DEPENDENCIES:**

- body-parser
- chance
- express
- mongodb
- md5

**GETTING STARTED:**

- Install all dependencies (using the `npm install` command)
- Run the development web server using the `node server/index.js` command
  - Open the browser on `http://localhost:8080`
    - *note the port set is 8080*

### Primary Functionality

- Primarily a client-side SPA
- The client-side app communicates with a server via AJAX
- Tweets are persisted to MongoDB and survive server restart
- Responsive design layout

### Features to Try

#### Compose a Tweet:

  - Click the 'Compose' button to write a tweet!
    - **Upon succesful tweet submission, that *ONE* new tweet will refresh into the top of the tweet feed**
      - *(successful AJAX call and render, not all tweets in feed will reload)*
    - **if the tweet has no input, an error message will advise and the tweet will not send**
    - **if the tweet has too many characters (counter goes to '0 or negative count') an error message will advise and not send**
      - the input box will cutoff any text beyond 140 characters   -**Upon refocusing into the textfield of the compose tweet, the error message is removed**
  - **The counter subtracts correctly during any back-spacing or deleting**
  - **User input is escaped for XXS protection**
  - **The compose tweet reset's upon successful submit of the tweet**

  - If one key is pressed without any keyup, counter will still decrease by relative increment; text may also be copy and pasted in with correct counter result

###### **Design**

  - The compose tweet box slides into view upon clicking 'compose'
  - The character count turns red when user has less than 10 characters left

#### Tweets Feed

 - Tweets are displayed in reverse-chronological order (by creation time descending)

###### **Design**

  - Upon hover over a tweet, styles on tweet become more prominent
    - Social Media action icons appear in right corner within hover
  - If a tweet was entered as one continuous long sequence of 140 characters (no spaces), the tweet will correctly wrap within the tweet box when rendered to feed
