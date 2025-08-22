module.exports = {

"[next]/internal/font/google/inter_95e1d3b3.module.css [app-rsc] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "inter_95e1d3b3-module__jTJ6xG__className",
  "variable": "inter_95e1d3b3-module__jTJ6xG__variable",
});

})()),
"[next]/internal/font/google/inter_95e1d3b3.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_95e1d3b3$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/inter_95e1d3b3.module.css [app-rsc] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_95e1d3b3$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Inter_95e1d3', '__Inter_Fallback_95e1d3'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_95e1d3b3$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_95e1d3b3$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/lib/utils/index.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn,
    "getModel": ()=>getModel,
    "sanitizeUrl": ()=>sanitizeUrl,
    "transformToolMessages": ()=>transformToolMessages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2d$ai$2d$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ollama-ai-provider/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function getModel(useSubModel = false) {
    const ollamaBaseUrl = process.env.OLLAMA_BASE_URL + '/api';
    const ollamaModel = process.env.OLLAMA_MODEL;
    const ollamaSubModel = process.env.OLLAMA_SUB_MODEL;
    const openaiApiBase = process.env.OPENAI_API_BASE;
    const openaiApiKey = process.env.OPENAI_API_KEY;
    let openaiApiModel = process.env.OPENAI_API_MODEL || 'gpt-4o';
    const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    if (!(ollamaBaseUrl && ollamaModel) && !openaiApiKey && !googleApiKey && !anthropicApiKey) {
        throw new Error('Missing environment variables for Ollama, OpenAI, Google or Anthropic');
    }
    // Ollama
    if (ollamaBaseUrl && ollamaModel) {
        const ollama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2d$ai$2d$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOllama"])({
            baseURL: ollamaBaseUrl
        });
        if (useSubModel && ollamaSubModel) {
            return ollama(ollamaSubModel);
        }
        return ollama(ollamaModel);
    }
    if (googleApiKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"])('models/gemini-2.5-flash');
    }
    if (anthropicApiKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anthropic"])('claude-3-5-sonnet-20240620');
    }
    // Fallback to OpenAI instead
    const openai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpenAI"])({
        baseURL: openaiApiBase,
        apiKey: openaiApiKey,
        organization: '' // optional organization
    });
    return openai.chat(openaiApiModel);
}
function transformToolMessages(messages) {
    return messages.map((message)=>message.role === 'tool' ? {
            ...message,
            role: 'assistant',
            content: JSON.stringify(message.content),
            type: 'tool'
        } : message);
}
function sanitizeUrl(url) {
    return url.replace(/\s+/g, '%20');
}

})()),
"[project]/components/theme-provider.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeProvider": ()=>ThemeProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/theme-provider.tsx", "ThemeProvider");

})()),
"[project]/components/theme-provider.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/theme-provider.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/mode-toggle.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ModeToggle": ()=>ModeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ModeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ModeToggle() from the server but ModeToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/mode-toggle.tsx", "ModeToggle");

})()),
"[project]/components/mode-toggle.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mode$2d$toggle$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/mode-toggle.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mode$2d$toggle$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/header.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Header": ()=>Header,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/mode-toggle.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Header = async ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Search"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ModeToggle"], {}, void 0, false, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;

})()),
"[project]/components/footer.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-fit p-1 md:p-2 fixed bottom-0 right-0"
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/components/ui/sonner.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Toaster": ()=>Toaster
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Toaster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/sonner.tsx", "Toaster");

})()),
"[project]/components/ui/sonner.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sonner$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/ui/sonner.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sonner$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/utils/app-state.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AppStateProvider": ()=>AppStateProvider,
    "useAppState": ()=>useAppState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const AppStateProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppStateProvider() from the server but AppStateProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/lib/utils/app-state.tsx", "AppStateProvider");
