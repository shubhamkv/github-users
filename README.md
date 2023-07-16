## Gitpedia : https://git-pedia.netlify.app

A web app that allows the visitor to search GitHub users and display some useful info (like amount of repos, list of followers, most forked repo and etc..) about the user using Github API.

Functionalities :

1. Uses React Router DOM to set up our pages, React Hooks for state management when new data are fetched by API and navigation fusion charts to display our user repos data.
2. Auth0 for our authentication.
3. Display left out API requests out of 60 as we are only allow to request for 60 times in a hour.
4. Uses Bar3D, Column3D, Doughnut2D and Pie3D types of chart to display the statistics of user's repos.
5. Hosed the app on Netlify.

References :

1. React Router : https://reactrouter.com/en/main/start/tutorial
2. React Hooks : https://react.dev/reference/react
3. Fusion Charts : https://www.fusioncharts.com/react-charts?framework=react
4. Auth0 : https://auth0.com/docs
5. Github API : https://api.github.com
