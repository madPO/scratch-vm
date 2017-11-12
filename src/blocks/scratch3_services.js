const Cast = require('../util/cast');
const Clone = require('../util/clone');
const RenderedTarget = require('../sprites/rendered-target');

class Scratch3ServicesBlocks {
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
            services_hello: this.hello,
        };
    }

    hello (args, util) {
        console.log('hello');
    }
}

module.exports = Scratch3ServicesBlocks;
