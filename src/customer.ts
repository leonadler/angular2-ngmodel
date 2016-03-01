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
        name: 'John Doe',
        company: 'Microsoft Corp.',
        phoneNumbers: [
            '(+49)-1234567890',
            '+99-0-1234567890'
        ],
        addresses: [
            {
                city: 'Kopenhagen',
                country: 'Denmark',
                street: 'Examplestreet 1',
                zipcode: '1688'
            }
        ]
    },
    {
        name: 'Angela Merkel',
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
