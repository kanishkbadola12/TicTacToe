# tic-tac-toe

## QnA:
### Q. How it was to get started on the app?

• The idea for the tic-tac-toe app was simple yet dynamic, so brainstorming use cases wasn't the challenge in getting started. Scafollding the app was also very straightforward with the use of Ember CLI as it automatically generated the required folder structure needed to kickstart development.

### Q. Where you found key information to help you in your development
• I followed the tutorial mentioned in the ember.js documentation to get the basic understanding of the framework and how the fundamental concepts like Components, Services, Routing, Rendering, Passing data etc are implemented in ember.js. This information helped me to to set up project structures and implementing advanced functionalities. Furthermore, community forums like Stack Overflow and Ember discuss provided valuable information for troubleshooting specific issues and learning the correct desgin patterns used in developing app using ember.js. Below are the links which I used extensively to implement the app


<b>Stack Overflow</b>: https://stackoverflow.com/ <br>
<b>Ember Discuss</b>: https://discuss.emberjs.com/ <br>
<b>Ember Tutorial</b>: https://guides.emberjs.com/release/tutorial/part-1/ <br>
<b>Components</b>: https://guides.emberjs.com/release/components/ <br>
<b>Services</b>: https://guides.emberjs.com/release/services/ <br>
<b>Routing</b>: https://guides.emberjs.com/release/routing/ <br>
<b>Component state and actions</b>:  https://guides.emberjs.com/release/components/component-state-and-actions/ <br>
<b>Template LifeCycle</b>: https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/ <br>
<b>Conditional Rendering</b>: https://guides.emberjs.com/release/components/conditional-content/<br>
<b>Passing data</b>: https://discuss.emberjs.com/t/passing-down-actions-to-child-components/17680

### Q. Which parts of development were easy or difficult for you
• <b>Easy Part:</b> Designing the algorithm for the game was straightforward for me, as it primarily involved implementing basic 2-D matrix algorithms like checking rows, columns, and diagonals, which are fundamental 2-D matrix problems.

• <b>Challenging Part:</b>: The challenging part of the development process for me was to implement the functionality of the 'Reset' button, as it involved updating the state in a way that triggered reactivity. Through this, I gained understanding of Ember's reactivity system and how it detects changes to update the DOM accordingly. This helped me to manage a centralized data store (GameService) effectively, ensuring that components subscribed to this data would re-render when the state changed. This approach allowed me to develop the application using a pattern similar to Redux, promoting a more organized and maintainable codebase.

### Q. What you would improve were you given more time
• If given more time I would like to implement TypeScript in the current project to ensure type safety and write unit tests for the changes to attain higher code quality. Additionally, I would like to deepen my understanding of best practices and design patterns in Ember.js development, which can be useful for optimizing and refactoring the app wherever necessary. Aditionally, I would like to implement the backend for the app to enable functionalities like storing wins/loses/draws for each player persistently.

### Q. What you enjoyed most about the implementation.
• I enjoyed learning the new framework in a  short period of time, and the overall development experience was particularly engaging due to its focus on game development. Additionaly I also enjoyed coding custom CSS for animations, styling to give the app a more personalized feel tailored to Feedback Fruits.

## Concept:

The Tic Tac Toe app is designed to provide a seamless and enjoyable gaming experience with the following features:

<b>1. 3x3 Grid </b><br>
• The game board consists of a 3x3 grid, which is the traditional layout for Tic Tac Toe. Each cell in the grid can be clicked to place a player's mark (either 'X' or 'O').

<b>2. Player Selection </b><br>
• At the start of the game, players can choose whether they want to be 'X' or 'O'. This selection determines which player goes first. The initial player is set to 'X' by default, but this can be changed before the game begins.

<b>3. Turn Based </b><br>
• Players take turns to place their marks on the grid. The app ensures that alternate turns are provided correctly. If 'X' mark the grid in it's turn then the next Turn would be given to 'O' and vice versa.

<b>4. Game Logic </b><br>
• The app checks for a winner after each move. A player wins by placing three of their marks in a horizontal, vertical, or diagonal row. If all cells are filled and no player has three in a row, the game ends in a draw otherwise the currently player with three in a row wins.

<b>6. Reset Button </b><br>
• The app features a reset button that allows players to start a new game at any time. When the reset button is pressed, the game board is cleared, and the default player is set to 'X'. This provides a quick and easy way to restart the game without refreshing the entire page.

<b>7. Responsiveness </b><br>
• The app is designed to be responsive, ensuring that it looks and functions well on various devices, including desktops, tablets, and smartphones. The user interface is simple and intuitive, making it easy for players to navigate and enjoy the game.

<b>8. Interactive User Interface </b><br>
• The user interface is designed to be interactive and visually appealing. Clear visual cues indicate whose turn it is, and winning combinations are highlighted to celebrate the player's victory or a match tie.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd tic-tac-toe`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `npm run test`
- `npm run test:ember -- --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec ember build` (development)
- `npm run build` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