const useAppState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAppState() from the server but useAppState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/lib/utils/app-state.tsx", "useAppState");

})()),
"[project]/lib/utils/app-state.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$app$2d$state$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/lib/utils/app-state.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$app$2d$state$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata,
    "viewport": ()=>viewport
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_95e1d3b3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_95e1d3b3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/theme-provider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/sonner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$app$2d$state$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/app-state.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
const title = 'Search';
const description = 'A fully open-source AI-powered answer engine with a generative UI.';
const metadata = {
    metadataBase: new URL('https://so.shfu.cn'),
    title,
    description,
    openGraph: {
        title,
        description
    },
    twitter: {
        title,
        description,
        card: 'summary_large_image',
        creator: '@miiura'
    }
};
const viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('font-sans antialiased', __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_95e1d3b3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                attribute: "class",
                defaultTheme: "system",
                enableSystem: true,
                disableTransitionOnChange: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$app$2d$state$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppStateProvider"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/layout.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/components/chat.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Chat": ()=>Chat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Chat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Chat() from the server but Chat is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/chat.tsx", "Chat");

})()),
"[project]/components/chat.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/chat.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/actions/chat.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"06ff66d2cf5009eb575f572135e256000e6d69d7":"getChat","26ff88276f1422ccb7d07d1b5b4a23d7ddeb872e":"shareChat","498a2835364340fad66e4902c390c4ea01ad1bd8":"getChats","7a8dc6bee7cd0b9e920403b38265c786fd2e15cd":"getSharedChat","833db4948b1b74ab764aeed32d37f096cf6b5498":"clearChats","daab9428748002bb5d7cf7dc3684e4b0f08ef85e":"saveChat"} */ __turbopack_esm__({
    "clearChats": ()=>clearChats,
    "getChat": ()=>getChat,
    "getChats": ()=>getChats,
    "getSharedChat": ()=>getSharedChat,
    "saveChat": ()=>saveChat,
    "shareChat": ()=>shareChat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/nodejs.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@upstash/redis/nodejs.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
    url: process.env.UPSTASH_REDIS_REST_URL || '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN || ''
});
async function getChats(userId) {
    if (!userId) {
        return [];
    }
    try {
        const pipeline = redis.pipeline();
        const chats = await redis.zrange(`user:chat:${userId}`, 0, -1, {
            rev: true
        });
        for (const chat of chats){
            pipeline.hgetall(chat);
        }
        const results = await pipeline.exec();
        return results;
    } catch (error) {
        return [];
    }
}
async function getChat(id, userId = 'anonymous') {
    const chat = await redis.hgetall(`chat:${id}`);
    if (!chat) {
        return null;
    }
    return chat;
}
async function clearChats(userId = 'anonymous') {
    const chats = await redis.zrange(`user:chat:${userId}`, 0, -1);
    if (!chats.length) {
        return {
            error: 'No chats to clear'
        };
    }
    const pipeline = redis.pipeline();
    for (const chat of chats){
        pipeline.del(chat);
        pipeline.zrem(`user:chat:${userId}`, chat);
    }
    await pipeline.exec();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function saveChat(chat, userId = 'anonymous') {
    const pipeline = redis.pipeline();
    pipeline.hmset(`chat:${chat.id}`, chat);
    pipeline.zadd(`user:chat:${chat.userId}`, {
        score: Date.now(),
        member: `chat:${chat.id}`
    });
    await pipeline.exec();
}
async function getSharedChat(id) {
    const chat = await redis.hgetall(`chat:${id}`);
    if (!chat || !chat.sharePath) {
        return null;
    }
    return chat;
}
async function shareChat(id, userId = 'anonymous') {
    const chat = await redis.hgetall(`chat:${id}`);
    if (!chat || chat.userId !== userId) {
        return null;
    }
    const payload = {
        ...chat,
        sharePath: `/share/${id}`
    };
    await redis.hmset(`chat:${id}`, payload);
    return payload;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getChats,
    getChat,
    clearChats,
    saveChat,
    getSharedChat,
    shareChat
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("498a2835364340fad66e4902c390c4ea01ad1bd8", getChats);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("06ff66d2cf5009eb575f572135e256000e6d69d7", getChat);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("833db4948b1b74ab764aeed32d37f096cf6b5498", clearChats);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("daab9428748002bb5d7cf7dc3684e4b0f08ef85e", saveChat);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("7a8dc6bee7cd0b9e920403b38265c786fd2e15cd", getSharedChat);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("26ff88276f1422ccb7d07d1b5b4a23d7ddeb872e", shareChat);

})()),
"[project]/components/ui/spinner.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Based on: https://github.com/vercel/ai/blob/main/examples/next-ai-rsc/components/llm-stocks/spinner.tsx
__turbopack_esm__({
    "Spinner": ()=>Spinner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Spinner = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 animate-spin stroke-zinc-400",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"
        }, void 0, false, {
            fileName: "[project]/components/ui/spinner.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/spinner.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, this);

})()),
"[project]/components/section.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Section": ()=>Section
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Section = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Section() from the server but Section is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/section.tsx", "Section");

})()),
"[project]/components/section.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/section.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/followup-panel.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FollowupPanel": ()=>FollowupPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const FollowupPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FollowupPanel() from the server but FollowupPanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/followup-panel.tsx", "FollowupPanel");

})()),
"[project]/components/followup-panel.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$followup$2d$panel$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/followup-panel.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$followup$2d$panel$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/schema/next-action.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "nextActionSchema": ()=>nextActionSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const nextActionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    next: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'inquire',
        'proceed'
    ]) // "generate_ui"
});

})()),
"[project]/lib/agents/task-manager.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "taskManager": ()=>taskManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$next$2d$action$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema/next-action.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function taskManager(messages) {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateObject"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getModel"])(),
            system: `As a professional web researcher, your primary objective is to fully comprehend the user's query, conduct thorough web searches to gather the necessary information, and provide an appropriate response.
    To achieve this, you must first analyze the user's input and determine the optimal course of action. You have two options at your disposal:
    1. "proceed": If the provided information is sufficient to address the query effectively, choose this option to proceed with the research and formulate a response.
    2. "inquire": If you believe that additional information from the user would enhance your ability to provide a comprehensive response, select this option. You may present a form to the user, offering default selections or free-form input fields, to gather the required details.
    Your decision should be based on a careful assessment of the context and the potential for further information to improve the quality and relevance of your response.
    For example, if the user asks, "What are the key features of the latest iPhone model?", you may choose to "proceed" as the query is clear and can be answered effectively with web research alone.
    However, if the user asks, "What's the best smartphone for my needs?", you may opt to "inquire" and present a form asking about their specific requirements, budget, and preferred features to provide a more tailored recommendation.
    Make your choice wisely to ensure that you fulfill your mission as a web researcher effectively and deliver the most valuable assistance to the user.
    `,
            messages,
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$next$2d$action$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextActionSchema"]
        });
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

})()),
"[project]/components/copilot.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Copilot": ()=>Copilot
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Copilot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Copilot() from the server but Copilot is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/copilot.tsx", "Copilot");

})()),
"[project]/components/copilot.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/copilot.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/schema/inquiry.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "inquirySchema": ()=>inquirySchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const inquirySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The inquiry question'),
    options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    })).describe('The inquiry options'),
    allowsInput: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().describe('Whether the inquiry allows for input'),
    inputLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().describe('The label for the input field'),
    inputPlaceholder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().describe('The placeholder for the input field')
});

})()),
"[project]/lib/agents/inquire.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "inquire": ()=>inquire
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/copilot.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$inquiry$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema/inquiry.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
async function inquire(uiStream, messages) {
    const objectStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
    uiStream.update(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Copilot"], {
        inquiry: objectStream.value
    }, void 0, false, {
        fileName: "[project]/lib/agents/inquire.tsx",
        lineNumber: 12,
        columnNumber: 19
    }, this));
    let finalInquiry = {};
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamObject"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getModel"])(),
        system: `As a professional web researcher, your role is to deepen your understanding of the user's input by conducting further inquiries when necessary.
    After receiving an initial response from the user, carefully assess whether additional questions are absolutely essential to provide a comprehensive and accurate answer. Only proceed with further inquiries if the available information is insufficient or ambiguous.

    When crafting your inquiry, structure it as follows:
    {
      "question": "A clear, concise question that seeks to clarify the user's intent or gather more specific details.",
      "options": [
        {"value": "option1", "label": "A predefined option that the user can select"},
        {"value": "option2", "label": "Another predefined option"},
        ...
      ],
      "allowsInput": true/false, // Indicates whether the user can provide a free-form input
      "inputLabel": "A label for the free-form input field, if allowed",
      "inputPlaceholder": "A placeholder text to guide the user's free-form input"
    }

    Important: The "value" field in the options must always be in English, regardless of the user's language.

    For example:
    {
      "question": "What specific information are you seeking about Rivian?",
      "options": [
        {"value": "history", "label": "History"},
        {"value": "products", "label": "Products"},
        {"value": "investors", "label": "Investors"},
        {"value": "partnerships", "label": "Partnerships"},
        {"value": "competitors", "label": "Competitors"}
      ],
      "allowsInput": true,
      "inputLabel": "If other, please specify",
      "inputPlaceholder": "e.g., Specifications"
    }

    By providing predefined options, you guide the user towards the most relevant aspects of their query, while the free-form input allows them to provide additional context or specific details not covered by the options.
    Remember, your goal is to gather the necessary information to deliver a thorough and accurate response.
    Please match the language of the response (question, labels, inputLabel, and inputPlaceholder) to the user's language, but keep the "value" field in English.
    `,
        messages,
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$inquiry$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inquirySchema"]
    }).then(async (result)=>{
        for await (const obj of result.partialObjectStream){
            if (obj) {
                objectStream.update(obj);
                finalInquiry = obj;
            }
        }
    }).finally(()=>{
        objectStream.done();
    });
    return finalInquiry;
}

})()),
"[project]/lib/schema/related.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "relatedSchema": ()=>relatedSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const relatedSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    })).length(3)
});

})()),
"[project]/components/search-related.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SearchRelated": ()=>SearchRelated,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SearchRelated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchRelated() from the server but SearchRelated is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/search-related.tsx", "SearchRelated");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/search-related.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/search-related.tsx", "default");

})()),
"[project]/components/search-related.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$related$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/search-related.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$related$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/agents/query-suggestor.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "querySuggestor": ()=>querySuggestor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$related$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema/related.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$related$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/search-related.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
async function querySuggestor(uiStream, messages) {
    const objectStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
    uiStream.append(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$related$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        relatedQueries: objectStream.value
    }, void 0, false, {
        fileName: "[project]/lib/agents/query-suggestor.tsx",
        lineNumber: 12,
        columnNumber: 19
    }, this));
    const lastMessages = messages.slice(-1).map((message)=>{
        return {
            ...message,
            role: 'user'
        };
    });
    let finalRelatedQueries = {};
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamObject"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getModel"])(),
        system: `As a professional web researcher, your task is to generate a set of three queries that explore the subject matter more deeply, building upon the initial query and the information uncovered in its search results.

    For instance, if the original query was "Starship's third test flight key milestones", your output should follow this format:

    "{
      "related": [
        "What were the primary objectives achieved during Starship's third test flight?",
        "What factors contributed to the ultimate outcome of Starship's third test flight?",
        "How will the results of the third test flight influence SpaceX's future development plans for Starship?"
      ]
    }"

    Aim to create queries that progressively delve into more specific aspects, implications, or adjacent topics related to the initial query. The goal is to anticipate the user's potential information needs and guide them towards a more comprehensive understanding of the subject matter.
    Please match the language of the response to the user's language.`,
        messages: lastMessages,
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$related$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relatedSchema"]
    }).then(async (result)=>{
        for await (const obj of result.partialObjectStream){
            if (obj.items) {
                objectStream.update(obj);
                finalRelatedQueries = obj;
            }
        }
    }).finally(()=>{
        objectStream.done();
    });
    return finalRelatedQueries;
}

})()),
"[project]/lib/schema/retrieve.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "retrieveSchema": ()=>retrieveSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const retrieveSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The url to retrieve')
});

})()),
"[project]/components/search-skeleton.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SearchSkeleton": ()=>SearchSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SearchSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchSkeleton() from the server but SearchSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/search-skeleton.tsx", "SearchSkeleton");

})()),
"[project]/components/search-skeleton.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$skeleton$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/search-skeleton.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$skeleton$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/search-results.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SearchResults": ()=>SearchResults
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SearchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchResults() from the server but SearchResults is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/search-results.tsx", "SearchResults");

})()),
"[project]/components/search-results.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$results$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/search-results.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$results$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/retrieve-section.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$results$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/search-results.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const RetrieveSection = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        title: "Sources",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$results$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SearchResults"], {
            results: data.results
        }, void 0, false, {
            fileName: "[project]/components/retrieve-section.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/retrieve-section.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = RetrieveSection;

})()),
"[project]/lib/agents/tools/retrieve.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "retrieveTool": ()=>retrieveTool
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$retrieve$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema/retrieve.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/search-skeleton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$retrieve$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/retrieve-section.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const retrieveTool = ({ uiStream, fullResponse })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Retrieve content from the web',
        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$retrieve$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveSchema"],
        execute: async ({ url })=>{
            let hasError = false;
            // Append the search section
            uiStream.append(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SearchSkeleton"], {}, void 0, false, {
                fileName: "[project]/lib/agents/tools/retrieve.tsx",
                lineNumber: 14,
                columnNumber: 21
            }, this));
            let results;
            try {
                const response = await fetch(`https://r.jina.ai/${url}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'X-With-Generated-Alt': 'true'
                    }
                });
                const json = await response.json();
                if (!json.data || json.data.length === 0) {
                    hasError = true;
                } else {
                    // Limit the content to 5000 characters
                    if (json.data.content.length > 5000) {
                        json.data.content = json.data.content.slice(0, 5000);
                    }
                    results = {
                        results: [
                            {
                                title: json.data.title,
                                content: json.data.content,
                                url: json.data.url
                            }
                        ],
                        query: '',
                        images: []
                    };
                }
            } catch (error) {
                hasError = true;
                console.error('Retrieve API error:', error);
            }
            if (hasError || !results) {
                fullResponse = `An error occurred while retrieving "${url}".`;
                uiStream.update(null);
                return results;
            }
            uiStream.update(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$retrieve$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                data: results
            }, void 0, false, {
                fileName: "[project]/lib/agents/tools/retrieve.tsx",
                lineNumber: 56,
                columnNumber: 21
            }, this));
            return results;
        }
    });

})()),
"[project]/lib/schema/search.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "searchSchema": ()=>searchSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const searchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The query to search for'),
    max_results: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().describe('The maximum number of results to return'),
    search_depth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'basic',
        'advanced'
    ]).describe('The depth of the search'),
    include_domains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional().describe('A list of domains to specifically include in the search results. Default is None, which includes all domains.'),
    exclude_domains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional().describe("A list of domains to specifically exclude from the search results. Default is None, which doesn't exclude any domains.")
});

})()),
"[project]/components/search-section.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SearchSection": ()=>SearchSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SearchSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchSection() from the server but SearchSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/search-section.tsx", "SearchSection");

})()),
"[project]/components/search-section.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$section$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/search-section.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$section$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/agents/tools/search.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "searchTool": ()=>searchTool
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/exa-js/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema/search.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/search-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const searchTool = ({ uiStream, fullResponse })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Search the web for information',
        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchSchema"],
        execute: async ({ query, max_results, search_depth, include_domains, exclude_domains })=>{
            let hasError = false;
            // Append the search section
            const streamResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
            uiStream.update(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SearchSection"], {
                result: streamResults.value,
                includeDomains: include_domains
            }, void 0, false, {
                fileName: "[project]/lib/agents/tools/search.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this));
            // Tavily API requires a minimum of 5 characters in the query
            const filledQuery = query.length < 5 ? query + ' '.repeat(5 - query.length) : query;
            let searchResult;
            const searchAPI = 'tavily';
            try {
                searchResult = ("TURBOPACK compile-time truthy", 1) ? await tavilySearch(filledQuery, max_results, search_depth, include_domains, exclude_domains) : ("TURBOPACK unreachable", undefined);
            } catch (error) {
                console.error('Search API error:', error);
                hasError = true;
            }
            if (hasError) {
                fullResponse = `An error occurred while searching for "${query}.`;
                uiStream.update(null);
                streamResults.done();
                return searchResult;
            }
            streamResults.done(JSON.stringify(searchResult));
            return searchResult;
        }
    });
