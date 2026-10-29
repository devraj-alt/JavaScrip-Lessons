//XMLHttpRequest(XHR): is  built in browser object that allows JavaScript code to talk to a server and fetch data in background without reloading the entire webpage.

/*
How it works step by step:
1. Create it: initialize an XMLHttpRequest object.

2. Open it (open()): configure it by specifying the HTTP method like GET or POST and the URL we want to talk to.

3. Sent it (send()): fire off the request to the server.

4. Track the state (readyState) : as the request moves from start to finish, its state changes from 0 (unsent) all the way to 4 (done).

5. Get the result: once the state hits 4 and the state is 200 (success), you grab the response data (usually as JSON or text) and update your HTML page elements dynamically.
*/ 
const avatar = document.querySelector('#avatar')
const userName = document.querySelector('#name')
const bio = document.querySelector('#bio')
const followers = document.querySelector('#followers')
const userLocation = document.querySelector('#location')
const error = document.querySelector('#error')

const requestUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.send()
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
              const data = JSON.parse(this.responseText)
              avatar.src = data.avatar_url
              userName.textContent = data.name
              bio.textContent = data.bio
              followers.textContent = `Followers: ${data.followers}`
              userLocation.textContent = `Location: ${data.location}`
        } else {
                error.textContent = `Error ${xhr.status}: Data Unavailable`
            }
    }
}


