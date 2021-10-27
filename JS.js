function Run(inputs) {
    for (i = 0; i < 1000; i++) {
        for (let j = 0; j < inputs.length; j++) {
            k = Math.round(Math.random() * (inputs.length - 2))
            nn.train(inputs[k], inputs[k + 1]);
        }
        
    }
}

class NeuralNetwork{
    constructor(k) {
        this.k = k;

        this.w1 = random.uniform(-10, 10);
        this.w2 = random.uniform(-10, 10);
        this.w3 = random.uniform(-10, 10);
        this.w4 = random.uniform(-10, 10);
        
    }

    y(x) {
        return this.w4 * Math.pow(x, 3) + this.w3 * Math.pow(x, 2) + this.w2 * x + this.w1
    }
    train(inputs, targets) {
        outputs = this.y(inputs);
        error = targets - outputs;


        this.w4 += this.k * error * Math.pow(inputs, 3);
        this.w3 += this.k * error * Math.pow(inputs, 2);
        this.w2 += this.k * error * inputs;
        this.w1 += this.k * error;
    }

    query(inputs){
        outputs = this.y(inputs);
        return outputs;
    }
}

nn = NeuralNetwork(0.001);
inputs = [1];
var x = 0;
var s1 = 0;
var s2 = 0;

var b1 = document.getElementById('1');
var b2 = document.getElementById('2');
var b3 = document.getElementById('3');
var player = document.getElementById('player');
var computer = document.getElementById('computer');

b1.onclick = function() {
    x = 1;
}
b2.onclick = function() {
    x = 2;
}
b3.onclick = function() {
    x = 3;
}

inputs.push(x);
Run(inputs);
x1 = Math.round(nn.query(x));

if (x1 == 1) {
    y = 3;
}

if (x1 == 2) {
    y = 1;
}

if (x1 == 3) {
    y = 2;
}



if ((x == 1) && (y == 2)) {
    s1++;
}

if ((x == 1) && (y == 3)) {
    s2++;
}

if ((x == 2) && (y == 1)) {
    s2++;
}

if ((x == 2) && (y == 3)) {
    s1++;
}

if ((x == 3) && (y == 1)) {
    s1++;
}

if ((x == 3) && (y == 2)) {
    s2++;
}

player.value = s1;
player.value = s2;
