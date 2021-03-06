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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const common_1 = require("@nestjs/common");
const areas_service_1 = require("../areas/areas.service");
const webhooks_service_1 = require("./webhooks.service");
let WebhooksController = class WebhooksController {
    constructor(webhooksServices, areasServices) {
        this.webhooksServices = webhooksServices;
        this.areasServices = areasServices;
    }
    async actionGithub(req, body) {
        let params = JSON.stringify({ url: body.repository.html_url, secret: req.headers["x-hub-signature"] });
        this.areasServices.callReaction(params);
    }
    async actionGitlab(body) {
        const params = JSON.stringify({
            project_id: body.project_id,
        });
        this.areasServices.callReaction(params);
    }
    async actionArea(body) {
        var params;
        console.log("HELLO");
        if (body.action_type === "Area deleted") {
            console.log("received");
            params = JSON.stringify({ action_type: body.action_type, user_id: body.userId, id: body.id });
        }
        else {
            params = JSON.stringify({ action_type: body.action_type, user_id: body.userId });
        }
        console.log(params);
        this.areasServices.callReaction(params);
    }
};
__decorate([
    (0, common_1.Post)('Github'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "actionGithub", null);
__decorate([
    (0, common_1.Post)('Gitlab'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "actionGitlab", null);
__decorate([
    (0, common_1.Post)('Area'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "actionArea", null);
WebhooksController = __decorate([
    (0, common_1.Controller)('webhooks'),
    __metadata("design:paramtypes", [webhooks_service_1.WebhooksService,
        areas_service_1.AreasService])
], WebhooksController);
exports.WebhooksController = WebhooksController;
//# sourceMappingURL=webhooks.controller.js.map