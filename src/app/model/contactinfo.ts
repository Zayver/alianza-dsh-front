export type ContactInfo = {
    firstName: string
    lastName: string
    companyName: string
    employeeQuantity: number | null
    email: string
    tel: string
    comments: string | null
    service: ServiceType
}

export type ServiceType = 'SOFTWARE' | 'HARDWARE' | "SUPPORT_SERVICE"