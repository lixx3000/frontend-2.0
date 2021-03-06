import {Wallet} from '@/store/model/Wallet'

export class User {
    id !: string
    avatar?: string
    bio?: string
    email!: string
    lastLoginAt?: string
    loginNknAddress?: string
    messageNknAddress?: string
    role?: string
    type!: string
    username!: string
    wallets?: Wallet[]
    personalInfo ?: PersonalInfo
    setting ?: Setting
    driveSetting ?: DriveUserSetting
}

export class DriveUserSetting {
    availableSpace !: string
    totalSpace !: string
    usedSpace !: string
}

export class Setting {
    currency?: Currency
}

export enum Currency {
    CNY = 'CNY',
    USD = 'USD',
}

export class PersonalInfo {
    country ?: string
    creditCard ?: CreditCard
    passport ?: string
    phoneNumber ?: string
}

export class CreditCard {
    month ?: string
    name ?: string
    number ?: string
    securityCode ?: string
    year ?: string
}

export class CreditCardInput {
    month ?: string
    name ?: string
    number ?: string
    securityCode ?: string
    year ?: string
}

export class PersonalInfoInput {
    country ?: string
    creditCard?: CreditCardInput
    passport?: string
}