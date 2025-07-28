interface Hair {
    color: string,
    type: string
}

interface Address {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
          lat: number,
          lng: number
        },
        country: string
      }

interface Bank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

interface Company {
        department: string,
        name: string,
        title: string,
        address: {
          address: string,
          city: string,
          state: string,
          stateCode: string,
          postalCode: string,
          coordinates: {
            lat: number,
            lng: number
          },
          country: string
        }
    }
interface Cripto {
        coin: string,
        wallet: string,
        network: string
    }


    enum Gender {
        Female = "female",
        Male = "male"
    }
interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender.Female | Gender.Male,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: Hair,
    ip: string,
    address: Address,
    macAddress: string,
    university: string,
    bank: Bank,
    company: Company,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: Cripto,
    role: string
}

interface Users {
    users: User[]
}

const isUsers = (res: any): res is Users => {
    if(typeof res === 'object' && 'users' in res) {
        return true;
    }

    return false
}

const fetchData = async (): Promise<unknown> => {
    try {
        const responce = await fetch('https://dummyjson.com/users').then(responce => responce.json()).then(res => console.log(res))
        if (isUsers(responce)) {
            return responce
        } else {
            throw new Error('Не верные данные')
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

fetchData()