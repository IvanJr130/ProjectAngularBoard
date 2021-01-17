export default class Utils {


    static getCurrentDay() {
        let today = new Date();
        let yy = today.getFullYear();
        let mm = this.formartNumberDate(today.getMonth() + 1);
        let dd = this.formartNumberDate(today.getDate());       

        return  dd +'/' + mm + '/' + yy;
    }

    static formartNumberDate(numero: number) {
        let returnDate: string = '';
        if(numero < 10){
            returnDate = '0'+numero;
        }else{
            returnDate = ''+numero;
        }
        return returnDate;
    } 

}
