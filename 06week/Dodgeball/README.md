//Create a list of steps your app need to do.
We are in need of a sorting and organizing app for our community dodge ball league. There are already 6 players signed up and we hope to get more! We need to select from our currently signed-up people to make them dodge ball players and from there we need to be able to select them to be on different teams.

1. Need to be able to add people to the "Players list"
   -When clicked, the people are removed from "people list" and added to the "Players column" while getting new values of a player added to them.
   -Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
   -Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.

2. Need to add Players to different teams
   -When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
   -Do the same for the red team
   -Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team and now has mascot and teamColor
   -Use the "this" keyword to assign each player to a team with an onclick. Either Blue Team or Red Team.
   -Display the two teams in a new list in the DOM with appropriate titles.

3. Need 3 Unit Tests
   -Use Mocha and Chai to give tests that prove a person becomes a player and player becomes a teammate.
