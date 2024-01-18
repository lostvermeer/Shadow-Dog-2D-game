export class UI {
    constructor (game) {
        this.game = game;
        this.fontSize = 40;
        this.fontFamily = 'Creepster';
        this.livesImage = document.getElementById('lives');
    }

    draw (context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsety = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText('Enemies killed: ' + this.game.score, 10, 40);
        // timer
        context.font = this.fontSize * 0.8 + ' px' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 10, 80);
        // lives
        for (let i = 0; i < this.game.lives; i++) {
            context.drawImage(this.livesImage, 28 * i + 12, 90, 25, 25);   
        }
        // game over messages
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;

            context.fillText('Game Over', this.game.width * 0.5, this.game.height * 0.5); // can be customized
            // if (this.game.score > 5) {
            //     context.fillText('Boo-Yah', this.game.width * 0.5, this.game.height * 0.5 - 20);
            //     context.font = this.fontSize * 0.7 + ' px' + this.fontFamily;
            //     context.fillText('What are creatures of the night afraid of? YOU!!!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            // } else {
            //     context.fillText('Love at first bite?', this.game.width * 0.5, this.game.height * 0.5 - 20);
            //     context.font = this.fontSize * 0.7 + ' px' + this.fontFamily;
            //     context.fillText('Nope. Better luck next time!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            // }
        }
        context.restore();
    }
}