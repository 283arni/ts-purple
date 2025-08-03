interface City {
    city: string,
    temp: number
}

class Mapy {
    list: City[] = [];

    set(city: string, temp: number): void {
        this.list.push({city, temp})
    }

    get(city: string): number | string {
        const item = this.list.find(i => i.city === city)

        if(!item?.temp) {
            return 'Нет такого города'
        }

        return item.temp
    }

    delete(city: string): void {
        this.list = this.list.filter(i => i.city !== city)
    }

    clear() {
        this.list = []
    }
}

// Пример добавления данных
let weatherMap = new Mapy();
weatherMap.set('London', 20);
weatherMap.set('Berlin', 25);
// Пример получения данных
console.log(weatherMap.get('London')); // Выведет 20