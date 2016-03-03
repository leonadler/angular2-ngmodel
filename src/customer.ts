export interface Customer {
    name: string;
    company: string;
    phoneNumbers: string[];
    addresses: {
        city: string,
        country: string,
        street: string,
        zipcode: string
    }[];
}

export const exampleCustomers: Customer[] = [
    {
        name: 'Barack O.',
        company: 'United States Government',
        phoneNumbers: [
            '+1 202-456-1111',
            '+1 202-456-1414',
            '+1 202-456-6213',
            '+1 202-456-2121'
        ],
        addresses: [
            {
                city: 'Washington DC',
                country: 'USA',
                street: '1600 Pennsylvania Ave NW',
                zipcode: '20500'
            }
        ]
    },
    {
        name: 'Angela M.',
        company: 'Bundesrepublik Deutschland',
        phoneNumbers: [
            '+49 30 22732152'
        ],
        addresses: [
            {
                city: 'Berlin',
                country: 'Germany',
                street: 'Platz der Republik 1',
                zipcode: '11011'
            }
        ]
    }
];
