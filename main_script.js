/**
 * Created by Алёна on 23.12.13.
 */

/*Функция прогрессии*/
function fibonacci(n) {
    var sq5 = Math.sqrt(5); // сохраняем значение корня из 5, чтобы сэкономить ресурсы
    var a = (1 + sq5) / 2;
    var b = (1 - sq5) / 2;
    return Math.round((Math.pow(a, n) - Math.pow(b, n)) / sq5);
}
/*Проверяю число ли ввел пользователь, если не число, верну ошибку*/


/*Если пользователь ввел число с запятой*/
function changeZnak(numberX){
    numberX = numberX.replace(",",".");
    numberX = Number(numberX);
    return numberX;
}

 function click_fib(){
     var fib_num = document.getElementById('fib').value;

     var b = Number(fib_num);
        //document.getElementsByClassName('inner_text')[1].innerText = b;
          if(isNaN(b)){
              document.getElementsByClassName('inner_text')[1].innerText = 'Ошибка ввода данных';
          } else {


         /*Если пользователь ввел число с запятой меняю на точку*/
         var koma = fib_num.indexOf(',');
         if(koma!=-1) {
             fib_num = changeZnak(fib_num);
         }
          fib_num = fibonacci(fib_num);
         document.getElementsByClassName('inner_text')[1].innerText = fib_num;
          }
 }

function click_progreccia(){
    /*Получаю данные из форм*/
    var a = document.getElementById('number').value;
    var b = document.getElementById('factor').value;
    var d=document.getElementById('element').value;

    /*Если пользователь ввел цифры через запятую меняю знак.*/
    var c = a.indexOf(',');
    if(c!=-1) a= a.replace(',','.');
    c= b.indexOf(',');
    if(c!=-1) b= b.replace(',','.');
    c= d.indexOf(',');
    if(c!=-1) d = d.replace(',','.');


    /*Если не число вернет TRUE, значит пользователь ввел не число, возвращею ошибку.*/
    if((isNaN(a)==true)&&(isNaN(b)==true)){
    alert(b);
    document.getElementsByClassName('inner_text')[0].innerText = 'Ошибка ввода данных.';
    }
    else {
        /*Первый член прогрессии не должен быть равен нулю. Выполняю проверку.*/
        if(a==0) {
        document.getElementsByClassName('inner_text')[0].innerText= 'Первый член должен '+
        'быть отличен от нуля.';
            //alert(1);
        }
        else {
        /*Коэффициент прогрессии должен быть отличен от нуля.*/
        if(b==0){
        document.getElementsByClassName('inner_text')[0].innerText='Коэффициент должен '+
        'быть отличен от нуля.';

        }
        else {
            //alert(1);
        document.getElementsByClassName('inner_text')[0].innerText= 'Все ОК.';

        /*ТУТ писать код выполнения программы*/

            var massiv= new Array();
            massiv[0]=a;

            for(var i=0;i<d;i++){
                a=a*b;
                massiv[(i+1)]=a;
            }
            var c = parseInt(a);
            if(isNaN(c)==true){
                document.getElementsByClassName('inner_text')[0].innerText = 'Ошибка ввода данных.';
            }
            else {
                document.getElementsByClassName('inner_text')[0].innerText = a;
            }
           // document.getElementsByClassName('inner_text')[0].innerText = a;


         // document.getElementsByClassName('inner_text')[0].innerText = a;
        /*Конец кода выполнения программы.*/
        }

        }
    }
}
