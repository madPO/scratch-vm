const MathUtil = require('../util/math-util');
const Cast = require('../util/cast');
const Clone = require('../util/clone');

class Scratch3SoundBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            sound_sound: this.sound,
            sound_play: this.play,
            sound_mute: this.mute
        };
    }

    sound (args, utils){
        console.log('sound');
    }

    play (args, utils){
        console.log('play '+args.WHAT);
    }

    mute (args, utils){
        console.log('mute');
    }
}

module.exports = Scratch3SoundBlocks;
