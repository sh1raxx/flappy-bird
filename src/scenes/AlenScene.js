
import Phaser from 'phaser';


class AlenScene extends Phaser.Scene {

  constructor(config) {
    super('AlenScene');
    this.config = config;
  }

  preload() {
    this.load.image('vergil', 'assets/vergil.jpg');
  }

  create() {
    this.add.image(0, 0, 'vergil').setOrigin(0);
  }
}

export default AlenScene;
