import Phaser from 'phaser';
import GameScene from './GameScene';
import './assets/main.css';

new Phaser.Game({
    parent: 'game',
    type: Phaser.AUTO,
    width: 750,
    height: 750,
    scene: [
        GameScene
    ]
});
