

function somar(){
    let tn1 = document.querySelector('#txtn1');
    let tn2 = document.querySelector('#txtn2');

    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);

    let s = n1 + n2;

    res.innerHTML = `A soma entre ${n1} e ${n2} é <strong>${s}</strong>`;
}

btn.addEventListener('click', somar);