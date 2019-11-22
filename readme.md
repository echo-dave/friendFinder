# Frind Finder App
Because everyone could use another friend 😉

## Technology
Build on nodejs with a mysql database backend for storing all the persistant data for potential friend finding. Node hadles all the heavy logic with expressjs running the webserver routing requests. Jquery handles the form data and display of the database queries to the page. Bulma takes care of the bulk of the styling on this project.

## Challenges
The logic was a bit tricky doign a comparison question by question followed by comparing the collection of answers on a friend by friend basis. The combination of database queries, inserts and logic loops to handle calculations turned out longer and more complex than originally expected. Following that there were some challenges getting everthing running on Heroku with the database credentials do to conflicting methods.

### How it works
The home page lists the 2 most recent entries. Each new survey gets entered into that database and added to the calculations. Do to some of of the logic used it's possible there may be some odd results under high traffic. Additional database queries and promise chaining would be necessary to propery handle that vs just not comparing against the most recent entry (otherwise surveyers would always match to themselve hah!).