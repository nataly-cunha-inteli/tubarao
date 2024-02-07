var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 601,

    scene:{
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var tubaron;

function preload() {
    this.load.image('oceano', 'assets/bg_azul-claro.png');

    this.load.image('ilha', 'assets/imagem_de_brgfx_no_freepik.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixe', 'assets/peixes/tubarao.png');
}

function create() {
    this.add.image(400,300, 'oceano');

    this.add.image(700,200, 'ilha');

    this.add.image(400,525, 'logo').setScale(0.5);

    tubaron = this.add.image(400,300, 'peixe');

    tubaron.setFlip(true, false);
}

function update() {
    tubaron.x = this.input.x;
    tubaron.y = this.input.y;
}


