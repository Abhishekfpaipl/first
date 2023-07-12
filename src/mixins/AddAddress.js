const AddAddress = {
    methods: {
        data() {
            return {
                newAddress: {
                    name: "",
                    phone: "",
                    house: "",
                    road: "",
                    zipcode: "",
                    city: "",
                    state: "",
                    nearby: "",
                },
                savedAddresses: [
                    "Metro Fashion Okhla Factory, 9999437620, B-74 Pocket X, Okhla Phase II Okhla Industrial Estate, New Delhi, Delhi, 110020, Harkesh Nagar Metro Station",
                ],
                editingIndex: -1,
            };
        },
        saveAddress() {
            const addressString = `${this.newAddress.name}, ${this.newAddress.phone}, ${this.newAddress.house}, ${this.newAddress.road}, ${this.newAddress.zipcode}, ${this.newAddress.city}, ${this.newAddress.state},  ${this.newAddress.nearby}`;
            if (this.editingIndex !== -1) {
                this.savedAddresses[this.editingIndex] = addressString;
                this.editingIndex = -1;
            }
            else {
                this.savedAddresses.push(addressString);
            }
            this.newAddress = {
                name: "",
                phone: "",
                house: "",
                road: "",
                zipcode: "",
                city: "",
                state: "",
                nearby: "",
            };
        },
        editAddress(index) {
            this.editingIndex = index;
            const addressParts = this.savedAddresses[index].split(", ");
            this.newAddress.name = addressParts[0];
            this.newAddress.phone = addressParts[1];
            this.newAddress.house = addressParts[2];
            this.newAddress.road = addressParts[3];
            this.newAddress.zipcode = addressParts[4];
            this.newAddress.city = addressParts[5];
            this.newAddress.state = addressParts[6];
            this.newAddress.nearby = addressParts[7];
        },
    },
}

export default AddAddress