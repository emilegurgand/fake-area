"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthController = void 0;
const common_1 = require("@nestjs/common");
const oauth_dto_1 = require("./oauth.dto");
const oauth_service_1 = require("./oauth.service");
let OauthController = class OauthController {
    constructor(oauthService) {
        this.oauthService = oauthService;
    }
    async getAuthLink(body) {
        const service = await this.oauthService.getLink(body.name);
        return service;
    }
    async getToken(body) {
        return this.oauthService.getToken(body);
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], OauthController.prototype, "getAuthLink", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [oauth_dto_1.TokenCreationDto]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], OauthController.prototype, "getToken", null);
OauthController = __decorate([
    (0, common_1.Controller)('oauth'),
    __metadata("design:paramtypes", [oauth_service_1.OauthService])
], OauthController);
exports.OauthController = OauthController;
//# sourceMappingURL=oauth.controller.js.map