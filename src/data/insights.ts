// *** SHORTHAND CAVEATS ***

// all is a shorthand property that doesn't have an initial value, so it is not included in the list.
// box-orient isn't a shorthand property but contains multiple initial values, so it is included in the list (inline-axis (horizontal in XUL)).
// marker is shorthand but has been missed off the list on MDN
// overflow is shorthand but has been given an initial value of visible, so it is not included in the list.
// overscroll behavior is shorthand but has been given an initial value of auto, so it is not included in the list.
// stroke is shorthand but has been missed off the list on MDN
// text-align isn't a shorthand property but contains multiple initial values, so it is included in the list (start, or a nameless value that acts as left if direction is ltr, right if direction is rtl if start is not supported by the browser.
// text-box is shorthand but has been given an initial value of normal, so it is not included in the list.
// text-wrap is shorthand but has been given an initial value of wrap, so it is not included in the list.
// --webkit-box-image is shorthand but has been given an initial value of none, so it is not included in the list.

// *** URLS WITH NO INITIAL VALUE ***

// color-interpolation does in fact have a default value of auto but the terminology is inconsistent so wasn't caught by the script.

// *** URLS WITH NO VALUES TABLE ***

export const urlsWithNoValuesTable: object[] = [
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image", partOfUl: true, initialValue: "none"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-security", partOfUl: false, initialValue: "none"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-rule", partOfUl: false, initialValue: "nonzero"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/reading-flow", partOfUl: false, initialValue: "normal"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/reading-order", partOfUl: false, initialValue: "0"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-marker-group", partOfUl: false, initialValue: "none"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/user-modify", partOfUl: false, initialValue: "read-only"},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/vector-effect", partOf: false, initialValue: "none"},
];


export const urlsWithMultipleInitialValues: object[] = [
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-border-before", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke", isShorthand: true},    
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-color", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-style", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-width", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient", isShorthand: false},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/columns", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/container", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gap", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/marker", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/offset", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-items", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-self", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/stroke", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align", isShorthand: false},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition", isShorthand: true},
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS/view-timeline", isShorthand: true},
];