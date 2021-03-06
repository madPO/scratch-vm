/**
 * @fileoverview
 * The specMap below handles a few pieces of "translation" work between
 * the SB2 JSON format and the data we need to run a project
 * in the Scratch 3.0 VM.
 * Notably:
 *  - Map 2.0 and 1.4 opcodes (forward:) into 3.0-format (motion_movesteps).
 *  - Map ordered, unnamed args to unordered, named inputs and fields.
 * Keep this up-to-date as 3.0 blocks are renamed, changed, etc.
 * Originally this was generated largely by a hand-guided scripting process.
 * The relevant data lives here:
 * https://github.com/LLK/scratch-flash/blob/master/src/Specs.as
 * (for the old opcode and argument order).
 * and here:
 * https://github.com/LLK/scratch-blocks/tree/develop/blocks_vertical
 * (for the new opcodes and argument names).
 * and here:
 * https://github.com/LLK/scratch-blocks/blob/develop/tests/
 * (for the shadow blocks created for each block).
 * I started with the `commands` array in Specs.as, and discarded irrelevant
 * properties. By hand, I matched the opcode name to the 3.0 opcode.
 * Finally, I filled in the expected arguments as below.
 */
const specMap = {
    'start':{
        opcode:'motion_start',
        argMap:[
        ]
    },
    'go':{
        opcode:'motion_go',
        argMap:[
            {
                type: 'field',
                fieldName: 'SERV_OPTION'
            },
            {
                type:'input',
                fieldName:'POSITION'
            },
            {
                type:'input',
                fieldName:'SECONDS'
            }
        ]
    },
    'move':{
        opcode:'motion_move',
        argMap:[
            {
                type: 'field',
                fieldName: 'SERV_OPTION'
            },
            {
                type:'input',
                fieldName:'POSITION'
            },
            {
                type:'input',
                fieldName:'SECONDS'
            }
        ]
    },
    'set':{
        opcode:'motion_set',
        argMap:[
            {
                type: 'field',
                fieldName: 'SERV_OPTION'
            },
            {
                type:'input',
                fieldName:'POSITION'
            },
            {
                type:'input',
                fieldName:'SECONDS'
            }
        ]
    },
    'motionCommit':{
        opcode:'motion_commit',
        argMap:[
        ]
    },
    'sensors':{
        opcode: 'sensing_sensors',
        argMap:[
        ]
    },
    'ultrasound':{
        opcode: 'sensing_ultrasound',
        argMap:[
        ]
    },
    'play':{
        opcode:'sound_play',
        argMap:[
            {
                type:'input',
                fieldName:'WHAT'
            }
        ]
    },
    'sound':{
        opcode:'sound_sound',
        argMap:[
        ]
    },
    'mute':{
        opcode:'sound_mute',
        argMap:[
        ]
    },
    'hello:': {
        opcode: 'services_hello',
        argMap: [
        ]
    },
    'state':{
        opcode: 'services_state',
        argMap: [
        ]
    },
    'lastcycle':{
        opcode:'services_lastcycle',
        argMap:[
        ]
    },
    'clearPenTrails': {
        opcode: 'pen.clear',
        argMap: [
        ]
    },
    'stampCostume': {
        opcode: 'pen.stamp',
        argMap: [
        ]
    },
    'putPenDown': {
        opcode: 'pen.penDown',
        argMap: [
        ]
    },
    'putPenUp': {
        opcode: 'pen.penUp',
        argMap: [
        ]
    },
    'penColor:': {
        opcode: 'pen.setPenColorToColor',
        argMap: [
            {
                type: 'input',
                inputOp: 'colour_picker',
                inputName: 'COLOR'
            }
        ]
    },
    'changePenHueBy:': {
        opcode: 'pen.changePenHueBy',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'COLOR'
            }
        ]
    },
    'setPenHueTo:': {
        opcode: 'pen.setPenHueToNumber',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'COLOR'
            }
        ]
    },
    'changePenShadeBy:': {
        opcode: 'pen.changePenShadeBy',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'SHADE'
            }
        ]
    },
    'setPenShadeTo:': {
        opcode: 'pen.setPenShadeToNumber',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'SHADE'
            }
        ]
    },
    'changePenSizeBy:': {
        opcode: 'pen.changePenSizeBy',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'SIZE'
            }
        ]
    },
    'penSize:': {
        opcode: 'pen.setPenSizeTo',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'SIZE'
            }
        ]
    },
    'whenGreenFlag': {
        opcode: 'event_whenflagclicked',
        argMap: [
        ]
    },
    'whenKeyPressed': {
        opcode: 'event_whenkeypressed',
        argMap: [
            {
                type: 'field',
                fieldName: 'KEY_OPTION'
            }
        ]
    },
    'whenClicked': {
        opcode: 'event_whenthisspriteclicked',
        argMap: [
        ]
    },
    'whenSceneStarts': {
        opcode: 'event_whenbackdropswitchesto',
        argMap: [
            {
                type: 'field',
                fieldName: 'BACKDROP'
            }
        ]
    },
    'whenSensorGreaterThan': {
        opcode: 'event_whengreaterthan',
        argMap: [
            {
                type: 'field',
                fieldName: 'WHENGREATERTHANMENU'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'VALUE'
            }
        ]
    },
    'whenIReceive': {
        opcode: 'event_whenbroadcastreceived',
        argMap: [
            {
                type: 'field',
                fieldName: 'BROADCAST_OPTION'
            }
        ]
    },
    'broadcast:': {
        opcode: 'event_broadcast',
        argMap: [
            {
                type: 'input',
                inputOp: 'event_broadcast_menu',
                inputName: 'BROADCAST_OPTION'
            }
        ]
    },
    'doBroadcastAndWait': {
        opcode: 'event_broadcastandwait',
        argMap: [
            {
                type: 'input',
                inputOp: 'event_broadcast_menu',
                inputName: 'BROADCAST_OPTION'
            }
        ]
    },
    'wait:elapsed:from:': {
        opcode: 'control_wait',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_positive_number',
                inputName: 'DURATION'
            }
        ]
    },
    'doRepeat': {
        opcode: 'control_repeat',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_whole_number',
                inputName: 'TIMES'
            },
            {
                type: 'input',
                inputName: 'SUBSTACK'
            }
        ]
    },
    'doForever': {
        opcode: 'control_forever',
        argMap: [
            {
                type: 'input',
                inputName: 'SUBSTACK'
            }
        ]
    },
    'doIf': {
        opcode: 'control_if',
        argMap: [
            {
                type: 'input',
                inputName: 'CONDITION'
            },
            {
                type: 'input',
                inputName: 'SUBSTACK'
            }
        ]
    },
    'doIfElse': {
        opcode: 'control_if_else',
        argMap: [
            {
                type: 'input',
                inputName: 'CONDITION'
            },
            {
                type: 'input',
                inputName: 'SUBSTACK'
            },
            {
                type: 'input',
                inputName: 'SUBSTACK2'
            }
        ]
    },
    'doWaitUntil': {
        opcode: 'control_wait_until',
        argMap: [
            {
                type: 'input',
                inputName: 'CONDITION'
            }
        ]
    },
    'doUntil': {
        opcode: 'control_repeat_until',
        argMap: [
            {
                type: 'input',
                inputName: 'CONDITION'
            },
            {
                type: 'input',
                inputName: 'SUBSTACK'
            }
        ]
    },
    'stopScripts': {
        opcode: 'control_stop',
        argMap: [
            {
                type: 'field',
                fieldName: 'STOP_OPTION'
            }
        ]
    },
    'whenCloned': {
        opcode: 'control_start_as_clone',
        argMap: [
        ]
    },
    'createCloneOf': {
        opcode: 'control_create_clone_of',
        argMap: [
            {
                type: 'input',
                inputOp: 'control_create_clone_of_menu',
                inputName: 'CLONE_OPTION'
            }
        ]
    },
    'deleteClone': {
        opcode: 'control_delete_this_clone',
        argMap: [
        ]
    },
    '+': {
        opcode: 'operator_add',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM1'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM2'
            }
        ]
    },
    '-': {
        opcode: 'operator_subtract',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM1'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM2'
            }
        ]
    },
    '*': {
        opcode: 'operator_multiply',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM1'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM2'
            }
        ]
    },
    '/': {
        opcode: 'operator_divide',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM1'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM2'
            }
        ]
    },
    'randomFrom:to:': {
        opcode: 'operator_random',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'FROM'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'TO'
            }
        ]
    },
    '<': {
        opcode: 'operator_lt',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'OPERAND1'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'OPERAND2'
            }
        ]
    },
    '=': {
        opcode: 'operator_equals',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'OPERAND1'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'OPERAND2'
            }
        ]
    },
    '>': {
        opcode: 'operator_gt',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'OPERAND1'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'OPERAND2'
            }
        ]
    },
    '&': {
        opcode: 'operator_and',
        argMap: [
            {
                type: 'input',
                inputName: 'OPERAND1'
            },
            {
                type: 'input',
                inputName: 'OPERAND2'
            }
        ]
    },
    '|': {
        opcode: 'operator_or',
        argMap: [
            {
                type: 'input',
                inputName: 'OPERAND1'
            },
            {
                type: 'input',
                inputName: 'OPERAND2'
            }
        ]
    },
    'not': {
        opcode: 'operator_not',
        argMap: [
            {
                type: 'input',
                inputName: 'OPERAND'
            }
        ]
    },
    'concatenate:with:': {
        opcode: 'operator_join',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'STRING1'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'STRING2'
            }
        ]
    },
    'letter:of:': {
        opcode: 'operator_letter_of',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_whole_number',
                inputName: 'LETTER'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'STRING'
            }
        ]
    },
    'stringLength:': {
        opcode: 'operator_length',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'STRING'
            }
        ]
    },
    '%': {
        opcode: 'operator_mod',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM1'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM2'
            }
        ]
    },
    'rounded': {
        opcode: 'operator_round',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM'
            }
        ]
    },
    'computeFunction:of:': {
        opcode: 'operator_mathop',
        argMap: [
            {
                type: 'field',
                fieldName: 'OPERATOR'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'NUM'
            }
        ]
    },
    'readVariable': {
        opcode: 'data_variable',
        argMap: [
            {
                type: 'field',
                fieldName: 'VARIABLE'
            }
        ]
    },
    'setVar:to:': {
        opcode: 'data_setvariableto',
        argMap: [
            {
                type: 'field',
                fieldName: 'VARIABLE'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'VALUE'
            }
        ]
    },
    'changeVar:by:': {
        opcode: 'data_changevariableby',
        argMap: [
            {
                type: 'field',
                fieldName: 'VARIABLE'
            },
            {
                type: 'input',
                inputOp: 'math_number',
                inputName: 'VALUE'
            }
        ]
    },
    'showVariable:': {
        opcode: 'data_showvariable',
        argMap: [
            {
                type: 'field',
                fieldName: 'VARIABLE'
            }
        ]
    },
    'hideVariable:': {
        opcode: 'data_hidevariable',
        argMap: [
            {
                type: 'field',
                fieldName: 'VARIABLE'
            }
        ]
    },
    'contentsOfList:': {
        opcode: 'data_list',
        argMap: [
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'append:toList:': {
        opcode: 'data_addtolist',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'ITEM'
            },
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'deleteLine:ofList:': {
        opcode: 'data_deleteoflist',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_integer',
                inputName: 'INDEX'
            },
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'insert:at:ofList:': {
        opcode: 'data_insertatlist',
        argMap: [
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'ITEM'
            },
            {
                type: 'input',
                inputOp: 'math_integer',
                inputName: 'INDEX'
            },
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'setLine:ofList:to:': {
        opcode: 'data_replaceitemoflist',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_integer',
                inputName: 'INDEX'
            },
            {
                type: 'field',
                fieldName: 'LIST'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'ITEM'
            }
        ]
    },
    'getLine:ofList:': {
        opcode: 'data_itemoflist',
        argMap: [
            {
                type: 'input',
                inputOp: 'math_integer',
                inputName: 'INDEX'
            },
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'lineCountOfList:': {
        opcode: 'data_lengthoflist',
        argMap: [
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'list:contains:': {
        opcode: 'data_listcontainsitem',
        argMap: [
            {
                type: 'field',
                fieldName: 'LIST'
            },
            {
                type: 'input',
                inputOp: 'text',
                inputName: 'ITEM'
            }
        ]
    },
    'showList:': {
        opcode: 'data_showlist',
        argMap: [
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'hideList:': {
        opcode: 'data_hidelist',
        argMap: [
            {
                type: 'field',
                fieldName: 'LIST'
            }
        ]
    },
    'procDef': {
        opcode: 'procedures_defnoreturn',
        argMap: []
    },
    'getParam': {
        opcode: 'procedures_param',
        argMap: []
    },
    'call': {
        opcode: 'procedures_callnoreturn',
        argMap: []
    }
};
module.exports = specMap;
