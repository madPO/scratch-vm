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
            services_state: this.state,
            services_lastcycle: this.lastcycle
        };
    }

    hello (args, util) {
        console.log('hello');
    }

    state (args, utils) {
        console.log('state');
    }

    lastcycle (args, utils) {
        console.log('lastcycle');
    }
}

module.exports = Scratch3ServicesBlocks;
