const AddAddress = {
    data() {
        return {
            newAddress: {
                businessName: "",
                gstNumber: "",
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
    methods: {
        saveAddress() {
            const addressString = `${this.newAddress.firmname}, ${this.newAddress.gstnumber},
        ${this.newAddress.name}, ${this.newAddress.phone}, ${this.newAddress.house}, 
        ${this.newAddress.road}, ${this.newAddress.zipcode}, ${this.newAddress.city}, 
        ${this.newAddress.state}, ${this.newAddress.nearby}`;
            if (this.editingIndex !== -1) {
                this.savedAddresses[this.editingIndex] = addressString;
                this.editingIndex = -1;
            } else {
                this.savedAddresses.push(addressString);
            }
            this.newAddress = {
                firmname: "",
                gstnumber: "",
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
            this.newAddress.firmname = addressParts[0];
            this.newAddress.gstnumber = addressParts[1];
            this.newAddress.name = addressParts[2];
            this.newAddress.phone = addressParts[3];
            this.newAddress.house = addressParts[4];
            this.newAddress.road = addressParts[5];
            this.newAddress.zipcode = addressParts[6];
            this.newAddress.city = addressParts[7];
            this.newAddress.state = addressParts[8];
            this.newAddress.nearby = addressParts[9];
        },
        deleteAddress(index){
           this.savedAddresses.splice(index, 1)
        }
    },
}

export default AddAddress