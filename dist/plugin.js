var capacitorPrivacyScreen = (function (exports, core) {
    'use strict';

    const SpeechRecognition$1 = core.registerPlugin('SpeechRecognition', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SpeechRecognitionWeb()),
    });

    class SpeechRecognitionWeb extends core.WebPlugin {
        available() {
            throw this.unimplemented('Method not implemented on web.');
        }
        start(_options) {
            throw this.unimplemented('Method not implemented on web.');
        }
        stop() {
            throw this.unimplemented('Method not implemented on web.');
        }
        getSupportedLanguages() {
            throw this.unimplemented('Method not implemented on web.');
        }
        hasPermission() {
            throw this.unimplemented('Method not implemented on web.');
        }
        isListening() {
            throw this.unimplemented('Method not implemented on web.');
        }
        requestPermission() {
            throw this.unimplemented('Method not implemented on web.');
        }
        checkPermissions() {
            throw this.unimplemented('Method not implemented on web.');
        }
        requestPermissions() {
            throw this.unimplemented('Method not implemented on web.');
        }
    }
    const SpeechRecognition = new SpeechRecognitionWeb();

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SpeechRecognitionWeb: SpeechRecognitionWeb,
        SpeechRecognition: SpeechRecognition
    });

    exports.SpeechRecognition = SpeechRecognition$1;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
