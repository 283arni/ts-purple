type Entry = {
    key: string;
    value: number;
    next?: Entry;
};

class MyMap {
    private buckets: Array<Entry | undefined>;
    private size: number;

    constructor(size: number = 16) {
        this.size = size;
        this.buckets = new Array(size);
    }

    // Простейшая hash-функция для строк
    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) | 0; // 32bit int
        }
        return Math.abs(hash) % this.size;
    }

    set(key: string, value: number): void {
        const index = this.hash(key);
        let entry = this.buckets[index];

        if (!entry) {
            // Нет коллизии, создаем сразу
            this.buckets[index] = { key, value };
            return;
        }

        // По цепочке ищем ключ либо конец списка
        let prev: Entry | undefined = undefined;
        while (entry) {
            if (entry.key === key) {
                entry.value = value; // обновить значение
                return;
            }
            prev = entry;
            entry = entry.next;
        }
        prev!.next = { key, value }; // добавить в цепочку
    }

    get(key: string): number | undefined {
        const index = this.hash(key);
        let entry = this.buckets[index];
        while (entry) {
            if (entry.key === key) {
                return entry.value;
            }
            entry = entry.next;
        }
        return undefined;
    }

    has(key: string): boolean {
        return this.get(key) ! === undefined;
    }

    delete(key: string): boolean {
        const index = this.hash(key);
        let entry = this.buckets[index];
        let prev: Entry | undefined = undefined;

        while (entry) {
            if (entry.key === key) {
                if (prev) {
                    prev.next = entry.next;
                } else {
                    this.buckets[index] = entry.next;
                }
                return true;
            }
            prev = entry;
            entry = entry.next;
        }
        return false;
    }
}

// Пример использования:
const myMap = new MyMap();
