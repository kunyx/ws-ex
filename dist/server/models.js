'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var PosKijelzo = (function () {
    function PosKijelzo(payload) {
        var data = JSON.parse(payload);
        if (!data.mac_cim || !data.kijelez) {
            throw new Error('Invalid message payload received: ' + payload);
        }
        this.data = data;
    }
    Object.defineProperty(PosKijelzo.prototype, "mac_cim", {
        get: function () {
            return this.data.mac_cim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosKijelzo.prototype, "kijelez", {
        get: function () {
            return this.data.kijelez;
        },
        enumerable: true,
        configurable: true
    });
    return PosKijelzo;
}());
exports.PosKijelzo = PosKijelzo;
