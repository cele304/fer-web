module.exports = class Helper {

    constructor(params) {
        this.params = params;
    }

    deliveryDate() {
        if (this.params && this.params.deliveryDate)
            return this.params.deliveryDate;
        else return '';
    }

    address() {
        if (this.params && this.params.address)
            return this.params.address;
        else return '';
    }

    deliveryAlternativeValues() {
        return ['At our nearest affiliate', 'At the nearest post office'];
    }

    isDeliveryAlternativeSelected(val) {
        if ((this.params && this.params.deliveryAlternative == val) || ((!this.params) && val == "At the nearest post office"))
            return "checked";
        else return undefined;
    }

    stringToHTMLId(val) {
        return String(val).split(' ').join('-').toLowerCase();
    }
}