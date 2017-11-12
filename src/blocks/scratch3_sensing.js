const Cast = require('../util/cast');

class Scratch3SensingBlocks {
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
            sensing_sensors: this.sensors,
            sensing_ultrasound: this.ultrasound
        };
    }

    sensors (args, utils){
        console.log('sensors');
    }

    ultrasound (args, utils){
        console.log('ultrasound');
    }
}

module.exports = Scratch3SensingBlocks;
