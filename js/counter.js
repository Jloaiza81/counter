/* function getElement 
     * description: select any element that i want
     * module helper
    */

function getElement(selection) {
    const element = document.querySelector(selection);
    //console.log(element);
    if (element) {
        return element;
    }

    throw new Error(`Please check "${selection}" selector, no such element exist`);
}

/* Constructor function Counter
 * description: fabric pattern of selected element to count
*/

function Counter(element, value) {
    // console.log(element, value);
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.increaseBtn = element.querySelector('.increase');
    this.valueDOM = element.querySelector('.value');
    //this.value = this.valueDOM.textContent;
    this.valueDOM.textContent = this.value;
    this.reset = this.reset.bind(this);

    this.resetBtn.addEventListener('click', this.reset);
    this.increaseBtn.addEventListener('click', this.increase.bind(this));
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
}

Counter.prototype.increase = function () {
    this.value++;
    this.valueDOM.textContent = this.value;
    if (this.value > 0) {
        this.counter.style.color = 'green';
    } else if (this.value === 0) {
        this.counter.style.color = 'black';
    }
};

Counter.prototype.reset = function () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
    if (this.value === 0) {
        this.counter.style.color = 'black';
    }
};

Counter.prototype.decrease = function () {
    this.value--;
    this.valueDOM.textContent = this.value;
    if (this.value < 0) {
        this.counter.style.color = 'red';
    } else if (this.value === 0) {
        this.counter.style.color = 'black';
    }
};

const firstCounter = new Counter(getElement('.first-counter'), 10);

const secondCounter = new Counter(getElement('.second-counter'), 5);ñ