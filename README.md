# Tweeter Project 

## Project Description 

#### Goal 

This is a simplified single-page Twitter clone using HTML, CSS, JS, jQuery, and AJAX on the front-end, and Node, Express and MongoDB on the back-end.

## Explore tinyApp

!['']()
!['Main Page (logged in)']()

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

### Features to Try

#### Compose a Tweet:

  - Click the 'Compose' button to write a tweet!
    - **if the tweet has no input, an error message will advise and the tweet will not send**
    - **if the tweet has too many characters (counter goes to '0 or negative count') an error message will advise and not send**
      - the input box will visually show where the cutoff is occuring while the counter advices how many characters caused negative count
  -**Upon refocusing into the textfield of the compose tweet, the error message is removed**
  - **The counter subtracts correctly during any back-spacing or deleting**
  - **The input is escaped for XXS protection**
  - **The compose tweet reset's upon successful submit of the tweet**

  - If one key is pressed without any keyup, counter will still decrease by relative increment; text may also be copy and pasted in with correct counter result

###### **Design**

  - The coompose tweet box slides into view upon clicking 'compose'
  - The character count turns red when user has less than 10 characters left

#### Tweets Feed

 - Tweets are displayed in reverse-chronological order (by creation time descending)

###### **Design**

  - Upon hover over a tweet, styles on tweet become more prominent
    - Social Media action icons appear in right corner within hover