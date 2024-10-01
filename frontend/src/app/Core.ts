interface AppUser {
    id: number,
    username: string,
    login: string,
    FIO: string,
    male: string,
    age: number,
    companyposition: string,
    companyrole: string,
    email?: string,
    role: RoleSet,
    rule: string,
}
interface AppRule {
  id: number,
  name: string
}
interface AppCards {
  idCard: number,
    title: string,
    image: Blob,
    status: {
        cur: number,
        all: number
    }
    taskComment: string,
    taskComment2: string
}
interface AppRasdel extends AppRule {}
interface AppTask {
  id: number,
  idCard: number,
  date: string,
  hour: string,
  name: string,
  status: string
}

export interface User extends AppUser {}
export enum RoleSet {
    user = "User",
  guest = "Guest",
  admin = "Admin"
}