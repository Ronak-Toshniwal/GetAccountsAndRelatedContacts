import { LightningElement, wire, track } from 'lwc';
import accCon from '@salesforce/apex/getAccountAndRelatedContacts.getAccRCon';


export default class ParentComponent extends LightningElement {
    mydata = [{ id: 1, Name: 'Ronak', Company: 'Celebal' }, { id: 2, Name: 'Naval', Company: 'Wipro' }, { id: 3, Name: 'Murli', Company: 'Google' }, { id: 4, Name: 'Aman', Company: 'Test' }];
    tempList = {}
    newMap = new Map();
    simplifiedList = [];

    //static value of simplifiedList array in TEMP
    temp = [
        {
            "id": "0012x000002PboGAAS",
            "con": [
                {
                    "Id": "0032x000002h8VEAAY",
                    "Name": "Rose Gonzalez",
                    "Email": "rose@edge.com",
                    "Phone": "(512) 757-6000",
                    "AccountId": "0012x000002PboGAAS",
                    "Account": {
                        "Id": "0012x000002PboGAAS",
                        "Name": "Edge Communications"
                    }
                },
                {
                    "Id": "0032x000002h8VFAAY",
                    "Name": "Sean Forbes",
                    "Email": "sean@edge.com",
                    "Phone": "(512) 757-6000",
                    "AccountId": "0012x000002PboGAAS",
                    "Account": {
                        "Id": "0012x000002PboGAAS",
                        "Name": "Edge Communications"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboHAAS",
            "con": [
                {
                    "Id": "0032x000002h8VGAAY",
                    "Name": "Jack Rogers",
                    "Email": "jrogers@burlington.com",
                    "Phone": "(336) 222-7000",
                    "AccountId": "0012x000002PboHAAS",
                    "Account": {
                        "Id": "0012x000002PboHAAS",
                        "Name": "Burlington Textiles Corp of America"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboIAAS",
            "con": [
                {
                    "Id": "0032x000002h8VHAAY",
                    "Name": "Pat Stumuller",
                    "Email": "pat@pyramid.net",
                    "Phone": "(014) 427-4427",
                    "AccountId": "0012x000002PboIAAS",
                    "Account": {
                        "Id": "0012x000002PboIAAS",
                        "Name": "Pyramid Construction Inc."
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboJAAS",
            "con": [
                {
                    "Id": "0032x000002h8VIAAY",
                    "Name": "Andy Young",
                    "Email": "ronaktoshniwal13@gmail.com",
                    "Phone": "(785) 241-6200",
                    "AccountId": "0012x000002PboJAAS",
                    "Account": {
                        "Id": "0012x000002PboJAAS",
                        "Name": "Dickenson plc"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboKAAS",
            "con": [
                {
                    "Id": "0032x000002h8VJAAY",
                    "Name": "Tim Barr",
                    "Email": "barr_tim@grandhotels.com",
                    "Phone": "(312) 596-1000",
                    "AccountId": "0012x000002PboKAAS",
                    "Account": {
                        "Id": "0012x000002PboKAAS",
                        "Name": "Grand Hotels & Resorts Ltd"
                    }
                },
                {
                    "Id": "0032x000002h8VKAAY",
                    "Name": "John Bond",
                    "Email": "bond_john@grandhotels.com",
                    "Phone": "(312) 596-1000",
                    "AccountId": "0012x000002PboKAAS",
                    "Account": {
                        "Id": "0012x000002PboKAAS",
                        "Name": "Grand Hotels & Resorts Ltd"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboLAAS",
            "con": [
                {
                    "Id": "0032x000002h8VLAAY",
                    "Name": "Stella Pavlova",
                    "Email": "spavlova@uog.com",
                    "Phone": "(212) 842-5500",
                    "AccountId": "0012x000002PboLAAS",
                    "Account": {
                        "Id": "0012x000002PboLAAS",
                        "Name": "United Oil & Gas Corp."
                    }
                },
                {
                    "Id": "0032x000002h8VMAAY",
                    "Name": "Lauren Boyle",
                    "Email": "lboyle@uog.com",
                    "Phone": "(212) 842-5500",
                    "AccountId": "0012x000002PboLAAS",
                    "Account": {
                        "Id": "0012x000002PboLAAS",
                        "Name": "United Oil & Gas Corp."
                    }
                },
                {
                    "Id": "0032x000002h8VQAAY",
                    "Name": "Arthur Song",
                    "Email": "asong@uog.com",
                    "Phone": "(212) 842-5500",
                    "AccountId": "0012x000002PboLAAS",
                    "Account": {
                        "Id": "0012x000002PboLAAS",
                        "Name": "United Oil & Gas Corp."
                    }
                },
                {
                    "Id": "0032x000002h8VVAAY",
                    "Name": "Avi Green",
                    "Email": "agreen@uog.com",
                    "Phone": "(212) 842-5500",
                    "AccountId": "0012x000002PboLAAS",
                    "Account": {
                        "Id": "0012x000002PboLAAS",
                        "Name": "United Oil & Gas Corp."
                    }
                },
                {
                    "Id": "0032x00000CnEuUAAV",
                    "Name": "new",
                    "AccountId": "0012x000002PboLAAS",
                    "Account": {
                        "Id": "0012x000002PboLAAS",
                        "Name": "United Oil & Gas Corp."
                    }
                },
                {
                    "Id": "0032x00000Fng1bAAB",
                    "Name": "toshniwal",
                    "Email": "rt@gmail.coom",
                    "Phone": "9,799,280,040",
                    "AccountId": "0012x000002PboLAAS",
                    "Account": {
                        "Id": "0012x000002PboLAAS",
                        "Name": "United Oil & Gas Corp."
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboMAAS",
            "con": [
                {
                    "Id": "0032x000002h8VNAAY",
                    "Name": "Babara Levy",
                    "Email": "b.levy@expressl&t.net",
                    "Phone": "(503) 421-7800",
                    "AccountId": "0012x000002PboMAAS",
                    "Account": {
                        "Id": "0012x000002PboMAAS",
                        "Name": "Express Logistics and Transport"
                    }
                },
                {
                    "Id": "0032x000002h8VOAAY",
                    "Name": "Josh Davis",
                    "Email": "j.davis@expressl&t.net",
                    "Phone": "(503) 421-7800",
                    "AccountId": "0012x000002PboMAAS",
                    "Account": {
                        "Id": "0012x000002PboMAAS",
                        "Name": "Express Logistics and Transport"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboNAAS",
            "con": [
                {
                    "Id": "0032x000002h8VPAAY",
                    "Name": "Jane Grey",
                    "Email": "jane_gray@uoa.edu",
                    "Phone": "(520) 773-9050",
                    "AccountId": "0012x000002PboNAAS",
                    "Account": {
                        "Id": "0012x000002PboNAAS",
                        "Name": "University of Arizona"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboOAAS",
            "con": [
                {
                    "Id": "0032x000002h8VRAAY",
                    "Name": "Ashley James",
                    "Email": "ajames@uog.com",
                    "Phone": "+44 191 4956203",
                    "AccountId": "0012x000002PboOAAS",
                    "Account": {
                        "Id": "0012x000002PboOAAS",
                        "Name": "United Oil & Gas, UK"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboPAAS",
            "con": [
                {
                    "Id": "0032x000002h8VSAAY",
                    "Name": "Tom Ripley",
                    "Email": "tripley@uog.com",
                    "Phone": "(650) 450-8810",
                    "AccountId": "0012x000002PboPAAS",
                    "Account": {
                        "Id": "0012x000002PboPAAS",
                        "Name": "United Oil & Gas, Singapore"
                    }
                },
                {
                    "Id": "0032x000002h8VTAAY",
                    "Name": "Liz D'Cruz",
                    "Email": "ldcruz@uog.com",
                    "Phone": "(650) 450-8810",
                    "AccountId": "0012x000002PboPAAS",
                    "Account": {
                        "Id": "0012x000002PboPAAS",
                        "Name": "United Oil & Gas, Singapore"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboQAAS",
            "con": [
                {
                    "Id": "0032x000002h8VUAAY",
                    "Name": "Edna Frank",
                    "Email": "efrank@genepoint.com",
                    "Phone": "(650) 867-3450",
                    "AccountId": "0012x000002PboQAAS",
                    "Account": {
                        "Id": "0012x000002PboQAAS",
                        "Name": "GenePoint"
                    }
                }
            ]
        },
        {
            "id": "0012x000002PboRAAS",
            "con": [
                {
                    "Id": "0032x000002h8VWAAY",
                    "Name": "Siddartha Nedaerk",
                    "AccountId": "0012x000002PboRAAS",
                    "Account": {
                        "Id": "0012x000002PboRAAS",
                        "Name": "sForce Test 0"
                    }
                },
                {
                    "Id": "0032x000002h8VXAAY",
                    "Name": "Jake Llorrac",
                    "AccountId": "0012x000002PboRAAS",
                    "Account": {
                        "Id": "0012x000002PboRAAS",
                        "Name": "sForce Test 0"
                    }
                },
                {
                    "Id": "0032x00000Lc3ExAAJ",
                    "Name": "aman",
                    "Email": "asdw@asd.com",
                    "AccountId": "0012x000002PboRAAS",
                    "Account": {
                        "Id": "0012x000002PboRAAS",
                        "Name": "sForce Test 0"
                    }
                }
            ]
        },
        {
            "id": "0012x00000SJSnXAAX",
            "con": [
                {
                    "Id": "0032x00000LZQ3gAAH",
                    "Name": "AccCon",
                    "AccountId": "0012x00000SJSnXAAX",
                    "Account": {
                        "Id": "0012x00000SJSnXAAX",
                        "Name": "AccCon"
                    }
                }
            ]
        },
        {
            "id": "0012x00000SJT3yAAH",
            "con": [
                {
                    "Id": "0032x00000LZQKIAA5",
                    "Name": "1b",
                    "Phone": "09799280040",
                    "AccountId": "0012x00000SJT3yAAH",
                    "Account": {
                        "Id": "0012x00000SJT3yAAH",
                        "Name": "1b"
                    }
                }
            ]
        },
        {
            "id": "0012x00000SIs6tAAD",
            "con": [
                {
                    "Id": "0032x00000LYpM6AAL",
                    "Name": "NewAccNContact",
                    "AccountId": "0012x00000SIs6tAAD",
                    "Account": {
                        "Id": "0012x00000SIs6tAAD",
                        "Name": "NewAccNContact"
                    }
                }
            ]
        },
        {
            "con": [
                {
                    "Id": "0032x00000J752aAAB",
                    "Name": "Ronak Smith"
                },
                {
                    "Id": "0032x00000DqGUrAAN",
                    "Name": "FN LN",
                    "Email": "em@gmai.com"
                },
                {
                    "Id": "0032x00000J61ciAAB",
                    "Name": "new Con",
                    "Phone": "55555"
                },
                {
                    "Id": "0032x00000LZQ7EAAX",
                    "Name": "newCon"
                },
                {
                    "Id": "0032x00000J61cEAAR",
                    "Name": "T 11"
                },
                {
                    "Id": "0032x00000J61cOAAR",
                    "Name": "T 12"
                },
                {
                    "Id": "0032x00000J61cnAAB",
                    "Name": "new Con",
                    "Phone": "55555"
                },
                {
                    "Id": "0032x00000Lc1uwAAB",
                    "Name": "Contact 0"
                },
                {
                    "Id": "0032x00000Lc1uxAAB",
                    "Name": "Contact 1"
                },
                {
                    "Id": "0032x00000Lc1uyAAB",
                    "Name": "Contact 2"
                },
                {
                    "Id": "0032x00000Lc1uzAAB",
                    "Name": "Contact 3"
                },
                {
                    "Id": "0032x00000Lc1v0AAB",
                    "Name": "Contact 4"
                },
                {
                    "Id": "0032x00000Lc1qIAAR",
                    "Name": "Ronaks"
                },
                {
                    "Id": "0032x00000Lc1r5AAB",
                    "Name": "Ronaks"
                },
                {
                    "Id": "0032x000008aoioAAA",
                    "Name": "TEST TESTLAST"
                },
                {
                    "Id": "0032x0000065Fw5AAE",
                    "Name": "NEW Contact Ronak new"
                },
                {
                    "Id": "0032x00000LaT20AAF",
                    "Name": "Tshs"
                },
                {
                    "Id": "0032x00000J61bkAAB",
                    "Name": "T 0"
                },
                {
                    "Id": "0032x00000J61blAAB",
                    "Name": "T 1"
                },
                {
                    "Id": "0032x00000AYMNWAA5",
                    "Name": "Ronak Toshniwal"
                },
                {
                    "Id": "0032x00000LbZpZAAV",
                    "Name": "Brian Dent",
                    "Email": "briandent@trailhead.com",
                    "Phone": "(619) 852-4569"
                },
                {
                    "Id": "0032x00000Fl71EAAR",
                    "Name": "rt last Na"
                },
                {
                    "Id": "0032x00000DqVYnAAN",
                    "Name": "1 1",
                    "Email": "1@1.com"
                },
                {
                    "Id": "0032x00000LYpMFAA1",
                    "Name": "adw asdawd"
                },
                {
                    "Id": "0032x00000LbZpUAAV",
                    "Name": "Quentin Foam",
                    "Email": "qfoam@trailhead.com",
                    "Phone": "(415)555-1212"
                },
                {
                    "Id": "0032x00000LbZpVAAV",
                    "Name": "Vega North",
                    "Email": "vnorth@trailhead.com",
                    "Phone": "(416)556-1312"
                },
                {
                    "Id": "0032x00000LbZpWAAV",
                    "Name": "Palma Sunrise",
                    "Email": "psunrise@trailhead.com",
                    "Phone": "(554)623-1212"
                },
                {
                    "Id": "0032x00000LalSBAAZ",
                    "Name": "Contact Created From VF Page  CreateContact",
                    "Email": "createcontact@vf.com"
                },
                {
                    "Id": "0032x00000Lc1r0AAB",
                    "Name": "Ronaks"
                },
                {
                    "Id": "0032x00000DqGUDAA3",
                    "Name": "nagpur test",
                    "Email": "nt@gmail.com"
                },
                {
                    "Id": "0032x00000DqGXCAA3",
                    "Name": "wishenquotes asd",
                    "Email": "wishesnquotescom@gmail.com"
                },
                {
                    "Id": "0032x00000DqVc5AAF",
                    "Name": "test 2",
                    "Phone": "09799280040"
                },
                {
                    "Id": "0032x00000DqVJNAA3",
                    "Name": "test 2",
                    "Email": "e@e.com"
                }
            ]
        },
        {
            "id": "0012x00000SJSrXAAX",
            "con": [
                {
                    "Id": "0032x00000LZQ7FAAX",
                    "Name": "11111111",
                    "AccountId": "0012x00000SJSrXAAX",
                    "Account": {
                        "Id": "0012x00000SJSrXAAX",
                        "Name": "11111111"
                    }
                }
            ]
        },
        {
            "id": "0012x00000I6kfdAAB",
            "con": [
                {
                    "Id": "0032x00000CnEu5AAF",
                    "Name": "test test",
                    "AccountId": "0012x00000I6kfdAAB",
                    "Account": {
                        "Id": "0012x00000I6kfdAAB",
                        "Name": "Get Cloudy"
                    }
                },
                {
                    "Id": "0032x00000Cli6oAAB",
                    "Name": "Leung Chan",
                    "Email": "leung@gogetcloudy.com",
                    "AccountId": "0012x00000I6kfdAAB",
                    "Account": {
                        "Id": "0012x00000I6kfdAAB",
                        "Name": "Get Cloudy"
                    }
                },
                {
                    "Id": "0032x00000Cli6eAAB",
                    "Name": "Alan Johnson",
                    "Email": "alan@gogetcloudy.com",
                    "Phone": "(720) 444-1229",
                    "AccountId": "0012x00000I6kfdAAB",
                    "Account": {
                        "Id": "0012x00000I6kfdAAB",
                        "Name": "Get Cloudy"
                    }
                }
            ]
        },
        {
            "id": "0012x00000PbLY2AAN",
            "con": [
                {
                    "Id": "0032x00000J5qMiAAJ",
                    "Name": "Ronak Toshniwal",
                    "Email": "ronakt.h33t@gmail.com",
                    "Phone": "09799280040",
                    "AccountId": "0012x00000PbLY2AAN",
                    "Account": {
                        "Id": "0012x00000PbLY2AAN",
                        "Name": "Apex Record 9"
                    }
                }
            ]
        },
        {
            "id": "0012x00000PdXO8AAN",
            "con": [
                {
                    "Id": "0032x00000J61buAAB",
                    "Name": "T 11",
                    "Email": "ronakt@gmail.com",
                    "Phone": "9799280040",
                    "AccountId": "0012x00000PdXO8AAN",
                    "Account": {
                        "Id": "0012x00000PdXO8AAN",
                        "Name": "R 11"
                    }
                }
            ]
        },
        {
            "id": "0012x00000Ax9nJAAR",
            "con": [
                {
                    "Id": "0032x00000DqVrAAAV",
                    "Name": "tr",
                    "Email": "finam@ginal.com",
                    "Phone": "7,897,897,998",
                    "AccountId": "0012x00000Ax9nJAAR",
                    "Account": {
                        "Id": "0012x00000Ax9nJAAR",
                        "Name": "ronak1"
                    }
                },
                {
                    "Id": "0032x00000DqVjuAAF",
                    "Name": "tr",
                    "Email": "final@ginal.com",
                    "Phone": "7,897,897,998",
                    "AccountId": "0012x00000Ax9nJAAR",
                    "Account": {
                        "Id": "0012x00000Ax9nJAAR",
                        "Name": "ronak1"
                    }
                },
                {
                    "Id": "0032x00000DqVk9AAF",
                    "Name": "My",
                    "Email": "final@gmao.com",
                    "Phone": "9,799,280,040",
                    "AccountId": "0012x00000Ax9nJAAR",
                    "Account": {
                        "Id": "0012x00000Ax9nJAAR",
                        "Name": "ronak1"
                    }
                }
            ]
        },
        {
            "id": "0012x00000I8k7MAAR",
            "con": [
                {
                    "Id": "0032x00000DqVhKAAV",
                    "Name": "test",
                    "AccountId": "0012x00000I8k7MAAR",
                    "Account": {
                        "Id": "0012x00000I8k7MAAR",
                        "Name": "My"
                    }
                },
                {
                    "Id": "0032x00000DqVhZAAV",
                    "Name": "Toshniwal",
                    "AccountId": "0012x00000I8k7MAAR",
                    "Account": {
                        "Id": "0012x00000I8k7MAAR",
                        "Name": "My"
                    }
                }
            ]
        },
        {
            "id": "0012x00000MvXByAAN",
            "con": [
                {
                    "Id": "0032x00000FnYPmAAN",
                    "Name": "Bertha Boxer",
                    "Email": "bertha@fcof.net",
                    "Phone": "(850) 644-4200",
                    "AccountId": "0012x00000MvXByAAN",
                    "Account": {
                        "Id": "0012x00000MvXByAAN",
                        "Name": "Farmers Coop. of Florida"
                    }
                }
            ]
        },
        {
            "id": "0012x00000MUP7jAAH",
            "con": [
                {
                    "Id": "0032x00000G9GfyAAF",
                    "Name": "r t",
                    "Phone": "9799",
                    "AccountId": "0012x00000MUP7jAAH",
                    "Account": {
                        "Id": "0012x00000MUP7jAAH",
                        "Name": "na"
                    }
                }
            ]
        }
    ]


    @wire(accCon)
    accConWired({ error, data }) {
        if (data) {
            console.log('get data', data)
            for (let i = 0; i < data.length; i++) {
                if (this.newMap.has(data[i].AccountId)) {
                    this.newMap.get(data[i].AccountId).push(data[i])
                } else {
                    this.newMap.set(data[i].AccountId, [])
                    this.newMap.get(data[i].AccountId).push(data[i])
                }
            }
            console.log('newMap', this.newMap)

            this.newMap.forEach((x, y) => {
                this.simplifiedList.push({ id: y, con: x })

            })
            console.log(this.simplifiedList)
        } else {
            console.log('error', error)
        }
    }

    renderedCallback() {
        console.log('simp', this.simplifiedList)
    }

}