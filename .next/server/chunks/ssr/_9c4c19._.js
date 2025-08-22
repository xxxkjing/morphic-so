module.exports = {

"[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AIStream": ()=>AIStream,
    "AWSBedrockAnthropicMessagesStream": ()=>AWSBedrockAnthropicMessagesStream,
    "AWSBedrockAnthropicStream": ()=>AWSBedrockAnthropicStream,
    "AWSBedrockCohereStream": ()=>AWSBedrockCohereStream,
    "AWSBedrockLlama2Stream": ()=>AWSBedrockLlama2Stream,
    "AWSBedrockStream": ()=>AWSBedrockStream,
    "AnthropicStream": ()=>AnthropicStream,
    "AssistantResponse": ()=>AssistantResponse,
    "CohereStream": ()=>CohereStream,
    "EmbedManyResult": ()=>EmbedManyResult,
    "EmbedResult": ()=>EmbedResult,
    "GenerateObjectResult": ()=>GenerateObjectResult,
    "GenerateTextResult": ()=>GenerateTextResult,
    "GoogleGenerativeAIStream": ()=>GoogleGenerativeAIStream,
    "HuggingFaceStream": ()=>HuggingFaceStream,
    "InkeepStream": ()=>InkeepStream,
    "InvalidMessageRoleError": ()=>InvalidMessageRoleError,
    "InvalidModelIdError": ()=>InvalidModelIdError,
    "LangChainAdapter": ()=>langchain_adapter_exports,
    "LangChainStream": ()=>LangChainStream,
    "MistralStream": ()=>MistralStream,
    "NoSuchModelError": ()=>NoSuchModelError,
    "NoSuchProviderError": ()=>NoSuchProviderError,
    "OpenAIStream": ()=>OpenAIStream,
    "ReplicateStream": ()=>ReplicateStream,
    "StreamData": ()=>StreamData,
    "StreamObjectResult": ()=>StreamObjectResult,
    "StreamTextResult": ()=>StreamTextResult,
    "StreamingTextResponse": ()=>StreamingTextResponse,
    "convertDataContentToBase64String": ()=>convertDataContentToBase64String,
    "convertDataContentToUint8Array": ()=>convertDataContentToUint8Array,
    "convertToCoreMessages": ()=>convertToCoreMessages,
    "cosineSimilarity": ()=>cosineSimilarity,
    "createCallbacksTransformer": ()=>createCallbacksTransformer,
    "createEventStreamTransformer": ()=>createEventStreamTransformer,
    "createStreamDataTransformer": ()=>createStreamDataTransformer,
    "embed": ()=>embed,
    "embedMany": ()=>embedMany,
    "experimental_AssistantResponse": ()=>experimental_AssistantResponse,
    "experimental_StreamData": ()=>experimental_StreamData,
    "experimental_createModelRegistry": ()=>experimental_createModelRegistry,
    "experimental_createProviderRegistry": ()=>experimental_createProviderRegistry,
    "experimental_generateObject": ()=>experimental_generateObject,
    "experimental_generateText": ()=>experimental_generateText,
    "experimental_streamObject": ()=>experimental_streamObject,
    "experimental_streamText": ()=>experimental_streamText,
    "generateId": ()=>generateId2,
    "generateObject": ()=>generateObject,
    "generateText": ()=>generateText,
    "nanoid": ()=>nanoid,
    "readableFromAsyncIterable": ()=>readableFromAsyncIterable,
    "streamObject": ()=>streamObject,
    "streamText": ()=>streamText,
    "streamToResponse": ()=>streamToResponse,
    "tool": ()=>tool,
    "trimStartOfStreamHelper": ()=>trimStartOfStreamHelper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/node_modules/@ai-sdk/provider/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/ui-utils/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__commonjs__external__$40$opentelemetry$2f$api__ = __turbopack_external_require__("@opentelemetry/api", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/ui-utils/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
;
;
;
// core/util/delay.ts
async function delay(delayInMs) {
    return new Promise((resolve)=>setTimeout(resolve, delayInMs));
}
// core/util/retry-with-exponential-backoff.ts
var retryWithExponentialBackoff = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2 } = {})=>async (f)=>_retryWithExponentialBackoff(f, {
            maxRetries,
            delayInMs: initialDelayInMs,
            backoffFactor
        });
