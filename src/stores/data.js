import { defineStore } from "pinia";

export const useDataStore = defineStore('data', {
    state() {
        return {
            reservations : [{
                "id": 1,
                "user_id": 2,
                "user_gender": "madam",
                "user_name": "Gunnar Hilpert",
                "number_of_people": 1,
                "started_date": "2023-08-05 14:39:51",
                "end_date": "2023-08-13 09:28:11",
                "checkin": null,
                "checkout": null,
                "price": 178.87,
                "stay_type": "pro",
                "status": "validated",
                "rooms": [],
                "options": []
            },
            {
                "id": 2,
                "user_id": 6,
                "user_gender": "mister",
                "user_name": "Kaley King",
                "number_of_people": 7,
                "started_date": "2023-08-13 08:39:32",
                "end_date": "2023-08-16 01:14:54",
                "checkin": null,
                "checkout": null,
                "price": 321.62,
                "stay_type": "pro",
                "status": "validated",
                "rooms": [{"id": 14, "room_number": 204, "style": "classic", "price": 70}, {
                    "id": 12,
                    "room_number": 202,
                    "style": "classic",
                    "price": 70
                }, {"id": 19, "room_number": 209, "style": "classic", "price": 70}],
                "options": []
            },
            {
                "id": 3,
                "user_id": 4,
                "user_gender": "madam",
                "user_name": "Caitlyn Balistreri",
                "number_of_people": 6,
                "started_date": "2023-08-10 15:48:50",
                "end_date": "2023-08-12 03:18:16",
                "checkin": null,
                "checkout": null,
                "price": 1255.11,
                "stay_type": "pro",
                "status": "validated",
                "rooms": [{"id": 20, "room_number": 210, "style": "classic", "price": 70}, {
                    "id": 18,
                    "room_number": 208,
                    "style": "classic",
                    "price": 70
                }],
                "options": []
            },
            {
                "id": 4,
                "user_id": 2,
                "user_gender": "madam",
                "user_name": "Gunnar Hilpert",
                "number_of_people": 9,
                "started_date": "2023-08-13 13:33:16",
                "end_date": "2023-08-14 21:36:52",
                "checkin": null,
                "checkout": null,
                "price": 625.18,
                "stay_type": "personal",
                "status": "validated",
                "rooms": [{"id": 8, "room_number": 108, "style": "classic", "price": 70}, {
                    "id": 8,
                    "room_number": 108,
                    "style": "classic",
                    "price": 70
                }],
                "options": []
            },],
            rooms : [
                {"id":1,"room_number":101,"style":"classic","price":70},
                {"id":2,"room_number":102,"style":"classic","price":70},
                {"id":3,"room_number":103,"style":"classic","price":70},
                {"id":4,"room_number":104,"style":"classic","price":70},
                {"id":5,"room_number":105,"style":"classic","price":70},
                {"id":6,"room_number":106,"style":"classic","price":70},
                {"id":7,"room_number":107,"style":"classic","price":70},
                {"id":8,"room_number":108,"style":"classic","price":70},
                {"id":9,"room_number":109,"style":"classic","price":70},
                {"id":10,"room_number":110,"style":"classic","price":70},
                {"id":11,"room_number":201,"style":"classic","price":70},
                {"id":12,"room_number":202,"style":"classic","price":70},
                {"id":13,"room_number":203,"style":"classic","price":70},
                {"id":14,"room_number":204,"style":"classic","price":70},
                {"id":15,"room_number":205,"style":"classic","price":70},
                {"id":16,"room_number":206,"style":"classic","price":70},
                {"id":17,"room_number":207,"style":"classic","price":70},
                {"id":18,"room_number":208,"style":"classic","price":70},
                {"id":19,"room_number":209,"style":"classic","price":70},
                {"id":20,"room_number":210,"style":"classic","price":70},
                {"id":21,"room_number":301,"style":"classic","price":70},
                {"id":22,"room_number":302,"style":"classic","price":70},
                {"id":23,"room_number":303,"style":"classic","price":70},
                {"id":24,"room_number":304,"style":"classic","price":70},
                {"id":25,"room_number":305,"style":"classic","price":70},
                {"id":26,"room_number":111,"style":"luxury","price":140},
                {"id":27,"room_number":211,"style":"luxury","price":140},
                {"id":28,"room_number":306,"style":"luxury","price":140},
                {"id":29,"room_number":307,"style":"luxury","price":140},
                {"id":30,"room_number":308,"style":"luxury","price":140},
                {"id":31,"room_number":309,"style":"royal","price":280},
                {"id":32,"room_number":310,"style":"royal","price":280}
            ],
            options : [
                {"id":1,"option_name":"Breakfast 9\u20ac \/person\/day","option_price":9},
                {"id":2,"option_name":"Lunch formula 20\u20ac \/person\/day","option_price":20},
                {"id":3,"option_name":"Evening formula 20\u20ac \/person\/day","option_price":20},
                {"id":4,"option_name":"Lunch and Evening formula 35\u20ac \/person\/day","option_price":35},
                {"id":5,"option_name":"All-inclusive pressing service \u20ac30 \/person\/day","option_price":30},
                {"id":6,"option_name":"Unlimited access to the Canal+ channel \u20ac10 \/week","option_price":10},
                {"id":7,"option_name":"Access to the swimming pool 25\u20ac per stay","option_price":25}
            ],
        }
    },
    actions: {
        //
    }
})