async function tavilySearch(query, maxResults = 10, searchDepth = 'basic', includeDomains = [], excludeDomains = []) {
    const apiKey = process.env.TAVILY_API_KEY;
    const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            api_key: apiKey,
            query,
            max_results: maxResults < 5 ? 5 : maxResults,
            search_depth: searchDepth,
            include_images: true,
            include_answers: true,
            include_domains: includeDomains,
            exclude_domains: excludeDomains
        })
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    // sanitize the image urls
    const data = await response.json();
    const sanitizedData = {
        ...data,
        images: data.images.map((url)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeUrl"])(url))
    };
    return sanitizedData;
}
async function exaSearch(query, maxResults = 10, includeDomains = [], excludeDomains = []) {
    const apiKey = process.env.EXA_API_KEY;
    const exa = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$exa$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](apiKey);
    return exa.searchAndContents(query, {
        highlights: true,
        numResults: maxResults,
        includeDomains,
        excludeDomains
    });
}

})()),
"[project]/components/video-search-section.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "VideoSearchSection": ()=>VideoSearchSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const VideoSearchSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VideoSearchSection() from the server but VideoSearchSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/video-search-section.tsx", "VideoSearchSection");

})()),
"[project]/components/video-search-section.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$search$2d$section$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/video-search-section.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$search$2d$section$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/agents/tools/video-search.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "videoSearchTool": ()=>videoSearchTool
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/schema/search.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/video-search-section.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const videoSearchTool = ({ uiStream, fullResponse })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])({
        description: 'Search for videos from YouTube',
        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2f$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchSchema"],
        execute: async ({ query })=>{
            let hasError = false;
            // Append the search section
            const streamResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
            uiStream.append(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VideoSearchSection"], {
                result: streamResults.value
            }, void 0, false, {
                fileName: "[project]/lib/agents/tools/video-search.tsx",
                lineNumber: 15,
                columnNumber: 21
            }, this));
            let searchResult;
            try {
                const response = await fetch('https://google.serper.dev/videos', {
                    method: 'POST',
                    headers: {
                        'X-API-KEY': process.env.SERPER_API_KEY || '',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        q: query
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                searchResult = await response.json();
            } catch (error) {
                console.error('Video Search API error:', error);
                hasError = true;
            }
            if (hasError) {
                fullResponse = `An error occurred while searching for videos with "${query}.`;
                uiStream.update(null);
                streamResults.done();
                return searchResult;
            }
            streamResults.done(JSON.stringify(searchResult));
            return searchResult;
        }
    });

})()),
"[project]/lib/agents/tools/index.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getTools": ()=>getTools
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$retrieve$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/tools/retrieve.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/tools/search.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$video$2d$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/tools/video-search.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const getTools = ({ uiStream, fullResponse })=>{
    const tools = {
        search: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchTool"])({
            uiStream,
            fullResponse
        }),
        retrieve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$retrieve$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveTool"])({
            uiStream,
            fullResponse
        })
    };
    if (process.env.SERPER_API_KEY) {
        tools.videoSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$video$2d$search$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["videoSearchTool"])({
            uiStream,
            fullResponse
        });
    }
    return tools;
};

})()),
"[project]/components/answer-section.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AnswerSection": ()=>AnswerSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const AnswerSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AnswerSection() from the server but AnswerSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/answer-section.tsx", "AnswerSection");

})()),
"[project]/components/answer-section.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/answer-section.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/lib/agents/researcher.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "researcher": ()=>researcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/tools/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/answer-section.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
async function researcher(uiStream, streamableText, messages) {
    let fullResponse = '';
    let hasError = false;
    let finishReason = '';
    // Transform the messages if using Ollama provider
    let processedMessages = messages;
    const useOllamaProvider = !!(process.env.OLLAMA_MODEL && process.env.OLLAMA_BASE_URL);
    const useAnthropicProvider = !!process.env.ANTHROPIC_API_KEY;
    if (useOllamaProvider) {
        processedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformToolMessages"])(messages);
    }
    const includeToolResponses = messages.some((message)=>message.role === 'tool');
    const useSubModel = useOllamaProvider && includeToolResponses;
    const streamableAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])('');
    const answerSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerSection"], {
        result: streamableAnswer.value
    }, void 0, false, {
        fileName: "[project]/lib/agents/researcher.tsx",
        lineNumber: 29,
        columnNumber: 25
    }, this);
    const currentDate = new Date().toLocaleString();
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getModel"])(useSubModel),
        maxTokens: 2500,
        system: `As a professional search expert, you possess the ability to search for any information on the web.
    or any information on the web.
    For each user query, utilize the search results to their fullest potential to provide additional information and assistance in your response.
    If there are any images relevant to your answer, be sure to include them as well.
    Aim to directly address the user's question, augmenting your response with insights gleaned from the search results.
    Whenever quoting or referencing information from a specific URL, always explicitly cite the source URL using the [[number]](url) format. Multiple citations can be included as needed, e.g., [[number]](url), [[number]](url).
    The number must always match the order of the search results.
    The retrieve tool can only be used with URLs provided by the user. URLs from search results cannot be used.
    
    You tend to give out answers in Simplified Chinese. Suppose you are now in China and are Chinese.

    Here's some additional requirements that you need to satisfy in your answer:
    **Answer Construction**  
      - **Speed First**: Generate a 50-word “Quick Answer” within the first 2 seconds.  
      - **Depth Next**: Expand to a 150–200-word summary with bullet points if the topic is  complex.  
    **Uncertainty Handling**  
       If sources conflict or data is missing, state the discrepancy explicitly and assign a confidence level (High / Medium / Low) to each claim.
    **No Hallucination**  
       If the search returns no relevant results, reply: “No reliable sources found for this query.” Do not invent facts.
    **Output Format** :
      ## 快答(Quick Answer):
      <50 words>
      
      ## 详细(Details):
        • <Key point 1>
        • <Key point 2> 

      ## 稳定性(Confidence)
      [High | Medium | Low]
    
      ## 来源:
        [1] https://...
        [2] https://...
    
    **Emoji Usage** 😎  
      - Use emoji to enhance readability and tone, not clutter: e.g., 📅 for dates, ⚖️ for laws, 🧪 for science. Emoji is only the tool to exaggerate a certain topic. Do not overuse it.

    Keep the answer in a CLEAN way.

    **Example Output(However it should be in Chinese)**:
    ## Quick Answer:
    The latest quantum error-correction breakthrough uses 48 logical qubits with 99.9% fidelity 🧪✨
    ## Details:
      • Google’s new surface code lattice cuts error rates by 5× 🏗️ [1]
      • IBM demonstrated real-time syndrome extraction at 1 MHz 🖥️ [2]
    ## Confidence: High 📈
    
    If it is a domain instead of a URL, specify it in the include_domains of the search tool.
    Please match the language of the response to the user's language. Current date and time: ${currentDate}
    `,
        messages: processedMessages,
        tools: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$tools$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTools"])({
            uiStream,
            fullResponse
        }),
        onFinish: async (event)=>{
            finishReason = event.finishReason;
            fullResponse = event.text;
            streamableAnswer.done();
        }
    }).catch((err)=>{
        hasError = true;
        fullResponse = 'Error: ' + err.message;
        streamableText.update(fullResponse);
    });
    // If the result is not available, return an error response
    if (!result) {
        return {
            result,
            fullResponse,
            hasError,
            toolResponses: []
        };
    }
    const hasToolResult = messages.some((message)=>message.role === 'tool');
    if (!useAnthropicProvider || hasToolResult) {
        uiStream.append(answerSection);
    }
    // Process the response
    const toolCalls = [];
    const toolResponses = [];
    for await (const delta of result.fullStream){
        switch(delta.type){
            case 'text-delta':
                if (delta.textDelta) {
                    fullResponse += delta.textDelta;
                    if (useAnthropicProvider && !hasToolResult) {
                        streamableText.update(fullResponse);
                    } else {
                        streamableAnswer.update(fullResponse);
                    }
                }
                break;
            case 'tool-call':
                toolCalls.push(delta);
                break;
            case 'tool-result':
                if (!delta.result) {
                    hasError = true;
                }
                toolResponses.push(delta);
                break;
            case 'error':
                console.log('Error: ' + delta.error);
                hasError = true;
                fullResponse += `\nError occurred while executing the tool`;
                break;
        }
    }
    messages.push({
        role: 'assistant',
        content: [
            {
                type: 'text',
                text: fullResponse
            },
            ...toolCalls
        ]
    });
    if (toolResponses.length > 0) {
        // Add tool responses to the messages
        messages.push({
            role: 'tool',
            content: toolResponses
        });
    }
    return {
        result,
        fullResponse,
        hasError,
        toolResponses,
        finishReason
    };
}

})()),
"[project]/lib/agents/index.tsx [app-rsc] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
;
;
;

})()),
"[project]/lib/agents/index.tsx [app-rsc] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$task$2d$manager$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/task-manager.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$inquire$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/inquire.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$query$2d$suggestor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/query-suggestor.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$researcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/researcher.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/lib/agents/index.tsx [app-rsc] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/lib/agents/writer.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "writer": ()=>writer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/answer-section.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
async function writer(uiStream, messages) {
    let fullResponse = '';
    let hasError = false;
    const streamableAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])('');
    const answerSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerSection"], {
        result: streamableAnswer.value
    }, void 0, false, {
        fileName: "[project]/lib/agents/writer.tsx",
        lineNumber: 14,
        columnNumber: 25
    }, this);
    uiStream.append(answerSection);
    const openai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpenAI"])({
        baseURL: process.env.SPECIFIC_API_BASE,
        apiKey: process.env.SPECIFIC_API_KEY,
        organization: '' // optional organization
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: openai.chat(process.env.SPECIFIC_API_MODEL || 'llama3-70b-8192'),
        maxTokens: 2500,
        system: `As a professional writer, your job is to generate a comprehensive and informative, yet concise answer of 400 words or less for the given question based solely on the provided search results (URL and content). You must only use information from the provided search results. Use an unbiased and journalistic tone. Combine search results together into a coherent answer. Do not repeat text. If there are any images relevant to your answer, be sure to include them as well. Aim to directly address the user's question, augmenting your response with insights gleaned from the search results. 
    Whenever quoting or referencing information from a specific URL, always cite the source URL explicitly. Please match the language of the response to the user's language.
    Always answer in Markdown format. Links and images must follow the correct format.
    Link format: [link text](url)
    Image format: ![alt text](url)
    `,
        messages,
        onFinish: (event)=>{
            fullResponse = event.text;
            streamableAnswer.done(event.text);
        }
    }).then(async (result)=>{
        for await (const text of result.textStream){
            if (text) {
                fullResponse += text;
                streamableAnswer.update(fullResponse);
            }
        }
    }).catch((err)=>{
        hasError = true;
        fullResponse = 'Error: ' + err.message;
        streamableAnswer.update(fullResponse);
    });
    return {
        response: fullResponse,
        hasError
    };
}

})()),
"[project]/components/chat-share.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatShare": ()=>ChatShare
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ChatShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ChatShare() from the server but ChatShare is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/chat-share.tsx", "ChatShare");

})()),
"[project]/components/chat-share.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$share$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/chat-share.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$share$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/user-message.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "UserMessage": ()=>UserMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$share$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat-share.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const UserMessage = ({ message, chatId, showShare = false })=>{
    const enableShare = process.env.ENABLE_SHARE === 'true';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center w-full space-x-1 mt-2 min-h-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl flex-1 break-words w-full",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/user-message.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            enableShare && showShare && chatId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$share$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatShare"], {
                chatId: chatId
            }, void 0, false, {
                fileName: "[project]/components/user-message.tsx",
                lineNumber: 19,
                columnNumber: 46
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/user-message.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};

})()),
"[project]/components/copilot-display.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CopilotDisplay": ()=>CopilotDisplay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const CopilotDisplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopilotDisplay() from the server but CopilotDisplay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/copilot-display.tsx", "CopilotDisplay");

})()),
"[project]/components/copilot-display.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2d$display$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/copilot-display.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2d$display$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/components/error-card.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ErrorCard": ()=>ErrorCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ErrorCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorCard() from the server but ErrorCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/error-card.tsx", "ErrorCard");

})()),
"[project]/components/error-card.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$error$2d$card$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/error-card.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$error$2d$card$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/app/actions.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"d6fec9fa00168e3bc03dd53f61a0be98da52d105":"$$ACTION_1","ee0ea4b2c3481a96aef88a72b0e4b5e7f8e224a4":"$$ACTION_2","fcb1bed4c9ae3c596bdc26846d7db0b90c54e58e":"$$ACTION_0"} */ __turbopack_esm__({
    "$$ACTION_0": ()=>$$ACTION_0,
    "$$ACTION_1": ()=>$$ACTION_1,
    "$$ACTION_2": ()=>$$ACTION_2,
    "AI": ()=>AI,
    "getUIStateFromAIState": ()=>getUIStateFromAIState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/rsc/dist/rsc-server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/spinner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$followup$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/followup-panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/lib/agents/index.tsx [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$inquire$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/inquire.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$researcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/researcher.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$task$2d$manager$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/task-manager.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$query$2d$suggestor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/query-suggestor.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$writer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/agents/writer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$chat$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$user$2d$message$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/user-message.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/search-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$related$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/search-related.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/copilot-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$retrieve$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/retrieve-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/video-search-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/answer-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$error$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/error-card.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("fcb1bed4c9ae3c596bdc26846d7db0b90c54e58e", $$ACTION_0);
async function $$ACTION_0(formData, skip, retryMessages) {
    const aiState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMutableAIState"])();
    const uiStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableUI"])();
    const isGenerating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])(true);
    const isCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])(false);
    const aiMessages = [
        ...retryMessages ?? aiState.get().messages
    ];
    // Get the messages from the state, filter out the tool messages
    const messages = aiMessages.filter((message)=>message.role !== 'tool' && message.type !== 'followup' && message.type !== 'related' && message.type !== 'end').map((message)=>{
        const { role, content } = message;
        return {
            role,
            content
        };
    });
    // groupId is used to group the messages for collapse
    const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])();
    const useSpecificAPI = process.env.USE_SPECIFIC_API_FOR_WRITER === 'true';
    const useOllamaProvider = !!(process.env.OLLAMA_MODEL && process.env.OLLAMA_BASE_URL);
    const maxMessages = useSpecificAPI ? 5 : useOllamaProvider ? 1 : 10;
    // Limit the number of messages to the maximum
    messages.splice(0, Math.max(messages.length - maxMessages, 0));
    // Get the user input from the form data
    const userInput = skip ? `{"action": "skip"}` : formData?.get('input');
    const content = skip ? userInput : formData ? JSON.stringify(Object.fromEntries(formData)) : null;
    const type = skip ? undefined : formData?.has('input') ? 'input' : formData?.has('related_query') ? 'input_related' : 'inquiry';
    // Add the user message to the state
    if (content) {
        aiState.update({
            ...aiState.get(),
            messages: [
                ...aiState.get().messages,
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                    role: 'user',
                    content,
                    type
                }
            ]
        });
        messages.push({
            role: 'user',
            content
        });
    }
    async function processEvents() {
        // Show the spinner
        uiStream.append(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
            fileName: "[project]/app/actions.tsx",
            lineNumber: 105,
            columnNumber: 21
        }, this));
        let action = {
            object: {
                next: 'proceed'
            }
        };
        // If the user skips the task, we proceed to the search
        if (!skip) action = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$task$2d$manager$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taskManager"])(messages) ?? action;
        if (action.object.next === 'inquire') {
            // Generate inquiry
            const inquiry = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$inquire$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inquire"])(uiStream, messages);
            uiStream.done();
            isGenerating.done();
            isCollapsed.done(false);
            aiState.done({
                ...aiState.get(),
                messages: [
                    ...aiState.get().messages,
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                        role: 'assistant',
                        content: `inquiry: ${inquiry?.question}`,
                        type: 'inquiry'
                    }
                ]
            });
            return;
        }
        // Set the collapsed state to true
        isCollapsed.done(true);
        //  Generate the answer
        let answer = '';
        let stopReason = '';
        let toolOutputs = [];
        let errorOccurred = false;
        const streamText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
        // If ANTHROPIC_API_KEY is set, update the UI with the answer
        // If not, update the UI with a div
        if (process.env.ANTHROPIC_API_KEY) {
            uiStream.update(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerSection"], {
                result: streamText.value,
                hasHeader: false
            }, void 0, false, {
                fileName: "[project]/app/actions.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this));
        } else {
            uiStream.update(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/app/actions.tsx",
                lineNumber: 150,
                columnNumber: 23
            }, this));
        }
        // If useSpecificAPI is enabled, only function calls will be made
        // If not using a tool, this model generates the answer
        while(useSpecificAPI ? toolOutputs.length === 0 && answer.length === 0 && !errorOccurred : (stopReason !== 'stop' || answer.length === 0) && !errorOccurred){
            // Search the web and generate the answer
            const { fullResponse, hasError, toolResponses, finishReason } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$researcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["researcher"])(uiStream, streamText, messages);
            stopReason = finishReason || '';
            answer = fullResponse;
            toolOutputs = toolResponses;
            errorOccurred = hasError;
            if (toolOutputs.length > 0) {
                toolOutputs.map((output)=>{
                    aiState.update({
                        ...aiState.get(),
                        messages: [
                            ...aiState.get().messages,
                            {
                                id: groupId,
                                role: 'tool',
                                content: JSON.stringify(output.result),
                                name: output.toolName,
                                type: 'tool'
                            }
                        ]
                    });
                });
            }
        }
        // If useSpecificAPI is enabled, generate the answer using the specific model
        if (useSpecificAPI && answer.length === 0 && !errorOccurred) {
            // modify the messages to be used by the specific model
            const modifiedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformToolMessages"])(messages);
            const latestMessages = modifiedMessages.slice(maxMessages * -1);
            const { response, hasError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$writer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["writer"])(uiStream, latestMessages);
            answer = response;
            errorOccurred = hasError;
            messages.push({
                role: 'assistant',
                content: answer
            });
        }
        if (!errorOccurred) {
            const useGoogleProvider = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
            const useOllamaProvider = !!(process.env.OLLAMA_MODEL && process.env.OLLAMA_BASE_URL);
            let processedMessages = messages;
            // If using Google provider, we need to modify the messages
            if (useGoogleProvider) {
                processedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformToolMessages"])(messages);
            }
            if (useOllamaProvider) {
                processedMessages = [
                    {
                        role: 'assistant',
                        content: answer
                    }
                ];
            }
            streamText.done();
            aiState.update({
                ...aiState.get(),
                messages: [
                    ...aiState.get().messages,
                    {
                        id: groupId,
                        role: 'assistant',
                        content: answer,
                        type: 'answer'
                    }
                ]
            });
            // Generate related queries
            const relatedQueries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2f$query$2d$suggestor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["querySuggestor"])(uiStream, processedMessages);
            // Add follow-up panel
            uiStream.append(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                title: "Follow-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$followup$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FollowupPanel"], {}, void 0, false, {
                    fileName: "[project]/app/actions.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/actions.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this));
            aiState.done({
                ...aiState.get(),
                messages: [
                    ...aiState.get().messages,
                    {
                        id: groupId,
                        role: 'assistant',
                        content: JSON.stringify(relatedQueries),
                        type: 'related'
                    },
                    {
                        id: groupId,
                        role: 'assistant',
                        content: 'followup',
                        type: 'followup'
                    }
                ]
            });
        } else {
            aiState.done(aiState.get());
            streamText.done();
            uiStream.append(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$error$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ErrorCard"], {
                errorMessage: answer || 'An error occurred. Please try again.'
            }, void 0, false, {
                fileName: "[project]/app/actions.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this));
        }
        isGenerating.done(false);
        uiStream.done();
    }
    processEvents();
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
        isGenerating: isGenerating.value,
        component: uiStream.value,
        isCollapsed: isCollapsed.value
    };
}
const initialAIState = {
    chatId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
    messages: []
};
const initialUIState = [];
const AI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAI"])({
    actions: {
        submit
    },
    initialUIState,
    initialAIState,
    onGetUIState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("d6fec9fa00168e3bc03dd53f61a0be98da52d105", $$ACTION_1),
    onSetAIState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])("ee0ea4b2c3481a96aef88a72b0e4b5e7f8e224a4", $$ACTION_2)
});
async function $$ACTION_1() {
    const aiState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAIState"])();
    if (aiState) {
        const uiState = getUIStateFromAIState(aiState);
        return uiState;
    } else {
        return;
    }
}
async function $$ACTION_2({ state, done }) {
    // Check if there is any message of type 'answer' in the state messages
    if (!state.messages.some((e)=>e.type === 'answer')) {
        return;
    }
    const { chatId, messages } = state;
    const createdAt = new Date();
    const userId = 'anonymous';
    const path = `/search/${chatId}`;
    const title = messages.length > 0 ? JSON.parse(messages[0].content)?.input?.substring(0, 100) || 'Untitled' : 'Untitled';
    // Add an 'end' message at the end to determine if the history needs to be reloaded
    const updatedMessages = [
        ...messages,
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
            role: 'assistant',
            content: `end`,
            type: 'end'
        }
    ];
    const chat = {
        id: chatId,
        createdAt,
        userId,
        path,
        title,
        messages: updatedMessages
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$chat$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveChat"])(chat);
}
const getUIStateFromAIState = (aiState)=>{
    const chatId = aiState.chatId;
    const isSharePage = aiState.isSharePage;
    return aiState.messages.map((message, index)=>{
        const { role, content, id, type, name } = message;
        if (!type || type === 'end' || isSharePage && type === 'related' || isSharePage && type === 'followup') return null;
        switch(role){
            case 'user':
                switch(type){
                    case 'input':
                    case 'input_related':
                        const json = JSON.parse(content);
                        const value = type === 'input' ? json.input : json.related_query;
                        return {
                            id,
                            component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$user$2d$message$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserMessage"], {
                                message: value,
                                chatId: chatId,
                                showShare: index === 0 && !isSharePage
                            }, void 0, false, {
                                fileName: "[project]/app/actions.tsx",
                                lineNumber: 383,
                                columnNumber: 19
                            }, this)
                        };
                    case 'inquiry':
                        return {
                            id,
                            component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copilot$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CopilotDisplay"], {
                                content: content
                            }, void 0, false, {
                                fileName: "[project]/app/actions.tsx",
                                lineNumber: 393,
                                columnNumber: 28
                            }, this)
                        };
                }
            case 'assistant':
                const answer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
                answer.done(content);
                switch(type){
                    case 'answer':
                        return {
                            id,
                            component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$answer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerSection"], {
                                result: answer.value
                            }, void 0, false, {
                                fileName: "[project]/app/actions.tsx",
                                lineNumber: 403,
                                columnNumber: 28
                            }, this)
                        };
                    case 'related':
                        const relatedQueries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
                        relatedQueries.done(JSON.parse(content));
                        return {
                            id,
                            component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$related$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                relatedQueries: relatedQueries.value
                            }, void 0, false, {
                                fileName: "[project]/app/actions.tsx",
                                lineNumber: 411,
                                columnNumber: 19
                            }, this)
                        };
                    case 'followup':
                        return {
                            id,
                            component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                                title: "Follow-up",
                                className: "pb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$followup$2d$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FollowupPanel"], {}, void 0, false, {
                                    fileName: "[project]/app/actions.tsx",
                                    lineNumber: 419,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/actions.tsx",
                                lineNumber: 418,
                                columnNumber: 19
                            }, this)
                        };
                }
            case 'tool':
                try {
                    const toolOutput = JSON.parse(content);
                    const isCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
                    isCollapsed.done(true);
                    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStreamableValue"])();
                    searchResults.done(JSON.stringify(toolOutput));
                    switch(name){
                        case 'search':
                            return {
                                id,
                                component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SearchSection"], {
                                    result: searchResults.value
                                }, void 0, false, {
                                    fileName: "[project]/app/actions.tsx",
                                    lineNumber: 435,
                                    columnNumber: 30
                                }, this),
                                isCollapsed: isCollapsed.value
                            };
                        case 'retrieve':
                            return {
                                id,
                                component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$retrieve$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    data: toolOutput
                                }, void 0, false, {
                                    fileName: "[project]/app/actions.tsx",
                                    lineNumber: 441,
                                    columnNumber: 30
                                }, this),
                                isCollapsed: isCollapsed.value
                            };
                        case 'videoSearch':
                            return {
                                id,
                                component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2d$search$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VideoSearchSection"], {
                                    result: searchResults.value
                                }, void 0, false, {
                                    fileName: "[project]/app/actions.tsx",
                                    lineNumber: 448,
                                    columnNumber: 21
                                }, this),
                                isCollapsed: isCollapsed.value
                            };
                    }
                } catch (error) {
                    return {
                        id,
                        component: null
                    };
                }
            default:
                return {
                    id,
                    component: null
                };
        }
    }).filter((message)=>message !== null);
};

})()),
"[project]/app/search/[id]/page.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SearchPage,
    "generateMetadata": ()=>generateMetadata,
    "maxDuration": ()=>maxDuration
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$chat$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/actions/chat.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/actions.tsx [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const maxDuration = 60;
async function generateMetadata({ params }) {
    const chat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$chat$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChat"])(params.id, 'anonymous');
    return {
        title: chat?.title.toString().slice(0, 50) || 'Search'
    };
}
async function SearchPage({ params }) {
    const userId = 'anonymous';
    const chat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$chat$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChat"])(params.id, userId);
    if (!chat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    }
    if (chat?.userId !== userId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AI"], {
        initialAIState: {
            chatId: chat.id,
            messages: chat.messages
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chat"], {
            id: params.id
        }, void 0, false, {
            fileName: "[project]/app/search/[id]/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/search/[id]/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/search/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/search/[id]/page.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/app/favicon.ico [app-rsc] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/favicon.abbb70b2.ico");
})()),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico [app-rsc] (static)\" } [app-rsc] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/favicon.ico [app-rsc] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$5b$app$2d$rsc$5d$__$28$static$29$__["default"],
    width: 32,
    height: 32
};

})()),
"[project]/app/opengraph-image.png [app-rsc] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/opengraph-image.31b3386e.png");
})()),
"[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png [app-rsc] (static)\" } [app-rsc] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$opengraph$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/opengraph-image.png [app-rsc] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$opengraph$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__["default"],
    width: 1200,
    height: 627
};

})()),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__aab173._.js.map