isomorphic-unfetch
Can be used to either polyfill the whole app, or used as a fetch function. (Stands for "isomorphic universal fetch")

isomorphic-unfetch: Switches between unfetch & node-fetch for client & server.
There are several libs to allow fetching data from a react app, here is a comparison.

The main reason for choosing this one is its very small bundle size, and it's universal.

json-stringify-safe
Used to safely stringify JSON objects. Works even when they have circular dependencies

json-stringify-safe: Like JSON.stringify, but doesn't throw on circular references.
Use at your convenience. We weren't sure whether to use json-stringify-safe or safe-json-stringify and we made a wild choice here.

rc-tooltip
React Tooltip component

rc-tooltip: React tooltip
Marked as alpha-3 version but stable. Much better than Reactstrap Tooltip component.
