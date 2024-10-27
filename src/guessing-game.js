class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middleNum = 0;
    }

    setRange(min, max) {
        this.min = min; 
        this.max = max; 
     
    }
 
    guess() {
        this.middleNum = Math.round((this.min + this.max) / 2);
        return this.middleNum;
        
    }

    lower() {
        this.max = this.middleNum; 
    }

    greater() {
        this.min = this.middleNum;
        
    }
}

module.exports = GuessingGame;

 //ищу среднее число из диапазона, в тесте запускается guess(). 
        //если загаданное число > middleNum, тест запускает greater(), если < - то lower(). 
        //и так, пока middleNum не будет равен загаданному числу.
