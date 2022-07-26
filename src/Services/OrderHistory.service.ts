const OrderHistoryService = async () => {
    return fetch('https://lovebytes-4ee8f.web.app/response/orders.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

export { OrderHistoryService };