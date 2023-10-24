// 1	Supply Agreement	CN12345	Active	2024.01.15	2023.01.15
// 2	Meintenance Service	CN12346	Expired	2023.05.10	2023.01.15
// 3	Product Delivery	CN12348	Active	2024.08.20	2023.08.20
// 4	Consulting Services	CN12349	Pending	2023.12.01	2022.12.01
// 5	Facility Maintenance CN12352 Active	2024.08.10	2023.08.10
// 6	Equipment Lease	    CN12349	Expired	2023.08.10	2022.08.10


const Contract = [
    {
        id: '1',
        name: 'Supply Agreement',
        endDate: '2024.01.15',
        startDate: '2023.01.15',
        sta: 'Active',
        CNID: 'CN12345',
        year: '1 Year',
        byer: [
            company = 'LANLAN Corpretion',
            employee = 'Jagath Ramanayake',
            position = 'Procurement Manager',
            mail = 'jagathrama@gmail.com',
            phone = '076 4068 172',
        ]
    },
    {
        id: '2',
        name: 'Meintenance Service',
        endDate: '2023.05.10',
        startDate: '2021.05.10',
        sta: 'Expired',
        CNID: 'CN12346',
        year: ' 2 Years',
        byer: [
            company = 'NovoCorp Industries',
            employee = 'Anil Kapoor',
            position = 'Purchasing Agent',
            mail = 'anil.k@novocorp.net',
            phone = '079 9087 556',
        ]

    },
    {
        id: '3',
        name: 'Product Delivery',
        endDate: '2024.08.20',
        startDate: '2023.08.20',
        sta: 'Active',
        CNID: 'CN12348',
        year: '1 Year',
        byer: [
            company= 'EcoGreen Systems',
            employee= 'Rebecca Lin',
            position= 'Operations Manager',
            mail= 'r.lin@ecogreen.org',
            phone= '078 6543 210',
        ]

    },

    {
        id: '4',
        name: 'Consulting Services',
        endDate: '2023.12.01',
        startDate: '2022.12.01',
        sta: 'Pending',
        CNID: 'CN12349',
        year: '1 Year',
        byer : [
            company= 'TechPulse Ltd.',
            employee= 'Samantha Lewis',
            position= 'Supply Chain Director',
            mail= 'samantha.lewis@techpulse.com',
            phone= '077 3056 453',
        ]
    },
    {
        id: '5',
        name: 'Facility Maintenance',
        endDate: '2024.08.10',
        startDate: '2023.08.10',
        sta: 'Active',
        CNID: 'CN12352',
        year: '1 Year',
        byer:[
            company= 'Wave Inc.',
            employee='Samantha James',
            position= 'Supply Chain Analyst',
            mail= 'samantha@techwave.com',
            phone= '079 1234 567',
        ]

    },
    {
        id: '6',
        name: 'Equipment Lease',
        endDate: '2023.08.10',
        startDate: '2022.08.10',
        sta: 'Expired',
        CNID: 'CN12349',
        year: '1 Year',
        byer:[
            company= 'Crescent Solutions',
            employee= 'Lara Gilbert',
            position= 'Buying Manager',
            mail= 'lara@crescentsol.com',
            phone= '075 5678 910',
        ]
    },

];

export default Contract;
//