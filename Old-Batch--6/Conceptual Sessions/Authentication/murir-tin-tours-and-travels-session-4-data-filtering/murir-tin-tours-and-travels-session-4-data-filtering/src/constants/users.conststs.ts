// export enum UserRole {

// }


export const USER_ROLE = {
    user: "user",
    admin: "admin"
} as const

const user: keyof typeof USER_ROLE = "admin"

console.log(user)