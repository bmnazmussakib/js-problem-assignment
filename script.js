// Kilometer to Meter

function kilometerToMeter(kilometer){
   
    if(kilometer < 0){
        return "Length can not be negative";
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
    
}

// Budget Calculator

function budgetCalculator(watchQty, mobileQty, laptopQty) {
    if(watchQty,mobileQty,laptopQty > 0){
        var watchPrice = 50 * watchQty;
        var mobilePrice = 100 * mobileQty;
        var laptopPrice = 500 * laptopQty;
            
        var total = watchPrice + mobilePrice + laptopPrice;
        return total;
    }

    else if(watchQty,mobileQty,laptopQty == 0){
        return "You have entered zero";
    }

    else if(watchQty,mobileQty,laptopQty < 0){
        return "Price can not be negative";
    }
}



// Hotel Cost

function hotelCost(day){

    const oneToTenDayCost = 100;
    const elevenToTwelveDayCost = 80;
    const aboveTwentyCost = 50;

    // Day count
    var eleventToTwenty = day-10;
    var aboveTwenty = day-20;

    // 1 to 10 day cost
    if(day >= 1 && day <=10){
        var totalCost = day * oneToTenDayCost;
    }

    // 11 to 20 cost
    if(day >=11 && day <=20){
        var totalCost = ((oneToTenDayCost * 10) + (eleventToTwenty * elevenToTwelveDayCost));
    }

    // 21 to above
    if(day > 20){
    var aboveTwenty = day-20;
        var totalCost = ((oneToTenDayCost * 10) + (elevenToTwelveDayCost * 20) + (aboveTwentyCost * aboveTwenty));
    }

    
    if(day < 0){
        return "Cost can not be negative"
    }
    else{
        return totalCost;
    }
}


// Mega Freind

function megaFriend(arr){
    var lgth = 0;
    var longest;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
      }
    }
    return longest;
}


