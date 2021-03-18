# AS-LRU
**Very Fast (Least Recently Used) Cache For AssemblyScript**

## About
- AssemblyScript Compatible
- Isomorphic (Browser / Node)
- Based On Map

## Installation
```bash
~ npm install as-lru --save
```

## Usage

**Basic Usage**
```js
import { QuickLRU } from 'as-lru'

const cache = new QuickLRU<string, string>(1000)

cache.set('Example', 'Hello World 🌎')

// Make sure to use cache.has(). Otherwise, it can throw an error.
if (cache.has('Example')) {

    cache.get('Example')
    //=> 'Hello World 🌎' / Undefined If Removed
}
```

## API

### new QuickLRU -->> [QuickLRU]
Create A New QuickLRU Instance

**As always, please star the repository! 🥳**