# rock-paper-scissors
This is the rock paper scissors javascript project for Odin Project.

# How it's made
**Tech Used**: HTML and Javascript

This program is entirely run through the console of the web browser. The html is simply a skeleton to hold the javascript, only containing the regular html boilerplate and a link to the javascript file. 

It is designed to be used entirely in the web browser's console, as per the specifications in the project description. The user can enter rock, paper, or scissors (case insensitive) and the computer randomly generates its own choice. It plays this "game" five times and then prints the scores of the computer and the user.

The implementation is quite simple. I first created a function for the computer's choice to be randomly generated using Math.random. I then created a function for the user's choice, which simply prompts the user to enter rock, paper, or scissors. The program does not handle inputs that aren't rock, paper, or scissors, as per the specifications in the description of the project. 

A function playRound was created to implement the logic of playing one round. If the user and computer made the same choice, there's a tie. I then used if statements to specify all the user's win conditions. After this, a single else statement implements all the user's losing conditions. The program is case insensitive by converting the user's input to lowercase. 

The function playGame declares the scores, playRound increments them, then playGame has a for loop that goes from 0 to strictly less than 5. This plays the game 5 times and uses console.log to display the results.

# Lessons learned
I'm a third year computer science student, so the actual implementation of this project was quite simple to me. This is a problem that I would've found in my CS 1 or CS 2 courses. However, I am not familiar with JavaScript, so I ended up learning a lot about the intricacies of the language and how functions work within it.