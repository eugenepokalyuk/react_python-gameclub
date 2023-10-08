import { TComputer, TPlayBody } from "../services/types/types";

const ApiUrlPath = 'http://localhost:8000';
const routeStore = "/store";
const routePlayground = "/pc";

const request = (endpoint: string, options: any) => {
    const url = `${ApiUrlPath}${endpoint}`;
    return fetch(url, options).then(checkResponse);
};

const checkResponse = (res: Response) => {
    return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
};
export const fetchComputersData = async () => {
    const endpoint = routePlayground + "/ping";
    const options = {
        headers: {
            auth: 123
        },
    }
    return request(endpoint, options);
}
export const fetchPlay = async (body: TPlayBody) => {
    const endpoint = routePlayground + "/play";
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify(body)
    }
    return request(endpoint, options);
}
export const fetchPause = async (id: number) => {
    const endpoint = routePlayground + `/pause?id=${id}`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
    }
    return request(endpoint, options);
}
export const fetchContinue = async (id: number) => {
    const endpoint = routePlayground + `/continue?id=${id}`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
    }
    return request(endpoint, options);
}
export const fetchFinish = async (computer: TComputer, newPrice: number | undefined) => {
    const endpoint = routePlayground + "/finish";
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: newPrice ? JSON.stringify({
            id: computer.id,
            price: (newPrice)
        }) : JSON.stringify({
            id: computer.id,
        })
    }
    return request(endpoint, options);
}
// fetchStoreData
export const fetchStoreData = async () => {
    const endpoint = routeStore + "/items";
    const options = {
        headers: {
            auth: 123
        },
    }
    return request(endpoint, options);
}
export const fetchStoreSell = async (selectedItems: any) => {
    const endpoint = routeStore + "/item/sell";
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify(selectedItems)
    }
    return request(endpoint, options);
}
export const fetchWarehouseAddItem = async (name: string, price: number | undefined) => {
    const endpoint = routeStore + "/item/add";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    }
    return request(endpoint, options);
}
export const fetchWarehouseAddSupply = async (selectedItems: any) => {
    const endpoint = routeStore + "/supply";
    const options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify({ items: selectedItems })
    }
    return request(endpoint, options);
}
export const fetchWarehouseItem = async (id: any) => {
    const endpoint = routeStore + `/info?id=${id}`;
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
    }
    return request(endpoint, options);
}
export const fetchWarehouseEditItemName = async (id: number | undefined, name: string) => {
    const endpoint = routeStore + `/item/edit/name`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify({
            id: id,
            name: name
        })
    }
    return request(endpoint, options);
}
export const fetchWarehouseEditItemPrice = async (id: number | undefined, price: number) => {
    const endpoint = routeStore + `/item/edit/price`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify({
            id: id,
            price: price
        })
    }
    return request(endpoint, options);
}
export const fetchWarehouseHideItem = async (id: number | undefined) => {
    const endpoint = routeStore + `/item/hide?id=${id}`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
        body: JSON.stringify({
            id: id
        })
    }
    return request(endpoint, options);
}
export const fetchWarehouseShowItem = async (id: number | undefined) => {
    const endpoint = routeStore + `/item/show?id=${id}`;
    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            auth: 123
        },
    }
    return request(endpoint, options);
}
