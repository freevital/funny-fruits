import Phaser from 'phaser';
import { getRandomNumber } from './helpers';
import assets from './assets';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });

        // Define default properties
        this.items = assets.fruits;
        this.itemSize = 40;
        this.grid = [];
        this.gridSize = 16;
        this.group = {};
    }

    // Preload Phaser's assets.
    preload() {
        this.load.image('background', assets.background);

        // Fruits
        for (let [key, value] of this.items.entries()) {
            this.load.image(key + 1, value);
        }
    }

    // Create grid.
    create() {

        // Set background image.
        this.add.image(0, 0, 'background')
            .setDisplaySize(750, 750)
            .setOrigin(0, 0);

        // Create sprite group.
        this.group = this.add.group();

        // Build grid.
        for (let col = 1; col <= this.gridSize; col++) {
            this.grid[col] = [];

            for (let row = 1; row <= this.gridSize; row++) {
                this.grid[col][row] = this.createSprite(col, row);
            }
        }
    }

    // Create sprite element.
    createSprite(col, row) {
        const randomIndex = getRandomNumber(1, this.items.length);
        const offset = {
            x: this.itemSize * col + 35,
            y: this.itemSize * row + 35
        };

        const sprite = this.group.create(offset.x, offset.y, randomIndex);
        sprite.key = randomIndex;
        sprite.setInteractive();

        // Click event handler.
        sprite.on('pointerdown', () => {
            this.updateGrid(col, row);
        });

        return sprite;
    }

    // Replacing grid elements.
    updateGrid(row, col, previousKey) {
        if (
            !this.grid[row]
            || !this.grid[row][col]
            || (previousKey && this.grid[row][col].key !== previousKey)
        ) {
            return;
        }

        const currentElement = this.grid[row][col];

        // Delete current element from grid.
        this.group.remove(currentElement, true);
        delete this.grid[row][col];

        // Generate new element.
        setTimeout(() => {
            this.grid[row][col] = this.createSprite(row, col);
        }, 200);

        // Update next elements.
        this.updateGrid(row + 1, col, currentElement.key);
        this.updateGrid(row - 1, col, currentElement.key);
        this.updateGrid(row, col + 1, currentElement.key);
        this.updateGrid(row, col - 1, currentElement.key);
    }
}

export default GameScene;
