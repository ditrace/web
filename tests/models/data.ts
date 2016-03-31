export const traces_json = {
    "total": 4,
    "hits":
    [
        {
            "_index": "traces-2016.03.31",
            "_type": "trace",
            "_id": "AVPLas8ijw2XO6s_8pZD",
            "_score": null,
            "_source": {
                "duration": 163570,
                "id": "d01751310ee24bb181cda967b876e1d8",
                "spans": [
                    {
                        "host": "auth.dev.kontur",
                        "prefix": "",
                        "rawurl": "\/Handlers\/GetTokenByPassword.ashx",
                        "rc": "200",
                        "rqbl": "104",
                        "sd": 163570,
                        "spanid": "8476aa58",
                        "targetid": "Authenticator",
                        "timeline": {
                            "sr": "2016-03-31T06:44:25.4478345Z",
                            "ss": "2016-03-31T06:44:25.6114049Z"
                        },
                        "url": "\/handlers\/gettokenbypassword.ashx",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14250,
                        "host": "vm-portal2",
                        "parentspanid": "8476aa58",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/sessions\/CF41547671CCC8448A86E7A0FD0F3E933D4D73966B98DA42AE61CF49E1708E54",
                        "rc": "200",
                        "rsbl": "16",
                        "sd": 22755,
                        "spanid": "df658386",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.4634593Z",
                            "cs": "2016-03-31T06:44:25.4492089Z",
                            "sr": "2016-03-31T06:44:25.5546954Z",
                            "ss": "2016-03-31T06:44:25.5774505Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "DELETE"
                    },
                    {
                        "cd": 61755,
                        "host": "vm-portal1",
                        "parentspanid": "8476aa58",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/authenticate-by-pass",
                        "rc": "200",
                        "rqbl": "7",
                        "rsbl": "74",
                        "sd": 63085,
                        "spanid": "3c208f1b",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6040612Z",
                            "cs": "2016-03-31T06:44:25.5423056Z",
                            "sr": "2016-03-31T06:44:25.6447015Z",
                            "ss": "2016-03-31T06:44:25.7077873Z"
                        },
                        "url": "\/v<num>.<num>\/authenticate-by-pass",
                        "url_method": "POST"
                    },
                    {
                        "cd": 30520,
                        "host": "vm-portal3",
                        "parentspanid": "8476aa58",
                        "prefix": "Authenticator",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "1124",
                        "sd": 30348,
                        "spanid": "789186e7",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5415845Z",
                            "cs": "2016-03-31T06:44:25.5110645Z",
                            "sr": "2016-03-31T06:44:25.5044548Z",
                            "ss": "2016-03-31T06:44:25.5348032Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 5352,
                        "host": "vm-portal2",
                        "parentspanid": "8476aa58",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/sessions\/75FEC5AF5B257B49B9C55BE487E9ABEDE85141F79A7CFA4699ADCB54E51F8121",
                        "rc": "200",
                        "rsbl": "360",
                        "sd": 2919,
                        "spanid": "3be12318",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6099618Z",
                            "cs": "2016-03-31T06:44:25.6046097Z",
                            "sr": "2016-03-31T06:44:25.7109438Z",
                            "ss": "2016-03-31T06:44:25.7138634Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 46267,
                        "host": "vm-portal2",
                        "parentspanid": "8476aa58",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/authenticate-by-pass",
                        "rc": "200",
                        "rqbl": "12",
                        "rsbl": "74",
                        "sd": 44313,
                        "spanid": "0515ac91",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.510334Z",
                            "cs": "2016-03-31T06:44:25.4640662Z",
                            "sr": "2016-03-31T06:44:25.5792341Z",
                            "ss": "2016-03-31T06:44:25.6235473Z"
                        },
                        "url": "\/v<num>.<num>\/authenticate-by-pass",
                        "url_method": "POST"
                    },
                    {
                        "cd": 4548,
                        "host": "192.168.68.4",
                        "parentspanid": "df658386",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/removeByKey",
                        "rc": "200",
                        "rqbl": "341",
                        "sd": 853,
                        "spanid": "3b2bec40",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5771189Z",
                            "cs": "2016-03-31T06:44:25.5725702Z",
                            "sr": "2016-03-31T06:44:25.5463599Z",
                            "ss": "2016-03-31T06:44:25.5472137Z"
                        },
                        "url": "\/removebykey",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1759,
                        "host": "192.168.68.4",
                        "parentspanid": "df658386",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "407",
                        "sd": 81,
                        "spanid": "a8aa5eed",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.572074Z",
                            "cs": "2016-03-31T06:44:25.5703146Z",
                            "sr": "2016-03-31T06:44:25.5459395Z",
                            "ss": "2016-03-31T06:44:25.5460209Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 7081,
                        "host": "192.168.68.4",
                        "parentspanid": "3c208f1b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/write",
                        "rc": "200",
                        "rqbl": "4839",
                        "sd": 2602,
                        "spanid": "7329b841",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.7072075Z",
                            "cs": "2016-03-31T06:44:25.7001256Z",
                            "sr": "2016-03-31T06:44:25.6865641Z",
                            "ss": "2016-03-31T06:44:25.6891663Z"
                        },
                        "url": "\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1144,
                        "host": "192.168.68.4",
                        "parentspanid": "3c208f1b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "848",
                        "rsbl": "101",
                        "sd": 78,
                        "spanid": "4c8cfa97",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6935051Z",
                            "cs": "2016-03-31T06:44:25.6923606Z",
                            "sr": "2016-03-31T06:44:25.6709157Z",
                            "ss": "2016-03-31T06:44:25.6709941Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 30729,
                        "host": "vm-portal1",
                        "parentspanid": "3c208f1b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "1124",
                        "sd": 31836,
                        "spanid": "2c063953",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6915992Z",
                            "cs": "2016-03-31T06:44:25.66087Z",
                            "sr": "2016-03-31T06:44:25.6603256Z",
                            "ss": "2016-03-31T06:44:25.6921617Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1184,
                        "host": "192.168.68.1",
                        "parentspanid": "3c208f1b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "860",
                        "rsbl": "0",
                        "sd": 13913,
                        "spanid": "35b4f7fa",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6993248Z",
                            "cs": "2016-03-31T06:44:25.6981399Z",
                            "sr": "2016-03-31T06:44:25.6985763Z",
                            "ss": "2016-03-31T06:44:25.71249Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14859,
                        "host": "192.168.68.1",
                        "parentspanid": "3c208f1b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 113,
                        "spanid": "0e32a48a",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6603256Z",
                            "cs": "2016-03-31T06:44:25.6454664Z",
                            "sr": "2016-03-31T06:44:25.6655878Z",
                            "ss": "2016-03-31T06:44:25.6657008Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 3500,
                        "host": "ul-k0ch1",
                        "parentspanid": "3c208f1b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/tableExists",
                        "rc": "200",
                        "sd": 11,
                        "spanid": "f51e1209",
                        "targetid": "Zebra.Master.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.697542Z",
                            "cs": "2016-03-31T06:44:25.6940414Z",
                            "sr": "2016-03-31T06:44:25.6709157Z",
                            "ss": "2016-03-31T06:44:25.6709276Z"
                        },
                        "url": "\/tableexists",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1281,
                        "host": "192.168.68.7",
                        "parentspanid": "789186e7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "918",
                        "sd": 85,
                        "spanid": "fc9d8609",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5160606Z",
                            "cs": "2016-03-31T06:44:25.5147792Z",
                            "sr": "2016-03-31T06:44:25.5696914Z",
                            "ss": "2016-03-31T06:44:25.5697771Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1365,
                        "host": "192.168.68.7",
                        "parentspanid": "789186e7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "881",
                        "rsbl": "78",
                        "sd": 119,
                        "spanid": "4d2a8fa5",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5139537Z",
                            "cs": "2016-03-31T06:44:25.5125879Z",
                            "sr": "2016-03-31T06:44:25.5691737Z",
                            "ss": "2016-03-31T06:44:25.569293Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1543,
                        "host": "192.168.68.7",
                        "parentspanid": "789186e7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "519",
                        "sd": 80,
                        "spanid": "5897b245",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5117707Z",
                            "cs": "2016-03-31T06:44:25.5102271Z",
                            "sr": "2016-03-31T06:44:25.5686571Z",
                            "ss": "2016-03-31T06:44:25.5687375Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 3929,
                        "host": "vm-portal1",
                        "parentspanid": "789186e7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/v5.5\/sessions\/CF41547671CCC8448A86E7A0FD0F3E93713E8DD9A6143540BE00AF26BE4CEA95",
                        "rc": "200",
                        "rsbl": "362",
                        "sd": 2617,
                        "spanid": "acabeca9",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5092783Z",
                            "cs": "2016-03-31T06:44:25.5053491Z",
                            "sr": "2016-03-31T06:44:25.6300583Z",
                            "ss": "2016-03-31T06:44:25.6326759Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 13998,
                        "host": "vm-portal1",
                        "parentspanid": "789186e7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$afc5fe75-255b-497b-b9c5-5be487e9abed\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 22753,
                        "spanid": "c545e87e",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5340762Z",
                            "cs": "2016-03-31T06:44:25.5200776Z",
                            "sr": "2016-03-31T06:44:25.6300582Z",
                            "ss": "2016-03-31T06:44:25.6528117Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1557,
                        "host": "192.168.68.4",
                        "parentspanid": "3be12318",
                        "prefix": "Authenticator",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "407",
                        "sd": 145,
                        "spanid": "c21f6b5d",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.7134185Z",
                            "cs": "2016-03-31T06:44:25.7118614Z",
                            "sr": "2016-03-31T06:44:25.7021665Z",
                            "ss": "2016-03-31T06:44:25.7023124Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 19180,
                        "host": "vm-portal1",
                        "parentspanid": "0515ac91",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "685",
                        "sd": 31822,
                        "spanid": "88955b51",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.601569Z",
                            "cs": "2016-03-31T06:44:25.5823883Z",
                            "sr": "2016-03-31T06:44:25.5665758Z",
                            "ss": "2016-03-31T06:44:25.5983987Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1685,
                        "host": "192.168.68.1",
                        "parentspanid": "0515ac91",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 97,
                        "spanid": "21bb2a4e",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5817317Z",
                            "cs": "2016-03-31T06:44:25.5800464Z",
                            "sr": "2016-03-31T06:44:25.5874829Z",
                            "ss": "2016-03-31T06:44:25.5875803Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1408,
                        "host": "192.168.68.6",
                        "parentspanid": "0515ac91",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "860",
                        "rsbl": "0",
                        "sd": 138,
                        "spanid": "cff4570d",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6080336Z",
                            "cs": "2016-03-31T06:44:25.6066248Z",
                            "sr": "2016-03-31T06:44:25.62704Z",
                            "ss": "2016-03-31T06:44:25.6271782Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 727,
                        "host": "ul-k0ch1",
                        "parentspanid": "0515ac91",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/tableExists",
                        "rc": "200",
                        "sd": 14,
                        "spanid": "47683b44",
                        "targetid": "Zebra.Master.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6060846Z",
                            "cs": "2016-03-31T06:44:25.6053567Z",
                            "sr": "2016-03-31T06:44:25.5928101Z",
                            "ss": "2016-03-31T06:44:25.5928243Z"
                        },
                        "url": "\/tableexists",
                        "url_method": "GET"
                    },
                    {
                        "cd": 5849,
                        "host": "192.168.68.4",
                        "parentspanid": "0515ac91",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/write",
                        "rc": "200",
                        "rqbl": "4839",
                        "sd": 1068,
                        "spanid": "c3c579ad",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6230478Z",
                            "cs": "2016-03-31T06:44:25.6171985Z",
                            "sr": "2016-03-31T06:44:25.5939005Z",
                            "ss": "2016-03-31T06:44:25.594969Z"
                        },
                        "url": "\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1934,
                        "host": "192.168.68.4",
                        "parentspanid": "0515ac91",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "848",
                        "rsbl": "101",
                        "sd": 99,
                        "spanid": "f789cb21",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6047807Z",
                            "cs": "2016-03-31T06:44:25.6028459Z",
                            "sr": "2016-03-31T06:44:25.577198Z",
                            "ss": "2016-03-31T06:44:25.5772975Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 699,
                        "host": "ul-k0ch3",
                        "parentspanid": "3b2bec40",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/write",
                        "rc": "200",
                        "rqbl": "62",
                        "rsbl": "8",
                        "sd": 506,
                        "spanid": "d4a74a6f",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5471641Z",
                            "cs": "2016-03-31T06:44:25.5464643Z",
                            "sr": "2016-03-31T06:44:25.5718546Z",
                            "ss": "2016-03-31T06:44:25.5723607Z"
                        },
                        "url": "\/chunks\/<hex>\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 218,
                        "host": "ul-k0ch3",
                        "parentspanid": "7329b841",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "rawurl": "\/files\/whereWrite",
                        "rc": "200",
                        "rqbl": "92",
                        "rsbl": "56",
                        "sd": 37,
                        "spanid": "85c6b0ba",
                        "targetid": "Kanso3d.Master",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6871187Z",
                            "cs": "2016-03-31T06:44:25.6869003Z",
                            "sr": "2016-03-31T06:44:25.7124899Z",
                            "ss": "2016-03-31T06:44:25.7125277Z"
                        },
                        "url": "\/files\/wherewrite",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2170,
                        "host": "ul-k0ch2",
                        "parentspanid": "7329b841",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/write",
                        "rc": "200",
                        "rqbl": "203",
                        "rsbl": "8",
                        "sd": 15689,
                        "spanid": "8881b405",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6891121Z",
                            "cs": "2016-03-31T06:44:25.6869417Z",
                            "sr": "2016-03-31T06:44:25.637004Z",
                            "ss": "2016-03-31T06:44:25.6526933Z"
                        },
                        "url": "\/chunks\/<hex>\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 15601,
                        "host": "vm-portal3",
                        "parentspanid": "2c063953",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$afc5fe75-255b-497b-b9c5-5be487e9abed\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 18488,
                        "spanid": "d8001529",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6915991Z",
                            "cs": "2016-03-31T06:44:25.6759975Z",
                            "sr": "2016-03-31T06:44:25.5513389Z",
                            "ss": "2016-03-31T06:44:25.5698272Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1394,
                        "host": "192.168.68.7",
                        "parentspanid": "2c063953",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "918",
                        "sd": 84,
                        "spanid": "6733217a",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6718692Z",
                            "cs": "2016-03-31T06:44:25.6704752Z",
                            "sr": "2016-03-31T06:44:25.6012167Z",
                            "ss": "2016-03-31T06:44:25.6013007Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2342,
                        "host": "192.168.68.7",
                        "parentspanid": "2c063953",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "881",
                        "rsbl": "78",
                        "sd": 76,
                        "spanid": "775e1fb1",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6697736Z",
                            "cs": "2016-03-31T06:44:25.6674315Z",
                            "sr": "2016-03-31T06:44:25.6005118Z",
                            "ss": "2016-03-31T06:44:25.600588Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1462,
                        "host": "192.168.68.7",
                        "parentspanid": "2c063953",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "619",
                        "sd": 83,
                        "spanid": "afffe1c7",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6663447Z",
                            "cs": "2016-03-31T06:44:25.6648823Z",
                            "sr": "2016-03-31T06:44:25.5998812Z",
                            "ss": "2016-03-31T06:44:25.5999646Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2682,
                        "host": "vm-portal1",
                        "parentspanid": "2c063953",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/v5.5\/sessions\/1E217552F56E93489983DA15F4499EFC3FE989C7BC2BBA498B809056CBBAE4C9",
                        "rc": "200",
                        "rsbl": "329",
                        "sd": 2123,
                        "spanid": "a944db5f",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6638942Z",
                            "cs": "2016-03-31T06:44:25.6612116Z",
                            "sr": "2016-03-31T06:44:25.6638859Z",
                            "ss": "2016-03-31T06:44:25.6660093Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1268,
                        "host": "192.168.68.4",
                        "parentspanid": "acabeca9",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "407",
                        "sd": 82,
                        "spanid": "98d54e85",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6321447Z",
                            "cs": "2016-03-31T06:44:25.6308758Z",
                            "sr": "2016-03-31T06:44:25.6091649Z",
                            "ss": "2016-03-31T06:44:25.6092472Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1255,
                        "host": "192.168.68.7",
                        "parentspanid": "c545e87e",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 76,
                        "spanid": "1ddea129",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6526213Z",
                            "cs": "2016-03-31T06:44:25.6513658Z",
                            "sr": "2016-03-31T06:44:25.5842792Z",
                            "ss": "2016-03-31T06:44:25.5843559Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14183,
                        "host": "vm-portal2",
                        "parentspanid": "c545e87e",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/v5.5\/sessions\/CF41547671CCC8448A86E7A0FD0F3E93713E8DD9A6143540BE00AF26BE4CEA95",
                        "rc": "200",
                        "rsbl": "362",
                        "sd": 16068,
                        "spanid": "e3eea542",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6447015Z",
                            "cs": "2016-03-31T06:44:25.6305183Z",
                            "sr": "2016-03-31T06:44:25.6328177Z",
                            "ss": "2016-03-31T06:44:25.648886Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 4404,
                        "host": "192.168.68.1",
                        "parentspanid": "c545e87e",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 338,
                        "spanid": "4efac73d",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6497509Z",
                            "cs": "2016-03-31T06:44:25.645346Z",
                            "sr": "2016-03-31T06:44:25.6499893Z",
                            "ss": "2016-03-31T06:44:25.6503279Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1813,
                        "host": "192.168.68.7",
                        "parentspanid": "88955b51",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "619",
                        "sd": 81,
                        "spanid": "a8f31ad5",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5840148Z",
                            "cs": "2016-03-31T06:44:25.5822013Z",
                            "sr": "2016-03-31T06:44:25.5061146Z",
                            "ss": "2016-03-31T06:44:25.506196Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 9033,
                        "host": "vm-portal3",
                        "parentspanid": "88955b51",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$765441cf-cc71-44c8-8a86-e7a0fd0f3e93\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 26226,
                        "spanid": "c5be8d73",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5978261Z",
                            "cs": "2016-03-31T06:44:25.5887924Z",
                            "sr": "2016-03-31T06:44:25.4575858Z",
                            "ss": "2016-03-31T06:44:25.4838122Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1418,
                        "host": "192.168.68.7",
                        "parentspanid": "88955b51",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "519",
                        "sd": 86,
                        "spanid": "90768a47",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5882704Z",
                            "cs": "2016-03-31T06:44:25.5868517Z",
                            "sr": "2016-03-31T06:44:25.5222217Z",
                            "ss": "2016-03-31T06:44:25.5223079Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1366,
                        "host": "192.168.68.7",
                        "parentspanid": "88955b51",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "881",
                        "rsbl": "78",
                        "sd": 76,
                        "spanid": "6353c391",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5862303Z",
                            "cs": "2016-03-31T06:44:25.5848637Z",
                            "sr": "2016-03-31T06:44:25.5217789Z",
                            "ss": "2016-03-31T06:44:25.5218552Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 700,
                        "host": "ul-k0ch3",
                        "parentspanid": "c3c579ad",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/write",
                        "rc": "200",
                        "rqbl": "203",
                        "rsbl": "8",
                        "sd": 515,
                        "spanid": "743dbb0d",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5949213Z",
                            "cs": "2016-03-31T06:44:25.5942208Z",
                            "sr": "2016-03-31T06:44:25.618709Z",
                            "ss": "2016-03-31T06:44:25.6192241Z"
                        },
                        "url": "\/chunks\/<hex>\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 190,
                        "host": "ul-k0ch1",
                        "parentspanid": "d4a74a6f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/commit",
                        "rc": "200",
                        "sd": 38,
                        "spanid": "57d39f3b",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5725201Z",
                            "cs": "2016-03-31T06:44:25.5723296Z",
                            "sr": "2016-03-31T06:44:25.54625Z",
                            "ss": "2016-03-31T06:44:25.5462887Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 269,
                        "host": "ul-k0ch1",
                        "parentspanid": "d4a74a6f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/append",
                        "rc": "200",
                        "rqbl": "62",
                        "sd": 82,
                        "spanid": "4703d8b9",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.572263Z",
                            "cs": "2016-03-31T06:44:25.5719931Z",
                            "sr": "2016-03-31T06:44:25.5459395Z",
                            "ss": "2016-03-31T06:44:25.5460215Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 218,
                        "host": "ul-k0ch2",
                        "parentspanid": "d4a74a6f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/commit",
                        "rc": "200",
                        "sd": 51,
                        "spanid": "3ad28d2b",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5725145Z",
                            "cs": "2016-03-31T06:44:25.5722964Z",
                            "sr": "2016-03-31T06:44:25.5064033Z",
                            "ss": "2016-03-31T06:44:25.5064552Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 275,
                        "host": "ul-k0ch2",
                        "parentspanid": "d4a74a6f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/append",
                        "rc": "200",
                        "rqbl": "62",
                        "sd": 92,
                        "spanid": "e6d9dbf6",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5722693Z",
                            "cs": "2016-03-31T06:44:25.5719935Z",
                            "sr": "2016-03-31T06:44:25.5061146Z",
                            "ss": "2016-03-31T06:44:25.5062069Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 337,
                        "host": "ul-k0ch3",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/isr\/acquire-version-promise",
                        "rc": "200",
                        "sd": 54,
                        "spanid": "9e52fa9f",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6377726Z",
                            "cs": "2016-03-31T06:44:25.6374351Z",
                            "sr": "2016-03-31T06:44:25.71249Z",
                            "ss": "2016-03-31T06:44:25.712544Z"
                        },
                        "url": "\/chunks\/<hex>\/isr\/acquire-version-promise",
                        "url_method": "POST"
                    },
                    {
                        "cd": 224,
                        "host": "ul-k0ch3",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/isr\/requestLeadership",
                        "rc": "200",
                        "rqbl": "42",
                        "rsbl": "212",
                        "sd": 42,
                        "spanid": "52942b64",
                        "targetid": "Kanso3d.Master",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6373198Z",
                            "cs": "2016-03-31T06:44:25.6370951Z",
                            "sr": "2016-03-31T06:44:25.7130565Z",
                            "ss": "2016-03-31T06:44:25.7130994Z"
                        },
                        "url": "\/isr\/requestleadership",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14262,
                        "host": "ul-k0ch4",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/commit",
                        "rc": "200",
                        "sd": 51,
                        "spanid": "a1ddccd9",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6528566Z",
                            "cs": "2016-03-31T06:44:25.6385946Z",
                            "sr": "2016-03-31T06:44:25.736436Z",
                            "ss": "2016-03-31T06:44:25.7364879Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 276,
                        "host": "ul-k0ch4",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/append",
                        "rc": "200",
                        "rqbl": "203",
                        "sd": 86,
                        "spanid": "d4434592",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6385677Z",
                            "cs": "2016-03-31T06:44:25.6382914Z",
                            "sr": "2016-03-31T06:44:25.721416Z",
                            "ss": "2016-03-31T06:44:25.7215021Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 536,
                        "host": "ul-k0ch4",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/isr\/acquire-version-promise",
                        "rc": "200",
                        "sd": 52,
                        "spanid": "c516ad22",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.637937Z",
                            "cs": "2016-03-31T06:44:25.6374006Z",
                            "sr": "2016-03-31T06:44:25.7208062Z",
                            "ss": "2016-03-31T06:44:25.7208583Z"
                        },
                        "url": "\/chunks\/<hex>\/isr\/acquire-version-promise",
                        "url_method": "POST"
                    },
                    {
                        "cd": 186,
                        "host": "ul-k0ch3",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/meta",
                        "rc": "200",
                        "rsbl": "28",
                        "sd": 31,
                        "spanid": "3355348b",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6381966Z",
                            "cs": "2016-03-31T06:44:25.6380103Z",
                            "sr": "2016-03-31T06:44:25.7129817Z",
                            "ss": "2016-03-31T06:44:25.7130127Z"
                        },
                        "url": "\/chunks\/<hex>\/meta",
                        "url_method": "GET"
                    },
                    {
                        "cd": 203,
                        "host": "ul-k0ch4",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/meta",
                        "rc": "200",
                        "rsbl": "28",
                        "sd": 30,
                        "spanid": "2793e9a0",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6381727Z",
                            "cs": "2016-03-31T06:44:25.6379694Z",
                            "sr": "2016-03-31T06:44:25.7210766Z",
                            "ss": "2016-03-31T06:44:25.7211066Z"
                        },
                        "url": "\/chunks\/<hex>\/meta",
                        "url_method": "GET"
                    },
                    {
                        "cd": 207,
                        "host": "ul-k0ch3",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/commit",
                        "rc": "200",
                        "sd": 68,
                        "spanid": "817a2f3a",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6528673Z",
                            "cs": "2016-03-31T06:44:25.6526598Z",
                            "sr": "2016-03-31T06:44:25.71359Z",
                            "ss": "2016-03-31T06:44:25.713658Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 271,
                        "host": "ul-k0ch3",
                        "parentspanid": "8881b405",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/45ec4f65-5520-484f-bf42-70fdbf58e0b6\/append",
                        "rc": "200",
                        "rqbl": "203",
                        "sd": 100,
                        "spanid": "d358bced",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6385629Z",
                            "cs": "2016-03-31T06:44:25.6382919Z",
                            "sr": "2016-03-31T06:44:25.7132712Z",
                            "ss": "2016-03-31T06:44:25.7133717Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2464,
                        "host": "192.168.68.7",
                        "parentspanid": "d8001529",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 186,
                        "spanid": "d64643b8",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5694223Z",
                            "cs": "2016-03-31T06:44:25.5669575Z",
                            "sr": "2016-03-31T06:44:25.6155332Z",
                            "ss": "2016-03-31T06:44:25.6157194Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 4748,
                        "host": "192.168.68.1",
                        "parentspanid": "d8001529",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 331,
                        "spanid": "cb72ed18",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5612049Z",
                            "cs": "2016-03-31T06:44:25.5564565Z",
                            "sr": "2016-03-31T06:44:25.6827028Z",
                            "ss": "2016-03-31T06:44:25.6830344Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 3538,
                        "host": "vm-portal3",
                        "parentspanid": "d8001529",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/v5.5\/sessions\/1E217552F56E93489983DA15F4499EFC3FE989C7BC2BBA498B809056CBBAE4C9",
                        "rc": "200",
                        "rsbl": "329",
                        "sd": 2665,
                        "spanid": "9c3f1870",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5554356Z",
                            "cs": "2016-03-31T06:44:25.5518975Z",
                            "sr": "2016-03-31T06:44:25.5540427Z",
                            "ss": "2016-03-31T06:44:25.5567085Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1119,
                        "host": "192.168.68.1",
                        "parentspanid": "a944db5f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 77,
                        "spanid": "4efe0036",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6654798Z",
                            "cs": "2016-03-31T06:44:25.6643605Z",
                            "sr": "2016-03-31T06:44:25.6668753Z",
                            "ss": "2016-03-31T06:44:25.6669528Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 15019,
                        "host": "192.168.68.4",
                        "parentspanid": "e3eea542",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "407",
                        "sd": 77,
                        "spanid": "c32e6592",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6484446Z",
                            "cs": "2016-03-31T06:44:25.6334255Z",
                            "sr": "2016-03-31T06:44:25.6240664Z",
                            "ss": "2016-03-31T06:44:25.6241434Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14818,
                        "host": "vm-portal3",
                        "parentspanid": "c5be8d73",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/v5.5\/sessions\/1E217552F56E93489983DA15F4499EFC36ECAE77DC35E14C9B8E11B7E95758D0",
                        "rc": "200",
                        "rsbl": "329",
                        "sd": 16229,
                        "spanid": "af93782b",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.4732046Z",
                            "cs": "2016-03-31T06:44:25.4583858Z",
                            "sr": "2016-03-31T06:44:25.4575856Z",
                            "ss": "2016-03-31T06:44:25.4738155Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1455,
                        "host": "192.168.68.7",
                        "parentspanid": "c5be8d73",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 78,
                        "spanid": "d467f44f",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.4834915Z",
                            "cs": "2016-03-31T06:44:25.4820361Z",
                            "sr": "2016-03-31T06:44:25.5374066Z",
                            "ss": "2016-03-31T06:44:25.5374853Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 5135,
                        "host": "192.168.68.1",
                        "parentspanid": "c5be8d73",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 341,
                        "spanid": "d5ac69c9",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.47914Z",
                            "cs": "2016-03-31T06:44:25.4740046Z",
                            "sr": "2016-03-31T06:44:25.6039123Z",
                            "ss": "2016-03-31T06:44:25.6042542Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 197,
                        "host": "ul-k0ch2",
                        "parentspanid": "743dbb0d",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/commit",
                        "rc": "200",
                        "sd": 37,
                        "spanid": "8f1cf7bb",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6193463Z",
                            "cs": "2016-03-31T06:44:25.619149Z",
                            "sr": "2016-03-31T06:44:25.5533172Z",
                            "ss": "2016-03-31T06:44:25.553355Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 268,
                        "host": "ul-k0ch2",
                        "parentspanid": "743dbb0d",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/append",
                        "rc": "200",
                        "rqbl": "203",
                        "sd": 81,
                        "spanid": "3dbab9b2",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6191144Z",
                            "cs": "2016-03-31T06:44:25.6188459Z",
                            "sr": "2016-03-31T06:44:25.5530329Z",
                            "ss": "2016-03-31T06:44:25.5531145Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 191,
                        "host": "ul-k0ch1",
                        "parentspanid": "743dbb0d",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/commit",
                        "rc": "200",
                        "sd": 37,
                        "spanid": "b6328242",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6193812Z",
                            "cs": "2016-03-31T06:44:25.6191895Z",
                            "sr": "2016-03-31T06:44:25.5931293Z",
                            "ss": "2016-03-31T06:44:25.5931669Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 246,
                        "host": "ul-k0ch1",
                        "parentspanid": "743dbb0d",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/append",
                        "rc": "200",
                        "rqbl": "203",
                        "sd": 77,
                        "spanid": "cf552bf5",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.6190959Z",
                            "cs": "2016-03-31T06:44:25.6188493Z",
                            "sr": "2016-03-31T06:44:25.5928101Z",
                            "ss": "2016-03-31T06:44:25.5928876Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1483,
                        "host": "192.168.68.1",
                        "parentspanid": "9c3f1870",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 78,
                        "spanid": "105617ee",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.5562128Z",
                            "cs": "2016-03-31T06:44:25.5547295Z",
                            "sr": "2016-03-31T06:44:25.6818136Z",
                            "ss": "2016-03-31T06:44:25.6818924Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14751,
                        "host": "192.168.68.1",
                        "parentspanid": "af93782b",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 87,
                        "spanid": "527fd278",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:44:25.4732047Z",
                            "cs": "2016-03-31T06:44:25.4584529Z",
                            "sr": "2016-03-31T06:44:25.6031075Z",
                            "ss": "2016-03-31T06:44:25.6031946Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    }
                ],
                "system": "ke",
                "timestamp": "2016-03-31T06:44:25.4478345Z"
            },
            "sort": [
                163570
            ]
        },
        {
            "_index": "traces-2016.03.31",
            "_type": "trace",
            "_id": "AVPLVmBgPASIJee_lka0",
            "_score": null,
            "_source": {
                "duration": 119254,
                "id": "97c0bcfa72904b64a159cb5cfadbd61a",
                "spans": [
                    {
                        "host": "auth.dev.kontur",
                        "prefix": "",
                        "rawurl": "\/Handlers\/GetTokenByPassword.ashx",
                        "rc": "200",
                        "rqbl": "93",
                        "sd": 119254,
                        "spanid": "39963d23",
                        "targetid": "Authenticator",
                        "timeline": {
                            "sr": "2016-03-31T06:21:58.0577768Z",
                            "ss": "2016-03-31T06:21:58.1770312Z"
                        },
                        "url": "\/handlers\/gettokenbypassword.ashx",
                        "url_method": "POST"
                    },
                    {
                        "cd": 59974,
                        "host": "vm-portal1",
                        "parentspanid": "39963d23",
                        "prefix": "Authenticator",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "1397",
                        "sd": 47627,
                        "spanid": "5f9e6cf7",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1202211Z",
                            "cs": "2016-03-31T06:21:58.0602467Z",
                            "sr": "2016-03-31T06:21:58.1793537Z",
                            "ss": "2016-03-31T06:21:58.2269814Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 7208,
                        "host": "vm-portal2",
                        "parentspanid": "39963d23",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/sessions\/19D719719B4D5744A31B2BEA51B543AC2309B2085A8F1E4683B717C288745C94",
                        "rc": "200",
                        "rsbl": "366",
                        "sd": 2544,
                        "spanid": "f00b6c81",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1750849Z",
                            "cs": "2016-03-31T06:21:58.1678762Z",
                            "sr": "2016-03-31T06:21:58.2832506Z",
                            "ss": "2016-03-31T06:21:58.2857946Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 45715,
                        "host": "vm-portal1",
                        "parentspanid": "39963d23",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/authenticate-by-pass",
                        "rc": "200",
                        "rqbl": "6",
                        "rsbl": "74",
                        "sd": 56575,
                        "spanid": "766e0a46",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1670972Z",
                            "cs": "2016-03-31T06:21:58.1213819Z",
                            "sr": "2016-03-31T06:21:58.2262429Z",
                            "ss": "2016-03-31T06:21:58.282818Z"
                        },
                        "url": "\/v<num>.<num>\/authenticate-by-pass",
                        "url_method": "POST"
                    },
                    {
                        "cd": 7842,
                        "host": "192.168.68.7",
                        "parentspanid": "5f9e6cf7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "886",
                        "rsbl": "83",
                        "sd": 72,
                        "spanid": "1245216f",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.210753Z",
                            "cs": "2016-03-31T06:21:58.2029105Z",
                            "sr": "2016-03-31T06:21:58.1499611Z",
                            "ss": "2016-03-31T06:21:58.1500331Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 4818,
                        "host": "192.168.68.7",
                        "parentspanid": "5f9e6cf7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "519",
                        "sd": 82,
                        "spanid": "17f4c6b3",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2008597Z",
                            "cs": "2016-03-31T06:21:58.1960411Z",
                            "sr": "2016-03-31T06:21:58.149162Z",
                            "ss": "2016-03-31T06:21:58.1492444Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14554,
                        "host": "vm-portal2",
                        "parentspanid": "5f9e6cf7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/v5.5\/sessions\/CF41547671CCC8448A86E7A0FD0F3E939B4520019B5A7246A88439C0FCC61F0D",
                        "rc": "200",
                        "rsbl": "363",
                        "sd": 5695,
                        "spanid": "fa42ba23",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1949809Z",
                            "cs": "2016-03-31T06:21:58.1804261Z",
                            "sr": "2016-03-31T06:21:58.1894887Z",
                            "ss": "2016-03-31T06:21:58.1951837Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 12235,
                        "host": "vm-portal3",
                        "parentspanid": "5f9e6cf7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$7119d719-4d9b-4457-a31b-2bea51b543ac\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 20209,
                        "spanid": "d3b1deac",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2262429Z",
                            "cs": "2016-03-31T06:21:58.2140075Z",
                            "sr": "2016-03-31T06:21:58.1057018Z",
                            "ss": "2016-03-31T06:21:58.125911Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1376,
                        "host": "192.168.68.7",
                        "parentspanid": "5f9e6cf7",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "1165",
                        "sd": 85,
                        "spanid": "fd54605e",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2129522Z",
                            "cs": "2016-03-31T06:21:58.2115755Z",
                            "sr": "2016-03-31T06:21:58.1509886Z",
                            "ss": "2016-03-31T06:21:58.1510743Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1277,
                        "host": "192.168.68.1",
                        "parentspanid": "f00b6c81",
                        "prefix": "Authenticator",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "413",
                        "sd": 80,
                        "spanid": "41be0771",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2853155Z",
                            "cs": "2016-03-31T06:21:58.2840383Z",
                            "sr": "2016-03-31T06:21:58.2903754Z",
                            "ss": "2016-03-31T06:21:58.2904555Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 6248,
                        "host": "192.168.68.1",
                        "parentspanid": "766e0a46",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/write",
                        "rc": "200",
                        "rqbl": "4845",
                        "sd": 15706,
                        "spanid": "66b78b90",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2822948Z",
                            "cs": "2016-03-31T06:21:58.2760466Z",
                            "sr": "2016-03-31T06:21:58.2726939Z",
                            "ss": "2016-03-31T06:21:58.2884004Z"
                        },
                        "url": "\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1478,
                        "host": "192.168.68.1",
                        "parentspanid": "766e0a46",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 125,
                        "spanid": "ee980f43",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2286928Z",
                            "cs": "2016-03-31T06:21:58.2272146Z",
                            "sr": "2016-03-31T06:21:58.2414657Z",
                            "ss": "2016-03-31T06:21:58.2415909Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 12476,
                        "host": "ul-k0ch1",
                        "parentspanid": "766e0a46",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/tableExists",
                        "rc": "200",
                        "sd": 12,
                        "spanid": "cdaec573",
                        "targetid": "Zebra.Master.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2731103Z",
                            "cs": "2016-03-31T06:21:58.2606334Z",
                            "sr": "2016-03-31T06:21:58.2543177Z",
                            "ss": "2016-03-31T06:21:58.2543302Z"
                        },
                        "url": "\/tableexists",
                        "url_method": "GET"
                    },
                    {
                        "cd": 28072,
                        "host": "vm-portal2",
                        "parentspanid": "766e0a46",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "1397",
                        "sd": 32216,
                        "spanid": "ca578de2",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2574842Z",
                            "cs": "2016-03-31T06:21:58.2294119Z",
                            "sr": "2016-03-31T06:21:58.2363728Z",
                            "ss": "2016-03-31T06:21:58.2685891Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1520,
                        "host": "192.168.68.4",
                        "parentspanid": "766e0a46",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "860",
                        "rsbl": "0",
                        "sd": 77,
                        "spanid": "d1054826",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2750788Z",
                            "cs": "2016-03-31T06:21:58.2735587Z",
                            "sr": "2016-03-31T06:21:58.2550108Z",
                            "ss": "2016-03-31T06:21:58.255088Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1413,
                        "host": "192.168.68.4",
                        "parentspanid": "766e0a46",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "853",
                        "rsbl": "106",
                        "sd": 81,
                        "spanid": "16372a26",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2602207Z",
                            "cs": "2016-03-31T06:21:58.2588071Z",
                            "sr": "2016-03-31T06:21:58.2543177Z",
                            "ss": "2016-03-31T06:21:58.2543995Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 3947,
                        "host": "192.168.68.4",
                        "parentspanid": "fa42ba23",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "408",
                        "sd": 457,
                        "spanid": "68285a1d",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1946461Z",
                            "cs": "2016-03-31T06:21:58.1906987Z",
                            "sr": "2016-03-31T06:21:58.1761587Z",
                            "ss": "2016-03-31T06:21:58.1766166Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 4507,
                        "host": "vm-portal2",
                        "parentspanid": "d3b1deac",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/v5.5\/sessions\/CF41547671CCC8448A86E7A0FD0F3E939B4520019B5A7246A88439C0FCC61F0D",
                        "rc": "200",
                        "rsbl": "363",
                        "sd": 2905,
                        "spanid": "2e30bed6",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1109793Z",
                            "cs": "2016-03-31T06:21:58.1064718Z",
                            "sr": "2016-03-31T06:21:58.2207446Z",
                            "ss": "2016-03-31T06:21:58.2236501Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1412,
                        "host": "192.168.68.7",
                        "parentspanid": "d3b1deac",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 116,
                        "spanid": "a9622a39",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1256365Z",
                            "cs": "2016-03-31T06:21:58.1242242Z",
                            "sr": "2016-03-31T06:21:58.1647861Z",
                            "ss": "2016-03-31T06:21:58.1649023Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 9365,
                        "host": "192.168.68.1",
                        "parentspanid": "d3b1deac",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 512,
                        "spanid": "5b19bb9a",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.1213388Z",
                            "cs": "2016-03-31T06:21:58.1119732Z",
                            "sr": "2016-03-31T06:21:58.2258347Z",
                            "ss": "2016-03-31T06:21:58.2263475Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 15326,
                        "host": "ul-k0ch4",
                        "parentspanid": "66b78b90",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/chunks\/01a0138e-29f8-4c91-9aab-0ad75d3ee74d\/write",
                        "rc": "200",
                        "rqbl": "209",
                        "rsbl": "8",
                        "sd": 505,
                        "spanid": "be5b890a",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2883461Z",
                            "cs": "2016-03-31T06:21:58.2730194Z",
                            "sr": "2016-03-31T06:21:58.2941553Z",
                            "ss": "2016-03-31T06:21:58.2946606Z"
                        },
                        "url": "\/chunks\/<hex>\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1434,
                        "host": "192.168.68.7",
                        "parentspanid": "ca578de2",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "1165",
                        "sd": 98,
                        "spanid": "e29fc61a",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2534244Z",
                            "cs": "2016-03-31T06:21:58.2519901Z",
                            "sr": "2016-03-31T06:21:58.1960393Z",
                            "ss": "2016-03-31T06:21:58.1961381Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1490,
                        "host": "192.168.68.7",
                        "parentspanid": "ca578de2",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "886",
                        "rsbl": "83",
                        "sd": 76,
                        "spanid": "02836527",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2417881Z",
                            "cs": "2016-03-31T06:21:58.2402976Z",
                            "sr": "2016-03-31T06:21:58.1809545Z",
                            "ss": "2016-03-31T06:21:58.1810311Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1668,
                        "host": "192.168.68.7",
                        "parentspanid": "ca578de2",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "619",
                        "sd": 92,
                        "spanid": "c95d97b4",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.239341Z",
                            "cs": "2016-03-31T06:21:58.2376722Z",
                            "sr": "2016-03-31T06:21:58.1804146Z",
                            "ss": "2016-03-31T06:21:58.180507Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 13528,
                        "host": "vm-portal1",
                        "parentspanid": "ca578de2",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$7119d719-4d9b-4457-a31b-2bea51b543ac\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 23462,
                        "spanid": "131119be",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2676198Z",
                            "cs": "2016-03-31T06:21:58.2540914Z",
                            "sr": "2016-03-31T06:21:58.2418582Z",
                            "ss": "2016-03-31T06:21:58.2653202Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1511,
                        "host": "192.168.68.4",
                        "parentspanid": "2e30bed6",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "408",
                        "sd": 102,
                        "spanid": "5a9666e2",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2230624Z",
                            "cs": "2016-03-31T06:21:58.221551Z",
                            "sr": "2016-03-31T06:21:58.1918072Z",
                            "ss": "2016-03-31T06:21:58.1919096Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 190,
                        "host": "ul-k0ch2",
                        "parentspanid": "be5b890a",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/01a0138e-29f8-4c91-9aab-0ad75d3ee74d\/commit",
                        "rc": "200",
                        "sd": 39,
                        "spanid": "b53c72a1",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.294816Z",
                            "cs": "2016-03-31T06:21:58.294626Z",
                            "sr": "2016-03-31T06:21:58.2276058Z",
                            "ss": "2016-03-31T06:21:58.2276455Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 257,
                        "host": "ul-k0ch2",
                        "parentspanid": "be5b890a",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/01a0138e-29f8-4c91-9aab-0ad75d3ee74d\/append",
                        "rc": "200",
                        "rqbl": "209",
                        "sd": 90,
                        "spanid": "136749de",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2945605Z",
                            "cs": "2016-03-31T06:21:58.2943035Z",
                            "sr": "2016-03-31T06:21:58.2272997Z",
                            "ss": "2016-03-31T06:21:58.2273902Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 336,
                        "host": "ul-k0ch1",
                        "parentspanid": "be5b890a",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/01a0138e-29f8-4c91-9aab-0ad75d3ee74d\/commit",
                        "rc": "200",
                        "sd": 52,
                        "spanid": "9af98e12",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2949286Z",
                            "cs": "2016-03-31T06:21:58.2945923Z",
                            "sr": "2016-03-31T06:21:58.254723Z",
                            "ss": "2016-03-31T06:21:58.2547756Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 264,
                        "host": "ul-k0ch1",
                        "parentspanid": "be5b890a",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/01a0138e-29f8-4c91-9aab-0ad75d3ee74d\/append",
                        "rc": "200",
                        "rqbl": "209",
                        "sd": 99,
                        "spanid": "41edf741",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2945657Z",
                            "cs": "2016-03-31T06:21:58.2943008Z",
                            "sr": "2016-03-31T06:21:58.2543176Z",
                            "ss": "2016-03-31T06:21:58.254417Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14629,
                        "host": "192.168.68.1",
                        "parentspanid": "131119be",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 317,
                        "spanid": "ea71c22b",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2574841Z",
                            "cs": "2016-03-31T06:21:58.2428545Z",
                            "sr": "2016-03-31T06:21:58.2570697Z",
                            "ss": "2016-03-31T06:21:58.2573873Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2497,
                        "host": "192.168.68.7",
                        "parentspanid": "131119be",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 82,
                        "spanid": "c58961b8",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:21:58.2649288Z",
                            "cs": "2016-03-31T06:21:58.2624316Z",
                            "sr": "2016-03-31T06:21:58.2116729Z",
                            "ss": "2016-03-31T06:21:58.211755Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    }
                ],
                "system": "ke",
                "timestamp": "2016-03-31T06:21:58.0577768Z"
            },
            "sort": [
                119254
            ]
        },
        {
            "_index": "traces-2016.03.31",
            "_type": "trace",
            "_id": "AVPLYTXsPASIJee_lz9g",
            "_score": null,
            "_source": {
                "chains": [
                    {
                        "path": "Authenticator",
                        "prefix": "",
                        "level": 0,
                        "duration": 95667
                    },
                    {
                        "path": "Authenticator->AuthService.Service",
                        "prefix": "Authenticator",
                        "level": 1,
                        "duration": 45408
                    },
                    {
                        "path": "Authenticator->Portal.Requisites.Service",
                        "prefix": "Authenticator",
                        "level": 1,
                        "duration": 29196
                    },
                    {
                        "path": "AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "level": 2,
                        "duration": 1873
                    },
                    {
                        "path": "AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "level": 2,
                        "duration": 1259
                    },
                    {
                        "path": "AuthService.Service->Zebra.Master.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "level": 2,
                        "duration": 757
                    },
                    {
                        "path": "AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "level": 2,
                        "duration": 1362
                    },
                    {
                        "path": "AuthService.Service->Portal.Requisites.Service",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "level": 2,
                        "duration": 28012
                    },
                    {
                        "path": "Portal.Requisites.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "level": 2,
                        "duration": 14373
                    },
                    {
                        "path": "Portal.Requisites.Service->Authorizator.Service",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "level": 2,
                        "duration": 9203
                    },
                    {
                        "path": "Portal.Requisites.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "level": 2,
                        "duration": 2187
                    },
                    {
                        "path": "Portal.Requisites.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "level": 2,
                        "duration": 1545
                    },
                    {
                        "path": "Authenticator->AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator",
                        "level": 1,
                        "duration": 12423
                    },
                    {
                        "path": "AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "level": 2,
                        "duration": 1166
                    },
                    {
                        "path": "Portal.Requisites.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "level": 3,
                        "duration": 1648
                    },
                    {
                        "path": "Portal.Requisites.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "level": 3,
                        "duration": 2823
                    },
                    {
                        "path": "Portal.Requisites.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "level": 3,
                        "duration": 2850
                    },
                    {
                        "path": "Portal.Requisites.Service->Authorizator.Service",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "level": 3,
                        "duration": 4737
                    },
                    {
                        "path": "Authorizator.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "level": 3,
                        "duration": 1685
                    },
                    {
                        "path": "Authorizator.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "level": 3,
                        "duration": 11102
                    },
                    {
                        "path": "Kanso3d.Chunkserver->Kanso3d.Chunkserver",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "level": 3,
                        "duration": 249
                    },
                    {
                        "path": "Kanso3d.Chunkserver->Kanso3d.Chunkserver",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "level": 3,
                        "duration": 760
                    },
                    {
                        "path": "Kanso3d.Chunkserver->Kanso3d.Chunkserver",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "level": 3,
                        "duration": 198
                    },
                    {
                        "path": "Kanso3d.Chunkserver->Kanso3d.Chunkserver",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "level": 3,
                        "duration": 324
                    },
                    {
                        "path": "Authorizator.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "level": 4,
                        "duration": 1239
                    },
                    {
                        "path": "Authorizator.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "level": 4,
                        "duration": 14739
                    },
                    {
                        "path": "Authorizator.Service->AuthService.Service->Zebra.TabletServer.Nonpaged",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "level": 3,
                        "duration": 1454
                    }
                ],
                "duration": 95667,
                "id": "7c6372e1456d4cd7aa93ffd49a4f3f8d",
                "spans": [
                    {
                        "host": "auth.dev.kontur",
                        "prefix": "",
                        "rawurl": "\/Handlers\/GetTokenByPassword.ashx",
                        "rc": "200",
                        "rqbl": "107",
                        "sd": 95667,
                        "spanid": "d45b8d26",
                        "targetid": "Authenticator",
                        "timeline": {
                            "sr": "2016-03-31T06:33:58.9268052Z",
                            "ss": "2016-03-31T06:33:59.0224731Z"
                        },
                        "url": "\/handlers\/gettokenbypassword.ashx",
                        "url_method": "POST"
                    },
                    {
                        "cd": 45408,
                        "host": "vm-portal2",
                        "parentspanid": "d45b8d26",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/authenticate-by-pass",
                        "rc": "200",
                        "rqbl": "6",
                        "rsbl": "74",
                        "sd": 47253,
                        "spanid": "013fb333",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0049445Z",
                            "cs": "2016-03-31T06:33:58.9595365Z",
                            "sr": "2016-03-31T06:33:59.078873Z",
                            "ss": "2016-03-31T06:33:59.126126Z"
                        },
                        "url": "\/v<num>.<num>\/authenticate-by-pass",
                        "url_method": "POST"
                    },
                    {
                        "cd": 29196,
                        "host": "vm-portal1",
                        "parentspanid": "d45b8d26",
                        "prefix": "Authenticator",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "1115",
                        "sd": 32115,
                        "spanid": "228b184c",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:58.9580657Z",
                            "cs": "2016-03-31T06:33:58.9288689Z",
                            "sr": "2016-03-31T06:33:59.0408708Z",
                            "ss": "2016-03-31T06:33:59.0729863Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 14941,
                        "host": "vm-portal2",
                        "parentspanid": "d45b8d26",
                        "prefix": "Authenticator",
                        "rawurl": "\/v5.5\/sessions\/C118882524176845833778527EC76429230A900B0B1EE5439F5FEB25841DCF87",
                        "rc": "200",
                        "rsbl": "364",
                        "sd": 28550,
                        "spanid": "d02bd38d",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0205537Z",
                            "cs": "2016-03-31T06:33:59.0056125Z",
                            "sr": "2016-03-31T06:33:59.1284429Z",
                            "ss": "2016-03-31T06:33:59.1569937Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1873,
                        "host": "192.168.68.1",
                        "parentspanid": "013fb333",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "378",
                        "sd": 12951,
                        "spanid": "039c59a6",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0815473Z",
                            "cs": "2016-03-31T06:33:59.0796742Z",
                            "sr": "2016-03-31T06:33:59.0845047Z",
                            "ss": "2016-03-31T06:33:59.0974557Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1259,
                        "host": "192.168.68.6",
                        "parentspanid": "013fb333",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "860",
                        "rsbl": "0",
                        "sd": 93,
                        "spanid": "3b5d552e",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.115265Z",
                            "cs": "2016-03-31T06:33:59.1140055Z",
                            "sr": "2016-03-31T06:33:59.1254222Z",
                            "ss": "2016-03-31T06:33:59.1255154Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 9861,
                        "host": "192.168.68.4",
                        "parentspanid": "013fb333",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/write",
                        "rc": "200",
                        "rqbl": "4843",
                        "sd": 16847,
                        "spanid": "3ba62910",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1257453Z",
                            "cs": "2016-03-31T06:33:59.1158842Z",
                            "sr": "2016-03-31T06:33:59.0877484Z",
                            "ss": "2016-03-31T06:33:59.1045957Z"
                        },
                        "url": "\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 757,
                        "host": "ul-k0ch1",
                        "parentspanid": "013fb333",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/tableExists",
                        "rc": "200",
                        "sd": 13,
                        "spanid": "54cc0d51",
                        "targetid": "Zebra.Master.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1135161Z",
                            "cs": "2016-03-31T06:33:59.112759Z",
                            "sr": "2016-03-31T06:33:59.0878367Z",
                            "ss": "2016-03-31T06:33:59.0878506Z"
                        },
                        "url": "\/tableexists",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1362,
                        "host": "192.168.68.1",
                        "parentspanid": "013fb333",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "852",
                        "rsbl": "105",
                        "sd": 78,
                        "spanid": "b5f762ee",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1122989Z",
                            "cs": "2016-03-31T06:33:59.1109363Z",
                            "sr": "2016-03-31T06:33:59.1156177Z",
                            "ss": "2016-03-31T06:33:59.1156958Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 28012,
                        "host": "vm-portal1",
                        "parentspanid": "013fb333",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/requisites\/v1\/users",
                        "rc": "200",
                        "rsbl": "1115",
                        "sd": 16828,
                        "spanid": "c319c5f7",
                        "targetid": "Portal.Requisites.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1101171Z",
                            "cs": "2016-03-31T06:33:59.0821044Z",
                            "sr": "2016-03-31T06:33:59.0878104Z",
                            "ss": "2016-03-31T06:33:59.1046392Z"
                        },
                        "url": "\/requisites\/v<num>\/users",
                        "url_method": "GET"
                    },
                    {
                        "cd": 14373,
                        "host": "192.168.68.7",
                        "parentspanid": "228b184c",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "519",
                        "sd": 103,
                        "spanid": "b21668eb",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0565687Z",
                            "cs": "2016-03-31T06:33:59.0421956Z",
                            "sr": "2016-03-31T06:33:58.986737Z",
                            "ss": "2016-03-31T06:33:58.9868401Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 9203,
                        "host": "vm-portal3",
                        "parentspanid": "228b184c",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$258818c1-1724-4568-8337-78527ec76429\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 20960,
                        "spanid": "0adbec54",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0721244Z",
                            "cs": "2016-03-31T06:33:59.0629208Z",
                            "sr": "2016-03-31T06:33:58.9377326Z",
                            "ss": "2016-03-31T06:33:58.9586928Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 2187,
                        "host": "192.168.68.7",
                        "parentspanid": "228b184c",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "913",
                        "sd": 112,
                        "spanid": "8960638e",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.062215Z",
                            "cs": "2016-03-31T06:33:59.060028Z",
                            "sr": "2016-03-31T06:33:58.9880096Z",
                            "ss": "2016-03-31T06:33:58.9881221Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1545,
                        "host": "192.168.68.7",
                        "parentspanid": "228b184c",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "885",
                        "rsbl": "82",
                        "sd": 79,
                        "spanid": "36fea632",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0591696Z",
                            "cs": "2016-03-31T06:33:59.0576238Z",
                            "sr": "2016-03-31T06:33:58.9874553Z",
                            "ss": "2016-03-31T06:33:58.9875347Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 12423,
                        "host": "192.168.68.4",
                        "parentspanid": "d02bd38d",
                        "prefix": "Authenticator",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "411",
                        "sd": 84,
                        "spanid": "125409b8",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1413728Z",
                            "cs": "2016-03-31T06:33:59.1289489Z",
                            "sr": "2016-03-31T06:33:59.134601Z",
                            "ss": "2016-03-31T06:33:59.1346852Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1166,
                        "host": "ul-k0ch3",
                        "parentspanid": "3ba62910",
                        "prefix": "Authenticator->Authenticator->AuthService.Service",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/write",
                        "rc": "200",
                        "rqbl": "207",
                        "rsbl": "8",
                        "sd": 981,
                        "spanid": "364f744f",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1045413Z",
                            "cs": "2016-03-31T06:33:59.1033749Z",
                            "sr": "2016-03-31T06:33:59.1287176Z",
                            "ss": "2016-03-31T06:33:59.129699Z"
                        },
                        "url": "\/chunks\/<hex>\/write",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1648,
                        "host": "192.168.68.7",
                        "parentspanid": "c319c5f7",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "913",
                        "sd": 85,
                        "spanid": "05239571",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0981787Z",
                            "cs": "2016-03-31T06:33:59.09653Z",
                            "sr": "2016-03-31T06:33:59.0354698Z",
                            "ss": "2016-03-31T06:33:59.0355548Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2823,
                        "host": "192.168.68.7",
                        "parentspanid": "c319c5f7",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "885",
                        "rsbl": "82",
                        "sd": 103,
                        "spanid": "a23d6fe8",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0956602Z",
                            "cs": "2016-03-31T06:33:59.0928367Z",
                            "sr": "2016-03-31T06:33:59.0347671Z",
                            "ss": "2016-03-31T06:33:59.0348707Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 2850,
                        "host": "192.168.68.7",
                        "parentspanid": "c319c5f7",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "859",
                        "rsbl": "619",
                        "sd": 360,
                        "spanid": "fb38d061",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.0916707Z",
                            "cs": "2016-03-31T06:33:59.0888198Z",
                            "sr": "2016-03-31T06:33:59.0336082Z",
                            "ss": "2016-03-31T06:33:59.0339684Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 4737,
                        "host": "vm-portal2",
                        "parentspanid": "c319c5f7",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service",
                        "rawurl": "\/authorizator\/v1\/1$258818c1-1724-4568-8337-78527ec76429\/permissions",
                        "rc": "200",
                        "rsbl": "11",
                        "sd": 18855,
                        "spanid": "0fdef01e",
                        "targetid": "Authorizator.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1033738Z",
                            "cs": "2016-03-31T06:33:59.0986368Z",
                            "sr": "2016-03-31T06:33:59.094499Z",
                            "ss": "2016-03-31T06:33:59.1133547Z"
                        },
                        "url": "\/authorizator\/v<num>\/<num>$<hex>\/permissions",
                        "url_method": "GET"
                    },
                    {
                        "cd": 1685,
                        "host": "192.168.68.7",
                        "parentspanid": "0adbec54",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 80,
                        "spanid": "740b400e",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:58.9584178Z",
                            "cs": "2016-03-31T06:33:58.9567327Z",
                            "sr": "2016-03-31T06:33:59.0179598Z",
                            "ss": "2016-03-31T06:33:59.0180407Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 11102,
                        "host": "192.168.68.1",
                        "parentspanid": "0adbec54",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 395,
                        "spanid": "2a3d077d",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:58.9542269Z",
                            "cs": "2016-03-31T06:33:58.943124Z",
                            "sr": "2016-03-31T06:33:59.0662065Z",
                            "ss": "2016-03-31T06:33:59.0666021Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 3944,
                        "host": "vm-portal2",
                        "parentspanid": "0adbec54",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/v5.5\/sessions\/CF41547671CCC8448A86E7A0FD0F3E93C52EE2893CA6194D9FD7C4ECC0860C17",
                        "rc": "200",
                        "rsbl": "363",
                        "sd": 2597,
                        "spanid": "97b367fd",
                        "targetid": "AuthService.Service",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:58.9424826Z",
                            "cs": "2016-03-31T06:33:58.9385383Z",
                            "sr": "2016-03-31T06:33:59.0632503Z",
                            "ss": "2016-03-31T06:33:59.0658482Z"
                        },
                        "url": "\/v<num>.<num>\/sessions\/<hex>",
                        "url_method": "GET"
                    },
                    {
                        "cd": 249,
                        "host": "ul-k0ch1",
                        "parentspanid": "364f744f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/commit",
                        "rc": "200",
                        "sd": 41,
                        "spanid": "670c2e37",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.129917Z",
                            "cs": "2016-03-31T06:33:59.1296676Z",
                            "sr": "2016-03-31T06:33:59.1037711Z",
                            "ss": "2016-03-31T06:33:59.1038122Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 760,
                        "host": "ul-k0ch1",
                        "parentspanid": "364f744f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/append",
                        "rc": "200",
                        "rqbl": "207",
                        "sd": 119,
                        "spanid": "78b1b691",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1296081Z",
                            "cs": "2016-03-31T06:33:59.1288479Z",
                            "sr": "2016-03-31T06:33:59.103375Z",
                            "ss": "2016-03-31T06:33:59.1034946Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 198,
                        "host": "ul-k0ch2",
                        "parentspanid": "364f744f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/commit",
                        "rc": "200",
                        "sd": 43,
                        "spanid": "5cc3e64d",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1298329Z",
                            "cs": "2016-03-31T06:33:59.1296341Z",
                            "sr": "2016-03-31T06:33:59.0656086Z",
                            "ss": "2016-03-31T06:33:59.0656522Z"
                        },
                        "url": "\/chunks\/<hex>\/commit",
                        "url_method": "POST"
                    },
                    {
                        "cd": 324,
                        "host": "ul-k0ch2",
                        "parentspanid": "364f744f",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Zebra.TabletServer.Nonpaged->Kanso3d.Chunkserver",
                        "rawurl": "\/chunks\/cf581d15-7ce6-4f1f-bb15-6f4c37206e16\/append",
                        "rc": "200",
                        "rqbl": "207",
                        "sd": 114,
                        "spanid": "793fdc60",
                        "targetid": "Kanso3d.Chunkserver",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1291717Z",
                            "cs": "2016-03-31T06:33:59.1288477Z",
                            "sr": "2016-03-31T06:33:59.0648615Z",
                            "ss": "2016-03-31T06:33:59.064976Z"
                        },
                        "url": "\/chunks\/<hex>\/append",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1239,
                        "host": "192.168.68.7",
                        "parentspanid": "0fdef01e",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "936",
                        "rsbl": "141",
                        "sd": 88,
                        "spanid": "ff46ee32",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1131574Z",
                            "cs": "2016-03-31T06:33:59.1119176Z",
                            "sr": "2016-03-31T06:33:59.049236Z",
                            "ss": "2016-03-31T06:33:59.0493246Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    },
                    {
                        "cd": 14739,
                        "host": "192.168.68.1",
                        "parentspanid": "0fdef01e",
                        "prefix": "Authenticator->Authenticator->AuthService.Service->AuthService.Service->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/readBatch",
                        "rc": "200",
                        "rqbl": "3457",
                        "rsbl": "37532",
                        "sd": 12043,
                        "spanid": "4b36d1fe",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.1101174Z",
                            "cs": "2016-03-31T06:33:59.0953776Z",
                            "sr": "2016-03-31T06:33:59.1010382Z",
                            "ss": "2016-03-31T06:33:59.1130815Z"
                        },
                        "url": "\/readbatch",
                        "url_method": "POST"
                    },
                    {
                        "cd": 1454,
                        "host": "192.168.68.4",
                        "parentspanid": "97b367fd",
                        "prefix": "Authenticator->Authenticator->Portal.Requisites.Service->Portal.Requisites.Service->Authorizator.Service",
                        "rawurl": "\/read",
                        "rc": "200",
                        "rqbl": "871",
                        "rsbl": "408",
                        "sd": 96,
                        "spanid": "fc1165e3",
                        "targetid": "Zebra.TabletServer.Nonpaged",
                        "td": 0,
                        "timeline": {
                            "cr": "2016-03-31T06:33:59.065355Z",
                            "cs": "2016-03-31T06:33:59.0639002Z",
                            "sr": "2016-03-31T06:33:59.0408769Z",
                            "ss": "2016-03-31T06:33:59.0409738Z"
                        },
                        "url": "\/read",
                        "url_method": "POST"
                    }
                ],
                "system": "ke",
                "timestamp": "2016-03-31T06:33:58.9268052Z"
            },
            "sort": [
                95667
            ]
        }
    ]
}