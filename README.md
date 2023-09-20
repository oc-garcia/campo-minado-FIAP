# Minesweeper-Style Game

This Minesweeper-style game was created as a part of the FIAP course activity. It provides an engaging and interactive experience where players can test their strategy and puzzle-solving skills while avoiding hidden mines.

## Table of Contents

- [Instructions](#instructions)
- [Gameplay](#gameplay)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Instructions

In this game, your objective is to reveal all cells on the game board without triggering any mines. The game board consists of a grid of cells, some of which contain hidden mines. You must navigate the grid and use your wit to reveal cells without stepping on a mine.

## Gameplay

The game follows these rules:

- The game board is a grid of cells.
- Some cells contain mines; others are safe to reveal.
- You can choose a cell to reveal or flag as a mine.
- If you reveal a cell with a mine, you lose the game.
- If you reveal a cell without a mine, it will display the number of adjacent mines.
- The game is won when all safe cells are revealed (no "-" strings are left).

## Dependencies

This game is built using JavaScript and relies on the following dependencies:

- [Node.js](https://nodejs.org/): A JavaScript runtime environment for executing the game.

## Installation

To install and run the game, follow these steps:

1. Ensure you have Node.js installed on your computer. You can download it from [https://nodejs.org/](https://nodejs.org/).

2. Clone this repository to your local machine using Git:
``
git clone https://github.com/oc-garcia/campo-minado-FIAP.git
``

3. Navigate to the game directory:
``
cd campo-minado-FIAP
``

4. Install the required dependencies:
``
npm install
``

## Usage

To start the game, run the following command:
``
node play.js
``


Follow the on-screen instructions to play the game. Use your keyboard to select cells and take actions.

## Contributing

Contributions to this game are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Create a pull request with a clear description of your changes.
