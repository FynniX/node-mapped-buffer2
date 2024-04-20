import { Token, DFA, Lexer, LexerATNSimulator, PredictionContextCache, ATNDeserializer } from 'antlr4';

class SchemaLexer extends Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator(this, SchemaLexer._ATN, SchemaLexer.DecisionsToDFA, new PredictionContextCache());
    }
    get grammarFileName() {
        return 'Schema.g4';
    }
    get literalNames() {
        return SchemaLexer.literalNames;
    }
    get symbolicNames() {
        return SchemaLexer.symbolicNames;
    }
    get ruleNames() {
        return SchemaLexer.ruleNames;
    }
    get serializedATN() {
        return SchemaLexer._serializedATN;
    }
    get channelNames() {
        return SchemaLexer.channelNames;
    }
    get modeNames() {
        return SchemaLexer.modeNames;
    }
    static get _ATN() {
        if (!SchemaLexer.__ATN) {
            SchemaLexer.__ATN = new ATNDeserializer().deserialize(SchemaLexer._serializedATN);
        }
        return SchemaLexer.__ATN;
    }
}
SchemaLexer.T__0 = 1;
SchemaLexer.T__1 = 2;
SchemaLexer.T__2 = 3;
SchemaLexer.T__3 = 4;
SchemaLexer.T__4 = 5;
SchemaLexer.T__5 = 6;
SchemaLexer.T__6 = 7;
SchemaLexer.T__7 = 8;
SchemaLexer.T__8 = 9;
SchemaLexer.T__9 = 10;
SchemaLexer.T__10 = 11;
SchemaLexer.T__11 = 12;
SchemaLexer.T__12 = 13;
SchemaLexer.T__13 = 14;
SchemaLexer.T__14 = 15;
SchemaLexer.T__15 = 16;
SchemaLexer.T__16 = 17;
SchemaLexer.T__17 = 18;
SchemaLexer.T__18 = 19;
SchemaLexer.T__19 = 20;
SchemaLexer.T__20 = 21;
SchemaLexer.SEMICOLON = 22;
SchemaLexer.CURVED_BRACKET_OPEN = 23;
SchemaLexer.CURVED_BRACKET_CLOSE = 24;
SchemaLexer.BRACKET_OPEN = 25;
SchemaLexer.BRACKET_CLOSE = 26;
SchemaLexer.NAME = 27;
SchemaLexer.NUMBER = 28;
SchemaLexer.NEWLINE = 29;
SchemaLexer.WHITESPACE = 30;
SchemaLexer.EOF = Token.EOF;
SchemaLexer.channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];
SchemaLexer.literalNames = [
    null,
    "'struct'",
    "'char'",
    "'char16_t'",
    "'char32_t'",
    "'wchar_t'",
    "'unsigned'",
    "'signed'",
    "'short'",
    "'int'",
    "'long'",
    "'int8_t'",
    "'int16_t'",
    "'int32_t'",
    "'int64_t'",
    "'uint8_t'",
    "'uint16_t'",
    "'uint32_t'",
    "'uint64_t'",
    "'float'",
    "'double'",
    "'bool'",
    "';'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    null,
    null,
    null,
    "' '"
];
SchemaLexer.symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'SEMICOLON',
    'CURVED_BRACKET_OPEN',
    'CURVED_BRACKET_CLOSE',
    'BRACKET_OPEN',
    'BRACKET_CLOSE',
    'NAME',
    'NUMBER',
    'NEWLINE',
    'WHITESPACE'
];
SchemaLexer.modeNames = ['DEFAULT_MODE'];
SchemaLexer.ruleNames = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
    'T__4',
    'T__5',
    'T__6',
    'T__7',
    'T__8',
    'T__9',
    'T__10',
    'T__11',
    'T__12',
    'T__13',
    'T__14',
    'T__15',
    'T__16',
    'T__17',
    'T__18',
    'T__19',
    'T__20',
    'SEMICOLON',
    'CURVED_BRACKET_OPEN',
    'CURVED_BRACKET_CLOSE',
    'BRACKET_OPEN',
    'BRACKET_CLOSE',
    'NAME',
    'NUMBER',
    'NEWLINE',
    'WHITESPACE'
];
SchemaLexer._serializedATN = [
    4, 0, 30, 245, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7,
    7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2,
    16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24,
    7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,
    5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9,
    1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1,
    13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1,
    17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19,
    1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 4,
    26, 226, 8, 26, 11, 26, 12, 26, 227, 1, 27, 4, 27, 231, 8, 27, 11, 27, 12, 27, 232, 1, 28, 4, 28, 236, 8, 28, 11,
    28, 12, 28, 237, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 0, 0, 30, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15,
    8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22,
    45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 1, 0, 3, 2, 0, 65, 90, 97, 122, 1, 0, 48, 57, 2, 0,
    10, 10, 13, 13, 247, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0,
    11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0,
    23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0,
    35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 45, 1, 0, 0, 0, 0,
    47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0,
    59, 1, 0, 0, 0, 1, 61, 1, 0, 0, 0, 3, 68, 1, 0, 0, 0, 5, 73, 1, 0, 0, 0, 7, 82, 1, 0, 0, 0, 9, 91, 1, 0, 0, 0, 11,
    99, 1, 0, 0, 0, 13, 108, 1, 0, 0, 0, 15, 115, 1, 0, 0, 0, 17, 121, 1, 0, 0, 0, 19, 125, 1, 0, 0, 0, 21, 130, 1, 0,
    0, 0, 23, 137, 1, 0, 0, 0, 25, 145, 1, 0, 0, 0, 27, 153, 1, 0, 0, 0, 29, 161, 1, 0, 0, 0, 31, 169, 1, 0, 0, 0, 33,
    178, 1, 0, 0, 0, 35, 187, 1, 0, 0, 0, 37, 196, 1, 0, 0, 0, 39, 202, 1, 0, 0, 0, 41, 209, 1, 0, 0, 0, 43, 214, 1, 0,
    0, 0, 45, 216, 1, 0, 0, 0, 47, 218, 1, 0, 0, 0, 49, 220, 1, 0, 0, 0, 51, 222, 1, 0, 0, 0, 53, 225, 1, 0, 0, 0, 55,
    230, 1, 0, 0, 0, 57, 235, 1, 0, 0, 0, 59, 241, 1, 0, 0, 0, 61, 62, 5, 115, 0, 0, 62, 63, 5, 116, 0, 0, 63, 64, 5,
    114, 0, 0, 64, 65, 5, 117, 0, 0, 65, 66, 5, 99, 0, 0, 66, 67, 5, 116, 0, 0, 67, 2, 1, 0, 0, 0, 68, 69, 5, 99, 0, 0,
    69, 70, 5, 104, 0, 0, 70, 71, 5, 97, 0, 0, 71, 72, 5, 114, 0, 0, 72, 4, 1, 0, 0, 0, 73, 74, 5, 99, 0, 0, 74, 75, 5,
    104, 0, 0, 75, 76, 5, 97, 0, 0, 76, 77, 5, 114, 0, 0, 77, 78, 5, 49, 0, 0, 78, 79, 5, 54, 0, 0, 79, 80, 5, 95, 0, 0,
    80, 81, 5, 116, 0, 0, 81, 6, 1, 0, 0, 0, 82, 83, 5, 99, 0, 0, 83, 84, 5, 104, 0, 0, 84, 85, 5, 97, 0, 0, 85, 86, 5,
    114, 0, 0, 86, 87, 5, 51, 0, 0, 87, 88, 5, 50, 0, 0, 88, 89, 5, 95, 0, 0, 89, 90, 5, 116, 0, 0, 90, 8, 1, 0, 0, 0,
    91, 92, 5, 119, 0, 0, 92, 93, 5, 99, 0, 0, 93, 94, 5, 104, 0, 0, 94, 95, 5, 97, 0, 0, 95, 96, 5, 114, 0, 0, 96, 97,
    5, 95, 0, 0, 97, 98, 5, 116, 0, 0, 98, 10, 1, 0, 0, 0, 99, 100, 5, 117, 0, 0, 100, 101, 5, 110, 0, 0, 101, 102, 5,
    115, 0, 0, 102, 103, 5, 105, 0, 0, 103, 104, 5, 103, 0, 0, 104, 105, 5, 110, 0, 0, 105, 106, 5, 101, 0, 0, 106, 107,
    5, 100, 0, 0, 107, 12, 1, 0, 0, 0, 108, 109, 5, 115, 0, 0, 109, 110, 5, 105, 0, 0, 110, 111, 5, 103, 0, 0, 111, 112,
    5, 110, 0, 0, 112, 113, 5, 101, 0, 0, 113, 114, 5, 100, 0, 0, 114, 14, 1, 0, 0, 0, 115, 116, 5, 115, 0, 0, 116, 117,
    5, 104, 0, 0, 117, 118, 5, 111, 0, 0, 118, 119, 5, 114, 0, 0, 119, 120, 5, 116, 0, 0, 120, 16, 1, 0, 0, 0, 121, 122,
    5, 105, 0, 0, 122, 123, 5, 110, 0, 0, 123, 124, 5, 116, 0, 0, 124, 18, 1, 0, 0, 0, 125, 126, 5, 108, 0, 0, 126, 127,
    5, 111, 0, 0, 127, 128, 5, 110, 0, 0, 128, 129, 5, 103, 0, 0, 129, 20, 1, 0, 0, 0, 130, 131, 5, 105, 0, 0, 131, 132,
    5, 110, 0, 0, 132, 133, 5, 116, 0, 0, 133, 134, 5, 56, 0, 0, 134, 135, 5, 95, 0, 0, 135, 136, 5, 116, 0, 0, 136, 22,
    1, 0, 0, 0, 137, 138, 5, 105, 0, 0, 138, 139, 5, 110, 0, 0, 139, 140, 5, 116, 0, 0, 140, 141, 5, 49, 0, 0, 141, 142,
    5, 54, 0, 0, 142, 143, 5, 95, 0, 0, 143, 144, 5, 116, 0, 0, 144, 24, 1, 0, 0, 0, 145, 146, 5, 105, 0, 0, 146, 147,
    5, 110, 0, 0, 147, 148, 5, 116, 0, 0, 148, 149, 5, 51, 0, 0, 149, 150, 5, 50, 0, 0, 150, 151, 5, 95, 0, 0, 151, 152,
    5, 116, 0, 0, 152, 26, 1, 0, 0, 0, 153, 154, 5, 105, 0, 0, 154, 155, 5, 110, 0, 0, 155, 156, 5, 116, 0, 0, 156, 157,
    5, 54, 0, 0, 157, 158, 5, 52, 0, 0, 158, 159, 5, 95, 0, 0, 159, 160, 5, 116, 0, 0, 160, 28, 1, 0, 0, 0, 161, 162, 5,
    117, 0, 0, 162, 163, 5, 105, 0, 0, 163, 164, 5, 110, 0, 0, 164, 165, 5, 116, 0, 0, 165, 166, 5, 56, 0, 0, 166, 167,
    5, 95, 0, 0, 167, 168, 5, 116, 0, 0, 168, 30, 1, 0, 0, 0, 169, 170, 5, 117, 0, 0, 170, 171, 5, 105, 0, 0, 171, 172,
    5, 110, 0, 0, 172, 173, 5, 116, 0, 0, 173, 174, 5, 49, 0, 0, 174, 175, 5, 54, 0, 0, 175, 176, 5, 95, 0, 0, 176, 177,
    5, 116, 0, 0, 177, 32, 1, 0, 0, 0, 178, 179, 5, 117, 0, 0, 179, 180, 5, 105, 0, 0, 180, 181, 5, 110, 0, 0, 181, 182,
    5, 116, 0, 0, 182, 183, 5, 51, 0, 0, 183, 184, 5, 50, 0, 0, 184, 185, 5, 95, 0, 0, 185, 186, 5, 116, 0, 0, 186, 34,
    1, 0, 0, 0, 187, 188, 5, 117, 0, 0, 188, 189, 5, 105, 0, 0, 189, 190, 5, 110, 0, 0, 190, 191, 5, 116, 0, 0, 191,
    192, 5, 54, 0, 0, 192, 193, 5, 52, 0, 0, 193, 194, 5, 95, 0, 0, 194, 195, 5, 116, 0, 0, 195, 36, 1, 0, 0, 0, 196,
    197, 5, 102, 0, 0, 197, 198, 5, 108, 0, 0, 198, 199, 5, 111, 0, 0, 199, 200, 5, 97, 0, 0, 200, 201, 5, 116, 0, 0,
    201, 38, 1, 0, 0, 0, 202, 203, 5, 100, 0, 0, 203, 204, 5, 111, 0, 0, 204, 205, 5, 117, 0, 0, 205, 206, 5, 98, 0, 0,
    206, 207, 5, 108, 0, 0, 207, 208, 5, 101, 0, 0, 208, 40, 1, 0, 0, 0, 209, 210, 5, 98, 0, 0, 210, 211, 5, 111, 0, 0,
    211, 212, 5, 111, 0, 0, 212, 213, 5, 108, 0, 0, 213, 42, 1, 0, 0, 0, 214, 215, 5, 59, 0, 0, 215, 44, 1, 0, 0, 0,
    216, 217, 5, 123, 0, 0, 217, 46, 1, 0, 0, 0, 218, 219, 5, 125, 0, 0, 219, 48, 1, 0, 0, 0, 220, 221, 5, 91, 0, 0,
    221, 50, 1, 0, 0, 0, 222, 223, 5, 93, 0, 0, 223, 52, 1, 0, 0, 0, 224, 226, 7, 0, 0, 0, 225, 224, 1, 0, 0, 0, 226,
    227, 1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 54, 1, 0, 0, 0, 229, 231, 7, 1, 0, 0, 230, 229, 1,
    0, 0, 0, 231, 232, 1, 0, 0, 0, 232, 230, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 56, 1, 0, 0, 0, 234, 236, 7, 2, 0,
    0, 235, 234, 1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 235, 1, 0, 0, 0, 237, 238, 1, 0, 0, 0, 238, 239, 1, 0, 0, 0,
    239, 240, 6, 28, 0, 0, 240, 58, 1, 0, 0, 0, 241, 242, 5, 32, 0, 0, 242, 243, 1, 0, 0, 0, 243, 244, 6, 29, 0, 0, 244,
    60, 1, 0, 0, 0, 4, 0, 227, 232, 237, 1, 6, 0, 0
];
SchemaLexer.DecisionsToDFA = SchemaLexer._ATN.decisionToState.map((ds, index) => new DFA(ds, index));

export { SchemaLexer as default };
