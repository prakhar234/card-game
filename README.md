# card-game

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Details

To run this application, steps are provided above.
npm run serve will give prompt in terminal that the application is running at [localhost:8080]. Clicking this url will take you to the home page which is GameView.vue file. GameView has buttons to start the game which will trigger a reducer action to the start to initialize the game and draw first card from the deck. Initially you will see 5 greyed out cards. When you click on start new game, first card will be drawn. After that deal new card button will appear. On each deal, first the deck is shuffled and then a new card is picked for each player. A util deck.ts is being used which expeoses shuffle, deal and create deck functions. These functions are being used from the store/game.ts file. Clicking on buttons triggers a reducer function which i turn calls these util functions and updates the state of the game. I have user green border to highlight current active card which has been dealt just now. When 5 cards have been exposed, Game enteres stop state and a restart button appears up with a message saying that game is over and please restart the game.

Unit tests are present in tests/unit folder for all the components.
