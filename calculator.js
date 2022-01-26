function calc(){

    // Calculator

    const gender = document.querySelectorAll('#gender .calculating__choose-item'),
          exercise = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),
          inputHeight = document.querySelector('#height'),
          inputWeight = document.querySelector('#weight'),
          inputAge = document.querySelector('#age');
    let idGen, idEx, height, weight, age;
    
    if (localStorage.getItem('Sex')){
        idGen = localStorage.getItem('Sex');
    } else {
        idGen = 'woman';
        localStorage.setItem('Sex', 'woman');
    }

    if (localStorage.getItem('Active')){
        idEx = localStorage.getItem('Active');
    } else {
        idEx = 'small';
        localStorage.setItem('Active', 'small');
    }

    gender.forEach((item) => {
        item.classList.remove('calculating__choose-item_active');
        if (item.getAttribute('id') === localStorage.getItem('Sex')) {
            item.classList.add('calculating__choose-item_active');
        }
    });

    exercise.forEach(item => {
        item.classList.remove('calculating__choose-item_active');
        if (item.getAttribute('id') === localStorage.getItem('Active')) {
            item.classList.add('calculating__choose-item_active');
        }
    });

    const result = document.querySelector('.calculating__result span');

    printResult();

    gender.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            gender.forEach((item) => {
                item.classList.remove('calculating__choose-item_active');
            });
            gender[index].classList.add('calculating__choose-item_active');
            idGen = e.target.getAttribute('id');
            localStorage.setItem('Sex', idGen);
            printResult();
        });
    });

    exercise.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            exercise.forEach((item) => {
                item.classList.remove('calculating__choose-item_active');
            });
            exercise[index].classList.add('calculating__choose-item_active');
            idEx = e.target.getAttribute('id');
            localStorage.setItem('Active', idEx);
            printResult();
        });
    });

    inputHeight.addEventListener('input', () => {
        if (inputHeight.value.match(/\D/g)) {
            inputHeight.style.border = 'solid 2px red';
        }
        else{
            inputHeight.style.border = 'none';
        }
        height = +inputHeight.value;
        printResult();
    });

    inputWeight.addEventListener('input', () => {
        if (inputWeight.value.match(/\D/g)) {
            inputWeight.style.border = 'solid 2px red';
        }
        else{
            inputWeight.style.border = 'none';
        }

        weight = +inputWeight.value;
        printResult();
    });

    inputAge.addEventListener('input', () => {
        if (inputAge.value.match(/\D/g)) {
            inputAge.style.border = 'solid 2px red';
        }
        else{
            inputAge.style.border = 'none';
        }
        age = +inputAge.value;
        printResult();
    });

    function printResult(){
        if (!idGen || !idEx || !height || !weight || !age) {
            result.textContent = '____';
            return;
        }

        if (height > 0 && weight > 0 && age > 0) {
            let bmr, res;
            if (idGen === 'woman') {
                switch (idEx) {
                    case 'low':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.2;
                        result.textContent = Math.floor(res);
                        break;
                    case 'small':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.375;
                        result.textContent = Math.floor(res);
                        break;
                    case 'medium':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.55;
                        result.textContent = Math.floor(res);
                        break;
                    case 'high':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.725;
                        result.textContent = Math.floor(res);
                        break;
                }
            }
            else if (idGen === 'man') {
                switch (idEx) {
                    case 'low':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.2;
                        result.textContent = Math.floor(res);
                        break;
                    case 'small':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.375;
                        result.textContent = Math.floor(res);
                        break;
                    case 'medium':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.55;
                        result.textContent = Math.floor(res);
                        break;
                    case 'high':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.725;
                        result.textContent = Math.floor(res);
                        break;
                }
            }
        }
    }
}

export default calc;