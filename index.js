document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', () => ({
        smallCounter: 0,
        mediumCounter: 0,
        largeCounter: 0,
        totalCost: 0.00,
        showCheckout: false,
        paymentAmount: 0,
        paymentMessage: '',

        get smallCount() {
            return this.smallCounter;
        },
        get mediumCount() {
            return this.mediumCounter;
        },
        get largeCount() {
            return this.largeCounter;
        },

        increment(size) {
            if (size === 'small') {
                this.smallCounter += 1;
            } else if (size === 'medium') {
                this.mediumCounter += 1;
            } else if (size === 'large') {
                this.largeCounter += 1;
            }
            this.updateTotalCost();
        },

        decrement(size) {
            if (size === 'small') {
                if (this.smallCounter > 0) {
                    this.smallCounter -= 1;
                }
            } else if (size === 'medium') {
                if (this.mediumCounter > 0) {
                    this.mediumCounter -= 1;
                }
            } else if (size === 'large') {
                if (this.largeCounter > 0) {
                    this.largeCounter -= 1;
                }
            }
            this.updateTotalCost();
        },

        addToCart(size, price) {
            console.log('addToCart');
            if (size === 'small') {
                this.increment(size);
            } else if (size === 'medium') {
                this.increment(size);
            } else if (size === 'large') {
                this.increment(size);
            }
            this.updateTotalCost();
        },

        removeFromCart(size, price) {
            if (size === 'small') {
                this.decrement(size);
            } else if (size === 'medium') {
                this.decrement(size);
            } else if (size === 'large') {
                this.decrement(size);
            }
            this.updateTotalCost();
        },

        updateTotalCost() {
            this.totalCost = (this.smallCounter * 40.90) + (this.mediumCounter * 75.90) + (this.largeCounter * 106.90);
        },

        checkout() {
            this.showCheckout = true;
        },

        closeCheckout() {
            this.showCheckout = false;
            this.paymentAmount = 0;
            this.paymentMessage = '';
        },

        processPayment() {
            if (this.paymentAmount >= this.totalCost) {
                this.paymentMessage = "Enjoy Your Pizzas!";
                this.resetCart();
            } else {
                this.paymentMessage = "Sorry - There Is Not Enough Money!";
            }
            setTimeout(() => this.paymentMessage = '', 3000);
        },

        resetCart() {
            this.smallCounter = 0;
            this.mediumCounter = 0;
            this.largeCounter = 0;
            this.totalCost = 0.00;
            setTimeout(() => this.closeCheckout(), 3000);
        }
    }));
});