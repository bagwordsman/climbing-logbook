# Climbing Logbook
## - A naive implementation of an SPA (single page application)

### Features:
 - Memory Leaks left, right, and centre, most probably. Was definitely in [Camp 3 when I started this project](https://medium.com/outsystems-experts/beyond-memory-leaks-in-javascript-d27fd48ae67e)
 - Hefty DOM manipulation to emulate single-view application behaviour
 - Nonetheless, works ok on my laptop (lots of RAM or whatever to play with), dies a swift death on my phone
 - Oh and it displays my online climbing logbook, taken from [UKClimbing.com](https://www.ukclimbing.com/logbook/showlog.php?id=152526)
 - Search by climb and crag, adapting Ajax type-ahead from [Mr Wes Bos's video tutorial](https://www.youtube.com/watch?v=y4gZMJKAeWs)
 - Save :heart: Favourite Routes and :blue_book: Memorable Days - complete with a note - to localStorage


### Future stuff:
 - Make it not freeze up all the time
 - Refactor and reduce code, of course
 - Probably use a framework
 - Would be great if UKC could make an API endpoint for this
 - Don't go ice climbing:
 ![ice climbing no thanks](https://media.giphy.com/media/NIA7y7mEpySnm/giphy.gif)