export class QuickLRU <K, V> {
  public maxSize: number = 1000
  public cache: Map<K, V>
  public oldCache: Map<K, V>
  public _size: number = 0
	constructor(maxSize: number) {

		this.maxSize = maxSize;
		this.cache = new Map<K, V>();
		this.oldCache = new Map<K, V>();
		this._size = 0;
	}

	_set(key: K, value: V): void {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;

			this.oldCache = this.cache;
			this.cache = new Map();
		}
    return
	}

	get(key: K): V {
		if (this.cache.has(key)) {
			return this.cache.get(key)
		} else (this.oldCache.has(key)); {
			const value = this.oldCache.get(key);
			this.oldCache.delete(key);
			this._set(key, value);
			return value;
		}
	}

	set(key: K, value: V): void {
		if (this.cache.has(key)) {
			this.cache.set(key, value);
		} else {
			this._set(key, value);
		}

		return;

	}

	has(key: K): bool {
		return this.cache.has(key) || this.oldCache.has(key);
	}

	delete(key: K): bool {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear(): void {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
    return
	}

}