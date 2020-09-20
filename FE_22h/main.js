ary = document.querySelector('#ary');


const disp = () =>{
    let list = [];
    let test = ary.value.slice( 1,-1 );
    let test2 = test.split(',');
    for(let i = 0; i < test2.length; i++){
        list[i] = parseInt(test2[i]);
    };

    let num = list.length;
    Sort(list, num);    
    ary.value = '[' + list + ']';
}


const Sort = (list, num) => {
    
    let num1;
    let num2;
    let slist1 = [];
    let slist2 = [];
if(num > 1){
    num2 = Math.ceil(num / 2);
    num1 = num - num2;

    for (let i = 0; i < num1; i++) {
        slist1[i] = list[i];
    }
    for (let i = 0; i < num2; i++) {
        slist2[i] = list[num1 + i];
    }

    Sort(slist1, num1);
    Sort(slist2, num2);
    Merge(slist1, num1, slist2, num2, list);

}
 
}

const Merge = (slist1, num1, slist2, num2, list) => {
    let i, j;
    i = 0;
    j = 0;
    while ((i < num1) && (j < num2)){
        if (slist1[i] < slist2[j]) {
            list[i + j] = slist1[i];
            i = i + 1;
        } else {
            list[i + j] = slist2[j];
            j = j + 1;
        }
    }
        while ((i < num1) || (j < num2)) {
            if (i < num1) {
                list[i + j] = slist1[i];
                i = i + 1;

            } else {
                list[i + j] = slist2[j];
                j = j + 1;

            }
        }

    }

    

