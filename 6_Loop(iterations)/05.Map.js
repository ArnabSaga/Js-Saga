// Map =>The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('BD', 'Bangladesh');
map.set('BD', 'Bangladesh');
map.set('IN', 'India');
map.set('USA', 'United Stand of America');
map.set('FR', 'France');

// console.log(map);

for (const [key] of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

