"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addon = void 0;
const util = __importStar(require("./util"));
const status = __importStar(require("./status"));
const sh = __importStar(require("shelljs"));
class Addon {
    constructor(addon) {
        this.addon = addon;
    }
    enable() {
        sh.echo(new Date().toISOString());
        sh.echo("Start enabling " + this.addon);
        status.waitForReadyState();
        if (this.addon === "kubeflow") {
            sh.echo(new Date().toISOString());
            sh.echo("kubeflow is no longer supported as a addon");
        }
        else {
            util.executeCommand(false, "sudo microk8s enable " + this.addon);
            status.silentWaitForStorageToBeReady(this.addon);
            status.silentwaitForRegistryPvClaim(this.addon);
        }
        status.waitForReadyState();
    }
}
exports.Addon = Addon;
