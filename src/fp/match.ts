type Matcher = (args?: any) => boolean;
type Matched = (args?: any) => any;

// Match aka functional if-else
const matched = (x: any) => ({
  on: () => matched(x),
  otherwise: () => x
});

const match = (x: any) => ({
  on: (pred: Matcher, fn: Matched) => (pred(x) ? matched(fn(x)) : match(x)),
  otherwise: (fn: Matched) => fn(x)
});

export default match;
