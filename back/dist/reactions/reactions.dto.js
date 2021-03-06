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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsReactionDto = exports.DiscordMsgReactionDto = exports.MailReactionDto = void 0;
const class_validator_1 = require("class-validator");
class MailReactionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MailReactionDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MailReactionDto.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MailReactionDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MailReactionDto.prototype, "body", void 0);
exports.MailReactionDto = MailReactionDto;
class DiscordMsgReactionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMsgReactionDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMsgReactionDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMsgReactionDto.prototype, "hookusername", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DiscordMsgReactionDto.prototype, "embed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMsgReactionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMsgReactionDto.prototype, "fieldname", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DiscordMsgReactionDto.prototype, "fielddescription", void 0);
exports.DiscordMsgReactionDto = DiscordMsgReactionDto;
class SmsReactionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SmsReactionDto.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SmsReactionDto.prototype, "message", void 0);
exports.SmsReactionDto = SmsReactionDto;
//# sourceMappingURL=reactions.dto.js.map