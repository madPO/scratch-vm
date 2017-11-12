const Cast = require('../util/cast');
const MathUtil = require('../util/math-util');
const Timer = require('../util/timer');

class Scratch3MotionBlocks {
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
            motion_start: this.start,
            motion_go: this.go,
            motion_move: this.move,
            motion_set: this.set,
            motion_commit: this.commit
        };
    }

    start (args, util) {
        console.log('start');
    }

    go (args, util){
        console.log('go '+args.SERV_OPTION+' '+args.POSITION+' '+args.SECONDS);
    }

    move (args, util){
        console.log('move '+args.SERV_OPTION+' '+args.POSITION+' '+args.SECONDS);
    }

    set (args, util){
        console.log('move '+args.SERV_OPTION+' '+args.POSITION);
    }

    commit (args, util){
        console.log('commit');
    }
}

module.exports = Scratch3MotionBlocks;
