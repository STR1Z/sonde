module.exports = (name, ...args) => (module.exports[name] ? module.exports[name](...args) : undefined);