async function _retryWithExponentialBackoff(f, { maxRetries, delayInMs, backoffFactor }, errors = []) {
    try {
        return await f();
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(error)) {
            throw error;
        }
        if (maxRetries === 0) {
            throw error;
        }
        const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
        const newErrors = [
            ...errors,
            error
        ];
        const tryNumber = newErrors.length;
        if (tryNumber > maxRetries) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RetryError"]({
                message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
                reason: "maxRetriesExceeded",
                errors: newErrors
            });
        }
        if (error instanceof Error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"].isAPICallError(error) && error.isRetryable === true && tryNumber <= maxRetries) {
            await delay(delayInMs);
            return _retryWithExponentialBackoff(f, {
                maxRetries,
                delayInMs: backoffFactor * delayInMs,
                backoffFactor
            }, newErrors);
        }
        if (tryNumber === 1) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RetryError"]({
            message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
            reason: "errorNotRetryable",
            errors: newErrors
        });
    }
}
// core/embed/embed.ts
async function embed({ model, value, maxRetries, abortSignal, headers }) {
    var _a;
    const retry = retryWithExponentialBackoff({
        maxRetries
    });
    const modelResponse = await retry(()=>model.doEmbed({
            values: [
                value
            ],
            abortSignal,
            headers
        }));
    return new EmbedResult({
        value,
        embedding: modelResponse.embeddings[0],
        usage: (_a = modelResponse.usage) != null ? _a : {
            tokens: NaN
        },
        rawResponse: modelResponse.rawResponse
    });
}
var EmbedResult = class {
    constructor(options){
        this.value = options.value;
        this.embedding = options.embedding;
        this.usage = options.usage;
        this.rawResponse = options.rawResponse;
    }
};
// core/util/split-array.ts
function splitArray(array, chunkSize) {
    if (chunkSize <= 0) {
        throw new Error("chunkSize must be greater than 0");
    }
    const result = [];
    for(let i = 0; i < array.length; i += chunkSize){
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}
// core/embed/embed-many.ts
async function embedMany({ model, values, maxRetries, abortSignal, headers }) {
    var _a, _b, _c;
    const retry = retryWithExponentialBackoff({
        maxRetries
    });
    const maxEmbeddingsPerCall = model.maxEmbeddingsPerCall;
    if (maxEmbeddingsPerCall == null) {
        const modelResponse = await retry(()=>model.doEmbed({
                values,
                abortSignal,
                headers
            }));
        return new EmbedManyResult({
            values,
            embeddings: modelResponse.embeddings,
            usage: (_a = modelResponse.usage) != null ? _a : {
                tokens: NaN
            }
        });
    }
    const valueChunks = splitArray(values, maxEmbeddingsPerCall);
    const embeddings = [];
    let tokens = 0;
    for (const chunk of valueChunks){
        const modelResponse = await retry(()=>model.doEmbed({
                values: chunk,
                abortSignal,
                headers
            }));
        embeddings.push(...modelResponse.embeddings);
        tokens += (_c = (_b = modelResponse.usage) == null ? void 0 : _b.tokens) != null ? _c : NaN;
    }
    return new EmbedManyResult({
        values,
        embeddings,
        usage: {
            tokens
        }
    });
}
var EmbedManyResult = class {
    constructor(options){
        this.values = options.values;
        this.embeddings = options.embeddings;
        this.usage = options.usage;
    }
};
;
;
// core/util/detect-image-mimetype.ts
var mimeTypeSignatures = [
    {
        mimeType: "image/gif",
        bytes: [
            71,
            73,
            70
        ]
    },
    {
        mimeType: "image/png",
        bytes: [
            137,
            80,
            78,
            71
        ]
    },
    {
        mimeType: "image/jpeg",
        bytes: [
            255,
            216
        ]
    },
    {
        mimeType: "image/webp",
        bytes: [
            82,
            73,
            70,
            70
        ]
    }
];
function detectImageMimeType(image) {
    for (const { bytes, mimeType } of mimeTypeSignatures){
        if (image.length >= bytes.length && bytes.every((byte, index)=>image[index] === byte)) {
            return mimeType;
        }
    }
    return void 0;
}
;
;
function convertDataContentToBase64String(content) {
    if (typeof content === "string") {
        return content;
    }
    if (content instanceof ArrayBuffer) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertUint8ArrayToBase64"])(new Uint8Array(content));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertUint8ArrayToBase64"])(content);
}
function convertDataContentToUint8Array(content) {
    if (content instanceof Uint8Array) {
        return content;
    }
    if (typeof content === "string") {
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBase64ToUint8Array"])(content);
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidDataContentError"]({
                message: "Invalid data content. Content string is not a base64-encoded image.",
                content,
                cause: error
            });
        }
    }
    if (content instanceof ArrayBuffer) {
        return new Uint8Array(content);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidDataContentError"]({
        content
    });
}
// core/prompt/invalid-message-role-error.ts
var InvalidMessageRoleError = class extends Error {
    constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }){
        super(message);
        this.name = "AI_InvalidMessageRoleError";
        this.role = role;
    }
    static isInvalidMessageRoleError(error) {
        return error instanceof Error && error.name === "AI_InvalidMessageRoleError" && typeof error.role === "string";
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            role: this.role
        };
    }
};
;
function convertToLanguageModelPrompt(prompt) {
    const languageModelMessages = [];
    if (prompt.system != null) {
        languageModelMessages.push({
            role: "system",
            content: prompt.system
        });
    }
    const promptType = prompt.type;
    switch(promptType){
        case "prompt":
            {
                languageModelMessages.push({
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: prompt.prompt
                        }
                    ]
                });
                break;
            }
        case "messages":
            {
                languageModelMessages.push(...prompt.messages.map(convertToLanguageModelMessage));
                break;
            }
        default:
            {
                const _exhaustiveCheck = promptType;
                throw new Error(`Unsupported prompt type: ${_exhaustiveCheck}`);
            }
    }
    return languageModelMessages;
}
function convertToLanguageModelMessage(message) {
    const role = message.role;
    switch(role){
        case "system":
            {
                return {
                    role: "system",
                    content: message.content
                };
            }
        case "user":
            {
                if (typeof message.content === "string") {
                    return {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: message.content
                            }
                        ]
                    };
                }
                return {
                    role: "user",
                    content: message.content.map((part)=>{
                        var _a;
                        switch(part.type){
                            case "text":
                                {
                                    return part;
                                }
                            case "image":
                                {
                                    if (part.image instanceof URL) {
                                        return {
                                            type: "image",
                                            image: part.image,
                                            mimeType: part.mimeType
                                        };
                                    }
                                    if (typeof part.image === "string") {
                                        try {
                                            const url = new URL(part.image);
                                            switch(url.protocol){
                                                case "http:":
                                                case "https:":
                                                    {
                                                        return {
                                                            type: "image",
                                                            image: url,
                                                            mimeType: part.mimeType
                                                        };
                                                    }
                                                case "data:":
                                                    {
                                                        try {
                                                            const [header, base64Content] = part.image.split(",");
                                                            const mimeType = header.split(";")[0].split(":")[1];
                                                            if (mimeType == null || base64Content == null) {
                                                                throw new Error("Invalid data URL format");
                                                            }
                                                            return {
                                                                type: "image",
                                                                image: convertDataContentToUint8Array(base64Content),
                                                                mimeType
                                                            };
                                                        } catch (error) {
                                                            throw new Error(`Error processing data URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(message)}`);
                                                        }
                                                    }
                                                default:
                                                    {
                                                        throw new Error(`Unsupported URL protocol: ${url.protocol}`);
                                                    }
                                            }
                                        } catch (_ignored) {}
                                    }
                                    const imageUint8 = convertDataContentToUint8Array(part.image);
                                    return {
                                        type: "image",
                                        image: imageUint8,
                                        mimeType: (_a = part.mimeType) != null ? _a : detectImageMimeType(imageUint8)
                                    };
                                }
                        }
                    })
                };
            }
        case "assistant":
            {
                if (typeof message.content === "string") {
                    return {
                        role: "assistant",
                        content: [
                            {
                                type: "text",
                                text: message.content
                            }
                        ]
                    };
                }
                return {
                    role: "assistant",
                    content: message.content.filter(// remove empty text parts:
                    (part)=>part.type !== "text" || part.text !== "")
                };
            }
        case "tool":
            {
                return message;
            }
        default:
            {
                const _exhaustiveCheck = role;
                throw new InvalidMessageRoleError({
                    role: _exhaustiveCheck
                });
            }
    }
}
;
function getValidatedPrompt(prompt) {
    if (prompt.prompt == null && prompt.messages == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
            prompt,
            message: "prompt or messages must be defined"
        });
    }
    if (prompt.prompt != null && prompt.messages != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
            prompt,
            message: "prompt and messages cannot be defined at the same time"
        });
    }
    if (prompt.messages != null) {
        for (const message of prompt.messages){
            if (message.role === "system" && typeof message.content !== "string") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
                    prompt,
                    message: "system message content must be a string"
                });
            }
        }
    }
    return prompt.prompt != null ? {
        type: "prompt",
        prompt: prompt.prompt,
        messages: void 0,
        system: prompt.system
    } : {
        type: "messages",
        prompt: void 0,
        messages: prompt.messages,
        // only possible case bc of checks above
        system: prompt.system
    };
}
;
function prepareCallSettings({ maxTokens, temperature, topP, presencePenalty, frequencyPenalty, seed, maxRetries }) {
    if (maxTokens != null) {
        if (!Number.isInteger(maxTokens)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxTokens",
                value: maxTokens,
                message: "maxTokens must be an integer"
            });
        }
        if (maxTokens < 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxTokens",
                value: maxTokens,
                message: "maxTokens must be >= 1"
            });
        }
    }
    if (temperature != null) {
        if (typeof temperature !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "temperature",
                value: temperature,
                message: "temperature must be a number"
            });
        }
    }
    if (topP != null) {
        if (typeof topP !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "topP",
                value: topP,
                message: "topP must be a number"
            });
        }
    }
    if (presencePenalty != null) {
        if (typeof presencePenalty !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "presencePenalty",
                value: presencePenalty,
                message: "presencePenalty must be a number"
            });
        }
    }
    if (frequencyPenalty != null) {
        if (typeof frequencyPenalty !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "frequencyPenalty",
                value: frequencyPenalty,
                message: "frequencyPenalty must be a number"
            });
        }
    }
    if (seed != null) {
        if (!Number.isInteger(seed)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "seed",
                value: seed,
                message: "seed must be an integer"
            });
        }
    }
    if (maxRetries != null) {
        if (!Number.isInteger(maxRetries)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxRetries",
                value: maxRetries,
                message: "maxRetries must be an integer"
            });
        }
        if (maxRetries < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxRetries",
                value: maxRetries,
                message: "maxRetries must be >= 0"
            });
        }
    }
    return {
        maxTokens,
        temperature: temperature != null ? temperature : 0,
        topP,
        presencePenalty,
        frequencyPenalty,
        seed,
        maxRetries: maxRetries != null ? maxRetries : 2
    };
}
// core/types/token-usage.ts
function calculateCompletionTokenUsage(usage) {
    return {
        promptTokens: usage.promptTokens,
        completionTokens: usage.completionTokens,
        totalTokens: usage.promptTokens + usage.completionTokens
    };
}
;
function convertZodToJSONSchema(zodSchema) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(zodSchema);
}
// core/util/prepare-response-headers.ts
function prepareResponseHeaders(init, { contentType }) {
    var _a;
    const headers = new Headers((_a = init == null ? void 0 : init.headers) != null ? _a : {});
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", contentType);
    }
    return headers;
}
// core/generate-object/inject-json-schema-into-system.ts
var DEFAULT_SCHEMA_PREFIX = "JSON schema:";
var DEFAULT_SCHEMA_SUFFIX = "You MUST answer with a JSON object that matches the JSON schema above.";
function injectJsonSchemaIntoSystem({ system, schema, schemaPrefix = DEFAULT_SCHEMA_PREFIX, schemaSuffix = DEFAULT_SCHEMA_SUFFIX }) {
    return [
        system,
        system != null ? "" : null,
        // add a newline if system is not null
        schemaPrefix,
        JSON.stringify(schema),
        schemaSuffix
    ].filter((line)=>line != null).join("\n");
}
// core/generate-object/generate-object.ts
async function generateObject({ model, schema, mode, system, prompt, messages, maxRetries, abortSignal, headers, ...settings }) {
    var _a, _b;
    const retry = retryWithExponentialBackoff({
        maxRetries
    });
    const jsonSchema = convertZodToJSONSchema(schema);
    if (mode === "auto" || mode == null) {
        mode = model.defaultObjectGenerationMode;
    }
    let result;
    let finishReason;
    let usage;
    let warnings;
    let rawResponse;
    let logprobs;
    switch(mode){
        case "json":
            {
                const validatedPrompt = getValidatedPrompt({
                    system: injectJsonSchemaIntoSystem({
                        system,
                        schema: jsonSchema
                    }),
                    prompt,
                    messages
                });
                const generateResult = await retry(()=>{
                    return model.doGenerate({
                        mode: {
                            type: "object-json"
                        },
                        ...prepareCallSettings(settings),
                        inputFormat: validatedPrompt.type,
                        prompt: convertToLanguageModelPrompt(validatedPrompt),
                        abortSignal,
                        headers
                    });
                });
                if (generateResult.text === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoObjectGeneratedError"]();
                }
                result = generateResult.text;
                finishReason = generateResult.finishReason;
                usage = generateResult.usage;
                warnings = generateResult.warnings;
                rawResponse = generateResult.rawResponse;
                logprobs = generateResult.logprobs;
                break;
            }
        case "grammar":
            {
                const validatedPrompt = getValidatedPrompt({
                    system: injectJsonSchemaIntoSystem({
                        system,
                        schema: jsonSchema
                    }),
                    prompt,
                    messages
                });
                const generateResult = await retry(()=>model.doGenerate({
                        mode: {
                            type: "object-grammar",
                            schema: jsonSchema
                        },
                        ...prepareCallSettings(settings),
                        inputFormat: validatedPrompt.type,
                        prompt: convertToLanguageModelPrompt(validatedPrompt),
                        abortSignal
                    }));
                if (generateResult.text === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoObjectGeneratedError"]();
                }
                result = generateResult.text;
                finishReason = generateResult.finishReason;
                usage = generateResult.usage;
                warnings = generateResult.warnings;
                rawResponse = generateResult.rawResponse;
                logprobs = generateResult.logprobs;
                break;
            }
        case "tool":
            {
                const validatedPrompt = getValidatedPrompt({
                    system,
                    prompt,
                    messages
                });
                const generateResult = await retry(()=>model.doGenerate({
                        mode: {
                            type: "object-tool",
                            tool: {
                                type: "function",
                                name: "json",
                                description: "Respond with a JSON object.",
                                parameters: jsonSchema
                            }
                        },
                        ...prepareCallSettings(settings),
                        inputFormat: validatedPrompt.type,
                        prompt: convertToLanguageModelPrompt(validatedPrompt),
                        abortSignal
                    }));
                const functionArgs = (_b = (_a = generateResult.toolCalls) == null ? void 0 : _a[0]) == null ? void 0 : _b.args;
                if (functionArgs === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoObjectGeneratedError"]();
                }
                result = functionArgs;
                finishReason = generateResult.finishReason;
                usage = generateResult.usage;
                warnings = generateResult.warnings;
                rawResponse = generateResult.rawResponse;
                logprobs = generateResult.logprobs;
                break;
            }
        case void 0:
            {
                throw new Error("Model does not have a default object generation mode.");
            }
        default:
            {
                const _exhaustiveCheck = mode;
                throw new Error(`Unsupported mode: ${_exhaustiveCheck}`);
            }
    }
    const parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeParseJSON"])({
        text: result,
        schema
    });
    if (!parseResult.success) {
        throw parseResult.error;
    }
    return new GenerateObjectResult({
        object: parseResult.value,
        finishReason,
        usage: calculateCompletionTokenUsage(usage),
        warnings,
        rawResponse,
        logprobs
    });
}
var GenerateObjectResult = class {
    constructor(options){
        this.object = options.object;
        this.finishReason = options.finishReason;
        this.usage = options.usage;
        this.warnings = options.warnings;
        this.rawResponse = options.rawResponse;
        this.logprobs = options.logprobs;
    }
    /**
  Converts the object to a JSON response.
  The response will have a status code of 200 and a content type of `application/json; charset=utf-8`.
     */ toJsonResponse(init) {
        var _a;
        return new Response(JSON.stringify(this.object), {
            status: (_a = init == null ? void 0 : init.status) != null ? _a : 200,
            headers: prepareResponseHeaders(init, {
                contentType: "application/json; charset=utf-8"
            })
        });
    }
};
var experimental_generateObject = generateObject;
;
;
// core/util/async-iterable-stream.ts
function createAsyncIterableStream(source, transformer) {
    const transformedStream = source.pipeThrough(new TransformStream(transformer));
    transformedStream[Symbol.asyncIterator] = ()=>{
        const reader = transformedStream.getReader();
        return {
            async next () {
                const { done, value } = await reader.read();
                return done ? {
                    done: true,
                    value: void 0
                } : {
                    done: false,
                    value
                };
            }
        };
    };
    return transformedStream;
}
// core/generate-object/stream-object.ts
async function streamObject({ model, schema, mode, system, prompt, messages, maxRetries, abortSignal, headers, onFinish, ...settings }) {
    const retry = retryWithExponentialBackoff({
        maxRetries
    });
    const jsonSchema = convertZodToJSONSchema(schema);
    if (mode === "auto" || mode == null) {
        mode = model.defaultObjectGenerationMode;
    }
    let callOptions;
    let transformer;
    switch(mode){
        case "json":
            {
                const validatedPrompt = getValidatedPrompt({
                    system: injectJsonSchemaIntoSystem({
                        system,
                        schema: jsonSchema
                    }),
                    prompt,
                    messages
                });
                callOptions = {
                    mode: {
                        type: "object-json"
                    },
                    ...prepareCallSettings(settings),
                    inputFormat: validatedPrompt.type,
                    prompt: convertToLanguageModelPrompt(validatedPrompt),
                    abortSignal,
                    headers
                };
                transformer = {
                    transform: (chunk, controller)=>{
                        switch(chunk.type){
                            case "text-delta":
                                controller.enqueue(chunk.textDelta);
                                break;
                            case "finish":
                            case "error":
                                controller.enqueue(chunk);
                                break;
                        }
                    }
                };
                break;
            }
        case "grammar":
            {
                const validatedPrompt = getValidatedPrompt({
                    system: injectJsonSchemaIntoSystem({
                        system,
                        schema: jsonSchema
                    }),
                    prompt,
                    messages
                });
                callOptions = {
                    mode: {
                        type: "object-grammar",
                        schema: jsonSchema
                    },
                    ...prepareCallSettings(settings),
                    inputFormat: validatedPrompt.type,
                    prompt: convertToLanguageModelPrompt(validatedPrompt),
                    abortSignal,
                    headers
                };
                transformer = {
                    transform: (chunk, controller)=>{
                        switch(chunk.type){
                            case "text-delta":
                                controller.enqueue(chunk.textDelta);
                                break;
                            case "finish":
                            case "error":
                                controller.enqueue(chunk);
                                break;
                        }
                    }
                };
                break;
            }
        case "tool":
            {
                const validatedPrompt = getValidatedPrompt({
                    system,
                    prompt,
                    messages
                });
                callOptions = {
                    mode: {
                        type: "object-tool",
                        tool: {
                            type: "function",
                            name: "json",
                            description: "Respond with a JSON object.",
                            parameters: jsonSchema
                        }
                    },
                    ...prepareCallSettings(settings),
                    inputFormat: validatedPrompt.type,
                    prompt: convertToLanguageModelPrompt(validatedPrompt),
                    abortSignal,
                    headers
                };
                transformer = {
                    transform (chunk, controller) {
                        switch(chunk.type){
                            case "tool-call-delta":
                                controller.enqueue(chunk.argsTextDelta);
                                break;
                            case "finish":
                            case "error":
                                controller.enqueue(chunk);
                                break;
                        }
                    }
                };
                break;
            }
        case void 0:
            {
                throw new Error("Model does not have a default object generation mode.");
            }
        default:
            {
                const _exhaustiveCheck = mode;
                throw new Error(`Unsupported mode: ${_exhaustiveCheck}`);
            }
    }
    const result = await retry(()=>model.doStream(callOptions));
    return new StreamObjectResult({
        stream: result.stream.pipeThrough(new TransformStream(transformer)),
        warnings: result.warnings,
        rawResponse: result.rawResponse,
        schema,
        onFinish
    });
}
var StreamObjectResult = class {
    constructor({ stream, warnings, rawResponse, schema, onFinish }){
        this.warnings = warnings;
        this.rawResponse = rawResponse;
        let resolveObject;
        let rejectObject;
        this.object = new Promise((resolve, reject)=>{
            resolveObject = resolve;
            rejectObject = reject;
        });
        let resolveUsage;
        this.usage = new Promise((resolve)=>{
            resolveUsage = resolve;
        });
        let usage;
        let object;
        let error;
        let accumulatedText = "";
        let delta = "";
        let latestObject = void 0;
        this.originalStream = stream.pipeThrough(new TransformStream({
            async transform (chunk, controller) {
                if (typeof chunk === "string") {
                    accumulatedText += chunk;
                    delta += chunk;
                    const currentObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parsePartialJson"])(accumulatedText);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isDeepEqualData"])(latestObject, currentObject)) {
                        latestObject = currentObject;
                        controller.enqueue({
                            type: "object",
                            object: currentObject
                        });
                        controller.enqueue({
                            type: "text-delta",
                            textDelta: delta
                        });
                        delta = "";
                    }
                    return;
                }
                switch(chunk.type){
                    case "finish":
                        {
                            if (delta !== "") {
                                controller.enqueue({
                                    type: "text-delta",
                                    textDelta: delta
                                });
                            }
                            usage = calculateCompletionTokenUsage(chunk.usage);
                            controller.enqueue({
                                ...chunk,
                                usage
                            });
                            resolveUsage(usage);
                            const validationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeValidateTypes"])({
                                value: latestObject,
                                schema
                            });
                            if (validationResult.success) {
                                object = validationResult.value;
                                resolveObject(object);
                            } else {
                                error = validationResult.error;
                                rejectObject(error);
                            }
                            break;
                        }
                    default:
                        {
                            controller.enqueue(chunk);
                            break;
                        }
                }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush (controller) {
                try {
                    await (onFinish == null ? void 0 : onFinish({
                        usage: usage != null ? usage : {
                            promptTokens: NaN,
                            completionTokens: NaN,
                            totalTokens: NaN
                        },
                        object,
                        error,
                        rawResponse,
                        warnings
                    }));
                } catch (error2) {
                    controller.error(error2);
                }
            }
        }));
    }
    /**
  Stream of partial objects. It gets more complete as the stream progresses.
    
  Note that the partial object is not validated. 
  If you want to be certain that the actual content matches your schema, you need to implement your own validation for partial results.
     */ get partialObjectStream() {
        return createAsyncIterableStream(this.originalStream, {
            transform (chunk, controller) {
                switch(chunk.type){
                    case "object":
                        controller.enqueue(chunk.object);
                        break;
                    case "text-delta":
                    case "finish":
                        break;
                    case "error":
                        controller.error(chunk.error);
                        break;
                    default:
                        {
                            const _exhaustiveCheck = chunk;
                            throw new Error(`Unsupported chunk type: ${_exhaustiveCheck}`);
                        }
                }
            }
        });
    }
    /**
  Text stream of the JSON representation of the generated object. It contains text chunks. 
  When the stream is finished, the object is valid JSON that can be parsed.
     */ get textStream() {
        return createAsyncIterableStream(this.originalStream, {
            transform (chunk, controller) {
                switch(chunk.type){
                    case "text-delta":
                        controller.enqueue(chunk.textDelta);
                        break;
                    case "object":
                    case "finish":
                        break;
                    case "error":
                        controller.error(chunk.error);
                        break;
                    default:
                        {
                            const _exhaustiveCheck = chunk;
                            throw new Error(`Unsupported chunk type: ${_exhaustiveCheck}`);
                        }
                }
            }
        });
    }
    /**
  Stream of different types of events, including partial objects, errors, and finish events.
     */ get fullStream() {
        return createAsyncIterableStream(this.originalStream, {
            transform (chunk, controller) {
                controller.enqueue(chunk);
            }
        });
    }
    /**
  Writes text delta output to a Node.js response-like object.
  It sets a `Content-Type` header to `text/plain; charset=utf-8` and 
  writes each text delta as a separate chunk.
  
  @param response A Node.js response-like object (ServerResponse).
  @param init Optional headers and status code.
     */ pipeTextStreamToResponse(response, init) {
        var _a;
        response.writeHead((_a = init == null ? void 0 : init.status) != null ? _a : 200, {
            "Content-Type": "text/plain; charset=utf-8",
            ...init == null ? void 0 : init.headers
        });
        const reader = this.textStream.pipeThrough(new TextEncoderStream()).getReader();
        const read = async ()=>{
            try {
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    response.write(value);
                }
            } catch (error) {
                throw error;
            } finally{
                response.end();
            }
        };
        read();
    }
    /**
  Creates a simple text stream response.
  The response has a `Content-Type` header set to `text/plain; charset=utf-8`.
  Each text delta is encoded as UTF-8 and sent as a separate chunk.
  Non-text-delta events are ignored.
  
  @param init Optional headers and status code.
     */ toTextStreamResponse(init) {
        var _a;
        return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
            status: (_a = init == null ? void 0 : init.status) != null ? _a : 200,
            headers: prepareResponseHeaders(init, {
                contentType: "text/plain; charset=utf-8"
            })
        });
    }
};
var experimental_streamObject = streamObject;
// core/util/is-non-empty-object.ts
function isNonEmptyObject(object) {
    return object != null && Object.keys(object).length > 0;
}
// core/prompt/prepare-tools-and-tool-choice.ts
function prepareToolsAndToolChoice({ tools, toolChoice }) {
    if (!isNonEmptyObject(tools)) {
        return {
            tools: void 0,
            toolChoice: void 0
        };
    }
    return {
        tools: Object.entries(tools).map(([name, tool2])=>({
                type: "function",
                name,
                description: tool2.description,
                parameters: convertZodToJSONSchema(tool2.parameters)
            })),
        toolChoice: toolChoice == null ? {
            type: "auto"
        } : typeof toolChoice === "string" ? {
            type: toolChoice
        } : {
            type: "tool",
            toolName: toolChoice.toolName
        }
    };
}
// core/telemetry/get-base-telemetry-attributes.ts
function getBaseTelemetryAttributes({ operationName, model, settings, telemetry, headers }) {
    var _a;
    return {
        "ai.model.provider": model.provider,
        "ai.model.id": model.modelId,
        // settings:
        ...Object.entries(settings).reduce((attributes, [key, value])=>{
            attributes[`ai.settings.${key}`] = value;
            return attributes;
        }, {}),
        // special telemetry information
        "operation.name": operationName,
        "resource.name": telemetry == null ? void 0 : telemetry.functionId,
        "ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId,
        // add metadata as attributes:
        ...Object.entries((_a = telemetry == null ? void 0 : telemetry.metadata) != null ? _a : {}).reduce((attributes, [key, value])=>{
            attributes[`ai.telemetry.metadata.${key}`] = value;
            return attributes;
        }, {}),
        // request headers
        ...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value])=>{
            if (value !== void 0) {
                attributes[`ai.request.headers.${key}`] = value;
            }
            return attributes;
        }, {})
    };
}
;
// core/telemetry/noop-tracer.ts
var noopTracer = {
    startSpan () {
        return noopSpan;
    },
    startActiveSpan (name, arg1, arg2, arg3) {
        if (typeof arg1 === "function") {
            return arg1(noopSpan);
        }
        if (typeof arg2 === "function") {
            return arg2(noopSpan);
        }
        if (typeof arg3 === "function") {
            return arg3(noopSpan);
        }
    }
};
var noopSpan = {
    spanContext () {
        return noopSpanContext;
    },
    setAttribute () {
        return this;
    },
    setAttributes () {
        return this;
    },
    addEvent () {
        return this;
    },
    addLink () {
        return this;
    },
    addLinks () {
        return this;
    },
    setStatus () {
        return this;
    },
    updateName () {
        return this;
    },
    end () {
        return this;
    },
    isRecording () {
        return false;
    },
    recordException () {
        return this;
    }
};
var noopSpanContext = {
    traceId: "",
    spanId: "",
    traceFlags: 0
};
// core/telemetry/get-tracer.ts
var testTracer = void 0;
function getTracer({ isEnabled }) {
    if (!isEnabled) {
        return noopTracer;
    }
    if (testTracer) {
        return testTracer;
    }
    return __TURBOPACK__commonjs__external__$40$opentelemetry$2f$api__["trace"].getTracer("ai");
}
;
function recordSpan({ name, tracer, attributes, fn, endWhenDone = true }) {
    return tracer.startActiveSpan(name, {
        attributes
    }, async (span)=>{
        try {
            const result = await fn(span);
            if (endWhenDone) {
                span.end();
            }
            return result;
        } catch (error) {
            try {
                if (error instanceof Error) {
                    span.recordException({
                        name: error.name,
                        message: error.message,
                        stack: error.stack
                    });
                    span.setStatus({
                        code: __TURBOPACK__commonjs__external__$40$opentelemetry$2f$api__["SpanStatusCode"].ERROR,
                        message: error.message
                    });
                } else {
                    span.setStatus({
                        code: __TURBOPACK__commonjs__external__$40$opentelemetry$2f$api__["SpanStatusCode"].ERROR
                    });
                }
            } finally{
                span.end();
            }
            throw error;
        }
    });
}
;
;
function parseToolCall({ toolCall, tools }) {
    const toolName = toolCall.toolName;
    if (tools == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoSuchToolError"]({
            toolName: toolCall.toolName
        });
    }
    const tool2 = tools[toolName];
    if (tool2 == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoSuchToolError"]({
            toolName: toolCall.toolName,
            availableTools: Object.keys(tools)
        });
    }
    const parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeParseJSON"])({
        text: toolCall.args,
        schema: tool2.parameters
    });
    if (parseResult.success === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidToolArgumentsError"]({
            toolName,
            toolArgs: toolCall.args,
            cause: parseResult.error
        });
    }
    return {
        type: "tool-call",
        toolCallId: toolCall.toolCallId,
        toolName,
        args: parseResult.value
    };
}
// core/generate-text/generate-text.ts
async function generateText({ model, tools, toolChoice, system, prompt, messages, maxRetries, abortSignal, headers, maxAutomaticRoundtrips = 0, maxToolRoundtrips = maxAutomaticRoundtrips, experimental_telemetry: telemetry, ...settings }) {
    var _a;
    const baseTelemetryAttributes = getBaseTelemetryAttributes({
        operationName: "ai.generateText",
        model,
        telemetry,
        headers,
        settings: {
            ...settings,
            maxRetries
        }
    });
    const tracer = getTracer({
        isEnabled: (_a = telemetry == null ? void 0 : telemetry.isEnabled) != null ? _a : false
    });
    return recordSpan({
        name: "ai.generateText",
        attributes: {
            ...baseTelemetryAttributes,
            // specific settings that only make sense on the outer level:
            "ai.prompt": JSON.stringify({
                system,
                prompt,
                messages
            }),
            "ai.settings.maxToolRoundtrips": maxToolRoundtrips
        },
        tracer,
        fn: async (span)=>{
            var _a2, _b, _c;
            const retry = retryWithExponentialBackoff({
                maxRetries
            });
            const validatedPrompt = getValidatedPrompt({
                system,
                prompt,
                messages
            });
            const mode = {
                type: "regular",
                ...prepareToolsAndToolChoice({
                    tools,
                    toolChoice
                })
            };
            const callSettings = prepareCallSettings(settings);
            const promptMessages = convertToLanguageModelPrompt(validatedPrompt);
            let currentModelResponse;
            let currentToolCalls = [];
            let currentToolResults = [];
            let roundtrips = 0;
            const responseMessages = [];
            do {
                const currentInputFormat = roundtrips === 0 ? validatedPrompt.type : "messages";
                currentModelResponse = await retry(()=>recordSpan({
                        name: "ai.generateText.doGenerate",
                        attributes: {
                            ...baseTelemetryAttributes,
                            "ai.prompt.format": currentInputFormat,
                            "ai.prompt.messages": JSON.stringify(promptMessages)
                        },
                        tracer,
                        fn: async (span2)=>{
                            const result = await model.doGenerate({
                                mode,
                                ...callSettings,
                                inputFormat: currentInputFormat,
                                prompt: promptMessages,
                                abortSignal,
                                headers
                            });
                            span2.setAttributes({
                                "ai.finishReason": result.finishReason,
                                "ai.usage.promptTokens": result.usage.promptTokens,
                                "ai.usage.completionTokens": result.usage.completionTokens,
                                "ai.result.text": result.text,
                                "ai.result.toolCalls": JSON.stringify(result.toolCalls)
                            });
                            return result;
                        }
                    }));
                currentToolCalls = ((_a2 = currentModelResponse.toolCalls) != null ? _a2 : []).map((modelToolCall)=>parseToolCall({
                        toolCall: modelToolCall,
                        tools
                    }));
                currentToolResults = tools == null ? [] : await executeTools({
                    toolCalls: currentToolCalls,
                    tools,
                    tracer
                });
                const newResponseMessages = toResponseMessages({
                    text: (_b = currentModelResponse.text) != null ? _b : "",
                    toolCalls: currentToolCalls,
                    toolResults: currentToolResults
                });
                responseMessages.push(...newResponseMessages);
                promptMessages.push(...newResponseMessages.map(convertToLanguageModelMessage));
            }while (// there are tool calls:
            currentToolCalls.length > 0 && // all current tool calls have results:
            currentToolResults.length === currentToolCalls.length && // the number of roundtrips is less than the maximum:
            roundtrips++ < maxToolRoundtrips)
            span.setAttributes({
                "ai.finishReason": currentModelResponse.finishReason,
                "ai.usage.promptTokens": currentModelResponse.usage.promptTokens,
                "ai.usage.completionTokens": currentModelResponse.usage.completionTokens,
                "ai.result.text": currentModelResponse.text,
                "ai.result.toolCalls": JSON.stringify(currentModelResponse.toolCalls)
            });
            return new GenerateTextResult({
                // Always return a string so that the caller doesn't have to check for undefined.
                // If they need to check if the model did not return any text,
                // they can check the length of the string:
                text: (_c = currentModelResponse.text) != null ? _c : "",
                toolCalls: currentToolCalls,
                toolResults: currentToolResults,
                finishReason: currentModelResponse.finishReason,
                usage: calculateCompletionTokenUsage(currentModelResponse.usage),
                warnings: currentModelResponse.warnings,
                rawResponse: currentModelResponse.rawResponse,
                logprobs: currentModelResponse.logprobs,
                responseMessages
            });
        }
    });
}
async function executeTools({ toolCalls, tools, tracer }) {
    const toolResults = await Promise.all(toolCalls.map(async (toolCall)=>{
        const tool2 = tools[toolCall.toolName];
        if ((tool2 == null ? void 0 : tool2.execute) == null) {
            return void 0;
        }
        const result = await recordSpan({
            name: "ai.toolCall",
            attributes: {
                "ai.toolCall.name": toolCall.toolName,
                "ai.toolCall.id": toolCall.toolCallId,
                "ai.toolCall.args": JSON.stringify(toolCall.args)
            },
            tracer,
            fn: async (span)=>{
                const result2 = await tool2.execute(toolCall.args);
                try {
                    span.setAttributes({
                        "ai.toolCall.result": JSON.stringify(result2)
                    });
                } catch (ignored) {}
                return result2;
            }
        });
        return {
            toolCallId: toolCall.toolCallId,
            toolName: toolCall.toolName,
            args: toolCall.args,
            result
        };
    }));
    return toolResults.filter((result)=>result != null);
}
var GenerateTextResult = class {
    constructor(options){
        this.text = options.text;
        this.toolCalls = options.toolCalls;
        this.toolResults = options.toolResults;
        this.finishReason = options.finishReason;
        this.usage = options.usage;
        this.warnings = options.warnings;
        this.rawResponse = options.rawResponse;
        this.logprobs = options.logprobs;
        this.responseMessages = options.responseMessages;
    }
};
function toResponseMessages({ text, toolCalls, toolResults }) {
    const responseMessages = [];
    responseMessages.push({
        role: "assistant",
        content: [
            {
                type: "text",
                text
            },
            ...toolCalls
        ]
    });
    if (toolResults.length > 0) {
        responseMessages.push({
            role: "tool",
            content: toolResults.map((result)=>({
                    type: "tool-result",
                    toolCallId: result.toolCallId,
                    toolName: result.toolName,
                    result: result.result
                }))
        });
    }
    return responseMessages;
}
var experimental_generateText = generateText;
;
;
function runToolsTransformation({ tools, generatorStream, tracer }) {
    let canClose = false;
    const outstandingToolCalls = /* @__PURE__ */ new Set();
    let toolResultsStreamController = null;
    const toolResultsStream = new ReadableStream({
        start (controller) {
            toolResultsStreamController = controller;
        }
    });
    const forwardStream = new TransformStream({
        transform (chunk, controller) {
            const chunkType = chunk.type;
            switch(chunkType){
                case "text-delta":
                case "error":
                    {
                        controller.enqueue(chunk);
                        break;
                    }
                case "tool-call":
                    {
                        const toolName = chunk.toolName;
                        if (tools == null) {
                            toolResultsStreamController.enqueue({
                                type: "error",
                                error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoSuchToolError"]({
                                    toolName: chunk.toolName
                                })
                            });
                            break;
                        }
                        const tool2 = tools[toolName];
                        if (tool2 == null) {
                            toolResultsStreamController.enqueue({
                                type: "error",
                                error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoSuchToolError"]({
                                    toolName: chunk.toolName,
                                    availableTools: Object.keys(tools)
                                })
                            });
                            break;
                        }
                        try {
                            const toolCall = parseToolCall({
                                toolCall: chunk,
                                tools
                            });
                            controller.enqueue(toolCall);
                            if (tool2.execute != null) {
                                const toolExecutionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateId"])();
                                outstandingToolCalls.add(toolExecutionId);
                                recordSpan({
                                    name: "ai.toolCall",
                                    attributes: {
                                        "ai.toolCall.name": toolCall.toolName,
                                        "ai.toolCall.id": toolCall.toolCallId,
                                        "ai.toolCall.args": JSON.stringify(toolCall.args)
                                    },
                                    tracer,
                                    fn: async (span)=>tool2.execute(toolCall.args).then((result)=>{
                                            toolResultsStreamController.enqueue({
                                                ...toolCall,
                                                type: "tool-result",
                                                result
                                            });
                                            outstandingToolCalls.delete(toolExecutionId);
                                            if (canClose && outstandingToolCalls.size === 0) {
                                                toolResultsStreamController.close();
                                            }
                                            try {
                                                span.setAttributes({
                                                    "ai.toolCall.result": JSON.stringify(result)
                                                });
                                            } catch (ignored) {}
                                        }, (error)=>{
                                            toolResultsStreamController.enqueue({
                                                type: "error",
                                                error
                                            });
                                            outstandingToolCalls.delete(toolExecutionId);
                                            if (canClose && outstandingToolCalls.size === 0) {
                                                toolResultsStreamController.close();
                                            }
                                        })
                                });
                            }
                        } catch (error) {
                            toolResultsStreamController.enqueue({
                                type: "error",
                                error
                            });
                        }
                        break;
                    }
                case "finish":
                    {
                        controller.enqueue({
                            type: "finish",
                            finishReason: chunk.finishReason,
                            logprobs: chunk.logprobs,
                            usage: calculateCompletionTokenUsage(chunk.usage)
                        });
                        break;
                    }
                case "tool-call-delta":
                    {
                        break;
                    }
                default:
                    {
                        const _exhaustiveCheck = chunkType;
                        throw new Error(`Unhandled chunk type: ${_exhaustiveCheck}`);
                    }
            }
        },
        flush () {
            canClose = true;
            if (outstandingToolCalls.size === 0) {
                toolResultsStreamController.close();
            }
        }
    });
    return new ReadableStream({
        async start (controller) {
            return Promise.all([
                generatorStream.pipeThrough(forwardStream).pipeTo(new WritableStream({
                    write (chunk) {
                        controller.enqueue(chunk);
                    },
                    close () {}
                })),
                toolResultsStream.pipeTo(new WritableStream({
                    write (chunk) {
                        controller.enqueue(chunk);
                    },
                    close () {
                        controller.close();
                    }
                }))
            ]);
        }
    });
}
// core/generate-text/stream-text.ts
async function streamText({ model, tools, toolChoice, system, prompt, messages, maxRetries, abortSignal, headers, experimental_telemetry: telemetry, onFinish, ...settings }) {
    var _a;
    const baseTelemetryAttributes = getBaseTelemetryAttributes({
        operationName: "ai.streamText",
        model,
        telemetry,
        headers,
        settings: {
            ...settings,
            maxRetries
        }
    });
    const tracer = getTracer({
        isEnabled: (_a = telemetry == null ? void 0 : telemetry.isEnabled) != null ? _a : false
    });
    return recordSpan({
        name: "ai.streamText",
        attributes: {
            ...baseTelemetryAttributes,
            // specific settings that only make sense on the outer level:
            "ai.prompt": JSON.stringify({
                system,
                prompt,
                messages
            })
        },
        tracer,
        endWhenDone: false,
        fn: async (rootSpan)=>{
            const retry = retryWithExponentialBackoff({
                maxRetries
            });
            const validatedPrompt = getValidatedPrompt({
                system,
                prompt,
                messages
            });
            const promptMessages = convertToLanguageModelPrompt(validatedPrompt);
            const { result: { stream, warnings, rawResponse }, doStreamSpan } = await retry(()=>recordSpan({
                    name: "ai.streamText.doStream",
                    attributes: {
                        ...baseTelemetryAttributes,
                        "ai.prompt.format": validatedPrompt.type,
                        "ai.prompt.messages": JSON.stringify(promptMessages)
                    },
                    tracer,
                    endWhenDone: false,
                    fn: async (doStreamSpan2)=>{
                        return {
                            result: await model.doStream({
                                mode: {
                                    type: "regular",
                                    ...prepareToolsAndToolChoice({
                                        tools,
                                        toolChoice
                                    })
                                },
                                ...prepareCallSettings(settings),
                                inputFormat: validatedPrompt.type,
                                prompt: promptMessages,
                                abortSignal,
                                headers
                            }),
                            doStreamSpan: doStreamSpan2
                        };
                    }
                }));
            return new StreamTextResult({
                stream: runToolsTransformation({
                    tools,
                    generatorStream: stream,
                    tracer
                }),
                warnings,
                rawResponse,
                onFinish,
                rootSpan,
                doStreamSpan
            });
        }
    });
}
var StreamTextResult = class {
    constructor({ stream, warnings, rawResponse, onFinish, rootSpan, doStreamSpan }){
        this.warnings = warnings;
        this.rawResponse = rawResponse;
        this.onFinish = onFinish;
        let resolveUsage;
        this.usage = new Promise((resolve)=>{
            resolveUsage = resolve;
        });
        let resolveFinishReason;
        this.finishReason = new Promise((resolve)=>{
            resolveFinishReason = resolve;
        });
        let resolveText;
        this.text = new Promise((resolve)=>{
            resolveText = resolve;
        });
        let resolveToolCalls;
        this.toolCalls = new Promise((resolve)=>{
            resolveToolCalls = resolve;
        });
        let resolveToolResults;
        this.toolResults = new Promise((resolve)=>{
            resolveToolResults = resolve;
        });
        let finishReason;
        let usage;
        let text = "";
        const toolCalls = [];
        const toolResults = [];
        let firstChunk = true;
        const self = this;
        this.originalStream = stream.pipeThrough(new TransformStream({
            async transform (chunk, controller) {
                controller.enqueue(chunk);
                if (firstChunk) {
                    firstChunk = false;
                    doStreamSpan.addEvent("ai.stream.firstChunk");
                }
                const chunkType = chunk.type;
                switch(chunkType){
                    case "text-delta":
                        text += chunk.textDelta;
                        break;
                    case "tool-call":
                        toolCalls.push(chunk);
                        break;
                    case "tool-result":
                        toolResults.push(chunk);
                        break;
                    case "finish":
                        usage = chunk.usage;
                        finishReason = chunk.finishReason;
                        resolveUsage(usage);
                        resolveFinishReason(finishReason);
                        resolveText(text);
                        resolveToolCalls(toolCalls);
                        break;
                    case "error":
                        break;
                    default:
                        {
                            const exhaustiveCheck = chunkType;
                            throw new Error(`Unknown chunk type: ${exhaustiveCheck}`);
                        }
                }
            },
            // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
            async flush (controller) {
                var _a;
                try {
                    const finalUsage = usage != null ? usage : {
                        promptTokens: NaN,
                        completionTokens: NaN,
                        totalTokens: NaN
                    };
                    const finalFinishReason = finishReason != null ? finishReason : "unknown";
                    const telemetryToolCalls = toolCalls.length > 0 ? JSON.stringify(toolCalls) : void 0;
                    doStreamSpan.setAttributes({
                        "ai.finishReason": finalFinishReason,
                        "ai.usage.promptTokens": finalUsage.promptTokens,
                        "ai.usage.completionTokens": finalUsage.completionTokens,
                        "ai.result.text": text,
                        "ai.result.toolCalls": telemetryToolCalls
                    });
                    doStreamSpan.end();
                    rootSpan.setAttributes({
                        "ai.finishReason": finalFinishReason,
                        "ai.usage.promptTokens": finalUsage.promptTokens,
                        "ai.usage.completionTokens": finalUsage.completionTokens,
                        "ai.result.text": text,
                        "ai.result.toolCalls": telemetryToolCalls
                    });
                    resolveToolResults(toolResults);
                    await ((_a = self.onFinish) == null ? void 0 : _a.call(self, {
                        finishReason: finalFinishReason,
                        usage: finalUsage,
                        text,
                        toolCalls,
                        // The tool results are inferred as a never[] type, because they are
                        // optional and the execute method with an inferred result type is
                        // optional as well. Therefore we need to cast the toolResults to any.
                        // The type exposed to the users will be correctly inferred.
                        toolResults,
                        rawResponse,
                        warnings
                    }));
                } catch (error) {
                    controller.error(error);
                } finally{
                    rootSpan.end();
                }
            }
        }));
    }
    /**
  Split out a new stream from the original stream.
  The original stream is replaced to allow for further splitting,
  since we do not know how many times the stream will be split.
  
  Note: this leads to buffering the stream content on the server.
  However, the LLM results are expected to be small enough to not cause issues.
     */ teeStream() {
        const [stream1, stream2] = this.originalStream.tee();
        this.originalStream = stream2;
        return stream1;
    }
    /**
  A text stream that returns only the generated text deltas. You can use it
  as either an AsyncIterable or a ReadableStream. When an error occurs, the
  stream will throw the error.
     */ get textStream() {
        return createAsyncIterableStream(this.teeStream(), {
            transform (chunk, controller) {
                if (chunk.type === "text-delta") {
                    if (chunk.textDelta.length > 0) {
                        controller.enqueue(chunk.textDelta);
                    }
                } else if (chunk.type === "error") {
                    controller.error(chunk.error);
                }
            }
        });
    }
    /**
  A stream with all events, including text deltas, tool calls, tool results, and
  errors.
  You can use it as either an AsyncIterable or a ReadableStream. When an error occurs, the
  stream will throw the error.
     */ get fullStream() {
        return createAsyncIterableStream(this.teeStream(), {
            transform (chunk, controller) {
                if (chunk.type === "text-delta") {
                    if (chunk.textDelta.length > 0) {
                        controller.enqueue(chunk);
                    }
                } else {
                    controller.enqueue(chunk);
                }
            }
        });
    }
    /**
  Converts the result to an `AIStream` object that is compatible with `StreamingTextResponse`.
  It can be used with the `useChat` and `useCompletion` hooks.
  
  @param callbacks 
  Stream callbacks that will be called when the stream emits events.
  
  @returns an `AIStream` object.
     */ toAIStream(callbacks = {}) {
        let aggregatedResponse = "";
        const callbackTransformer = new TransformStream({
            async start () {
                if (callbacks.onStart) await callbacks.onStart();
            },
            async transform (chunk, controller) {
                controller.enqueue(chunk);
                if (chunk.type === "text-delta") {
                    const textDelta = chunk.textDelta;
                    aggregatedResponse += textDelta;
                    if (callbacks.onToken) await callbacks.onToken(textDelta);
                    if (callbacks.onText) await callbacks.onText(textDelta);
                }
            },
            async flush () {
                if (callbacks.onCompletion) await callbacks.onCompletion(aggregatedResponse);
                if (callbacks.onFinal) await callbacks.onFinal(aggregatedResponse);
            }
        });
        const streamDataTransformer = new TransformStream({
            transform: async (chunk, controller)=>{
                switch(chunk.type){
                    case "text-delta":
                        controller.enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", chunk.textDelta));
                        break;
                    case "tool-call":
                        controller.enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("tool_call", {
                            toolCallId: chunk.toolCallId,
                            toolName: chunk.toolName,
                            args: chunk.args
                        }));
                        break;
                    case "tool-result":
                        controller.enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("tool_result", {
                            toolCallId: chunk.toolCallId,
                            toolName: chunk.toolName,
                            args: chunk.args,
                            result: chunk.result
                        }));
                        break;
                    case "error":
                        controller.enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("error", JSON.stringify(chunk.error)));
                        break;
                }
            }
        });
        return this.fullStream.pipeThrough(callbackTransformer).pipeThrough(streamDataTransformer).pipeThrough(new TextEncoderStream());
    }
    /**
  Writes stream data output to a Node.js response-like object.
  It sets a `Content-Type` header to `text/plain; charset=utf-8` and 
  writes each stream data part as a separate chunk.
  
  @param response A Node.js response-like object (ServerResponse).
  @param init Optional headers and status code.
     */ pipeAIStreamToResponse(response, init) {
        var _a;
        response.writeHead((_a = init == null ? void 0 : init.status) != null ? _a : 200, {
            "Content-Type": "text/plain; charset=utf-8",
            ...init == null ? void 0 : init.headers
        });
        const reader = this.toAIStream().getReader();
        const read = async ()=>{
            try {
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    response.write(value);
                }
            } catch (error) {
                throw error;
            } finally{
                response.end();
            }
        };
        read();
    }
    /**
  Writes text delta output to a Node.js response-like object.
  It sets a `Content-Type` header to `text/plain; charset=utf-8` and 
  writes each text delta as a separate chunk.
  
  @param response A Node.js response-like object (ServerResponse).
  @param init Optional headers and status code.
     */ pipeTextStreamToResponse(response, init) {
        var _a;
        response.writeHead((_a = init == null ? void 0 : init.status) != null ? _a : 200, {
            "Content-Type": "text/plain; charset=utf-8",
            ...init == null ? void 0 : init.headers
        });
        const reader = this.textStream.pipeThrough(new TextEncoderStream()).getReader();
        const read = async ()=>{
            try {
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    response.write(value);
                }
            } catch (error) {
                throw error;
            } finally{
                response.end();
            }
        };
        read();
    }
    /**
  Converts the result to a streamed response object with a stream data part stream.
  It can be used with the `useChat` and `useCompletion` hooks.
  
  @param init Optional headers.
  
  @return A response object.
     */ toAIStreamResponse(init) {
        return new StreamingTextResponse(this.toAIStream(), init);
    }
    /**
  Creates a simple text stream response.
  Each text delta is encoded as UTF-8 and sent as a separate chunk.
  Non-text-delta events are ignored.
  
  @param init Optional headers and status code.
     */ toTextStreamResponse(init) {
        var _a;
        return new Response(this.textStream.pipeThrough(new TextEncoderStream()), {
            status: (_a = init == null ? void 0 : init.status) != null ? _a : 200,
            headers: prepareResponseHeaders(init, {
                contentType: "text/plain; charset=utf-8"
            })
        });
    }
};
var experimental_streamText = streamText;
// core/prompt/convert-to-core-messages.ts
function convertToCoreMessages(messages) {
    const coreMessages = [];
    for (const { role, content, toolInvocations } of messages){
        switch(role){
            case "user":
                {
                    coreMessages.push({
                        role: "user",
                        content
                    });
                    break;
                }
            case "assistant":
                {
                    if (toolInvocations == null) {
                        coreMessages.push({
                            role: "assistant",
                            content
                        });
                        break;
                    }
                    coreMessages.push({
                        role: "assistant",
                        content: [
                            {
                                type: "text",
                                text: content
                            },
                            ...toolInvocations.map(({ toolCallId, toolName, args })=>({
                                    type: "tool-call",
                                    toolCallId,
                                    toolName,
                                    args
                                }))
                        ]
                    });
                    coreMessages.push({
                        role: "tool",
                        content: toolInvocations.map(({ toolCallId, toolName, args, result })=>({
                                type: "tool-result",
                                toolCallId,
                                toolName,
                                args,
                                result
                            }))
                    });
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unhandled role: ${_exhaustiveCheck}`);
                }
        }
    }
    return coreMessages;
}
// core/registry/invalid-model-id-error.ts
var InvalidModelIdError = class extends Error {
    constructor({ id, message = `Invalid model id: ${id}` }){
        super(message);
        this.name = "AI_InvalidModelIdError";
        this.id = id;
    }
    static isInvalidModelIdError(error) {
        return error instanceof Error && error.name === "AI_InvalidModelIdError" && typeof error.id === "string";
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            id: this.id
        };
    }
};
// core/registry/no-such-model-error.ts
var NoSuchModelError = class extends Error {
    constructor({ modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super(message);
        this.name = "AI_NoSuchModelError";
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isNoSuchModelError(error) {
        return error instanceof Error && error.name === "AI_NoSuchModelError" && typeof error.modelId === "string" && typeof error.modelType === "string";
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            modelId: this.modelId,
            modelType: this.modelType
        };
    }
};
// core/registry/no-such-provider-error.ts
var NoSuchProviderError = class extends Error {
    constructor({ providerId, availableProviders, message = `No such provider: ${providerId} (available providers: ${availableProviders.join()})` }){
        super(message);
        this.name = "AI_NoSuchProviderError";
        this.providerId = providerId;
        this.availableProviders = availableProviders;
    }
    static isNoSuchProviderError(error) {
        return error instanceof Error && error.name === "AI_NoSuchProviderError" && typeof error.providerId === "string" && Array.isArray(error.availableProviders);
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            providerId: this.providerId,
            availableProviders: this.availableProviders
        };
    }
};
// core/registry/provider-registry.ts
function experimental_createProviderRegistry(providers) {
    const registry = new DefaultProviderRegistry();
    for (const [id, provider] of Object.entries(providers)){
        registry.registerProvider({
            id,
            provider
        });
    }
    return registry;
}
var experimental_createModelRegistry = experimental_createProviderRegistry;
var DefaultProviderRegistry = class {
    constructor(){
        this.providers = {};
    }
    registerProvider({ id, provider }) {
        this.providers[id] = provider;
    }
    getProvider(id) {
        const provider = this.providers[id];
        if (provider == null) {
            throw new NoSuchProviderError({
                providerId: id,
                availableProviders: Object.keys(this.providers)
            });
        }
        return provider;
    }
    splitId(id) {
        const index = id.indexOf(":");
        if (index === -1) {
            throw new InvalidModelIdError({
                id
            });
        }
        return [
            id.slice(0, index),
            id.slice(index + 1)
        ];
    }
    languageModel(id) {
        var _a, _b;
        const [providerId, modelId] = this.splitId(id);
        const model = (_b = (_a = this.getProvider(providerId)).languageModel) == null ? void 0 : _b.call(_a, modelId);
        if (model == null) {
            throw new NoSuchModelError({
                modelId: id,
                modelType: "language model"
            });
        }
        return model;
    }
    textEmbeddingModel(id) {
        var _a, _b;
        const [providerId, modelId] = this.splitId(id);
        const model = (_b = (_a = this.getProvider(providerId)).textEmbedding) == null ? void 0 : _b.call(_a, modelId);
        if (model == null) {
            throw new NoSuchModelError({
                modelId: id,
                modelType: "text embedding model"
            });
        }
        return model;
    }
};
// core/tool/tool.ts
function tool(tool2) {
    return tool2;
}
;
// core/util/cosine-similarity.ts
function cosineSimilarity(vector1, vector2) {
    if (vector1.length !== vector2.length) {
        throw new Error(`Vectors must have the same length (vector1: ${vector1.length} elements, vector2: ${vector2.length} elements)`);
    }
    return dotProduct(vector1, vector2) / (magnitude(vector1) * magnitude(vector2));
}
function dotProduct(vector1, vector2) {
    return vector1.reduce((accumulator, value, index)=>accumulator + value * vector2[index], 0);
}
function magnitude(vector) {
    return Math.sqrt(dotProduct(vector, vector));
}
;
function createEventStreamTransformer(customParser) {
    const textDecoder = new TextDecoder();
    let eventSourceParser;
    return new TransformStream({
        async start (controller) {
            eventSourceParser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createParser"])((event)=>{
                if ("data" in event && event.type === "event" && event.data === "[DONE]" || // Replicate doesn't send [DONE] but does send a 'done' event
                // @see https://replicate.com/docs/streaming
                event.event === "done") {
                    controller.terminate();
                    return;
                }
                if ("data" in event) {
                    const parsedMessage = customParser ? customParser(event.data, {
                        event: event.event
                    }) : event.data;
                    if (parsedMessage) controller.enqueue(parsedMessage);
                }
            });
        },
        transform (chunk) {
            eventSourceParser.feed(textDecoder.decode(chunk));
        }
    });
}
function createCallbacksTransformer(cb) {
    const textEncoder = new TextEncoder();
    let aggregatedResponse = "";
    const callbacks = cb || {};
    return new TransformStream({
        async start () {
            if (callbacks.onStart) await callbacks.onStart();
        },
        async transform (message, controller) {
            const content = typeof message === "string" ? message : message.content;
            controller.enqueue(textEncoder.encode(content));
            aggregatedResponse += content;
            if (callbacks.onToken) await callbacks.onToken(content);
            if (callbacks.onText && typeof message === "string") {
                await callbacks.onText(message);
            }
        },
        async flush () {
            const isOpenAICallbacks = isOfTypeOpenAIStreamCallbacks(callbacks);
            if (callbacks.onCompletion) {
                await callbacks.onCompletion(aggregatedResponse);
            }
            if (callbacks.onFinal && !isOpenAICallbacks) {
                await callbacks.onFinal(aggregatedResponse);
            }
        }
    });
}
function isOfTypeOpenAIStreamCallbacks(callbacks) {
    return "experimental_onFunctionCall" in callbacks;
}
function trimStartOfStreamHelper() {
    let isStreamStart = true;
    return (text)=>{
        if (isStreamStart) {
            text = text.trimStart();
            if (text) isStreamStart = false;
        }
        return text;
    };
}
function AIStream(response, customParser, callbacks) {
    if (!response.ok) {
        if (response.body) {
            const reader = response.body.getReader();
            return new ReadableStream({
                async start (controller) {
                    const { done, value } = await reader.read();
                    if (!done) {
                        const errorText = new TextDecoder().decode(value);
                        controller.error(new Error(`Response error: ${errorText}`));
                    }
                }
            });
        } else {
            return new ReadableStream({
                start (controller) {
                    controller.error(new Error("Response error: No response body"));
                }
            });
        }
    }
    const responseBodyStream = response.body || createEmptyReadableStream();
    return responseBodyStream.pipeThrough(createEventStreamTransformer(customParser)).pipeThrough(createCallbacksTransformer(callbacks));
}
function createEmptyReadableStream() {
    return new ReadableStream({
        start (controller) {
            controller.close();
        }
    });
}
function readableFromAsyncIterable(iterable) {
    let it = iterable[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (controller) {
            const { done, value } = await it.next();
            if (done) controller.close();
            else controller.enqueue(value);
        },
        async cancel (reason) {
            var _a;
            await ((_a = it.return) == null ? void 0 : _a.call(it, reason));
        }
    });
}
;
var StreamData = class {
    constructor(){
        this.encoder = new TextEncoder();
        this.controller = null;
        this.isClosed = false;
        this.warningTimeout = null;
        const self = this;
        this.stream = new ReadableStream({
            start: async (controller)=>{
                self.controller = controller;
                if ("TURBOPACK compile-time truthy", 1) {
                    self.warningTimeout = setTimeout(()=>{
                        console.warn("The data stream is hanging. Did you forget to close it with `data.close()`?");
                    }, 3e3);
                }
            },
            pull: (controller)=>{},
            cancel: (reason)=>{
                this.isClosed = true;
            }
        });
    }
    async close() {
        if (this.isClosed) {
            throw new Error("Data Stream has already been closed.");
        }
        if (!this.controller) {
            throw new Error("Stream controller is not initialized.");
        }
        this.controller.close();
        this.isClosed = true;
        if (this.warningTimeout) {
            clearTimeout(this.warningTimeout);
        }
    }
    append(value) {
        if (this.isClosed) {
            throw new Error("Data Stream has already been closed.");
        }
        if (!this.controller) {
            throw new Error("Stream controller is not initialized.");
        }
        this.controller.enqueue(this.encoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("data", [
            value
        ])));
    }
    appendMessageAnnotation(value) {
        if (this.isClosed) {
            throw new Error("Data Stream has already been closed.");
        }
        if (!this.controller) {
            throw new Error("Stream controller is not initialized.");
        }
        this.controller.enqueue(this.encoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("message_annotations", [
            value
        ])));
    }
};
function createStreamDataTransformer() {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    return new TransformStream({
        transform: async (chunk, controller)=>{
            const message = decoder.decode(chunk);
            controller.enqueue(encoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", message)));
        }
    });
}
var experimental_StreamData = class extends StreamData {
};
// streams/anthropic-stream.ts
function parseAnthropicStream() {
    let previous = "";
    return (data)=>{
        const json = JSON.parse(data);
        if ("error" in json) {
            throw new Error(`${json.error.type}: ${json.error.message}`);
        }
        if (!("completion" in json)) {
            return;
        }
        const text = json.completion;
        if (!previous || text.length > previous.length && text.startsWith(previous)) {
            const delta = text.slice(previous.length);
            previous = text;
            return delta;
        }
        return text;
    };
}
async function* streamable(stream) {
    for await (const chunk of stream){
        if ("completion" in chunk) {
            const text = chunk.completion;
            if (text) yield text;
        } else if ("delta" in chunk) {
            const { delta } = chunk;
            if ("text" in delta) {
                const text = delta.text;
                if (text) yield text;
            }
        }
    }
}
function AnthropicStream(res, cb) {
    if (Symbol.asyncIterator in res) {
        return readableFromAsyncIterable(streamable(res)).pipeThrough(createCallbacksTransformer(cb)).pipeThrough(createStreamDataTransformer());
    } else {
        return AIStream(res, parseAnthropicStream(), cb).pipeThrough(createStreamDataTransformer());
    }
}
;
function AssistantResponse({ threadId, messageId }, process2) {
    const stream = new ReadableStream({
        async start (controller) {
            var _a;
            const textEncoder = new TextEncoder();
            const sendMessage = (message)=>{
                controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("assistant_message", message)));
            };
            const sendDataMessage = (message)=>{
                controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("data_message", message)));
            };
            const sendError = (errorMessage)=>{
                controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("error", errorMessage)));
            };
            const forwardStream = async (stream2)=>{
                var _a2, _b;
                let result = void 0;
                for await (const value of stream2){
                    switch(value.event){
                        case "thread.message.created":
                            {
                                controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("assistant_message", {
                                    id: value.data.id,
                                    role: "assistant",
                                    content: [
                                        {
                                            type: "text",
                                            text: {
                                                value: ""
                                            }
                                        }
                                    ]
                                })));
                                break;
                            }
                        case "thread.message.delta":
                            {
                                const content = (_a2 = value.data.delta.content) == null ? void 0 : _a2[0];
                                if ((content == null ? void 0 : content.type) === "text" && ((_b = content.text) == null ? void 0 : _b.value) != null) {
                                    controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", content.text.value)));
                                }
                                break;
                            }
                        case "thread.run.completed":
                        case "thread.run.requires_action":
                            {
                                result = value.data;
                                break;
                            }
                    }
                }
                return result;
            };
            controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("assistant_control_data", {
                threadId,
                messageId
            })));
            try {
                await process2({
                    threadId,
                    messageId,
                    sendMessage,
                    sendDataMessage,
                    forwardStream
                });
            } catch (error) {
                sendError((_a = error.message) != null ? _a : `${error}`);
            } finally{
                controller.close();
            }
        },
        pull (controller) {},
        cancel () {}
    });
    return new Response(stream, {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8"
        }
    });
}
var experimental_AssistantResponse = AssistantResponse;
// streams/aws-bedrock-stream.ts
async function* asDeltaIterable(response, extractTextDeltaFromChunk) {
    var _a, _b;
    const decoder = new TextDecoder();
    for await (const chunk of (_a = response.body) != null ? _a : []){
        const bytes = (_b = chunk.chunk) == null ? void 0 : _b.bytes;
        if (bytes != null) {
            const chunkText = decoder.decode(bytes);
            const chunkJSON = JSON.parse(chunkText);
            const delta = extractTextDeltaFromChunk(chunkJSON);
            if (delta != null) {
                yield delta;
            }
        }
    }
}
function AWSBedrockAnthropicMessagesStream(response, callbacks) {
    return AWSBedrockStream(response, callbacks, (chunk)=>{
        var _a;
        return (_a = chunk.delta) == null ? void 0 : _a.text;
    });
}
function AWSBedrockAnthropicStream(response, callbacks) {
    return AWSBedrockStream(response, callbacks, (chunk)=>chunk.completion);
}
function AWSBedrockCohereStream(response, callbacks) {
    return AWSBedrockStream(response, callbacks, (chunk)=>chunk == null ? void 0 : chunk.text);
}
function AWSBedrockLlama2Stream(response, callbacks) {
    return AWSBedrockStream(response, callbacks, (chunk)=>chunk.generation);
}
function AWSBedrockStream(response, callbacks, extractTextDeltaFromChunk) {
    return readableFromAsyncIterable(asDeltaIterable(response, extractTextDeltaFromChunk)).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer());
}
// streams/cohere-stream.ts
var utf8Decoder = new TextDecoder("utf-8");
async function processLines(lines, controller) {
    for (const line of lines){
        const { text, is_finished } = JSON.parse(line);
        if (!is_finished) {
            controller.enqueue(text);
        }
    }
}
async function readAndProcessLines(reader, controller) {
    let segment = "";
    while(true){
        const { value: chunk, done } = await reader.read();
        if (done) {
            break;
        }
        segment += utf8Decoder.decode(chunk, {
            stream: true
        });
        const linesArray = segment.split(/\r\n|\n|\r/g);
        segment = linesArray.pop() || "";
        await processLines(linesArray, controller);
    }
    if (segment) {
        const linesArray = [
            segment
        ];
        await processLines(linesArray, controller);
    }
    controller.close();
}
function createParser2(res) {
    var _a;
    const reader = (_a = res.body) == null ? void 0 : _a.getReader();
    return new ReadableStream({
        async start (controller) {
            if (!reader) {
                controller.close();
                return;
            }
            await readAndProcessLines(reader, controller);
        }
    });
}
async function* streamable2(stream) {
    for await (const chunk of stream){
        if (chunk.eventType === "text-generation") {
            const text = chunk.text;
            if (text) yield text;
        }
    }
}
function CohereStream(reader, callbacks) {
    if (Symbol.asyncIterator in reader) {
        return readableFromAsyncIterable(streamable2(reader)).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer());
    } else {
        return createParser2(reader).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer());
    }
}
// streams/google-generative-ai-stream.ts
async function* streamable3(response) {
    var _a, _b, _c;
    for await (const chunk of response.stream){
        const parts = (_c = (_b = (_a = chunk.candidates) == null ? void 0 : _a[0]) == null ? void 0 : _b.content) == null ? void 0 : _c.parts;
        if (parts === void 0) {
            continue;
        }
        const firstPart = parts[0];
        if (typeof firstPart.text === "string") {
            yield firstPart.text;
        }
    }
}
function GoogleGenerativeAIStream(response, cb) {
    return readableFromAsyncIterable(streamable3(response)).pipeThrough(createCallbacksTransformer(cb)).pipeThrough(createStreamDataTransformer());
}
// streams/huggingface-stream.ts
function createParser3(res) {
    const trimStartOfStream = trimStartOfStreamHelper();
    return new ReadableStream({
        async pull (controller) {
            var _a, _b;
            const { value, done } = await res.next();
            if (done) {
                controller.close();
                return;
            }
            const text = trimStartOfStream((_b = (_a = value.token) == null ? void 0 : _a.text) != null ? _b : "");
            if (!text) return;
            if (value.generated_text != null && value.generated_text.length > 0) {
                return;
            }
            if (text === "</s>" || text === "<|endoftext|>" || text === "<|end|>") {
                return;
            }
            controller.enqueue(text);
        }
    });
}
function HuggingFaceStream(res, callbacks) {
    return createParser3(res).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer());
}
// streams/inkeep-stream.ts
function InkeepStream(res, callbacks) {
    if (!res.body) {
        throw new Error("Response body is null");
    }
    let chat_session_id = "";
    let records_cited;
    const inkeepEventParser = (data, options)=>{
        var _a, _b;
        const { event } = options;
        if (event === "records_cited") {
            records_cited = JSON.parse(data);
            (_a = callbacks == null ? void 0 : callbacks.onRecordsCited) == null ? void 0 : _a.call(callbacks, records_cited);
        }
        if (event === "message_chunk") {
            const inkeepMessageChunk = JSON.parse(data);
            chat_session_id = (_b = inkeepMessageChunk.chat_session_id) != null ? _b : chat_session_id;
            return inkeepMessageChunk.content_chunk;
        }
        return;
    };
    let { onRecordsCited, ...passThroughCallbacks } = callbacks || {};
    passThroughCallbacks = {
        ...passThroughCallbacks,
        onFinal: (completion)=>{
            var _a;
            const inkeepOnFinalMetadata = {
                chat_session_id,
                records_cited
            };
            (_a = callbacks == null ? void 0 : callbacks.onFinal) == null ? void 0 : _a.call(callbacks, completion, inkeepOnFinalMetadata);
        }
    };
    return AIStream(res, inkeepEventParser, passThroughCallbacks).pipeThrough(createStreamDataTransformer());
}
// streams/langchain-adapter.ts
var langchain_adapter_exports = {};
__export(langchain_adapter_exports, {
    toAIStream: ()=>toAIStream
});
function toAIStream(stream, callbacks) {
    return stream.pipeThrough(new TransformStream({
        transform: async (chunk, controller)=>{
            if (typeof chunk === "string") {
                controller.enqueue(chunk);
            } else if (typeof chunk.content === "string") {
                controller.enqueue(chunk.content);
            } else {
                const content = chunk.content;
                for (const item of content){
                    if (item.type === "text") {
                        controller.enqueue(item.text);
                    }
                }
            }
        }
    })).pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer());
}
// streams/langchain-stream.ts
function LangChainStream(callbacks) {
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const runs = /* @__PURE__ */ new Set();
    const handleError = async (e, runId)=>{
        runs.delete(runId);
        await writer.ready;
        await writer.abort(e);
    };
    const handleStart = async (runId)=>{
        runs.add(runId);
    };
    const handleEnd = async (runId)=>{
        runs.delete(runId);
        if (runs.size === 0) {
            await writer.ready;
            await writer.close();
        }
    };
    return {
        stream: stream.readable.pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer()),
        writer,
        handlers: {
            handleLLMNewToken: async (token)=>{
                await writer.ready;
                await writer.write(token);
            },
            handleLLMStart: async (_llm, _prompts, runId)=>{
                handleStart(runId);
            },
            handleLLMEnd: async (_output, runId)=>{
                await handleEnd(runId);
            },
            handleLLMError: async (e, runId)=>{
                await handleError(e, runId);
            },
            handleChainStart: async (_chain, _inputs, runId)=>{
                handleStart(runId);
            },
            handleChainEnd: async (_outputs, runId)=>{
                await handleEnd(runId);
            },
            handleChainError: async (e, runId)=>{
                await handleError(e, runId);
            },
            handleToolStart: async (_tool, _input, runId)=>{
                handleStart(runId);
            },
            handleToolEnd: async (_output, runId)=>{
                await handleEnd(runId);
            },
            handleToolError: async (e, runId)=>{
                await handleError(e, runId);
            }
        }
    };
}
// streams/mistral-stream.ts
async function* streamable4(stream) {
    var _a, _b;
    for await (const chunk of stream){
        const content = (_b = (_a = chunk.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content;
        if (content === void 0 || content === "") {
            continue;
        }
        yield content;
    }
}
function MistralStream(response, callbacks) {
    const stream = readableFromAsyncIterable(streamable4(response));
    return stream.pipeThrough(createCallbacksTransformer(callbacks)).pipeThrough(createStreamDataTransformer());
}
;
function parseOpenAIStream() {
    const extract = chunkToText();
    return (data)=>extract(JSON.parse(data));
}
async function* streamable5(stream) {
    const extract = chunkToText();
    for await (let chunk of stream){
        if ("promptFilterResults" in chunk) {
            chunk = {
                id: chunk.id,
                created: chunk.created.getDate(),
                object: chunk.object,
                // not exposed by Azure API
                model: chunk.model,
                // not exposed by Azure API
                choices: chunk.choices.map((choice)=>{
                    var _a, _b, _c, _d, _e, _f, _g;
                    return {
                        delta: {
                            content: (_a = choice.delta) == null ? void 0 : _a.content,
                            function_call: (_b = choice.delta) == null ? void 0 : _b.functionCall,
                            role: (_c = choice.delta) == null ? void 0 : _c.role,
                            tool_calls: ((_e = (_d = choice.delta) == null ? void 0 : _d.toolCalls) == null ? void 0 : _e.length) ? (_g = (_f = choice.delta) == null ? void 0 : _f.toolCalls) == null ? void 0 : _g.map((toolCall, index)=>({
                                    index,
                                    id: toolCall.id,
                                    function: toolCall.function,
                                    type: toolCall.type
                                })) : void 0
                        },
                        finish_reason: choice.finishReason,
                        index: choice.index
                    };
                })
            };
        }
        const text = extract(chunk);
        if (text) yield text;
    }
}
function chunkToText() {
    const trimStartOfStream = trimStartOfStreamHelper();
    let isFunctionStreamingIn;
    return (json)=>{
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
        if (isChatCompletionChunk(json)) {
            const delta = (_a = json.choices[0]) == null ? void 0 : _a.delta;
            if ((_b = delta.function_call) == null ? void 0 : _b.name) {
                isFunctionStreamingIn = true;
                return {
                    isText: false,
                    content: `{"function_call": {"name": "${delta.function_call.name}", "arguments": "`
                };
            } else if ((_e = (_d = (_c = delta.tool_calls) == null ? void 0 : _c[0]) == null ? void 0 : _d.function) == null ? void 0 : _e.name) {
                isFunctionStreamingIn = true;
                const toolCall = delta.tool_calls[0];
                if (toolCall.index === 0) {
                    return {
                        isText: false,
                        content: `{"tool_calls":[ {"id": "${toolCall.id}", "type": "function", "function": {"name": "${(_f = toolCall.function) == null ? void 0 : _f.name}", "arguments": "`
                    };
                } else {
                    return {
                        isText: false,
                        content: `"}}, {"id": "${toolCall.id}", "type": "function", "function": {"name": "${(_g = toolCall.function) == null ? void 0 : _g.name}", "arguments": "`
                    };
                }
            } else if ((_h = delta.function_call) == null ? void 0 : _h.arguments) {
                return {
                    isText: false,
                    content: cleanupArguments((_i = delta.function_call) == null ? void 0 : _i.arguments)
                };
            } else if ((_l = (_k = (_j = delta.tool_calls) == null ? void 0 : _j[0]) == null ? void 0 : _k.function) == null ? void 0 : _l.arguments) {
                return {
                    isText: false,
                    content: cleanupArguments((_o = (_n = (_m = delta.tool_calls) == null ? void 0 : _m[0]) == null ? void 0 : _n.function) == null ? void 0 : _o.arguments)
                };
            } else if (isFunctionStreamingIn && (((_p = json.choices[0]) == null ? void 0 : _p.finish_reason) === "function_call" || ((_q = json.choices[0]) == null ? void 0 : _q.finish_reason) === "stop")) {
                isFunctionStreamingIn = false;
                return {
                    isText: false,
                    content: '"}}'
                };
            } else if (isFunctionStreamingIn && ((_r = json.choices[0]) == null ? void 0 : _r.finish_reason) === "tool_calls") {
                isFunctionStreamingIn = false;
                return {
                    isText: false,
                    content: '"}}]}'
                };
            }
        }
        const text = trimStartOfStream(isChatCompletionChunk(json) && json.choices[0].delta.content ? json.choices[0].delta.content : isCompletion(json) ? json.choices[0].text : "");
        return text;
    };
    function cleanupArguments(argumentChunk) {
        let escapedPartialJson = argumentChunk.replace(/\\/g, "\\\\").replace(/\//g, "\\/").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
        return `${escapedPartialJson}`;
    }
}
var __internal__OpenAIFnMessagesSymbol = Symbol("internal_openai_fn_messages");
function isChatCompletionChunk(data) {
    return "choices" in data && data.choices && data.choices[0] && "delta" in data.choices[0];
}
function isCompletion(data) {
    return "choices" in data && data.choices && data.choices[0] && "text" in data.choices[0];
}
function OpenAIStream(res, callbacks) {
    const cb = callbacks;
    let stream;
    if (Symbol.asyncIterator in res) {
        stream = readableFromAsyncIterable(streamable5(res)).pipeThrough(createCallbacksTransformer((cb == null ? void 0 : cb.experimental_onFunctionCall) || (cb == null ? void 0 : cb.experimental_onToolCall) ? {
            ...cb,
            onFinal: void 0
        } : {
            ...cb
        }));
    } else {
        stream = AIStream(res, parseOpenAIStream(), (cb == null ? void 0 : cb.experimental_onFunctionCall) || (cb == null ? void 0 : cb.experimental_onToolCall) ? {
            ...cb,
            onFinal: void 0
        } : {
            ...cb
        });
    }
    if (cb && (cb.experimental_onFunctionCall || cb.experimental_onToolCall)) {
        const functionCallTransformer = createFunctionCallTransformer(cb);
        return stream.pipeThrough(functionCallTransformer);
    } else {
        return stream.pipeThrough(createStreamDataTransformer());
    }
}
function createFunctionCallTransformer(callbacks) {
    const textEncoder = new TextEncoder();
    let isFirstChunk = true;
    let aggregatedResponse = "";
    let aggregatedFinalCompletionResponse = "";
    let isFunctionStreamingIn = false;
    let functionCallMessages = callbacks[__internal__OpenAIFnMessagesSymbol] || [];
    const decode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createChunkDecoder"])();
    return new TransformStream({
        async transform (chunk, controller) {
            const message = decode(chunk);
            aggregatedFinalCompletionResponse += message;
            const shouldHandleAsFunction = isFirstChunk && (message.startsWith('{"function_call":') || message.startsWith('{"tool_calls":'));
            if (shouldHandleAsFunction) {
                isFunctionStreamingIn = true;
                aggregatedResponse += message;
                isFirstChunk = false;
                return;
            }
            if (!isFunctionStreamingIn) {
                controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", message)));
                return;
            } else {
                aggregatedResponse += message;
            }
        },
        async flush (controller) {
            try {
                if (!isFirstChunk && isFunctionStreamingIn && (callbacks.experimental_onFunctionCall || callbacks.experimental_onToolCall)) {
                    isFunctionStreamingIn = false;
                    const payload = JSON.parse(aggregatedResponse);
                    let newFunctionCallMessages = [
                        ...functionCallMessages
                    ];
                    let functionResponse = void 0;
                    if (callbacks.experimental_onFunctionCall) {
                        if (payload.function_call === void 0) {
                            console.warn("experimental_onFunctionCall should not be defined when using tools");
                        }
                        const argumentsPayload = JSON.parse(payload.function_call.arguments);
                        functionResponse = await callbacks.experimental_onFunctionCall({
                            name: payload.function_call.name,
                            arguments: argumentsPayload
                        }, (result)=>{
                            newFunctionCallMessages = [
                                ...functionCallMessages,
                                {
                                    role: "assistant",
                                    content: "",
                                    function_call: payload.function_call
                                },
                                {
                                    role: "function",
                                    name: payload.function_call.name,
                                    content: JSON.stringify(result)
                                }
                            ];
                            return newFunctionCallMessages;
                        });
                    }
                    if (callbacks.experimental_onToolCall) {
                        const toolCalls = {
                            tools: []
                        };
                        for (const tool2 of payload.tool_calls){
                            toolCalls.tools.push({
                                id: tool2.id,
                                type: "function",
                                func: {
                                    name: tool2.function.name,
                                    arguments: JSON.parse(tool2.function.arguments)
                                }
                            });
                        }
                        let responseIndex = 0;
                        try {
                            functionResponse = await callbacks.experimental_onToolCall(toolCalls, (result)=>{
                                if (result) {
                                    const { tool_call_id, function_name, tool_call_result } = result;
                                    newFunctionCallMessages = [
                                        ...newFunctionCallMessages,
                                        // Only append the assistant message if it's the first response
                                        ...responseIndex === 0 ? [
                                            {
                                                role: "assistant",
                                                content: "",
                                                tool_calls: payload.tool_calls.map((tc)=>({
                                                        id: tc.id,
                                                        type: "function",
                                                        function: {
                                                            name: tc.function.name,
                                                            // we send the arguments an object to the user, but as the API expects a string, we need to stringify it
                                                            arguments: JSON.stringify(tc.function.arguments)
                                                        }
                                                    }))
                                            }
                                        ] : [],
                                        // Append the function call result message
                                        {
                                            role: "tool",
                                            tool_call_id,
                                            name: function_name,
                                            content: JSON.stringify(tool_call_result)
                                        }
                                    ];
                                    responseIndex++;
                                }
                                return newFunctionCallMessages;
                            });
                        } catch (e) {
                            console.error("Error calling experimental_onToolCall:", e);
                        }
                    }
                    if (!functionResponse) {
                        controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])(payload.function_call ? "function_call" : "tool_calls", // parse to prevent double-encoding:
                        JSON.parse(aggregatedResponse))));
                        return;
                    } else if (typeof functionResponse === "string") {
                        controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", functionResponse)));
                        aggregatedFinalCompletionResponse = functionResponse;
                        return;
                    }
                    const filteredCallbacks = {
                        ...callbacks,
                        onStart: void 0
                    };
                    callbacks.onFinal = void 0;
                    const openAIStream = OpenAIStream(functionResponse, {
                        ...filteredCallbacks,
                        [__internal__OpenAIFnMessagesSymbol]: newFunctionCallMessages
                    });
                    const reader = openAIStream.getReader();
                    while(true){
                        const { done, value } = await reader.read();
                        if (done) {
                            break;
                        }
                        controller.enqueue(value);
                    }
                }
            } finally{
                if (callbacks.onFinal && aggregatedFinalCompletionResponse) {
                    await callbacks.onFinal(aggregatedFinalCompletionResponse);
                }
            }
        }
    });
}
// streams/replicate-stream.ts
async function ReplicateStream(res, cb, options) {
    var _a;
    const url = (_a = res.urls) == null ? void 0 : _a.stream;
    if (!url) {
        if (res.error) throw new Error(res.error);
        else throw new Error("Missing stream URL in Replicate response");
    }
    const eventStream = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "text/event-stream",
            ...options == null ? void 0 : options.headers
        }
    });
    return AIStream(eventStream, void 0, cb).pipeThrough(createStreamDataTransformer());
}
// core/util/merge-streams.ts
function mergeStreams(stream1, stream2) {
    const reader1 = stream1.getReader();
    const reader2 = stream2.getReader();
    let lastRead1 = void 0;
    let lastRead2 = void 0;
    let stream1Done = false;
    let stream2Done = false;
    async function readStream1(controller) {
        try {
            if (lastRead1 == null) {
                lastRead1 = reader1.read();
            }
            const result = await lastRead1;
            lastRead1 = void 0;
            if (!result.done) {
                controller.enqueue(result.value);
            } else {
                controller.close();
            }
        } catch (error) {
            controller.error(error);
        }
    }
    async function readStream2(controller) {
        try {
            if (lastRead2 == null) {
                lastRead2 = reader2.read();
            }
            const result = await lastRead2;
            lastRead2 = void 0;
            if (!result.done) {
                controller.enqueue(result.value);
            } else {
                controller.close();
            }
        } catch (error) {
            controller.error(error);
        }
    }
    return new ReadableStream({
        async pull (controller) {
            try {
                if (stream1Done) {
                    readStream2(controller);
                    return;
                }
                if (stream2Done) {
                    readStream1(controller);
                    return;
                }
                if (lastRead1 == null) {
                    lastRead1 = reader1.read();
                }
                if (lastRead2 == null) {
                    lastRead2 = reader2.read();
                }
                const { result, reader } = await Promise.race([
                    lastRead1.then((result2)=>({
                            result: result2,
                            reader: reader1
                        })),
                    lastRead2.then((result2)=>({
                            result: result2,
                            reader: reader2
                        }))
                ]);
                if (!result.done) {
                    controller.enqueue(result.value);
                }
                if (reader === reader1) {
                    lastRead1 = void 0;
                    if (result.done) {
                        readStream2(controller);
                        stream1Done = true;
                    }
                } else {
                    lastRead2 = void 0;
                    if (result.done) {
                        stream2Done = true;
                        readStream1(controller);
                    }
                }
            } catch (error) {
                controller.error(error);
            }
        },
        cancel () {
            reader1.cancel();
            reader2.cancel();
        }
    });
}
// streams/stream-to-response.ts
function streamToResponse(res, response, init, data) {
    var _a;
    response.writeHead((_a = init == null ? void 0 : init.status) != null ? _a : 200, {
        "Content-Type": "text/plain; charset=utf-8",
        ...init == null ? void 0 : init.headers
    });
    let processedStream = res;
    if (data) {
        processedStream = mergeStreams(data.stream, res);
    }
    const reader = processedStream.getReader();
    function read() {
        reader.read().then(({ done, value })=>{
            if (done) {
                response.end();
                return;
            }
            response.write(value);
            read();
        });
    }
    read();
}
// streams/streaming-text-response.ts
var StreamingTextResponse = class extends Response {
    constructor(res, init, data){
        let processedStream = res;
        if (data) {
            processedStream = mergeStreams(data.stream, res);
        }
        super(processedStream, {
            ...init,
            status: 200,
            headers: prepareResponseHeaders(init, {
                contentType: "text/plain; charset=utf-8"
            })
        });
    }
};
// streams/index.ts
var generateId2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateId"];
var nanoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateId"];
;
 //# sourceMappingURL=index.mjs.map

})()),
"[project]/node_modules/ai/rsc/dist/rsc-shared.mjs (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InternalAIProvider": ()=>InternalAIProvider,
    "readStreamableValue": ()=>readStreamableValue,
    "useAIState": ()=>useAIState,
    "useActions": ()=>useActions,
    "useStreamableValue": ()=>useStreamableValue,
    "useSyncUIState": ()=>useSyncUIState,
    "useUIState": ()=>useUIState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const InternalAIProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InternalAIProvider() from the server but InternalAIProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "InternalAIProvider");
const readStreamableValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call readStreamableValue() from the server but readStreamableValue is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "readStreamableValue");
const useAIState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAIState() from the server but useAIState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "useAIState");
const useActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useActions() from the server but useActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "useActions");
const useStreamableValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStreamableValue() from the server but useStreamableValue is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "useStreamableValue");
const useSyncUIState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSyncUIState() from the server but useSyncUIState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "useSyncUIState");
const useUIState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUIState() from the server but useUIState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/ai/rsc/dist/rsc-shared.mjs", "useUIState");

})()),
"[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$28$client__proxy$29$__);

})()),
"[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// rsc/ai-state.tsx
/* __next_internal_action_entry_do_not_use__ {"5a7522b313dd544f8b930e49b6dba159bab50d07":"$$ACTION_0"} */ __turbopack_esm__({
    "$$ACTION_0": ()=>$$ACTION_0,
    "createAI": ()=>createAI,
    "createStreamableUI": ()=>createStreamableUI,
    "createStreamableValue": ()=>createStreamableValue,
    "getAIState": ()=>getAIState,
    "getMutableAIState": ()=>getMutableAIState,
    "render": ()=>render,
    "streamUI": ()=>streamUI
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__commonjs__external__async_hooks__ = __turbopack_external_require__("async_hooks", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$facade$3e$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <facade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/node_modules/@ai-sdk/provider/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/ui-utils/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function createResolvablePromise() {
    let resolve, reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve,
        reject
    };
}
var R = [
    async ({ c, // current
    n })=>{
        const chunk = await n;
        if (chunk.done) {
            return chunk.value;
        }
        if (chunk.append) {
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    c,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: chunk.value,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(R, {
                            c: chunk.value,
                            n: chunk.next
                        })
                    })
                ]
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: chunk.value,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(R, {
                c: chunk.value,
                n: chunk.next
            })
        });
    }
][0];
function createSuspensedChunk(initialValue) {
    const { promise, resolve, reject } = createResolvablePromise();
    return {
        row: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: initialValue,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(R, {
                c: initialValue,
                n: promise
            })
        }),
        resolve,
        reject
    };
}
var isFunction = (x)=>typeof x === "function";
var consumeStream = async (stream)=>{
    const reader = stream.getReader();
    while(true){
        const { done } = await reader.read();
        if (done) break;
    }
};
// rsc/ai-state.tsx
var asyncAIStateStorage = new __TURBOPACK__commonjs__external__async_hooks__["AsyncLocalStorage"]();
function getAIStateStoreOrThrow(message) {
    const store = asyncAIStateStorage.getStore();
    if (!store) {
        throw new Error(message);
    }
    return store;
}
function withAIState({ state: state1, options }, fn) {
    return asyncAIStateStorage.run({
        currentState: state1,
        originalState: state1,
        sealed: false,
        options
    }, fn);
}
function getAIStateDeltaPromise() {
    const store = getAIStateStoreOrThrow("Internal error occurred.");
    return store.mutationDeltaPromise;
}
function sealMutableAIState() {
    const store = getAIStateStoreOrThrow("Internal error occurred.");
    store.sealed = true;
}
function getAIState(...args) {
    const store = getAIStateStoreOrThrow("`getAIState` must be called within an AI Action.");
    if (args.length > 0) {
        const key = args[0];
        if (typeof store.currentState !== "object") {
            throw new Error(`You can't get the "${String(key)}" field from the AI state because it's not an object.`);
        }
        return store.currentState[key];
    }
    return store.currentState;
}
function getMutableAIState(...args) {
    const store = getAIStateStoreOrThrow("`getMutableAIState` must be called within an AI Action.");
    if (store.sealed) {
        throw new Error("`getMutableAIState` must be called before returning from an AI Action. Please move it to the top level of the Action's function body.");
    }
    if (!store.mutationDeltaPromise) {
        const { promise, resolve } = createResolvablePromise();
        store.mutationDeltaPromise = promise;
        store.mutationDeltaResolve = resolve;
    }
    function doUpdate(newState, done) {
        var _a, _b;
        if (args.length > 0) {
            if (typeof store.currentState !== "object") {
                const key = args[0];
                throw new Error(`You can't modify the "${String(key)}" field of the AI state because it's not an object.`);
            }
        }
        if (isFunction(newState)) {
            if (args.length > 0) {
                store.currentState[args[0]] = newState(store.currentState[args[0]]);
            } else {
                store.currentState = newState(store.currentState);
            }
        } else {
            if (args.length > 0) {
                store.currentState[args[0]] = newState;
            } else {
                store.currentState = newState;
            }
        }
        (_b = (_a = store.options).onSetAIState) == null ? void 0 : _b.call(_a, {
            key: args.length > 0 ? args[0] : void 0,
            state: store.currentState,
            done
        });
    }
    const mutableState = {
        get: ()=>{
            if (args.length > 0) {
                const key = args[0];
                if (typeof store.currentState !== "object") {
                    throw new Error(`You can't get the "${String(key)}" field from the AI state because it's not an object.`);
                }
                return store.currentState[key];
            }
            return store.currentState;
        },
        update: function update(newAIState) {
            doUpdate(newAIState, false);
        },
        done: function done(...doneArgs) {
            if (doneArgs.length > 0) {
                doUpdate(doneArgs[0], true);
            }
            const delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$facade$3e$__.diff(store.originalState, store.currentState);
            store.mutationDeltaResolve(delta);
        }
    };
    return mutableState;
}
;
;
;
// core/util/delay.ts
async function delay(delayInMs) {
    return new Promise((resolve)=>setTimeout(resolve, delayInMs));
}
// core/util/retry-with-exponential-backoff.ts
var retryWithExponentialBackoff = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2 } = {})=>async (f)=>_retryWithExponentialBackoff(f, {
            maxRetries,
            delayInMs: initialDelayInMs,
            backoffFactor
        });
async function _retryWithExponentialBackoff(f, { maxRetries, delayInMs, backoffFactor }, errors = []) {
    try {
        return await f();
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(error)) {
            throw error;
        }
        if (maxRetries === 0) {
            throw error;
        }
        const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
        const newErrors = [
            ...errors,
            error
        ];
        const tryNumber = newErrors.length;
        if (tryNumber > maxRetries) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RetryError"]({
                message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
                reason: "maxRetriesExceeded",
                errors: newErrors
            });
        }
        if (error instanceof Error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"].isAPICallError(error) && error.isRetryable === true && tryNumber <= maxRetries) {
            await delay(delayInMs);
            return _retryWithExponentialBackoff(f, {
                maxRetries,
                delayInMs: backoffFactor * delayInMs,
                backoffFactor
            }, newErrors);
        }
        if (tryNumber === 1) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RetryError"]({
            message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
            reason: "errorNotRetryable",
            errors: newErrors
        });
    }
}
// core/util/detect-image-mimetype.ts
var mimeTypeSignatures = [
    {
        mimeType: "image/gif",
        bytes: [
            71,
            73,
            70
        ]
    },
    {
        mimeType: "image/png",
        bytes: [
            137,
            80,
            78,
            71
        ]
    },
    {
        mimeType: "image/jpeg",
        bytes: [
            255,
            216
        ]
    },
    {
        mimeType: "image/webp",
        bytes: [
            82,
            73,
            70,
            70
        ]
    }
];
function detectImageMimeType(image) {
    for (const { bytes, mimeType } of mimeTypeSignatures){
        if (image.length >= bytes.length && bytes.every((byte, index)=>image[index] === byte)) {
            return mimeType;
        }
    }
    return void 0;
}
;
;
function convertDataContentToUint8Array(content) {
    if (content instanceof Uint8Array) {
        return content;
    }
    if (typeof content === "string") {
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBase64ToUint8Array"])(content);
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidDataContentError"]({
                message: "Invalid data content. Content string is not a base64-encoded image.",
                content,
                cause: error
            });
        }
    }
    if (content instanceof ArrayBuffer) {
        return new Uint8Array(content);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidDataContentError"]({
        content
    });
}
// core/prompt/invalid-message-role-error.ts
var InvalidMessageRoleError = class extends Error {
    constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }){
        super(message);
        this.name = "AI_InvalidMessageRoleError";
        this.role = role;
    }
    static isInvalidMessageRoleError(error) {
        return error instanceof Error && error.name === "AI_InvalidMessageRoleError" && typeof error.role === "string";
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            role: this.role
        };
    }
};
;
function convertToLanguageModelPrompt(prompt) {
    const languageModelMessages = [];
    if (prompt.system != null) {
        languageModelMessages.push({
            role: "system",
            content: prompt.system
        });
    }
    const promptType = prompt.type;
    switch(promptType){
        case "prompt":
            {
                languageModelMessages.push({
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: prompt.prompt
                        }
                    ]
                });
                break;
            }
        case "messages":
            {
                languageModelMessages.push(...prompt.messages.map(convertToLanguageModelMessage));
                break;
            }
        default:
            {
                const _exhaustiveCheck = promptType;
                throw new Error(`Unsupported prompt type: ${_exhaustiveCheck}`);
            }
    }
    return languageModelMessages;
}
function convertToLanguageModelMessage(message) {
    const role = message.role;
    switch(role){
        case "system":
            {
                return {
                    role: "system",
                    content: message.content
                };
            }
        case "user":
            {
                if (typeof message.content === "string") {
                    return {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: message.content
                            }
                        ]
                    };
                }
                return {
                    role: "user",
                    content: message.content.map((part)=>{
                        var _a;
                        switch(part.type){
                            case "text":
                                {
                                    return part;
                                }
                            case "image":
                                {
                                    if (part.image instanceof URL) {
                                        return {
                                            type: "image",
                                            image: part.image,
                                            mimeType: part.mimeType
                                        };
                                    }
                                    if (typeof part.image === "string") {
                                        try {
                                            const url = new URL(part.image);
                                            switch(url.protocol){
                                                case "http:":
                                                case "https:":
                                                    {
                                                        return {
                                                            type: "image",
                                                            image: url,
                                                            mimeType: part.mimeType
                                                        };
                                                    }
                                                case "data:":
                                                    {
                                                        try {
                                                            const [header, base64Content] = part.image.split(",");
                                                            const mimeType = header.split(";")[0].split(":")[1];
                                                            if (mimeType == null || base64Content == null) {
                                                                throw new Error("Invalid data URL format");
                                                            }
                                                            return {
                                                                type: "image",
                                                                image: convertDataContentToUint8Array(base64Content),
                                                                mimeType
                                                            };
                                                        } catch (error) {
                                                            throw new Error(`Error processing data URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(message)}`);
                                                        }
                                                    }
                                                default:
                                                    {
                                                        throw new Error(`Unsupported URL protocol: ${url.protocol}`);
                                                    }
                                            }
                                        } catch (_ignored) {}
                                    }
                                    const imageUint8 = convertDataContentToUint8Array(part.image);
                                    return {
                                        type: "image",
                                        image: imageUint8,
                                        mimeType: (_a = part.mimeType) != null ? _a : detectImageMimeType(imageUint8)
                                    };
                                }
                        }
                    })
                };
            }
        case "assistant":
            {
                if (typeof message.content === "string") {
                    return {
                        role: "assistant",
                        content: [
                            {
                                type: "text",
                                text: message.content
                            }
                        ]
                    };
                }
                return {
                    role: "assistant",
                    content: message.content.filter(// remove empty text parts:
                    (part)=>part.type !== "text" || part.text !== "")
                };
            }
        case "tool":
            {
                return message;
            }
        default:
            {
                const _exhaustiveCheck = role;
                throw new InvalidMessageRoleError({
                    role: _exhaustiveCheck
                });
            }
    }
}
;
function getValidatedPrompt(prompt) {
    if (prompt.prompt == null && prompt.messages == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
            prompt,
            message: "prompt or messages must be defined"
        });
    }
    if (prompt.prompt != null && prompt.messages != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
            prompt,
            message: "prompt and messages cannot be defined at the same time"
        });
    }
    if (prompt.messages != null) {
        for (const message of prompt.messages){
            if (message.role === "system" && typeof message.content !== "string") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
                    prompt,
                    message: "system message content must be a string"
                });
            }
        }
    }
    return prompt.prompt != null ? {
        type: "prompt",
        prompt: prompt.prompt,
        messages: void 0,
        system: prompt.system
    } : {
        type: "messages",
        prompt: void 0,
        messages: prompt.messages,
        // only possible case bc of checks above
        system: prompt.system
    };
}
;
function prepareCallSettings({ maxTokens, temperature, topP, presencePenalty, frequencyPenalty, seed, maxRetries }) {
    if (maxTokens != null) {
        if (!Number.isInteger(maxTokens)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxTokens",
                value: maxTokens,
                message: "maxTokens must be an integer"
            });
        }
        if (maxTokens < 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxTokens",
                value: maxTokens,
                message: "maxTokens must be >= 1"
            });
        }
    }
    if (temperature != null) {
        if (typeof temperature !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "temperature",
                value: temperature,
                message: "temperature must be a number"
            });
        }
    }
    if (topP != null) {
        if (typeof topP !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "topP",
                value: topP,
                message: "topP must be a number"
            });
        }
    }
    if (presencePenalty != null) {
        if (typeof presencePenalty !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "presencePenalty",
                value: presencePenalty,
                message: "presencePenalty must be a number"
            });
        }
    }
    if (frequencyPenalty != null) {
        if (typeof frequencyPenalty !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "frequencyPenalty",
                value: frequencyPenalty,
                message: "frequencyPenalty must be a number"
            });
        }
    }
    if (seed != null) {
        if (!Number.isInteger(seed)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "seed",
                value: seed,
                message: "seed must be an integer"
            });
        }
    }
    if (maxRetries != null) {
        if (!Number.isInteger(maxRetries)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxRetries",
                value: maxRetries,
                message: "maxRetries must be an integer"
            });
        }
        if (maxRetries < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
                parameter: "maxRetries",
                value: maxRetries,
                message: "maxRetries must be >= 0"
            });
        }
    }
    return {
        maxTokens,
        temperature: temperature != null ? temperature : 0,
        topP,
        presencePenalty,
        frequencyPenalty,
        seed,
        maxRetries: maxRetries != null ? maxRetries : 2
    };
}
// core/types/token-usage.ts
function calculateCompletionTokenUsage(usage) {
    return {
        promptTokens: usage.promptTokens,
        completionTokens: usage.completionTokens,
        totalTokens: usage.promptTokens + usage.completionTokens
    };
}
;
function convertZodToJSONSchema(zodSchema) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(zodSchema);
}
// core/util/is-non-empty-object.ts
function isNonEmptyObject(object) {
    return object != null && Object.keys(object).length > 0;
}
// core/prompt/prepare-tools-and-tool-choice.ts
function prepareToolsAndToolChoice({ tools, toolChoice }) {
    if (!isNonEmptyObject(tools)) {
        return {
            tools: void 0,
            toolChoice: void 0
        };
    }
    return {
        tools: Object.entries(tools).map(([name, tool])=>({
                type: "function",
                name,
                description: tool.description,
                parameters: convertZodToJSONSchema(tool.parameters)
            })),
        toolChoice: toolChoice == null ? {
            type: "auto"
        } : typeof toolChoice === "string" ? {
            type: toolChoice
        } : {
            type: "tool",
            toolName: toolChoice.toolName
        }
    };
}
;
function createEventStreamTransformer(customParser) {
    const textDecoder = new TextDecoder();
    let eventSourceParser;
    return new TransformStream({
        async start (controller) {
            eventSourceParser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createParser"])((event)=>{
                if ("data" in event && event.type === "event" && event.data === "[DONE]" || // Replicate doesn't send [DONE] but does send a 'done' event
                // @see https://replicate.com/docs/streaming
                event.event === "done") {
                    controller.terminate();
                    return;
                }
                if ("data" in event) {
                    const parsedMessage = customParser ? customParser(event.data, {
                        event: event.event
                    }) : event.data;
                    if (parsedMessage) controller.enqueue(parsedMessage);
                }
            });
        },
        transform (chunk) {
            eventSourceParser.feed(textDecoder.decode(chunk));
        }
    });
}
function createCallbacksTransformer(cb) {
    const textEncoder = new TextEncoder();
    let aggregatedResponse = "";
    const callbacks = cb || {};
    return new TransformStream({
        async start () {
            if (callbacks.onStart) await callbacks.onStart();
        },
        async transform (message, controller) {
            const content = typeof message === "string" ? message : message.content;
            controller.enqueue(textEncoder.encode(content));
            aggregatedResponse += content;
            if (callbacks.onToken) await callbacks.onToken(content);
            if (callbacks.onText && typeof message === "string") {
                await callbacks.onText(message);
            }
        },
        async flush () {
            const isOpenAICallbacks = isOfTypeOpenAIStreamCallbacks(callbacks);
            if (callbacks.onCompletion) {
                await callbacks.onCompletion(aggregatedResponse);
            }
            if (callbacks.onFinal && !isOpenAICallbacks) {
                await callbacks.onFinal(aggregatedResponse);
            }
        }
    });
}
function isOfTypeOpenAIStreamCallbacks(callbacks) {
    return "experimental_onFunctionCall" in callbacks;
}
function trimStartOfStreamHelper() {
    let isStreamStart = true;
    return (text)=>{
        if (isStreamStart) {
            text = text.trimStart();
            if (text) isStreamStart = false;
        }
        return text;
    };
}
function AIStream(response, customParser, callbacks) {
    if (!response.ok) {
        if (response.body) {
            const reader = response.body.getReader();
            return new ReadableStream({
                async start (controller) {
                    const { done, value } = await reader.read();
                    if (!done) {
                        const errorText = new TextDecoder().decode(value);
                        controller.error(new Error(`Response error: ${errorText}`));
                    }
                }
            });
        } else {
            return new ReadableStream({
                start (controller) {
                    controller.error(new Error("Response error: No response body"));
                }
            });
        }
    }
    const responseBodyStream = response.body || createEmptyReadableStream();
    return responseBodyStream.pipeThrough(createEventStreamTransformer(customParser)).pipeThrough(createCallbacksTransformer(callbacks));
}
function createEmptyReadableStream() {
    return new ReadableStream({
        start (controller) {
            controller.close();
        }
    });
}
function readableFromAsyncIterable(iterable) {
    let it = iterable[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (controller) {
            const { done, value } = await it.next();
            if (done) controller.close();
            else controller.enqueue(value);
        },
        async cancel (reason) {
            var _a;
            await ((_a = it.return) == null ? void 0 : _a.call(it, reason));
        }
    });
}
;
function createStreamDataTransformer() {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    return new TransformStream({
        transform: async (chunk, controller)=>{
            const message = decoder.decode(chunk);
            controller.enqueue(encoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", message)));
        }
    });
}
;
function parseOpenAIStream() {
    const extract = chunkToText();
    return (data)=>extract(JSON.parse(data));
}
async function* streamable(stream) {
    const extract = chunkToText();
    for await (let chunk of stream){
        if ("promptFilterResults" in chunk) {
            chunk = {
                id: chunk.id,
                created: chunk.created.getDate(),
                object: chunk.object,
                // not exposed by Azure API
                model: chunk.model,
                // not exposed by Azure API
                choices: chunk.choices.map((choice)=>{
                    var _a, _b, _c, _d, _e, _f, _g;
                    return {
                        delta: {
                            content: (_a = choice.delta) == null ? void 0 : _a.content,
                            function_call: (_b = choice.delta) == null ? void 0 : _b.functionCall,
                            role: (_c = choice.delta) == null ? void 0 : _c.role,
                            tool_calls: ((_e = (_d = choice.delta) == null ? void 0 : _d.toolCalls) == null ? void 0 : _e.length) ? (_g = (_f = choice.delta) == null ? void 0 : _f.toolCalls) == null ? void 0 : _g.map((toolCall, index)=>({
                                    index,
                                    id: toolCall.id,
                                    function: toolCall.function,
                                    type: toolCall.type
                                })) : void 0
                        },
                        finish_reason: choice.finishReason,
                        index: choice.index
                    };
                })
            };
        }
        const text = extract(chunk);
        if (text) yield text;
    }
}
function chunkToText() {
    const trimStartOfStream = trimStartOfStreamHelper();
    let isFunctionStreamingIn;
    return (json)=>{
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
        if (isChatCompletionChunk(json)) {
            const delta = (_a = json.choices[0]) == null ? void 0 : _a.delta;
            if ((_b = delta.function_call) == null ? void 0 : _b.name) {
                isFunctionStreamingIn = true;
                return {
                    isText: false,
                    content: `{"function_call": {"name": "${delta.function_call.name}", "arguments": "`
                };
            } else if ((_e = (_d = (_c = delta.tool_calls) == null ? void 0 : _c[0]) == null ? void 0 : _d.function) == null ? void 0 : _e.name) {
                isFunctionStreamingIn = true;
                const toolCall = delta.tool_calls[0];
                if (toolCall.index === 0) {
                    return {
                        isText: false,
                        content: `{"tool_calls":[ {"id": "${toolCall.id}", "type": "function", "function": {"name": "${(_f = toolCall.function) == null ? void 0 : _f.name}", "arguments": "`
                    };
                } else {
                    return {
                        isText: false,
                        content: `"}}, {"id": "${toolCall.id}", "type": "function", "function": {"name": "${(_g = toolCall.function) == null ? void 0 : _g.name}", "arguments": "`
                    };
                }
            } else if ((_h = delta.function_call) == null ? void 0 : _h.arguments) {
                return {
                    isText: false,
                    content: cleanupArguments((_i = delta.function_call) == null ? void 0 : _i.arguments)
                };
            } else if ((_l = (_k = (_j = delta.tool_calls) == null ? void 0 : _j[0]) == null ? void 0 : _k.function) == null ? void 0 : _l.arguments) {
                return {
                    isText: false,
                    content: cleanupArguments((_o = (_n = (_m = delta.tool_calls) == null ? void 0 : _m[0]) == null ? void 0 : _n.function) == null ? void 0 : _o.arguments)
                };
            } else if (isFunctionStreamingIn && (((_p = json.choices[0]) == null ? void 0 : _p.finish_reason) === "function_call" || ((_q = json.choices[0]) == null ? void 0 : _q.finish_reason) === "stop")) {
                isFunctionStreamingIn = false;
                return {
                    isText: false,
                    content: '"}}'
                };
            } else if (isFunctionStreamingIn && ((_r = json.choices[0]) == null ? void 0 : _r.finish_reason) === "tool_calls") {
                isFunctionStreamingIn = false;
                return {
                    isText: false,
                    content: '"}}]}'
                };
            }
        }
        const text = trimStartOfStream(isChatCompletionChunk(json) && json.choices[0].delta.content ? json.choices[0].delta.content : isCompletion(json) ? json.choices[0].text : "");
        return text;
    };
    function cleanupArguments(argumentChunk) {
        let escapedPartialJson = argumentChunk.replace(/\\/g, "\\\\").replace(/\//g, "\\/").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
        return `${escapedPartialJson}`;
    }
}
var __internal__OpenAIFnMessagesSymbol = Symbol("internal_openai_fn_messages");
function isChatCompletionChunk(data) {
    return "choices" in data && data.choices && data.choices[0] && "delta" in data.choices[0];
}
function isCompletion(data) {
    return "choices" in data && data.choices && data.choices[0] && "text" in data.choices[0];
}
function OpenAIStream(res, callbacks) {
    const cb = callbacks;
    let stream;
    if (Symbol.asyncIterator in res) {
        stream = readableFromAsyncIterable(streamable(res)).pipeThrough(createCallbacksTransformer((cb == null ? void 0 : cb.experimental_onFunctionCall) || (cb == null ? void 0 : cb.experimental_onToolCall) ? {
            ...cb,
            onFinal: void 0
        } : {
            ...cb
        }));
    } else {
        stream = AIStream(res, parseOpenAIStream(), (cb == null ? void 0 : cb.experimental_onFunctionCall) || (cb == null ? void 0 : cb.experimental_onToolCall) ? {
            ...cb,
            onFinal: void 0
        } : {
            ...cb
        });
    }
    if (cb && (cb.experimental_onFunctionCall || cb.experimental_onToolCall)) {
        const functionCallTransformer = createFunctionCallTransformer(cb);
        return stream.pipeThrough(functionCallTransformer);
    } else {
        return stream.pipeThrough(createStreamDataTransformer());
    }
}
function createFunctionCallTransformer(callbacks) {
    const textEncoder = new TextEncoder();
    let isFirstChunk = true;
    let aggregatedResponse = "";
    let aggregatedFinalCompletionResponse = "";
    let isFunctionStreamingIn = false;
    let functionCallMessages = callbacks[__internal__OpenAIFnMessagesSymbol] || [];
    const decode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createChunkDecoder"])();
    return new TransformStream({
        async transform (chunk, controller) {
            const message = decode(chunk);
            aggregatedFinalCompletionResponse += message;
            const shouldHandleAsFunction = isFirstChunk && (message.startsWith('{"function_call":') || message.startsWith('{"tool_calls":'));
            if (shouldHandleAsFunction) {
                isFunctionStreamingIn = true;
                aggregatedResponse += message;
                isFirstChunk = false;
                return;
            }
            if (!isFunctionStreamingIn) {
                controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", message)));
                return;
            } else {
                aggregatedResponse += message;
            }
        },
        async flush (controller) {
            try {
                if (!isFirstChunk && isFunctionStreamingIn && (callbacks.experimental_onFunctionCall || callbacks.experimental_onToolCall)) {
                    isFunctionStreamingIn = false;
                    const payload = JSON.parse(aggregatedResponse);
                    let newFunctionCallMessages = [
                        ...functionCallMessages
                    ];
                    let functionResponse = void 0;
                    if (callbacks.experimental_onFunctionCall) {
                        if (payload.function_call === void 0) {
                            console.warn("experimental_onFunctionCall should not be defined when using tools");
                        }
                        const argumentsPayload = JSON.parse(payload.function_call.arguments);
                        functionResponse = await callbacks.experimental_onFunctionCall({
                            name: payload.function_call.name,
                            arguments: argumentsPayload
                        }, (result)=>{
                            newFunctionCallMessages = [
                                ...functionCallMessages,
                                {
                                    role: "assistant",
                                    content: "",
                                    function_call: payload.function_call
                                },
                                {
                                    role: "function",
                                    name: payload.function_call.name,
                                    content: JSON.stringify(result)
                                }
                            ];
                            return newFunctionCallMessages;
                        });
                    }
                    if (callbacks.experimental_onToolCall) {
                        const toolCalls = {
                            tools: []
                        };
                        for (const tool of payload.tool_calls){
                            toolCalls.tools.push({
                                id: tool.id,
                                type: "function",
                                func: {
                                    name: tool.function.name,
                                    arguments: JSON.parse(tool.function.arguments)
                                }
                            });
                        }
                        let responseIndex = 0;
                        try {
                            functionResponse = await callbacks.experimental_onToolCall(toolCalls, (result)=>{
                                if (result) {
                                    const { tool_call_id, function_name, tool_call_result } = result;
                                    newFunctionCallMessages = [
                                        ...newFunctionCallMessages,
                                        // Only append the assistant message if it's the first response
                                        ...responseIndex === 0 ? [
                                            {
                                                role: "assistant",
                                                content: "",
                                                tool_calls: payload.tool_calls.map((tc)=>({
                                                        id: tc.id,
                                                        type: "function",
                                                        function: {
                                                            name: tc.function.name,
                                                            // we send the arguments an object to the user, but as the API expects a string, we need to stringify it
                                                            arguments: JSON.stringify(tc.function.arguments)
                                                        }
                                                    }))
                                            }
                                        ] : [],
                                        // Append the function call result message
                                        {
                                            role: "tool",
                                            tool_call_id,
                                            name: function_name,
                                            content: JSON.stringify(tool_call_result)
                                        }
                                    ];
                                    responseIndex++;
                                }
                                return newFunctionCallMessages;
                            });
                        } catch (e) {
                            console.error("Error calling experimental_onToolCall:", e);
                        }
                    }
                    if (!functionResponse) {
                        controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])(payload.function_call ? "function_call" : "tool_calls", // parse to prevent double-encoding:
                        JSON.parse(aggregatedResponse))));
                        return;
                    } else if (typeof functionResponse === "string") {
                        controller.enqueue(textEncoder.encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatStreamPart"])("text", functionResponse)));
                        aggregatedFinalCompletionResponse = functionResponse;
                        return;
                    }
                    const filteredCallbacks = {
                        ...callbacks,
                        onStart: void 0
                    };
                    callbacks.onFinal = void 0;
                    const openAIStream = OpenAIStream(functionResponse, {
                        ...filteredCallbacks,
                        [__internal__OpenAIFnMessagesSymbol]: newFunctionCallMessages
                    });
                    const reader = openAIStream.getReader();
                    while(true){
                        const { done, value } = await reader.read();
                        if (done) {
                            break;
                        }
                        controller.enqueue(value);
                    }
                }
            } finally{
                if (callbacks.onFinal && aggregatedFinalCompletionResponse) {
                    await callbacks.onFinal(aggregatedFinalCompletionResponse);
                }
            }
        }
    });
}
// rsc/constants.ts
var STREAMABLE_VALUE_TYPE = Symbol.for("ui.streamable.value");
var DEV_DEFAULT_STREAMABLE_WARNING_TIME = 15 * 1e3;
// rsc/streamable.tsx
function createStreamableUI(initialValue) {
    let currentValue = initialValue;
    let closed = false;
    let { row, resolve, reject } = createSuspensedChunk(initialValue);
    function assertStream(method) {
        if (closed) {
            throw new Error(method + ": UI stream is already closed.");
        }
    }
    let warningTimeout;
    function warnUnclosedStream() {
        if ("TURBOPACK compile-time truthy", 1) {
            if (warningTimeout) {
                clearTimeout(warningTimeout);
            }
            warningTimeout = setTimeout(()=>{
                console.warn("The streamable UI has been slow to update. This may be a bug or a performance issue or you forgot to call `.done()`.");
            }, DEV_DEFAULT_STREAMABLE_WARNING_TIME);
        }
    }
    warnUnclosedStream();
    const streamable2 = {
        value: row,
        update (value) {
            assertStream(".update()");
            if (value === currentValue) {
                warnUnclosedStream();
                return streamable2;
            }
            const resolvable = createResolvablePromise();
            currentValue = value;
            resolve({
                value: currentValue,
                done: false,
                next: resolvable.promise
            });
            resolve = resolvable.resolve;
            reject = resolvable.reject;
            warnUnclosedStream();
            return streamable2;
        },
        append (value) {
            assertStream(".append()");
            const resolvable = createResolvablePromise();
            currentValue = value;
            resolve({
                value,
                done: false,
                append: true,
                next: resolvable.promise
            });
            resolve = resolvable.resolve;
            reject = resolvable.reject;
            warnUnclosedStream();
            return streamable2;
        },
        error (error) {
            assertStream(".error()");
            if (warningTimeout) {
                clearTimeout(warningTimeout);
            }
            closed = true;
            reject(error);
            return streamable2;
        },
        done (...args) {
            assertStream(".done()");
            if (warningTimeout) {
                clearTimeout(warningTimeout);
            }
            closed = true;
            if (args.length) {
                resolve({
                    value: args[0],
                    done: true
                });
                return streamable2;
            }
            resolve({
                value: currentValue,
                done: true
            });
            return streamable2;
        }
    };
    return streamable2;
}
var STREAMABLE_VALUE_INTERNAL_LOCK = Symbol("streamable.value.lock");
function createStreamableValue(initialValue) {
    const isReadableStream = initialValue instanceof ReadableStream || typeof initialValue === "object" && initialValue !== null && "getReader" in initialValue && typeof initialValue.getReader === "function" && "locked" in initialValue && typeof initialValue.locked === "boolean";
    if (!isReadableStream) {
        return createStreamableValueImpl(initialValue);
    }
    const streamableValue = createStreamableValueImpl();
    streamableValue[STREAMABLE_VALUE_INTERNAL_LOCK] = true;
    (async ()=>{
        try {
            const reader = initialValue.getReader();
            while(true){
                const { value, done } = await reader.read();
                if (done) {
                    break;
                }
                streamableValue[STREAMABLE_VALUE_INTERNAL_LOCK] = false;
                if (typeof value === "string") {
                    streamableValue.append(value);
                } else {
                    streamableValue.update(value);
                }
                streamableValue[STREAMABLE_VALUE_INTERNAL_LOCK] = true;
            }
            streamableValue[STREAMABLE_VALUE_INTERNAL_LOCK] = false;
            streamableValue.done();
        } catch (e) {
            streamableValue[STREAMABLE_VALUE_INTERNAL_LOCK] = false;
            streamableValue.error(e);
        }
    })();
    return streamableValue;
}
function createStreamableValueImpl(initialValue) {
    let closed = false;
    let locked = false;
    let resolvable = createResolvablePromise();
    let currentValue = initialValue;
    let currentError;
    let currentPromise = resolvable.promise;
    let currentPatchValue;
    function assertStream(method) {
        if (closed) {
            throw new Error(method + ": Value stream is already closed.");
        }
        if (locked) {
            throw new Error(method + ": Value stream is locked and cannot be updated.");
        }
    }
    let warningTimeout;
    function warnUnclosedStream() {
        if ("TURBOPACK compile-time truthy", 1) {
            if (warningTimeout) {
                clearTimeout(warningTimeout);
            }
            warningTimeout = setTimeout(()=>{
                console.warn("The streamable value has been slow to update. This may be a bug or a performance issue or you forgot to call `.done()`.");
            }, DEV_DEFAULT_STREAMABLE_WARNING_TIME);
        }
    }
    warnUnclosedStream();
    function createWrapped(initialChunk) {
        let init;
        if (currentError !== void 0) {
            init = {
                error: currentError
            };
        } else {
            if (currentPatchValue && !initialChunk) {
                init = {
                    diff: currentPatchValue
                };
            } else {
                init = {
                    curr: currentValue
                };
            }
        }
        if (currentPromise) {
            init.next = currentPromise;
        }
        if (initialChunk) {
            init.type = STREAMABLE_VALUE_TYPE;
        }
        return init;
    }
    function updateValueStates(value) {
        currentPatchValue = void 0;
        if (typeof value === "string") {
            if (typeof currentValue === "string") {
                if (value.startsWith(currentValue)) {
                    currentPatchValue = [
                        0,
                        value.slice(currentValue.length)
                    ];
                }
            }
        }
        currentValue = value;
    }
    const streamable2 = {
        set [STREAMABLE_VALUE_INTERNAL_LOCK] (state){
            locked = state;
        },
        get value () {
            return createWrapped(true);
        },
        update (value) {
            assertStream(".update()");
            const resolvePrevious = resolvable.resolve;
            resolvable = createResolvablePromise();
            updateValueStates(value);
            currentPromise = resolvable.promise;
            resolvePrevious(createWrapped());
            warnUnclosedStream();
            return streamable2;
        },
        append (value) {
            assertStream(".append()");
            if (typeof currentValue !== "string" && typeof currentValue !== "undefined") {
                throw new Error(`.append(): The current value is not a string. Received: ${typeof currentValue}`);
            }
            if (typeof value !== "string") {
                throw new Error(`.append(): The value is not a string. Received: ${typeof value}`);
            }
            const resolvePrevious = resolvable.resolve;
            resolvable = createResolvablePromise();
            if (typeof currentValue === "string") {
                currentPatchValue = [
                    0,
                    value
                ];
                currentValue = currentValue + value;
            } else {
                currentPatchValue = void 0;
                currentValue = value;
            }
            currentPromise = resolvable.promise;
            resolvePrevious(createWrapped());
            warnUnclosedStream();
            return streamable2;
        },
        error (error) {
            assertStream(".error()");
            if (warningTimeout) {
                clearTimeout(warningTimeout);
            }
            closed = true;
            currentError = error;
            currentPromise = void 0;
            resolvable.resolve({
                error
            });
            return streamable2;
        },
        done (...args) {
            assertStream(".done()");
            if (warningTimeout) {
                clearTimeout(warningTimeout);
            }
            closed = true;
            currentPromise = void 0;
            if (args.length) {
                updateValueStates(args[0]);
                resolvable.resolve(createWrapped());
                return streamable2;
            }
            resolvable.resolve({});
            return streamable2;
        }
    };
    return streamable2;
}
function render(options) {
    const ui = createStreamableUI(options.initial);
    const text = options.text ? options.text : ({ content })=>content;
    const functions = options.functions ? Object.entries(options.functions).map(([name, { description, parameters }])=>{
        return {
            name,
            description,
            parameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(parameters)
        };
    }) : void 0;
    const tools = options.tools ? Object.entries(options.tools).map(([name, { description, parameters }])=>{
        return {
            type: "function",
            function: {
                name,
                description,
                parameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(parameters)
            }
        };
    }) : void 0;
    if (functions && tools) {
        throw new Error("You can't have both functions and tools defined. Please choose one or the other.");
    }
    let finished;
    async function handleRender(args, renderer, res) {
        if (!renderer) return;
        const resolvable = createResolvablePromise();
        if (finished) {
            finished = finished.then(()=>resolvable.promise);
        } else {
            finished = resolvable.promise;
        }
        const value = renderer(args);
        if (value instanceof Promise || value && typeof value === "object" && "then" in value && typeof value.then === "function") {
            const node = await value;
            res.update(node);
            resolvable.resolve(void 0);
        } else if (value && typeof value === "object" && Symbol.asyncIterator in value) {
            const it = value;
            while(true){
                const { done, value: value2 } = await it.next();
                res.update(value2);
                if (done) break;
            }
            resolvable.resolve(void 0);
        } else if (value && typeof value === "object" && Symbol.iterator in value) {
            const it = value;
            while(true){
                const { done, value: value2 } = it.next();
                res.update(value2);
                if (done) break;
            }
            resolvable.resolve(void 0);
        } else {
            res.update(value);
            resolvable.resolve(void 0);
        }
    }
    (async ()=>{
        let hasFunction = false;
        let content = "";
        consumeStream(OpenAIStream(await options.provider.chat.completions.create({
            model: options.model,
            messages: options.messages,
            temperature: options.temperature,
            stream: true,
            ...functions ? {
                functions
            } : {},
            ...tools ? {
                tools
            } : {}
        }), {
            ...functions ? {
                async experimental_onFunctionCall (functionCallPayload) {
                    var _a, _b;
                    hasFunction = true;
                    handleRender(functionCallPayload.arguments, (_b = (_a = options.functions) == null ? void 0 : _a[functionCallPayload.name]) == null ? void 0 : _b.render, ui);
                }
            } : {},
            ...tools ? {
                async experimental_onToolCall (toolCallPayload) {
                    var _a, _b;
                    hasFunction = true;
                    for (const tool of toolCallPayload.tools){
                        handleRender(tool.func.arguments, (_b = (_a = options.tools) == null ? void 0 : _a[tool.func.name]) == null ? void 0 : _b.render, ui);
                    }
                }
            } : {},
            onText (chunk) {
                content += chunk;
                handleRender({
                    content,
                    done: false,
                    delta: chunk
                }, text, ui);
            },
            async onFinal () {
                if (hasFunction) {
                    await finished;
                    ui.done();
                    return;
                }
                handleRender({
                    content,
                    done: true
                }, text, ui);
                await finished;
                ui.done();
            }
        }));
    })();
    return ui.value;
}
;
;
var defaultTextRenderer = ({ content })=>content;
async function streamUI({ model, tools, toolChoice, system, prompt, messages, maxRetries, abortSignal, headers, initial, text, onFinish, ...settings }) {
    if (typeof model === "string") {
        throw new Error("`model` cannot be a string in `streamUI`. Use the actual model instance instead.");
    }
    if ("functions" in settings) {
        throw new Error("`functions` is not supported in `streamUI`, use `tools` instead.");
    }
    if ("provider" in settings) {
        throw new Error("`provider` is no longer needed in `streamUI`. Use `model` instead.");
    }
    if (tools) {
        for (const [name, tool] of Object.entries(tools)){
            if ("render" in tool) {
                throw new Error("Tool definition in `streamUI` should not have `render` property. Use `generate` instead. Found in tool: " + name);
            }
        }
    }
    const ui = createStreamableUI(initial);
    const textRender = text || defaultTextRenderer;
    let finished;
    async function handleRender(args, renderer, res, lastCall = false) {
        if (!renderer) return;
        const resolvable = createResolvablePromise();
        if (finished) {
            finished = finished.then(()=>resolvable.promise);
        } else {
            finished = resolvable.promise;
        }
        const value = renderer(...args);
        if (value instanceof Promise || value && typeof value === "object" && "then" in value && typeof value.then === "function") {
            const node = await value;
            if (lastCall) {
                res.done(node);
            } else {
                res.update(node);
            }
            resolvable.resolve(void 0);
        } else if (value && typeof value === "object" && Symbol.asyncIterator in value) {
            const it = value;
            while(true){
                const { done, value: value2 } = await it.next();
                if (lastCall && done) {
                    res.done(value2);
                } else {
                    res.update(value2);
                }
                if (done) break;
            }
            resolvable.resolve(void 0);
        } else if (value && typeof value === "object" && Symbol.iterator in value) {
            const it = value;
            while(true){
                const { done, value: value2 } = it.next();
                if (lastCall && done) {
                    res.done(value2);
                } else {
                    res.update(value2);
                }
                if (done) break;
            }
            resolvable.resolve(void 0);
        } else {
            if (lastCall) {
                res.done(value);
            } else {
                res.update(value);
            }
            resolvable.resolve(void 0);
        }
    }
    const retry = retryWithExponentialBackoff({
        maxRetries
    });
    const validatedPrompt = getValidatedPrompt({
        system,
        prompt,
        messages
    });
    const result = await retry(()=>model.doStream({
            mode: {
                type: "regular",
                ...prepareToolsAndToolChoice({
                    tools,
                    toolChoice
                })
            },
            ...prepareCallSettings(settings),
            inputFormat: validatedPrompt.type,
            prompt: convertToLanguageModelPrompt(validatedPrompt),
            abortSignal,
            headers
        }));
    const [stream, forkedStream] = result.stream.tee();
    (async ()=>{
        try {
            let content = "";
            let hasToolCall = false;
            const reader = forkedStream.getReader();
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                switch(value.type){
                    case "text-delta":
                        {
                            content += value.textDelta;
                            handleRender([
                                {
                                    content,
                                    done: false,
                                    delta: value.textDelta
                                }
                            ], textRender, ui);
                            break;
                        }
                    case "tool-call-delta":
                        {
                            hasToolCall = true;
                            break;
                        }
                    case "tool-call":
                        {
                            const toolName = value.toolName;
                            if (!tools) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoSuchToolError"]({
                                    toolName
                                });
                            }
                            const tool = tools[toolName];
                            if (!tool) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoSuchToolError"]({
                                    toolName,
                                    availableTools: Object.keys(tools)
                                });
                            }
                            hasToolCall = true;
                            const parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeParseJSON"])({
                                text: value.args,
                                schema: tool.parameters
                            });
                            if (parseResult.success === false) {
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidToolArgumentsError"]({
                                    toolName,
                                    toolArgs: value.args,
                                    cause: parseResult.error
                                });
                            }
                            handleRender([
                                parseResult.value,
                                {
                                    toolName,
                                    toolCallId: value.toolCallId
                                }
                            ], tool.generate, ui, true);
                            break;
                        }
                    case "error":
                        {
                            throw value.error;
                        }
                    case "finish":
                        {
                            onFinish == null ? void 0 : onFinish({
                                finishReason: value.finishReason,
                                usage: calculateCompletionTokenUsage(value.usage),
                                value: ui.value,
                                warnings: result.warnings,
                                rawResponse: result.rawResponse
                            });
                        }
                }
            }
            if (hasToolCall) {
                await finished;
            } else {
                handleRender([
                    {
                        content,
                        done: true
                    }
                ], textRender, ui, true);
                await finished;
            }
        } catch (error) {
            ui.error(error);
        }
    })();
    return {
        ...result,
        stream,
        value: ui.value
    };
}
;
;
;
var innerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("5a7522b313dd544f8b930e49b6dba159bab50d07", $$ACTION_0);
async function $$ACTION_0({ action, options }, state1, ...args) {
    return await withAIState({
        state: state1,
        options
    }, async ()=>{
        const result = await action(...args);
        sealMutableAIState();
        return [
            getAIStateDeltaPromise(),
            result
        ];
    });
}
function wrapAction(action, options) {
    return innerAction.bind(null, {
        action,
        options
    });
}
function createAI({ actions, initialAIState, initialUIState, onSetAIState, onGetUIState }) {
    const wrappedActions = {};
    for(const name in actions){
        wrappedActions[name] = wrapAction(actions[name], {
            onSetAIState
        });
    }
    const wrappedSyncUIState = onGetUIState ? wrapAction(onGetUIState, {}) : void 0;
    const AI = async (props)=>{
        var _a, _b;
        if ("useState" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__) {
            throw new Error("This component can only be used inside Server Components.");
        }
        let uiState = (_a = props.initialUIState) != null ? _a : initialUIState;
        let aiState = (_b = props.initialAIState) != null ? _b : initialAIState;
        let aiStateDelta = void 0;
        if (wrappedSyncUIState) {
            const [newAIStateDelta, newUIState] = await wrappedSyncUIState(aiState);
            if (newUIState !== void 0) {
                aiStateDelta = newAIStateDelta;
                uiState = newUIState;
            }
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InternalAIProvider"], {
            wrappedActions,
            wrappedSyncUIState,
            initialUIState: uiState,
            initialAIState: aiState,
            initialAIStatePatch: aiStateDelta,
            children: props.children
        });
    };
    return AI;
}
;
 //# sourceMappingURL=rsc-server.mjs.map

})()),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/chat.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({
    '06ff66d2cf5009eb575f572135e256000e6d69d7': (...args)=>Promise.resolve(__turbopack_require__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getChat'])(...args)),
    '26ff88276f1422ccb7d07d1b5b4a23d7ddeb872e': (...args)=>Promise.resolve(__turbopack_require__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['shareChat'])(...args)),
    '498a2835364340fad66e4902c390c4ea01ad1bd8': (...args)=>Promise.resolve(__turbopack_require__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getChats'])(...args)),
    '5a7522b313dd544f8b930e49b6dba159bab50d07': (...args)=>Promise.resolve(__turbopack_require__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)")).then((mod)=>(0, mod['$$ACTION_0'])(...args)),
    '7a8dc6bee7cd0b9e920403b38265c786fd2e15cd': (...args)=>Promise.resolve(__turbopack_require__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['getSharedChat'])(...args)),
    '833db4948b1b74ab764aeed32d37f096cf6b5498': (...args)=>Promise.resolve(__turbopack_require__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['clearChats'])(...args)),
    'd6fec9fa00168e3bc03dd53f61a0be98da52d105': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/actions.tsx [app-rsc] (ecmascript)")).then((mod)=>(0, mod['$$ACTION_1'])(...args)),
    'daab9428748002bb5d7cf7dc3684e4b0f08ef85e': (...args)=>Promise.resolve(__turbopack_require__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)")).then((mod)=>(0, mod['saveChat'])(...args)),
    'ee0ea4b2c3481a96aef88a72b0e4b5e7f8e224a4': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/actions.tsx [app-rsc] (ecmascript)")).then((mod)=>(0, mod['$$ACTION_2'])(...args)),
    'fcb1bed4c9ae3c596bdc26846d7db0b90c54e58e': (...args)=>Promise.resolve(__turbopack_require__("[project]/app/actions.tsx [app-rsc] (ecmascript)")).then((mod)=>(0, mod['$$ACTION_0'])(...args))
});

}.call(this) }),

};

//# sourceMappingURL=_9c4c19._.js.map